import { build } from 'esbuild';
import { mkdirSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

mkdirSync('.test-output', { recursive: true });
await build({ stdin: { contents: `export * from './src/core/floor-detector'; export * from './src/core/floor-vision'; export * from './src/core/xr-adapter'; export * from './src/scenes/branches'; export * from './src/core/room-map'; export * from './src/core/surface-map'; export * from './src/core/surface-classes'; export * from './src/scenes/guide-scene'; export * from './src/core/geo'; export * from './src/core/geo-tracker'; export * from './src/core/route-service'; export * from './src/core/ask-service'; export * from './src/ui/minimap'; export * from './src/ui/speech'; export * from './src/core/ceiling-vision'; export * as THREE from 'three';`, resolveDir: process.cwd() }, bundle: true, platform: 'node', format: 'esm', outfile: '.test-output/ar.mjs', logLevel: 'silent' });
const { cardSpeech, splitForSpeech, speak, stopSpeaking, FloorDetector, FloorVision, XRAdapter, Branches, RoomMap, SurfaceMap, logitsToFrame, GuideScene, GeoTracker, CeilingVision, DEFAULT_CEILING, toEnu, fromEnu, parseRoute, fetchRoute, buildContext, askGuide, mercator, metersPerPixel, enuToWorld, worldToEnu, compassFromAbsolute, NorthEstimate, deviceQuaternion, groundAngle, DESTINATION, THREE, GRID_W: W, GRID_H: H, floorDistances } = await import('../.test-output/ar.mjs');
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
  assert.equal(sources.length, 2); assert.ok(sources.every(s => !s.center));
  xr.sources = [{ source: {}, center: true }];
  const hit = y => ({ getPose: () => ({ transform: { position: { x: 0, y, z: 1 }, orientation: { x: 0, y: 0, z: 0, w: 1 } } }) });
  const frame = { getHitTestResults: () => [hit(-0.5), hit(-1.45)] };
  for (let i = 0; i < 80; i++) { xr.detector.observeCamera(0, i / 60); xr.scan(frame, i / 60); }
  assert.equal(xr.detector.floorY, null);
});
test('Canopy follows the measured ceiling and the viewer, and hides behind walls', () => {
  const ctx = new Proxy({}, { get: (_, key) => key === 'createRadialGradient' || key === 'createLinearGradient' ? () => ({ addColorStop() {} }) : () => {} });
  globalThis.document = { createElement: () => ({ getContext: () => ctx }) };
  const b = new Branches(new THREE.Group());
  assert.equal(b.holders.length, 36);
  b.layout(0, 0, 3.4, () => true);
  assert.ok(b.holders.every((h) => near(h.group.position.y, 3.05, 1e-6)));
  assert.ok(b.holders.every((h) => Math.abs(h.group.position.x) <= 6 && Math.abs(h.group.position.z) <= 6));
  const all = b.emitter.points.length;
  assert.ok(all > 1000);
  // trần thấp hơn thì tán hạ theo
  b.layout(0, 0, 2.6, () => true);
  assert.ok(b.holders.every((h) => near(h.group.position.y, 2.25, 1e-6)));
  // đi xa: tán cuộn theo người xem
  b.layout(30, -17, 2.6, () => true);
  assert.ok(b.holders.every((h) => Math.abs(h.group.position.x - 30) <= 6 && Math.abs(h.group.position.z + 17) <= 6));
  // tường ở x = 2: các cụm ngoài tường bị ẩn, không rụng hoa từ đó
  b.layout(0, 0, 2.6, (x) => x < 2);
  const hidden = b.holders.filter((h) => h.target === 0);
  assert.ok(hidden.length > 5 && hidden.every((h) => h.group.position.x >= 2));
  assert.ok(b.emitter.points.length < all && b.emitter.points.every((p) => p.x < 4));
  b.update(5, 1, 0, new THREE.Color(1, 1, 1), false);
  assert.ok(hidden.every((h) => !h.group.visible));
  b.setDetail(0.55);
});

// ---------------------------------------------------------------- bản đồ phòng
const V2 = (x, y) => new THREE.Vector2(x, y);
/** Đặt vùng vật cản lên bản đồ của planner, toạ độ mét. */
function paint(p, x0, z0, x1, z1) {
  for (let x = x0; x <= x1; x += 0.05) for (let z = z0; z <= z1; z += 0.05) {
    const i = p.index(x, z);
    if (i >= 0) p.score[i] = -1;
  }
}
test('Room map keeps obstacles after recentering and forgets them over time', () => {
  const p = new RoomMap();
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
  const p = new RoomMap();
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
  for (let x = -4.7; x < 4.7; x += 0.2) for (let z = -4.7; z < 4.7; z += 0.2) {
    const i = p.index(x, z);
    if (i < 0 || p.score[i] >= -0.25) continue;
    if (Math.hypot(x, z) < 1) blockedNear++;
    else if (z < 0 && Math.abs(x) < 1) blockedMid++;
  }
  assert.equal(blockedNear, 0);
  assert.ok(blockedMid > 0);
});
test('The holder\'s leg rising from the frame edge is not an obstacle, a separate object is', () => {
  const p = new RoomMap();
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.rotation.x = -0.6;
  cam.updateMatrixWorld();
  const mask = new Float32Array(W * H).fill(1);
  for (let r = 46; r < H; r++) for (let c = 0; c < W; c++) mask[r * W + c] = 0; // chân chiếm cả bề ngang
  const eye = new THREE.Vector3(0, 1.45, 0);
  for (let k = 0; k < 10; k++) p.observe(mask, cam.projectionMatrixInverse, cam.quaternion, eye, 0.1);
  assert.equal(p.score.filter((s) => s < -0.25).length, 0);
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

test('North ignores a brief magnetic disturbance but follows a lasting change', () => {
  const n = new NorthEstimate();
  for (let i = 0; i < 200; i++) n.add(0, 0, 1 / 60);
  assert.ok(Math.abs(n.angle) < 0.01);
  for (let i = 0; i < 60; i++) n.add(0, 1.5, 1 / 60); // đi ngang khung sắt 1 giây
  assert.ok(Math.abs(n.angle) < 0.01, String(n.angle));
  for (let i = 0; i < 300; i++) n.add(0, 1.5, 1 / 60); // lệch kéo dài: hướng đổi thật
  assert.ok(Math.abs(n.angle + 1.5) < 0.2, String(n.angle));
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
  for (let i = 0; i < n; i++) g.update(0.1, cam, { value: heading, at: 1000 }, 1000);
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
test('The light aims at the true direction even when a wall is in the way', () => {
  const { g, cam } = guideRig();
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 30, n: 0, accuracy: 5 }); // đứng cách cổng 30 m về phía Đông: cổng ở hướng Tây
  tick(g, cam, 0, 10); // đang nhìn về Bắc (−Z)
  const dir = g.path.at(-1).clone().sub(g.position);
  assert.ok(near(Math.atan2(dir.x, -dir.y), -Math.PI / 2, 0.02), String(Math.atan2(dir.x, -dir.y)));
  assert.equal(g.path.length, 2); // thẳng tới đích, không vòng
  assert.equal(g.ribbon.visible, true);
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
    assert.equal(JSON.parse(init.body).preference, 'shortest');
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
  // GPS báo đã lệch 60 m khỏi tuyến: chưa đủ 3 giây thì chưa xin, quá 3 giây thì xin tuyến mới
  g.gpsFix({ e: -60, n: -50, accuracy: 5 });
  tick(g, cam, 0, 20);
  assert.equal(asks.length, 1, 'chưa lệch đủ lâu');
  g.gpsFix({ e: -60, n: -50, accuracy: 5 });
  tick(g, cam, 0, 20);
  assert.equal(asks.length, 2, JSON.stringify(asks));
  // yêu cầu đang chờ thì không gửi chồng
  tick(g, cam, 0, 200);
  assert.equal(asks.length, 2);
  // không lấy được tuyến mới: giữ tuyến cũ
  g.setRoute(null);
  assert.equal(g.routeState, 'ok');
});
test('Route is extended to the exact destination when the service stops at the road', () => {
  const { g, cam } = guideRig();
  g.onNeedRoute = () => {};
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 5 });
  tick(g, cam, 0, 3);
  g.setRoute([{ e: 0, n: -100 }, { e: 30, n: -100 }, { e: 30, n: -20 }]);
  tick(g, cam, 0, 2);
  const last = g.routeEnu.at(-1);
  assert.ok(near(last.e, 0, 1e-9) && near(last.n, 0, 1e-9), JSON.stringify(last));
  assert.ok(near(g.distanceLeft, 30 + 80 + Math.hypot(30, 20), 1e-6), String(g.distanceLeft));
});
test('Route request waits for a usable GPS fix, but not forever', () => {
  const { g, cam } = guideRig();
  let asks = 0;
  g.onNeedRoute = () => asks++;
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 800 }); // vị trí thô theo trạm sóng
  tick(g, cam, 0, 10);
  assert.equal(asks, 0);
  g.gpsFix({ e: 0, n: -100, accuracy: 10 });
  tick(g, cam, 0, 1);
  assert.equal(asks, 1);
  // GPS mãi không tốt hơn: sau 8 giây vẫn xin tuyến
  const { g: g2, cam: cam2 } = guideRig();
  let asks2 = 0;
  g2.onNeedRoute = () => asks2++;
  g2.start({ floorNow: 1, floorTo: 1 });
  g2.gpsFix({ e: 0, n: -100, accuracy: 800 });
  tick(g2, cam2, 0, 75);
  assert.equal(asks2, 0);
  tick(g2, cam2, 0, 10);
  assert.equal(asks2, 1);
});
test('A failed route request is retried, without going back to the loading state', () => {
  const { g, cam } = guideRig();
  let asks = 0;
  g.onNeedRoute = () => { asks++; g.setRoute(null); };
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 5 });
  tick(g, cam, 0, 5);
  assert.equal(asks, 1);
  assert.equal(g.routeState, 'failed');
  tick(g, cam, 0, 90);
  assert.equal(asks, 1, 'chưa đủ 10 giây');
  tick(g, cam, 0, 20);
  assert.equal(asks, 2);
  assert.equal(g.routeState, 'failed');
  g.onNeedRoute = () => g.setRoute([{ e: 0, n: -100 }, { e: 0, n: 0 }]);
  tick(g, cam, 0, 110);
  assert.equal(g.routeState, 'ok');
});
test('GPS keeps updating: asks again when stale, reopens after hiding, ignores temporary errors', () => {
  const calls = { watch: 0, clear: 0, poll: [] };
  let watchOk, watchErr, everySecond, onVisible;
  const geolocation = {
    watchPosition(ok, err, opts) { calls.watch++; watchOk = ok; watchErr = err; assert.equal(opts.maximumAge, 0); return calls.watch; },
    clearWatch() { calls.clear++; },
    getCurrentPosition(ok) { calls.poll.push(ok); },
  };
  const savedWindow = globalThis.window, savedDocument = globalThis.document;
  const savedNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  globalThis.window = { isSecureContext: true, setInterval: (f) => { everySecond = f; return 1; }, addEventListener() {}, removeEventListener() {} };
  globalThis.document = { hidden: false, addEventListener: (_, f) => { onVisible = f; }, removeEventListener() {} };
  Object.defineProperty(globalThis, 'navigator', { value: { geolocation }, configurable: true });
  try {
    const fixes = [], errors = [];
    const g = new GeoTracker(DESTINATION.lat, DESTINATION.lng);
    g.onFix = (f) => fixes.push(f);
    g.onError = (e) => errors.push(e);
    g.start();
    everySecond();
    assert.equal(calls.poll.length, 0, 'chưa có vị trí đầu tiên thì không hỏi thêm');
    watchErr({ code: 3, PERMISSION_DENIED: 1 });
    assert.deepEqual(errors, ['unavailable']);
    const pos = { coords: { latitude: DESTINATION.lat, longitude: DESTINATION.lng, accuracy: 7 } };
    watchOk(pos);
    assert.equal(fixes.length, 1);
    watchErr({ code: 3, PERMISSION_DENIED: 1 });
    assert.equal(errors.length, 1, 'mất tín hiệu tạm thời không báo lỗi lại');
    watchErr({ code: 1, PERMISSION_DENIED: 1 });
    assert.deepEqual(errors, ['unavailable', 'denied']);
    everySecond();
    assert.equal(calls.poll.length, 0, 'vị trí còn mới');
    g.fixAt = performance.now() - 5000;
    everySecond();
    everySecond();
    assert.equal(calls.poll.length, 1, 'mỗi lúc chỉ hỏi một lần');
    calls.poll[0](pos);
    assert.equal(fixes.length, 2);
    onVisible();
    assert.equal(calls.watch, 2, 'mở lại việc theo dõi khi quay lại app');
    assert.equal(calls.clear, 1);
    g.stop();
  } finally {
    if (savedWindow === undefined) delete globalThis.window; else globalThis.window = savedWindow;
    if (savedDocument === undefined) delete globalThis.document; else globalThis.document = savedDocument;
    if (savedNavigator) Object.defineProperty(globalThis, 'navigator', savedNavigator); else delete globalThis.navigator;
  }
});
test('Position follows GPS closely and glides to each new fix', () => {
  const { g, cam } = guideRig();
  g.start({ floorNow: 1, floorTo: 1 });
  g.gpsFix({ e: 0, n: -100, accuracy: 10 });
  tick(g, cam, 0, 10);
  // đi về Bắc 1,4 m/giây với GPS sai số 10 m, không đếm được bước chân: vẫn không tụt lại quá xa
  let trueN = -100;
  for (let s = 0; s < 30; s++) {
    trueN += 1.4;
    g.gpsFix({ e: 0, n: trueN, accuracy: 10 });
    tick(g, cam, 0, 10);
  }
  assert.ok(Math.abs(g.userEnu.n - trueN) < 4, `lệch ${g.userEnu.n - trueN} m`);
  // GPS nhảy: số liệu đổi ngay, còn vị trí hiển thị đi dần, không giật
  const before = g.position.clone();
  g.gpsFix({ e: 12, n: trueN, accuracy: 5 });
  g.update(0.016, cam, { value: 0, at: 1000 }, 1000);
  const moved = g.position.distanceTo(before);
  assert.ok(moved < 1.5, `giật ${moved} m`);
  tick(g, cam, 0, 30);
  assert.ok(near(g.position.x, g.userEnu.e - 0, 1), `${g.position.x} / ${g.userEnu.e}`);
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

// ---------------------------------------------------------------- hỏi đáp, bản đồ nhỏ, ảnh mốc
const askApi = await import('../../api/ask.mjs');
function fakeRes() {
  const r = { code: 0, body: null, headers: {} };
  r.setHeader = (k, v) => { r.headers[k] = v; };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; return r; };
  return r;
}
test('Ask API: builds a grounded Gemini request and validates input', () => {
  const { question, request } = askApi.buildRequest({ question: '  Nhà vệ sinh ở đâu? ', lang: 'vi', context: 'Nhà vệ sinh: [CẦN BỔ SUNG]', history: [{ q: 'a', a: 'b' }], image: 'QUJD' });
  assert.equal(question, 'Nhà vệ sinh ở đâu?');
  assert.match(request.systemInstruction.parts[0].text, /Không tự bịa/);
  assert.match(request.systemInstruction.parts[0].text, /Nhà vệ sinh: \[CẦN BỔ SUNG\]/);
  assert.equal(request.contents.length, 3);
  assert.equal(request.contents.at(-1).parts[1].inlineData.mimeType, 'image/jpeg');
  // ảnh sai định dạng hoặc quá lớn bị bỏ qua, câu hỏi bị cắt ngắn
  const bad = askApi.buildRequest({ question: 'x'.repeat(2000), image: '<script>' });
  assert.equal(bad.question.length, 500);
  assert.equal(bad.request.contents.at(-1).parts.length, 1);
  assert.equal(askApi.readAnswer({ candidates: [{ content: { parts: [{ text: 'Xin ' }, { text: 'chào' }] } }] }), 'Xin chào');
  assert.equal(askApi.readAnswer({ promptFeedback: { blockReason: 'SAFETY' } }), '');
});
test('Ask API: key stays on the server, errors are mapped', async () => {
  const old = { ...process.env };
  try {
    delete process.env.GEMINI_API_KEY;
    let r = fakeRes();
    await askApi.default({ method: 'POST', headers: {}, body: { question: 'hi' } }, r);
    assert.equal(r.code, 503);
    process.env.GEMINI_API_KEY = 'server-key';
    r = fakeRes();
    await askApi.default({ method: 'GET', headers: {} }, r);
    assert.equal(r.code, 405);
    r = fakeRes();
    await askApi.default({ method: 'POST', headers: { origin: 'https://evil.example' }, body: { question: 'hi' } }, r);
    assert.equal(r.code, 403);
    let sent = null;
    const ok = async (url, init) => { sent = { url, init }; return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: 'Chưa có thông tin, bạn hỏi nhân viên nhé.' }] } }] }) }; };
    r = fakeRes();
    await askApi.default({ method: 'POST', headers: { origin: 'https://don-gio-xuan-ten.vercel.app' }, body: JSON.stringify({ question: 'Nhà vệ sinh ở đâu?', lang: 'vi', context: 'x' }) }, r, ok);
    assert.equal(r.code, 200);
    assert.match(r.body.answer, /nhân viên/);
    assert.match(sent.url, /models\/gemini-3\.5-flash-lite:generateContent$/);
    assert.equal(sent.init.headers['x-goog-api-key'], 'server-key');
    r = fakeRes();
    await askApi.default({ method: 'POST', headers: {}, body: { question: 'hi' } }, r, async () => ({ ok: false, status: 429 }));
    assert.equal(r.code, 429);
    r = fakeRes();
    await askApi.default({ method: 'POST', headers: {}, body: { question: '   ' } }, r, ok);
    assert.equal(r.code, 400);
  } finally {
    process.env = old;
  }
});
test('Ask client: context carries only exhibition data and the current item', async () => {
  const items = [{ titleVi: 'Panel F · Lời giới thiệu', titleEn: 'Panel F', descVi: '[CẦN BỔ SUNG] x', descEn: '' }];
  const ctx = buildContext({ items, current: items[0], status: 'Khách đang ở trong hành lang trưng bày.' });
  assert.match(ctx, /Đón Gió Xuân/);
  assert.match(ctx, /Nhà vệ sinh: \[CẦN BỔ SUNG\]/);
  assert.match(ctx, /Khách đang xem: Panel F/);
  let body;
  const r = await askGuide({ question: 'Q', lang: 'vi', context: ctx, history: [], image: null }, async (url, init) => { body = JSON.parse(init.body); assert.equal(url, './api/ask'); return { ok: true, status: 200, json: async () => ({ answer: 'A' }) }; });
  assert.deepEqual(r, { answer: 'A' });
  assert.equal(body.image, undefined);
  assert.deepEqual(await askGuide({ question: 'Q', lang: 'vi', context: '', history: [] }, async () => ({ ok: false, status: 503 })), { error: 'no-key' });
  assert.deepEqual(await askGuide({ question: 'Q', lang: 'vi', context: '', history: [] }, async () => ({ ok: false, status: 429 })), { error: 'busy' });
});
test('Mini map: Web Mercator pixels and scale', () => {
  const a = mercator({ lat: 0, lng: 0 }, 0);
  assert.ok(near(a.x, 128) && near(a.y, 128));
  const g = mercator({ lat: DESTINATION.lat, lng: DESTINATION.lng });
  const g2 = mercator({ lat: DESTINATION.lat + 100 / 111195, lng: DESTINATION.lng });
  const mpp = metersPerPixel(DESTINATION.lat);
  assert.ok(near((g.y - g2.y) * mpp, 100, 1.5), String((g.y - g2.y) * mpp)); // Bắc = lên trên
  assert.ok(near(mpp, 1.115, 0.01), String(mpp));
});
test('Image targets: unique indices, known kinds, image files present', async () => {
  const fs = await import('node:fs');
  const cfg = JSON.parse(fs.readFileSync('src/config/artifacts.json', 'utf8'));
  const idx = cfg.items.map((i) => i.targetIndex).sort((a, b) => a - b);
  assert.deepEqual(idx, idx.map((_, i) => i));
  for (const it of cfg.items) {
    assert.ok(['model', 'info', 'enter'].includes(it.kind), it.id);
    assert.ok(fs.existsSync('../' + it.image), it.image);
    if (it.kind === 'model') assert.ok(fs.existsSync('../' + it.model), it.model);
  }
  assert.ok(cfg.items.some((i) => i.kind === 'enter'));
  assert.ok(fs.statSync('../' + cfg.targets).size > 0);
});
test('Info cards have their text in both languages, or are pending in both', async () => {
  const fs = await import('node:fs');
  const cfg = JSON.parse(fs.readFileSync('src/config/artifacts.json', 'utf8'));
  const pending = (s) => !s || s.startsWith('[CẦN BỔ SUNG]');
  const info = cfg.items.filter((i) => i.kind === 'info');
  for (const it of info) assert.equal(pending(it.descVi), pending(it.descEn), it.id);
  assert.ok(info.filter((i) => !pending(i.descVi)).length >= 3);
});
test('Read aloud: the card text follows the chosen language and skips missing content', () => {
  const NL = String.fromCharCode(10);
  const item = { titleVi: 'Panel D11 · Bàn quà, cây đào – bảng Tết', titleEn: 'Panel D11 · Gift table', descVi: ['Bữa tiệc tàu bay', '', 'Giám ngục Hỏa Lò…'].join(NL), descEn: ['Flying feast', '', 'The Hoa Lo Prison…'].join(NL) };
  assert.equal(cardSpeech(item, 'vi'), ['Panel D11. Bàn quà, cây đào. bảng Tết.', 'Bữa tiệc tàu bay', '', 'Giám ngục Hỏa Lò…'].join(NL));
  assert.ok(cardSpeech(item, 'en').startsWith(['Panel D11. Gift table.', 'Flying feast'].join(NL)));
  const pending = { ...item, descVi: '[CẦN BỔ SUNG] Nội dung panel do BTC cung cấp.', descEn: '[CẦN BỔ SUNG] Panel text to be provided by the organisers.' };
  assert.equal(cardSpeech(pending, 'en'), 'Panel D11. Gift table.');
  const long = 'Một câu ngắn. ' + 'chữ, '.repeat(120) + 'hết.';
  const parts = splitForSpeech(long);
  assert.ok(parts.every((p) => p.length <= 200), parts.map((p) => p.length).join(','));
  assert.equal(parts.join(' ').replace(/\s+/g, ' '), long.replace(/\s+/g, ' ').trim());
});
test('Read aloud: right voice, one ending callback, and a clean stop', () => {
  const spoken = [];
  let cancels = 0;
  const voices = [{ lang: 'en-US', name: 'en' }, { lang: 'vi-VN', name: 'vi' }];
  const synth = { getVoices: () => voices, speak: (u) => spoken.push(u), cancel: () => { cancels++; } };
  const savedWindow = globalThis.window, savedU = globalThis.SpeechSynthesisUtterance;
  globalThis.window = { speechSynthesis: synth };
  globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
  try {
    let done = 0;
    assert.equal(speak('Xin chào. Chúc mừng năm mới.', 'vi', () => done++), 'ok');
    assert.deepEqual(spoken.map((u) => [u.text, u.lang, u.voice.name]), [['Xin chào.', 'vi-VN', 'vi'], ['Chúc mừng năm mới.', 'vi-VN', 'vi']]);
    spoken.at(-1).onend();
    assert.equal(done, 1);
    spoken.at(-1).onend(); // sự kiện lặp lại không gọi thêm
    assert.equal(done, 1);
    // dừng giữa chừng: gọi kết thúc đúng một lần, sự kiện muộn của câu cũ bị bỏ qua
    let done2 = 0;
    speak('Hello there.', 'en', () => done2++);
    const old = spoken.at(-1);
    stopSpeaking();
    old.onerror();
    assert.equal(done2, 1);
    assert.ok(cancels >= 2);
    // nội dung mới chen ngang nội dung đang đọc
    let done3 = 0, done4 = 0;
    speak('One.', 'en', () => done3++);
    speak('Hai.', 'vi', () => done4++);
    assert.equal(done3, 1);
    assert.equal(done4, 0);
    voices.splice(1, 1); // máy không có giọng tiếng Việt
    assert.equal(speak('Xin chào.', 'vi'), 'no-voice');
    globalThis.window = {};
    assert.equal(speak('Xin chào.', 'vi'), 'unsupported');
  } finally {
    if (savedWindow === undefined) delete globalThis.window; else globalThis.window = savedWindow;
    if (savedU === undefined) delete globalThis.SpeechSynthesisUtterance; else globalThis.SpeechSynthesisUtterance = savedU;
  }
});

// ---------------------------------------------------------------- đo phòng từ camera
/** Dựng một căn phòng hộp để sinh ảnh camera và mặt nạ sàn đúng hình học. */
function boxRoom({ x0, x1, z0, z1, h, eye = 1.45 }) {
  const WALL = [200, 190, 170], CEIL = [245, 245, 250], FLOOR = [150, 100, 70];
  const camera = (yaw, pitch) => {
    const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
    cam.rotation.order = 'YXZ';
    cam.rotation.set(pitch, yaw, 0);
    cam.position.set(0, eye, 0);
    cam.updateMatrixWorld();
    cam.updateProjectionMatrix();
    return cam;
  };
  const hit = (d) => {
    const ts = [];
    if (d.x > 0) ts.push((x1 - 0) / d.x); else if (d.x < 0) ts.push((x0 - 0) / d.x);
    if (d.z > 0) ts.push((z1 - 0) / d.z); else if (d.z < 0) ts.push((z0 - 0) / d.z);
    const wall = Math.min(...ts);
    const y = eye + d.y * wall;
    if (y < 0) return 'floor';
    if (y > h) return 'ceiling';
    return 'wall';
  };
  const render = (cam) => {
    const rgba = new Uint8ClampedArray(W * H * 4), mask = new Float32Array(W * H);
    const v = new THREE.Vector3();
    for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
      v.set(((c + 0.5) / W) * 2 - 1, 1 - ((r + 0.5) / H) * 2, 0.5).applyMatrix4(cam.projectionMatrixInverse).applyQuaternion(cam.quaternion).normalize();
      const kind = hit(v);
      rgba.set([...(kind === 'floor' ? FLOOR : kind === 'ceiling' ? CEIL : WALL), 255], (r * W + c) * 4);
      mask[r * W + c] = kind === 'floor' ? 1 : 0;
    }
    return { rgba, mask };
  };
  return { camera, render, eye };
}
function scanRoom(room, map, ceil) {
  const pos = new THREE.Vector3(0, room.eye, 0);
  for (const pitch of [-0.75, -0.45, 0.2, 0.75, 1.0]) {
    for (let a = 0; a < 24; a++) {
      const yaw = (a / 24) * Math.PI * 2;
      const cam = room.camera(yaw, pitch);
      const { rgba, mask } = room.render(cam);
      map.observe(mask, cam.projectionMatrixInverse, cam.quaternion, pos, 0.1);
      ceil.update(rgba, cam.projectionMatrixInverse, cam.quaternion, room.eye, (dx, dz) => map.wallAlong(0, 0, dx, dz));
    }
  }
}
for (const [name, spec] of [
  ['small office', { x0: -2, x1: 3, z0: -2.5, z1: 2, h: 2.7 }],
  ['tall hall', { x0: -3, x1: 4, z0: -3, z1: 3.5, h: 4.2 }],
]) {
  test(`Room is measured from the camera: ${name}`, () => {
    const room = boxRoom(spec);
    const map = new RoomMap(180), ceil = new CeilingVision();
    assert.equal(ceil.height, DEFAULT_CEILING);
    assert.equal(ceil.measured, false);
    scanRoom(room, map, ceil);
    assert.equal(ceil.measured, true);
    assert.ok(Math.abs(ceil.height - spec.h) < spec.h * 0.12, `trần ${ceil.height.toFixed(2)} so với ${spec.h}`);
    // tường đo được đúng hướng, sai số trong khoảng một ô bản đồ
    const east = map.wallAlong(0, 0, 1, 0);
    assert.ok(east !== null && Math.abs(east - spec.x1) < 0.5, `tường Đông ${east}`);
    assert.equal(map.isInside(0, 0, spec.x1 - 1, 0), true);
    assert.equal(map.isInside(0, 0, spec.x1 + 1, 0), false);
    assert.equal(map.isInside(0, 0, 0, spec.z0 - 1), false);
  });
}
test('Ceiling stays at the default when walls and ceiling share one colour', () => {
  const room = boxRoom({ x0: -2, x1: 3, z0: -2.5, z1: 2, h: 3.5 });
  const map = new RoomMap(180), ceil = new CeilingVision();
  const pos = new THREE.Vector3(0, room.eye, 0);
  for (const pitch of [-0.75, 0.75, 1.0]) for (let a = 0; a < 24; a++) {
    const cam = room.camera((a / 24) * 6.283, pitch);
    const { rgba, mask } = room.render(cam);
    for (let i = 0; i < mask.length; i++) if (!mask[i]) rgba.set([230, 230, 230, 255], i * 4);
    map.observe(mask, cam.projectionMatrixInverse, cam.quaternion, pos, 0.1);
    ceil.update(rgba, cam.projectionMatrixInverse, cam.quaternion, room.eye, (dx, dz) => map.wallAlong(0, 0, dx, dz));
  }
  assert.equal(ceil.measured, false);
  assert.equal(ceil.height, DEFAULT_CEILING);
});
test('Ceiling is measured from the AI mask, and furniture hiding the wall foot does not pull it down', () => {
  const spec = { x0: -2.5, x1: 3, z0: -3, z1: 2.5, h: 3.4 };
  const room = boxRoom(spec);
  const map = new RoomMap(180), ceil = new CeilingVision();
  const pos = new THREE.Vector3(0, room.eye, 0);
  for (const pitch of [-0.75, -0.45, 0.2, 0.75, 1.0]) for (let a = 0; a < 24; a++) {
    const yaw = (a / 24) * Math.PI * 2;
    const cam = room.camera(yaw, pitch);
    const { rgba, mask } = room.render(cam);
    const ceilMask = new Float32Array(W * H);
    for (let i = 0; i < ceilMask.length; i++) ceilMask[i] = rgba[i * 4] === 245 ? 1 : 0;
    // một phần ba các hướng có giường che chân tường: sàn kết thúc sớm hơn
    if (a % 3 === 0) for (let i = 0; i < mask.length; i++) if (i < W * 44) mask[i] = 0;
    map.observe(mask, cam.projectionMatrixInverse, cam.quaternion, pos, 0.1);
    ceil.updateMask(ceilMask, cam.projectionMatrixInverse, cam.quaternion, room.eye, (dx, dz) => map.wallAlong(0, 0, dx, dz));
  }
  assert.equal(ceil.measured, true);
  assert.ok(Math.abs(ceil.height - spec.h) < spec.h * 0.15, `trần ${ceil.height.toFixed(2)} so với ${spec.h}`);
});
test('A table in the room is not a wall', () => {
  const map = new RoomMap(180);
  paint(map, -0.6, -2.2, 0.6, -1.6); // mặt bàn dài 0,6 m theo hướng nhìn
  assert.equal(map.wallAlong(0, 0, 0, -1), null);
  assert.equal(map.isInside(0, 0, 0, -3.5), true);
  paint(map, -5, -4.5, 5, -2.5); // tường thật: nhìn từ camera là dải vật cản kéo dài tới hết tầm
  const d = map.wallAlong(0, 0, 0, -1);
  assert.ok(d !== null && d < 3.3, String(d));
  assert.equal(map.isInside(0, 0, 0, -3.8), false);
});

// ---------------------------------------------------------------- nhận diện sàn/trần bằng mô hình
/** Khung hình phân vùng: mỗi ô do hàm fn(tâm NDC x, y) trả về 'floor' | 'ceil' | 'wall' | 'other'. */
function segFrame(fn, w = 33, h = 57) {
  const f = { w, h, floor: new Uint8Array(w * h), ceil: new Uint8Array(w * h), wall: new Uint8Array(w * h) };
  for (let r = 0; r < h; r++) for (let c = 0; c < w; c++) {
    const k = fn((c / (w - 1)) * 2 - 1, 1 - (r / (h - 1)) * 2);
    if (k !== 'other') f[k][r * w + c] = 255;
  }
  return f;
}
function surfaceCam(pitch, yaw = 0) {
  const cam = new THREE.PerspectiveCamera(67, 9 / 16, 0.1, 100);
  cam.rotation.order = 'YXZ';
  cam.rotation.set(pitch, yaw, 0);
  cam.updateMatrixWorld();
  cam.updateProjectionMatrix();
  return cam;
}
const integrate = (s, f, cam) => s.integrate(f, cam.projectionMatrix, cam.projectionMatrixInverse, cam.quaternion);

test('Model logits become floor, ceiling and wall confidence', () => {
  const C = 151, logits = new Float32Array(4 * C);
  logits[0 * C + 4] = 8; // sàn
  logits[1 * C + 6] = 8; // trần
  logits[2 * C + 1] = 8; // tường
  logits[3 * C + 8] = 8; // giường: không thuộc nhóm nào
  const f = logitsToFrame(logits, 2, 2, C);
  assert.ok(f.floor[0] > 250 && f.ceil[0] < 5 && f.wall[0] < 5);
  assert.ok(f.ceil[1] > 250 && f.floor[1] < 5);
  assert.ok(f.wall[2] > 250 && f.floor[2] < 5);
  assert.ok(f.floor[3] < 5 && f.ceil[3] < 5 && f.wall[3] < 5);
  // đèn trần và thảm tính vào trần và sàn
  const g = new Float32Array(2 * C);
  g[83] = 8; g[C + 29] = 8;
  const fr = logitsToFrame(g, 1, 2, C);
  assert.ok(fr.ceil[0] > 250 && fr.floor[1] > 250);
});
test('Surface map stays attached to the world when the phone turns', () => {
  const s = new SurfaceMap();
  assert.equal(s.ready, false);
  const cam = surfaceCam(-0.6); // chúc xuống, nửa dưới là sàn
  integrate(s, segFrame((x, y) => (y < 0.1 ? 'floor' : 'wall')), cam);
  integrate(s, segFrame((x, y) => (y < 0.1 ? 'floor' : 'wall')), cam);
  assert.equal(s.ready, true);
  const down = new THREE.Vector3(0, -1, -1.2).normalize();
  assert.ok(s.sample(0, 0, down.x, down.y, down.z) > 0.9);
  // hướng chưa từng thấy: chưa biết nên không hiện hoa
  assert.equal(s.sample(0, 0, 0, -0.7, 1), 0);
  // quay sang chỗ khác rồi vẫn nhớ vùng cũ, không phụ thuộc màn hình đang nhìn đâu
  integrate(s, segFrame(() => 'other'), surfaceCam(-0.6, Math.PI));
  assert.ok(s.sample(0, 0, down.x, down.y, down.z) > 0.9);
  // sàn vừa bị vật khác che thì tắt
  integrate(s, segFrame(() => 'other'), cam);
  integrate(s, segFrame(() => 'other'), cam);
  integrate(s, segFrame(() => 'other'), cam);
  assert.ok(s.sample(0, 0, down.x, down.y, down.z) < 0.3);
  s.reset();
  assert.equal(s.ready, false);
  assert.equal(s.sample(0, 0, down.x, down.y, down.z), 0);
});
test('Surface map rejects impossible labels using the phone orientation', () => {
  const s = new SurfaceMap();
  // mô hình nói "sàn" ở cả khung hình khi nhìn ngang: phần trên chân trời không phải sàn
  const level = surfaceCam(0);
  integrate(s, segFrame(() => 'floor'), level);
  integrate(s, segFrame(() => 'floor'), level);
  assert.ok(s.sample(0, 0, 0, 0.3, -1) < 0.05);
  assert.ok(s.sample(0, 0, 0, -0.3, -1) > 0.9);
  // nhìn gần thẳng lên: "tường" ở đỉnh đầu thực ra là trần, còn tường ở tầm mắt vẫn là tường
  const up = surfaceCam(1.35);
  integrate(s, segFrame(() => 'wall'), up);
  const centre = (W >> 1) + (H >> 1) * W;
  assert.ok(s.ceilMask[centre] > 0.9, String(s.ceilMask[centre]));
  const ahead = surfaceCam(0.1);
  integrate(s, segFrame(() => 'wall'), ahead);
  assert.ok(s.ceilMask[centre] < 0.05, String(s.ceilMask[centre]));
  // "trần" ở dưới đường chân trời bị loại
  integrate(s, segFrame(() => 'ceil'), surfaceCam(-0.5));
  assert.ok(s.ceilMask[centre] < 0.05, String(s.ceilMask[centre]));
});
test('Surface model files are present and match the expected input', async () => {
  const fs = await import('node:fs');
  const m = JSON.parse(fs.readFileSync('../models/surface/model.json', 'utf8'));
  const input = m.modelTopology.node.find((n) => n.name === 'input');
  assert.deepEqual(input.attr.shape.shape.dim.map((d) => +d.size), [1, 225, 129, 3]);
  assert.ok(!m.modelTopology.node.some((n) => n.op === 'SpaceToBatchND' || n.op === 'BatchToSpaceND'));
  assert.ok(m.modelTopology.node.some((n) => n.name === 'logits/semantic/BiasAdd'));
  const bytes = m.weightsManifest[0].weights.reduce((sum, w) => sum + w.shape.reduce((a, b) => a * b, 1) * (w.quantization ? (w.quantization.dtype === 'uint8' ? 1 : 2) : 4), 0);
  assert.equal(fs.statSync('../models/surface/weights.bin').size, bytes);
});
