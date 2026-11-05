import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

mkdirSync('.test-output', { recursive: true });
await build({ stdin: { contents: `export * from './src/core/floor-detector'; export * from './src/core/floor-vision'; export * from './src/core/xr-adapter'; export * from './src/scenes/branches'; export * from './src/core/guide-planner'; export * from './src/scenes/guide-scene'; export * as THREE from 'three';`, resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', outfile: '.test-output/ar.mjs', logLevel: 'silent' });
const { FloorDetector, FloorVision, XRAdapter, Branches, GuidePlanner, GuideScene, THREE, GRID_W: W, GRID_H: H, floorDistances } = await import('../.test-output/ar.mjs');
const N = W * H;
function observe(d, y, start = 0, frames = 80, spread = true) {
  for (let i = 0; i < frames; i++) {
    const t = start + i / 60;
    d.observeCamera(0, t);
    for (let ray = 0; ray < 5; ray++) d.addHit(y, 1, t, spread ? ray * 0.2 : 0, 1);
  }
}
function photo(color = [160, 140, 120]) {
  const a = new Uint8ClampedArray(N * 4);
  for (let i = 0; i < N; i++) a.set([...color, 255], i * 4);
  return a;
}
const distance = () => Float32Array.from({ length: N }, (_, i) => i < W * 32 ? Infinity : 1.8);
const train = (v, a = photo(), d = distance(), n = 15) => { for (let i = 0; i < n; i++) v.update(a, d, 0.1); };

test('XR rejects a table, wall, invalid values and a repeated isolated hit', () => {
  const d = new FloorDetector(); observe(d, -0.55);
  assert.equal(d.floorY, null); assert.equal(d.classify(-0.55), 'raised');
  assert.equal(d.addHit(-1.45, 0, 2, 0, 1), false);
  assert.equal(d.addHit(NaN, 1, 2, 0, 1), false);
  d.reset(); observe(d, -1.45, 0, 100, false); assert.equal(d.floorY, null);
});
test('XR requires time and spatial coverage, then expires old evidence', () => {
  const d = new FloorDetector(); observe(d, -1.45, 0, 10); assert.equal(d.floorY, null);
  d.reset(); observe(d, -1.45); assert.ok(Math.abs(d.floorY + 1.45) < 0.001);
  assert.ok(Math.abs(d.confirmedFloorY + 1.45) < 0.001);
  assert.equal(d.classify(-0.7), 'raised');
  d.observeCamera(0, 3); assert.equal(d.floorY, null);
});
test('XR picks the lowest supported surface', () => {
  const d = new FloorDetector();
  for (let i = 0; i < 100; i++) {
    d.observeCamera(0, i / 60);
    for (let ray = 0; ray < 4; ray++) {
      d.addHit(-1.0, 1, i / 60, ray * 0.2, 1);
      d.addHit(-1.5, 1, i / 60, ray * 0.2, 2);
    }
  }
  assert.ok(Math.abs(d.floorY + 1.5) < 0.001);
});
test('Unknown camera floor is hidden; stable nearby floor appears below the horizon', () => {
  const v = new FloorVision(); assert.equal(v.sample(0, -0.3), 0);
  v.update(photo(), distance(), 0.1); assert.equal(v.ready, false);
  train(v); assert.equal(v.ready, true); assert.ok(v.sample(0, -0.3) > 0.9);
  assert.equal(v.sample(0, 0.6), 0); assert.equal(v.sample(2, -0.3), 0);
  v.reset(); assert.equal(v.ready, false); assert.equal(v.sample(0, -0.3), 0);
});
test('Looking horizontally at distant wall colors never learns a floor', () => {
  const v = new FloorVision(); train(v, photo(), new Float32Array(N).fill(7), 50);
  assert.equal(v.ready, false);
});
test('Occluders and changed camera geometry clear the mask immediately', () => {
  const v = new FloorVision(); train(v);
  const a = photo();
  for (let r = 38; r < 47; r++) for (let c = 12; c < 25; c++) a.set([10, 25, 220, 255], (r * W + c) * 4);
  v.update(a, distance(), 0.1); assert.equal(v.sample(0, -0.3), 0);
  v.update(photo(), new Float32Array(N).fill(Infinity), 0.1);
  assert.equal(Math.max(...v.mask), 0);
});
test('Changing colors cannot accumulate into a false stable floor', () => {
  const v = new FloorVision();
  for (let i = 0; i < 50; i++) v.update(photo(i % 2 ? [220, 20, 30] : [20, 30, 220]), distance(), 0.1);
  assert.equal(v.ready, false);
});
test('Floor rays respect camera pitch and screen rotation', () => {
  const camera = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  const d = new Float32Array(N);
  floorDistances(d, camera.projectionMatrixInverse, camera.quaternion, 1.45);
  assert.equal(d[W * 10 + 18], Infinity); assert.ok(Number.isFinite(d[W * 55 + 18]));
  camera.rotation.x = Math.PI / 2;
  floorDistances(d, camera.projectionMatrixInverse, camera.quaternion, 1.45);
  assert.ok([...d].every(x => x === Infinity));
});
test('XR does not place through a table during status debounce or after a timeout', () => {
  const world = new THREE.Group(); const xr = new XRAdapter({}, world, new THREE.Scene());
  observe(xr.detector, -1.45);
  xr.updateReticle(new THREE.Vector3(0, -1.45, 1), 1.4); assert.equal(xr.canPlace, true);
  xr.updateReticle(new THREE.Vector3(0, -0.5, 1), 1.41); assert.equal(xr.canPlace, false);
  xr.onSelect(); assert.equal(xr.placed, false);
  xr.resetPlacement(); xr.camPos.set(0, 0, 0); xr.camFwd.set(0, -1, 0);
  xr.updateReticle(null, 60); assert.equal(xr.reticle.visible, false);
});
test('XR uses only nearest hit, preserving center ray identity if a source fails', async () => {
  const xr = new XRAdapter({}, new THREE.Group(), new THREE.Scene());
  let index = 0; globalThis.XRRay = class {};
  const sources = await xr.createSources({ requestHitTestSource: () => index++ === 0 ? Promise.reject() : Promise.resolve({}) }, {});
  assert.equal(sources.length, 4); assert.ok(sources.every(s => !s.center));
  xr.sources = [{ source: {}, center: true }];
  const hit = y => ({ getPose: () => ({ transform: { position: { x: 0, y, z: 1 }, orientation: { x: 0, y: 0, z: 0, w: 1 } } }) });
  const frame = { getHitTestResults: () => [hit(-0.5), hit(-1.45)] };
  for (let i = 0; i < 80; i++) { xr.detector.observeCamera(0, i / 60); xr.scan(frame, i / 60); }
  assert.equal(xr.detector.floorY, null);
});
test('Canopy covers the entire corridor and remains spread at low detail', () => {
  // Geometry only: drawing calls are irrelevant to the spatial coverage test.
  const ctx = new Proxy({}, { get: (_, key) => key === 'createRadialGradient' || key === 'createLinearGradient' ? () => ({ addColorStop() {} }) : () => {} });
  globalThis.document = { createElement: () => ({ getContext: () => ctx }) };
  const b = new Branches(new THREE.Group());
  assert.equal(b.sways.length, 36);
  b.group.updateMatrixWorld(true);
  const m = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const coverage = () => {
    const bins = new Set(); let count = 0;
    b.group.traverse(o => {
      if (!o.isInstancedMesh || o.material !== b.blossomMat) return;
      count += o.count;
      for (let i = 0; i < o.count; i++) {
        o.getMatrixAt(i, m); m.decompose(p, q, s); p.applyMatrix4(o.matrixWorld);
        if (p.x >= 0 && p.x < 26 && Math.abs(p.z) < 1.25) bins.add(`${Math.floor(p.x * 2)},${Math.floor((p.z + 1.25) * 2)}`);
      }
    });
    return { count, coverage: bins.size / (52 * 5) };
  };
  const high = coverage(); b.setDetail(0.55); const low = coverage();
  assert.ok(high.coverage > 0.97, JSON.stringify(high)); assert.ok(low.coverage > 0.95, JSON.stringify(low));
  assert.ok(low.count < high.count); console.log('Canopy:', { high, low });
});

// ---------------------------------------------------------------- dải sáng dẫn đường
const V2 = (x, y) => new THREE.Vector2(x, y);
/** Đặt vùng vật cản lên bản đồ của planner, toạ độ mét. */
function paint(p, x0, z0, x1, z1) {
  for (let x = x0; x <= x1; x += 0.05) for (let z = z0; z <= z1; z += 0.05) {
    const i = p.index(x, z);
    if (i >= 0) p.score[i] = -1;
  }
}
/** Khoảng cách gần nhất từ đường tới một vùng hình chữ nhật. */
function clearance(points, x0, z0, x1, z1) {
  let best = Infinity;
  for (let i = 1; i < points.length; i++) {
    for (let k = 0; k <= 50; k++) {
      const q = points[i - 1].clone().lerp(points[i], k / 50);
      best = Math.min(best, Math.hypot(Math.max(x0 - q.x, 0, q.x - x1), Math.max(z0 - q.y, 0, q.y - z1)));
    }
  }
  return best;
}
const pathLen = (pts) => pts.slice(1).reduce((s, q, i) => s + q.distanceTo(pts[i]), 0);

test('Guide path goes straight when nothing is in the way', () => {
  const p = new GuidePlanner();
  const r = p.plan(V2(0, 0), V2(0, -4));
  assert.equal(r.blocked, false);
  assert.ok(pathLen(r.points) < 4.2, String(pathLen(r.points)));
  assert.ok(r.points.at(-1).distanceTo(V2(0, -4)) < 0.01);
});
test('Guide path walks around an obstacle without touching it', () => {
  const p = new GuidePlanner();
  paint(p, -0.6, -2.6, 0.6, -1.8);
  const r = p.plan(V2(0, 0), V2(0, -4));
  assert.equal(r.blocked, false);
  assert.ok(clearance(r.points, -0.6, -2.6, 0.6, -1.8) > 0.15, String(clearance(r.points, -0.6, -2.6, 0.6, -1.8)));
  assert.ok(r.points.at(-1).distanceTo(V2(0, -4)) < 0.01);
});
test('Guide path reports a closed way and stops before the wall', () => {
  const p = new GuidePlanner();
  paint(p, -5, -2.2, 5, -2);
  const r = p.plan(V2(0, 0), V2(0, -4));
  assert.equal(r.blocked, true);
  assert.ok(Math.min(...r.points.map((q) => q.y)) > -2, 'must not cross');
});
test('A destination on an object counts as reachable; the path stops beside it', () => {
  const p = new GuidePlanner();
  paint(p, -0.5, -3.2, 0.5, -2.8);
  const r = p.plan(V2(0, 0), V2(0, -3));
  assert.equal(r.blocked, false);
  assert.ok(clearance(r.points, -0.5, -3.2, 0.5, -2.8) > 0.1);
});
test('Guide path prefers floor it has seen over going around through the unseen', () => {
  const p = new GuidePlanner();
  for (let x = -1.2; x <= 1.2; x += 0.05) for (let z = -4; z <= 0.2; z += 0.05) { const i = p.index(x, z); if (i >= 0) p.score[i] = 1; }
  paint(p, -0.25, -2.2, 0.25, -1.8);
  const r = p.plan(V2(0, 0), V2(0, -3.5));
  assert.equal(r.blocked, false);
  assert.ok(Math.max(...r.points.map((q) => Math.abs(q.x))) < 1.25, JSON.stringify(r.points));
  assert.ok(clearance(r.points, -0.25, -2.2, 0.25, -1.8) > 0.15);
});
test('Guide path reaches a destination beyond the local map', () => {
  const p = new GuidePlanner();
  const r = p.plan(V2(0, 0), V2(0, -30));
  assert.equal(r.blocked, false);
  assert.ok(r.points.at(-1).distanceTo(V2(0, -30)) < 0.01);
});
test('Guide path does not trap the user standing next to an obstacle', () => {
  const p = new GuidePlanner();
  paint(p, -0.3, -0.5, 0.3, -0.2);
  const r = p.plan(V2(0, 0), V2(0, -4));
  assert.equal(r.blocked, false);
});
test('Guide path keeps its side instead of flipping between replans', () => {
  const p = new GuidePlanner();
  paint(p, -0.6, -2.6, 0.6, -1.8);
  const side = (pts) => Math.sign(pts.reduce((a, q) => (Math.abs(q.x) > Math.abs(a) ? q.x : a), 0));
  const first = side(p.plan(V2(0, 0), V2(0, -4)).points);
  for (let i = 1; i <= 6; i++) {
    // người đi thẳng, lệch nhẹ về phía đối diện: đường cũ còn đi được thì giữ nguyên
    assert.equal(side(p.plan(V2(-first * 0.02 * i, -0.1 * i), V2(0, -4)).points), first);
  }
});
test('Guide map keeps obstacles after recentering and forgets them over time', () => {
  const p = new GuidePlanner();
  paint(p, 1, -1, 1.4, -0.6);
  p.recenter(3, 0);
  const i = p.index(1.2, -0.8);
  assert.ok(i >= 0 && p.score[i] === -1);
  const mask = new Float32Array(W * H).fill(0.45); // chưa rõ: không thêm bằng chứng
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  for (let k = 0; k < 300; k++) p.observe(mask, cam.projectionMatrixInverse, cam.quaternion, new THREE.Vector3(3, 1.45, 0), 0.1);
  assert.ok(Math.abs(p.score[i]) < 0.1, String(p.score[i]));
});
test('Camera mask becomes obstacles on the ground, ignoring the body at the frame edge', () => {
  const p = new GuidePlanner();
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.rotation.x = -0.6;
  cam.updateMatrixWorld();
  const mask = new Float32Array(W * H).fill(1);
  const eye = new THREE.Vector3(0, 1.45, 0);
  // mép dưới khung hình (hay có chân) đen hoàn toàn, thêm một vật ở giữa khung
  for (let r = Math.floor(H * 0.85); r < H; r++) for (let c = 0; c < W; c++) mask[r * W + c] = 0;
  for (let r = 34; r < 40; r++) for (let c = 14; c < 22; c++) mask[r * W + c] = 0;
  for (let k = 0; k < 10; k++) p.observe(mask, cam.projectionMatrixInverse, cam.quaternion, eye, 0.1);
  let blockedNear = 0, blockedMid = 0;
  for (let i = 0; i < p.score.length; i++) {
    if (p.score[i] >= -0.25) continue;
    const q = p.centerOf(i);
    if (q.length() < 1) blockedNear++;
    else if (q.y < 0 && Math.abs(q.x) < 1) blockedMid++;
  }
  assert.equal(blockedNear, 0);
  assert.ok(blockedMid > 0);
});
test('The holder\'s leg rising from the frame edge is not an obstacle, a separate object is', () => {
  const p = new GuidePlanner();
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.rotation.x = -0.6;
  cam.updateMatrixWorld();
  const mask = new Float32Array(W * H).fill(1);
  for (let r = 46; r < H; r++) for (let c = 0; c < W; c++) mask[r * W + c] = 0; // chân chiếm cả bề ngang
  const eye = new THREE.Vector3(0, 1.45, 0);
  for (let k = 0; k < 10; k++) p.observe(mask, cam.projectionMatrixInverse, cam.quaternion, eye, 0.1);
  assert.equal(p.score.filter((s) => s < -0.25).length, 0);
  const r = p.plan(V2(0, 0), V2(0, -3));
  assert.equal(r.blocked, false);
  assert.ok(pathLen(r.points) < 3.2, String(pathLen(r.points)));
  // vật tách rời ở cùng khoảng cách vẫn là vật cản
  for (let r2 = 46; r2 < H; r2++) for (let c = 0; c < W; c++) mask[r2 * W + c] = 1;
  for (let r2 = 42; r2 < 47; r2++) for (let c = 14; c < 22; c++) mask[r2 * W + c] = 0;
  for (let k = 0; k < 10; k++) p.observe(mask, cam.projectionMatrixInverse, cam.quaternion, eye, 0.1);
  assert.ok(p.score.filter((s) => s < -0.25).length > 0);
});
test('Guide places the destination by heading, waits on another floor and detects arrival', () => {
  const ctx = new Proxy({}, { get: (_, key) => key === 'createRadialGradient' || key === 'createLinearGradient' ? () => ({ addColorStop() {} }) : () => {} });
  globalThis.document = { createElement: () => ({ getContext: () => ctx }) };
  const g = new GuideScene(new THREE.Scene());
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.position.y = 1.45;
  cam.updateMatrixWorld();
  g.start({ ahead: 5, right: 2, floorNow: 1, floorTo: 1 }, cam);
  assert.equal(g.phase, 'walk');
  assert.ok(g.target.distanceTo(V2(2, -5)) < 1e-6, JSON.stringify(g.target));

  g.start({ ahead: 5, right: 0, floorNow: 4, floorTo: 1 }, cam);
  assert.equal(g.phase, 'floor');
  g.step(new THREE.Vector3(0, 0, -1));
  assert.equal(g.position.length(), 0, 'no walking while changing floors');
  g.update(0.1, cam, null);
  assert.equal(g.ribbon.visible, false);

  // đường vòng sang phải, ngoài khung hình: phải nhắc xoay sang phải
  g.start({ ahead: 2.4, right: 0.8, floorNow: 1, floorTo: 1 }, cam);
  g.path = [V2(0, 0), V2(1.5, -1.3), V2(0.8, -2.4)];
  assert.ok(g.turnHint(new THREE.Vector3(0, 0, -1)) > 25);

  let arrived = 0;
  g.onArrive = () => arrived++;
  g.start({ ahead: 2, right: 0, floorNow: 1, floorTo: 1 }, cam);
  g.update(0.1, cam, null);
  assert.equal(g.ribbon.visible, true);
  for (let i = 0; i < 2; i++) g.step(new THREE.Vector3(0, 0, -1));
  g.update(0.1, cam, null);
  assert.equal(g.phase, 'arrived');
  assert.equal(arrived, 1);
});
