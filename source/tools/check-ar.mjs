import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

mkdirSync('.test-output', { recursive: true });
await build({ stdin: { contents: `export * from './src/core/floor-detector'; export * from './src/core/floor-vision'; export * from './src/core/xr-adapter'; export * from './src/scenes/branches'; export * from './src/core/guide-planner'; export * from './src/scenes/guide-scene'; export * from './src/core/geo'; export * from './src/core/route-service'; export * as THREE from 'three';`, resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', outfile: '.test-output/ar.mjs', logLevel: 'silent' });
const { FloorDetector, FloorVision, XRAdapter, Branches, GuidePlanner, GuideScene, toEnu, fromEnu, parseRoute, fetchRoute, enuToWorld, worldToEnu, compassFromAbsolute, NorthEstimate, deviceQuaternion, groundAngle, DESTINATION, THREE, GRID_W: W, GRID_H: H, floorDistances } = await import('../.test-output/ar.mjs');
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
const deg = (r) => (r * 180) / Math.PI;
const near = (a, b, e = 1e-6) => Math.abs(a - b) < e;

test('Geo: metres from lat/lng, and world/ENU conversions are inverse', () => {
  const d = toEnu(21.006112, 105.84155, 21.005112, 105.84155);
  assert.ok(near(d.n, 111.2, 0.2) && near(d.e, 0, 1e-9), JSON.stringify(d));
  const e = toEnu(21.005112, 105.85155, 21.005112, 105.84155);
  assert.ok(near(e.e, 1038.2, 1), JSON.stringify(e));
  for (const north of [0, 1, -2.5]) {
    const w = enuToWorld(30, -40, north);
    const back = worldToEnu(w.x, w.y, north);
    assert.ok(near(back.e, 30, 1e-9) && near(back.n, -40, 1e-9));
  }
  // north = góc của hướng Bắc trong cảnh: điểm ở phía Bắc nằm đúng theo hướng đó
  const w = enuToWorld(0, 10, 0.7);
  assert.ok(near(Math.atan2(w.x, -w.y), 0.7, 1e-9));
});
test('Compass: phone held upright facing north/west/east', () => {
  assert.ok(near(deg(compassFromAbsolute(0, 90, 0, 0)), 0, 1e-6));
  assert.ok(near(deg(compassFromAbsolute(90, 90, 0, 0)), -90, 1e-6)); // alpha tăng ngược chiều kim đồng hồ: quay sang Tây
  assert.ok(near(deg(compassFromAbsolute(270, 90, 0, 0)), 90, 1e-6));
  assert.ok(near(deg(compassFromAbsolute(0, 60, 0, 0)), 0, 1e-6)); // chúc xuống vẫn giữ hướng
});
test('North estimate averages across the ±180° seam', () => {
  const n = new NorthEstimate();
  for (let i = 0; i < 20; i++) n.add(0, i % 2 ? Math.PI - 0.05 : -Math.PI + 0.05, 0.1);
  assert.ok(Math.abs(Math.abs(n.angle) - Math.PI) < 0.06, String(n.angle));
});

function guideRig() {
  const ctx = new Proxy({}, { get: (_, key) => key === 'createRadialGradient' || key === 'createLinearGradient' ? () => ({ addColorStop() {} }) : () => {} });
  globalThis.document = { createElement: () => ({ getContext: () => ctx }) };
  const g = new GuideScene(new THREE.Scene());
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.position.y = 1.45;
  // camera nhìn theo −Z của cảnh, máy dựng đứng
  cam.updateMatrixWorld();
  return { g, cam };
}
/** Camera nhìn về hướng `heading` (la bàn), cảnh coi −Z là hướng nhìn. */
function tick(g, cam, heading, n = 10) {
  for (let i = 0; i < n; i++) g.update(0.1, cam, { value: heading, at: 1000 }, null, 1000);
}

test('Guide waits for GPS and compass, then points the light at the gate', () => {
  const { g, cam } = guideRig();
  g.start({ floorNow: 1, floorTo: 1 });
  tick(g, cam, 0);
  assert.equal(g.phase, 'locating');
  g.gpsFix({ e: 0, n: -100, accuracy: 6 }); // cách cổng 100 m về phía Nam
  tick(g, cam, 0); // đang nhìn về hướng Bắc
  assert.equal(g.phase, 'walk');
  assert.ok(near(g.remaining, 100, 1e-6));
  const dir = g.target.clone().sub(g.position);
  assert.ok(Math.abs(Math.atan2(dir.x, -dir.y)) < 0.01, 'gate straight ahead');
  // quay người sang hướng Đông: cổng phải nằm bên trái trong cảnh
  const { g: g2, cam: cam2 } = guideRig();
  g2.start({ floorNow: 1, floorTo: 1 });
  g2.gpsFix({ e: 0, n: -100, accuracy: 6 });
  tick(g2, cam2, Math.PI / 2);
  const d2 = g2.target.clone().sub(g2.position);
  assert.ok(near(Math.atan2(d2.x, -d2.y), -Math.PI / 2, 0.01), String(Math.atan2(d2.x, -d2.y)));
});
test('Guide fuses steps with GPS and arrives near the gate', () => {
  const { g, cam } = guideRig();
  let arrived = 0;
  g.onArrive = () => arrived++;
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -20, accuracy: 5 });
  tick(g, cam, 0);
  for (let i = 0; i < 5; i++) g.step(new THREE.Vector3(0, 0, -1)); // đi về hướng Bắc
  assert.ok(near(g.remaining, 20 - 5 * 0.62, 1e-6), String(g.remaining));
  g.gpsFix({ e: 0, n: -40, accuracy: 200 }); // GPS rất kém: gần như bỏ qua
  assert.ok(g.remaining < 18, String(g.remaining));
  g.gpsFix({ e: 0, n: -10, accuracy: 3 }); // GPS tốt kéo về gần đúng
  assert.ok(g.remaining < 12.5, String(g.remaining));
  tick(g, cam, 0, 1);
  if (g.remaining <= DESTINATION.arriveRadius) assert.equal(g.phase, 'arrived');
  g.gpsFix({ e: 0, n: -2, accuracy: 3 });
  g.gpsFix({ e: 0, n: -2, accuracy: 3 });
  tick(g, cam, 0, 1);
  assert.equal(g.phase, 'arrived');
  // đứng yên nhận GPS thật lâu rồi mới đi: lần đo mới vẫn phải kéo được vị trí
  const { g: g3, cam: cam3 } = guideRig();
  g3.start({ floorNow: 1, floorTo: 1 });
  for (let i = 0; i < 60; i++) { g3.gpsFix({ e: 0, n: -60, accuracy: 6 }); tick(g3, cam3, 0, 10); }
  for (let i = 0; i < 3; i++) { g3.gpsFix({ e: 0, n: -40, accuracy: 6 }); tick(g3, cam3, 0, 10); }
  assert.ok(g3.remaining < 50, String(g3.remaining)); // sau ~3 giây đã theo được phần lớn
  assert.equal(arrived, 1);
});
test('Guide on another floor waits and ignores steps', () => {
  const { g, cam } = guideRig();
  g.start({ floorNow: 4, floorTo: 1 });
  g.gpsFix({ e: 0, n: -50, accuracy: 5 });
  tick(g, cam, 0);
  assert.equal(g.phase, 'floor');
  g.step(new THREE.Vector3(0, 0, -1));
  assert.ok(near(g.remaining, 50, 1e-6));
  assert.equal(g.ribbon.visible, false);
  g.start({ floorNow: 1, floorTo: 1 });
  tick(g, cam, 0);
  assert.equal(g.phase, 'walk');
});
test('Path behind the user: the light starts in front and curves around', () => {
  const { g } = guideRig();
  const pts = [V2(0, 0), V2(0, 5)]; // đường đi về phía sau (+Z), camera nhìn −Z
  const lead = g.leadIn(pts, 0);
  assert.ok(lead, 'needs a lead-in');
  assert.ok(lead[0].y < -0.9 && Math.abs(lead[0].x) < 0.01, 'starts ahead: ' + JSON.stringify(lead[0]));
  assert.ok(lead[4].y < -2.3 && Math.abs(lead[4].x) < 0.01, 'runs straight ahead before bending');
  // vòng liên tục quanh người dùng, không cắt qua chân
  for (let i = 1; i < 24; i++) assert.ok(lead[i].distanceTo(lead[i - 1]) < 0.6, String(i)); // đoạn thẳng + vòng + điểm nối
  for (const p of lead.slice(0, 23)) assert.ok(p.length() > 0.9);
  assert.ok(lead.at(-1).distanceTo(V2(0, 5)) < 1e-9);
  // đi gần như ngược hướng: giữ nguyên bên vòng giữa các lần vẽ
  const side = Math.sign(lead[13].x);
  assert.equal(Math.sign(g.leadIn([V2(0, 0), V2(0.05 * -side, 5)], 0)[13].x), side);
  // đường ở phía trước: không vòng
  assert.equal(g.leadIn([V2(0, 0), V2(0.3, -5)], 0), null);
});

test('Route: reads OpenRouteService GeoJSON and falls back between profiles', async () => {
  const to = { lat: DESTINATION.lat, lng: DESTINATION.lng };
  const back = fromEnu(30, -120, to.lat, to.lng);
  const e = toEnu(back.lat, back.lng, to.lat, to.lng);
  assert.ok(near(e.e, 30, 1e-6) && near(e.n, -120, 1e-6));
  const json = { features: [{ geometry: { coordinates: [[back.lng, back.lat], [to.lng, back.lat], [to.lng, to.lat]] }, properties: { summary: { distance: 150 } } }] };
  const r = parseRoute(json, to, 'foot-walking');
  assert.equal(r.points.length, 3);
  assert.ok(near(r.points[1].e, 0, 1e-6) && near(r.points[1].n, -120, 1e-6));
  assert.equal(parseRoute({ features: [] }, to, 'x'), null);
  assert.equal(parseRoute({ features: [{ geometry: { coordinates: [[1, 'a'], [2, 3]] } }] }, to, 'x'), null);
  // không có key: không gọi mạng
  let calls = 0;
  assert.equal(await fetchRoute(back, to, '', async () => { calls++; }), null);
  assert.equal(calls, 0);
  // đi bộ lỗi (treo/500) → thử xe đạp
  const seen = [];
  const fake = async (url, init) => {
    seen.push(url.split('/').slice(-2)[0]);
    assert.equal(init.headers.Authorization, 'k');
    if (url.includes('foot-walking')) return { ok: false, json: async () => ({}) };
    return { ok: true, json: async () => json };
  };
  const got = await fetchRoute(back, to, 'k', fake);
  assert.deepEqual(seen, ['foot-walking', 'cycling-regular']);
  assert.equal(got.profile, 'cycling-regular');
  // tất cả đều lỗi
  assert.equal(await fetchRoute(back, to, 'k', async () => { throw new Error('offline'); }), null);
});
test('Guide follows the street route instead of the straight line, and re-routes when off it', () => {
  const { g, cam } = guideRig();
  const asks = [];
  g.onNeedRoute = (e, n) => asks.push([e, n]);
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 5 }); // cổng ở 100 m phía Bắc
  tick(g, cam, 0, 3);
  assert.equal(asks.length, 1);
  assert.equal(g.routeState, 'loading');
  // tuyến theo phố: đi sang Đông 40 m, lên Bắc 100 m, rồi về Tây 40 m tới cổng
  g.setRoute([{ e: 0, n: -100 }, { e: 40, n: -100 }, { e: 40, n: 0 }, { e: 0, n: 0 }]);
  tick(g, cam, 0, 5);
  assert.equal(g.routeState, 'ok');
  assert.ok(near(g.distanceLeft, 180, 1e-6), String(g.distanceLeft));
  // dải sáng phải đi về phía Đông (bên phải khi nhìn về Bắc), không thẳng lên Bắc
  const far = g.path.at(-1).clone().sub(g.position);
  assert.ok(far.x > 20, JSON.stringify(g.path));
  // vẫn trên tuyến: không xin lại
  tick(g, cam, 0, 100);
  assert.equal(asks.length, 1);
  // GPS báo đã lệch 60 m khỏi tuyến, kéo dài quá 5 giây → xin tuyến mới (cách lần trước ≥ 20 giây)
  for (let i = 0; i < 2; i++) { g.gpsFix({ e: -60, n: -50, accuracy: 5 }); tick(g, cam, 0, 20); }
  assert.equal(asks.length, 1, 'chưa lệch đủ lâu / chưa đủ 20 giây từ lần trước');
  for (let i = 0; i < 4; i++) { g.gpsFix({ e: -60, n: -50, accuracy: 5 }); tick(g, cam, 0, 20); }
  assert.equal(asks.length, 2, JSON.stringify(asks));
  // không lấy được tuyến mới: giữ tuyến cũ
  g.setRoute(null);
  assert.equal(g.routeState, 'ok');
});
test('Guide without a route keeps the straight-line light', () => {
  const { g, cam } = guideRig();
  g.onNeedRoute = () => g.setRoute(null);
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 5 });
  tick(g, cam, 0, 5);
  assert.equal(g.routeState, 'failed');
  assert.ok(near(g.distanceLeft, 100, 1e-6));
  const dir = g.path.at(-1).clone().sub(g.position);
  assert.ok(Math.abs(Math.atan2(dir.x, -dir.y)) < 0.05);
});
