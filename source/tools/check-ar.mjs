import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

mkdirSync('.test-output', { recursive: true });
await build({ stdin: { contents: `export * from './src/core/floor-detector'; export * from './src/core/floor-vision'; export * from './src/core/xr-adapter'; export * from './src/scenes/branches'; export * as THREE from 'three';`, resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', outfile: '.test-output/ar.mjs', logLevel: 'silent' });
const { FloorDetector, FloorVision, XRAdapter, Branches, THREE, GRID_W: W, GRID_H: H, floorDistances } = await import('../.test-output/ar.mjs');
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
