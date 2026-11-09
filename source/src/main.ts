import '@fontsource/eb-garamond/vietnamese-400.css';
import '@fontsource/eb-garamond/latin-400.css';
import '@fontsource/eb-garamond/vietnamese-400-italic.css';
import '@fontsource/eb-garamond/latin-400-italic.css';
import '@fontsource/eb-garamond/vietnamese-500.css';
import '@fontsource/eb-garamond/latin-500.css';
import '@fontsource/eb-garamond/vietnamese-600.css';
import '@fontsource/eb-garamond/latin-600.css';
import './ui/styles.css';

import * as THREE from 'three';
import { CameraFeed, type CameraError } from './core/camera';
import { Sensors } from './core/sensors';
import { Renderer } from './core/renderer';
import { QualityManager } from './core/quality-manager';
import { CorridorLocalizer } from './core/corridor-localizer';
import { XRAdapter } from './core/xr-adapter';
import { FloorVision, floorDistances, GRID_W, GRID_H } from './core/floor-vision';
import { RoomMap } from './core/room-map';
import { SurfaceMap } from './core/surface-map';
import { SurfaceSegmenter, SEG_H, SEG_W } from './core/surface-segmenter';
import { ceilingUniforms } from './scenes/ceiling-clip';
import { CeilingVision, DEFAULT_CEILING } from './core/ceiling-vision';
import { HandTracker, HandOccluder } from './tracking/hand-tracker';
import { ManualMarkerTracker } from './tracking/marker-tracker';
import { IndoorScene } from './scenes/indoor-scene';
import { OutdoorScene } from './scenes/outdoor-scene';
import { GuideScene, DESTINATION } from './scenes/guide-scene';
import { GeoTracker, type GeoFix } from './core/geo-tracker';
import { fromEnu } from './core/geo';
import { fetchRoute, routingKey } from './core/route-service';
import { AskPanel } from './ui/ask-panel';
import { MiniMap } from './ui/minimap';
import type { AskItem } from './core/ask-service';
import { room } from './config/room';
import artifactsCfg from './config/artifacts.json';
import { ArtifactTracker } from './tracking/artifact-tracker';
import { ArtifactViewer, type ArtifactItem } from './scenes/artifact-viewer';
import { showGate, showPermissionSheet, showOnboarding, hasOnboarded, toast } from './ui/screens';
import { Hud, type Settings } from './ui/hud';
import { t, getLang } from './ui/i18n';
import { petalSwirl, chime } from './ui/transition';
import type { ColliderSource, DynamicCollider } from './physics/colliders';

// ---------------------------------------------------------------- khởi tạo
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const ui = $<HTMLDivElement>('ui');
const fx = $<HTMLCanvasElement>('fx');
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');

const feed = new CameraFeed($<HTMLVideoElement>('cam'));
const sensors = new Sensors();
const R = new Renderer($<HTMLCanvasElement>('gl'));
const world = new THREE.Group(); // hệ toạ độ phòng (WebXR đặt lại ma trận này)
R.scene.add(world);
const indoor = new IndoorScene(world);
const outdoor = new OutdoorScene(R.camera);
const guide = new GuideScene(R.scene);
const geo = new GeoTracker(DESTINATION.lat, DESTINATION.lng);
geo.onFix = (f: GeoFix) => guide.gpsFix(f);
// tuyến đi bộ theo phố; lỗi thì dải sáng tạm theo hướng chim bay
guide.onNeedRoute = (e, n) => {
  const from = fromEnu(e, n, DESTINATION.lat, DESTINATION.lng);
  fetchRoute(from, DESTINATION).then((r) => {
    if (settings.mode === 'indoor') return;
    const first = !guide.hasRoute;
    guide.setRoute(r?.points ?? null);
    if (!r && first) toast(ui, routingKey() ? t('guideRouteFail') : t('guideNoKey'), 6000, true);
  });
};
geo.onError = (e) => {
  if (settings.mode !== 'indoor') toast(ui, e === 'denied' ? t('guideGpsDenied') : e === 'insecure' ? t('errInsecure') : t('guideGpsNone'), 7000, true);
};
const hand = new HandTracker();
const occluder = new HandOccluder(world);
const localizer = new CorridorLocalizer();
const quality = new QualityManager();
const xr = new XRAdapter(R.gl, world, R.scene);
const markers = new ManualMarkerTracker();
const floorVision = new FloorVision();
const floorDist = new Float32Array(GRID_W * GRID_H);
// đo phòng từ camera: bản đồ sàn/tường và chiều cao trần, thay cho kích thước cố định trong room.json
const roomMap = new RoomMap(180);
const ceiling = new CeilingVision();
// nhận diện sàn/trần bằng mô hình AI; đo theo màu (FloorVision, CeilingVision.update) chỉ dùng khi chưa có mô hình
const surfaces = new SurfaceMap();
const segmenter = new SurfaceSegmenter();
ceilingUniforms.uSurface.value = surfaces.texture;
let surfaceSeenAt = 0;
segmenter.onResult = (frame, pose) => {
  surfaces.integrate(frame, pose.proj, pose.projInv, pose.q);
  const now = performance.now();
  const sec = Math.min(2, (now - surfaceSeenAt) / 1000);
  surfaceSeenAt = now;
  const p = pose.pos;
  roomMap.recenter(p.x, p.z);
  roomMap.observe(surfaces.floorMask, pose.projInv, pose.q, p, sec);
  ceiling.updateMask(surfaces.ceilMask, pose.projInv, pose.q, p.y, (dx, dz) => roomMap.wallAlong(p.x, p.z, dx, dz));
  if (dbgMask) drawFloorMask(dbgMask);
};
const roomCam = new THREE.Vector3();
indoor.petals.room = {
  ceilingY: DEFAULT_CEILING,
  isInside: (x, z) => roomMap.isInside(roomCam.x, roomCam.z, x, z),
};
function resetRoom() {
  roomMap.reset();
  ceiling.reset();
  surfaces.reset();
  segmenter.invalidate();
}
indoor.petals.sources.push(hand);

// ---------------------------------------------------------------- hiện vật 3D trên ảnh in
// mỗi ảnh mốc là một trong ba loại: model = hiện vật 3D, info = thẻ văn bản, enter = ảnh cổng triển lãm
type TargetItem = ArtifactItem & { kind?: 'model' | 'info' | 'enter' };
const targetItems = artifactsCfg.items as unknown as TargetItem[];
const artifactItems = targetItems.filter((i) => (i.kind ?? 'model') === 'model');
const artTracker = new ArtifactTracker(
  feed,
  targetItems.map((i) => ({ targetIndex: i.targetIndex, physicalWidth: i.physicalWidth, poseless: i.kind === 'info' || i.kind === 'enter' })),
  artifactsCfg.targets,
  room.camera.longEdgeFovDeg,
);
const artViewer = new ArtifactViewer(R.scene, R.camera, R.gl, artifactItems);
/** Thẻ văn bản đang hiện (panel), null nếu không có. */
let infoItem: TargetItem | null = null;
/** Chế độ đọc do nút trên thẻ bật: thẻ đóng thì nút biến mất nên phải tắt theo. */
let readingFromCard = false;
function hideInfoCard() {
  infoItem = null;
  hud?.setArtifact(null, 'hidden');
  if (readingFromCard) {
    readingFromCard = false;
    handlers.change({ reading: false });
  }
}
artTracker.onFound = (i) => {
  const item = targetItems.find((x) => x.targetIndex === i);
  if (!item) return;
  if (item.kind === 'enter') {
    if (settings.mode !== 'indoor') enterExhibition();
    return;
  }
  if (settings.mode !== 'indoor') return;
  if (item.kind === 'info') {
    if (artViewer.visible) return; // đang xem hiện vật 3D thì không đè thẻ
    infoItem = item;
    hud?.setArtifact(item, 'info');
    if (navigator.vibrate) navigator.vibrate(8);
  } else {
    if (infoItem) hideInfoCard();
    artViewer.show(i);
  }
};
artTracker.onLost = () => {
  R.camera.updateMatrixWorld();
  artViewer.lose(R.camera.matrixWorld, artTracker.matrix);
};
artViewer.onChange = (item, mode) => {
  const on = mode !== 'hidden';
  // đang xem hiện vật: màn hình dành cho cử chỉ xoay/phóng to, tạm nghỉ nhận diện tay,
  // giảm hoa ở giữa màn hình để không che model
  sensors.dragBlocked = on;
  hand.paused = on;
  artTracker.paused = mode === 'inspect';
  indoor.petals.readingMode = settings.reading || on;
  hud?.setArtifact(item, mode);
  if (on && navigator.vibrate) navigator.vibrate(8);
};
artViewer.attachGestures($('gl'), () => settings.mode === 'indoor');
let artHintShown = false;

const reduceSys = matchMedia('(prefers-reduced-motion: reduce)').matches;
const settings: Settings = {
  mode: 'indoor',
  reading: false,
  sound: false, // mặc định tắt tiếng
  battery: false,
  reduceMotion: reduceSys,
  density: 1,
  guide: params.has('guide'),
};
let hud: Hud | null = null;
let running = false;
let hasCamera = false;

// ---------------------------------------------------------------- service worker (offline)
const gate = showGate(ui, onStart);
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  gate.setStatus(t('offlineLoading'));
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => navigator.serviceWorker.ready)
    .then(() => gate.setStatus(t('offlineReady')))
    .catch(() => gate.setStatus(''));
}
xr.detect();

// ---------------------------------------------------------------- luồng bắt đầu
let camPromise: Promise<void> | null = null;
let permPromise: Promise<string> | null = null;

async function onStart() {
  const choice = await showPermissionSheet(ui, xr.supported, (c) => {
    // chạy đồng bộ trong cú bấm (yêu cầu của iOS)
    if (!c.xr) {
      permPromise = sensors.requestPermission();
      camPromise = feed.start();
    }
  });
  if (!choice) return;
  settings.mode = choice.mode;
  gate.leave();
  hud = new Hud(ui, settings, handlers);
  hud.artHandlers = {
    inspect: () => artViewer.inspect(),
    reset: () => artViewer.resetView(),
    ask: () => {
      const cur = currentItem();
      if (cur) askPanel.open(t('askAbout')(getLang() === 'vi' ? cur.titleVi : cur.titleEn));
    },
    reading: () => {
      handlers.change({ reading: !settings.reading });
      readingFromCard = settings.reading;
    },
    close: () => {
      if (infoItem) {
        hideInfoCard();
        return;
      }
      artViewer.close();
      // vẫn đang thấy ảnh → hiện lại trên ảnh
      if (artTracker.current >= 0) setTimeout(() => artViewer.show(artTracker.current), 350);
    },
  };
  applySettings();

  if (choice.xr) {
    await startXR();
  } else {
    await startCameraMode();
  }
  running = true;
  R.gl.setAnimationLoop(tick);

  if (!hasOnboarded() && settings.mode === 'indoor') await showOnboarding(ui);
  // ở AR nâng cao, toast đang là hướng dẫn tìm sàn: nhắc an toàn sau khi đặt xong
  if (!xr.session) toast(ui, settings.mode === 'indoor' && hasCamera ? `${t('floorScan')} ${t('safety')}` : t('safety'), 6500);
}

async function startCameraMode() {
  floorVision.reset();
  document.body.classList.remove('xr');
  try {
    await (camPromise ?? feed.start());
    hasCamera = true;
  } catch (e) {
    const err = e as CameraError;
    hasCamera = false;
    document.body.classList.add('no-camera');
    settings.guide = true;
    applySettings();
    toast(ui, err === 'denied' ? t('errDenied') : err === 'insecure' ? t('errInsecure') : t('errNoCam'), 7000, true);
  }
  const perm = await (permPromise ?? sensors.requestPermission());
  sensors.enableDrag($('gl'));
  if (perm === 'denied') toast(ui, t('errSensorDenied'), 6000, true);
  else {
    // nếu sau 1,5 s vẫn không có dữ liệu cảm biến → chế độ kéo để nhìn
    setTimeout(() => {
      if (!sensors.hasOrientation && hasCamera) toast(ui, t('errNoSensor'), 5000, true);
    }, 1500);
  }
  setMode(settings.mode, false);
  if (hasCamera) {
    hud?.setHand('loading');
    hand.init().then(() => {
      hud?.setHand(hand.active ? 'seen' : 'off');
      if (hand.status === 'error') toast(ui, t('errHand'), 4000, true);
      // nhận diện ảnh khởi động sau tay để không giành GPU lúc đầu; chạy cả ngoài cổng để nhận ảnh cổng
      startArtifacts();
    });
  }
}

function startArtifacts() {
  if (!hasCamera || xr.session) return;
  artViewer.preload();
  artTracker.start().then(() => {
    if (artTracker.status === 'ready' && !artHintShown) {
      artHintShown = true;
      setTimeout(() => toast(ui, t('artScan'), 6000), 6000);
    }
  });
}

async function startXR() {
  document.body.classList.add('xr');
  if (hud) hud.xrActive = true;
  setMode('indoor', false);
  const hints = { scanning: 'xrScan', notFloor: 'xrNotFloor', ready: 'xrPlace' } as const;
  xr.onStatus = (s) => {
    if (s !== 'placed') toast(ui, t(hints[s]), 120000, s === 'notFloor');
  };
  xr.onRejected = () => toast(ui, t('xrNotFloor'), 120000, true);
  xr.onPlaced = () => {
    indoor.petals.clear();
    toast(ui, `${t('xrPlaced')}. ${t('safety')}`, 5000);
  };
  xr.onFloorChanged = () => {
    indoor.petals.clear();
    toast(ui, t('xrFloorFixed'), 5000);
  };
  xr.onEnd = () => {
    if (hud) hud.xrActive = false;
    applySettings();
    startCameraMode();
  };
  try {
    await xr.start(ui);
    applySettings(); // AR nâng cao chạy ở mức chất lượng thấp cho đỡ giật
  } catch {
    if (hud) hud.xrActive = false;
    await startCameraMode();
  }
}

// ---------------------------------------------------------------- chế độ
function setMode(m: 'indoor' | 'outdoor' | 'guide', animate = true) {
  const apply = () => {
    settings.mode = m;
    indoor.setVisible(m === 'indoor');
    outdoor.setVisible(m === 'outdoor');
    guide.setVisible(m !== 'indoor');
    if (m === 'indoor') {
      guide.stop();
      geo.stop();
      minimap.setVisible(false);
      resetRoom();
    } else if (m === 'outdoor') {
      guide.start({ floorNow: 1, floorTo: 1 });
      geo.start();
      warnIfNoCompass();
    }
    occluder.mesh.visible = false;
    if (m === 'indoor') {
      artTracker.paused = false;
      if (hand.status === 'ready') startArtifacts();
      localizer.setX(0.6);
      sensors.recenter(0); // nhìn vào trong hành lang
      indoor.petals.clear();
    } else {
      // vẫn nhận ảnh để thấy cổng triển lãm, nhưng không hiện hiện vật/thẻ
      artTracker.paused = false;
      if (hand.status === 'ready') startArtifacts();
      if (artViewer.visible) artViewer.close();
      if (infoItem) hideInfoCard();
    }
    hud?.update(settings);
  };
  if (animate && m === 'indoor') petalSwirl(fx, apply, settings.reduceMotion);
  else apply();
}

function applySettings() {
  const p = indoor.petals;
  p.readingMode = settings.reading || artViewer.visible;
  artViewer.reduceMotion = settings.reduceMotion;
  p.density = settings.density;
  p.reduceMotion = settings.reduceMotion;
  document.body.classList.toggle('reduce-motion', settings.reduceMotion);
  quality.setBatterySaver(settings.battery || !!xr.session);
  applyQuality();
  indoor.guide.visible = settings.guide;
  hud?.update(settings);
}

function applyQuality() {
  const q = quality.settings;
  R.setPixelRatio(q.pixelRatio);
  indoor.petals.maxFalling = q.maxFalling;
  indoor.petals.maxResting = q.maxResting;
  indoor.branches.setDetail(q.branchDetail);
  hand.hz = q.handHz;
  guide.setSparkles(q.sparkles && !settings.battery);
}
quality.onChange = applyQuality;

const handlers = {
  capture,
  setMode: (m: 'indoor' | 'outdoor') => setMode(m, true),
  change(s: Partial<Settings>) {
    const readingChanged = s.reading !== undefined && s.reading !== settings.reading;
    Object.assign(settings, s);
    applySettings();
    if (readingChanged) toast(ui, settings.reading ? t('readingOn') : t('readingOff'), 2400);
  },
  recenter() {
    resetRoom();
    floorVision.reset();
    indoor.petals.clear();
    sensors.recenter(0);
    toast(ui, t('recentered'), 2000);
  },
  standAt(id: string) {
    markers.confirm(id);
  },
  tutorial() {
    showOnboarding(ui);
  },
  arrived() {
    setMode('indoor', true);
  },
  exitXr() {
    xr.end();
  },
  replaceFloor() {
    resetRoom();
    indoor.petals.clear();
    floorVision.reset();
    if (xr.session) xr.replace();
    else toast(ui, t('floorScan'), 6000);
  },
  guideOpen,
  guideFloorDone() {
    guide.start({ floorNow: guide.floorTo, floorTo: guide.floorTo });
  },
  guideExit() {
    setMode('indoor', true);
  },
  ask: (preset?: string) => askPanel.open(preset),
};

/** Camera thấy ảnh cổng triển lãm: tắt dẫn đường, chuyển sang hoa đào rơi. */
function enterExhibition() {
  setMode('indoor', true);
  toast(ui, t('enterWelcome'), 4000);
  if (navigator.vibrate) navigator.vibrate([10, 60, 10]);
}

function currentItem(): AskItem | null {
  if (infoItem) return infoItem;
  return artViewer.visible ? artViewer.active : null;
}

const askPanel = new AskPanel(ui, {
  items: targetItems.filter((i) => i.kind !== 'enter'),
  current: currentItem,
  status: () => {
    if (settings.mode !== 'indoor' && guide.hasFix) return `Khách đang được dẫn đường tới ${DESTINATION.nameVi}, còn khoảng ${Math.round(guide.distanceLeft)} m.`;
    if (settings.mode === 'indoor') return 'Khách đang ở trong hành lang trưng bày.';
    return 'Khách đang ở ngoài cổng di tích.';
  },
  photo: () => (hasCamera ? feed.captureJpeg() : null),
  speak: () => settings.sound,
});
const minimap = new MiniMap(ui);
let minimapAt = 0;

/** Mở biểu mẫu dẫn đường; GPS bắt đầu ngay trong cú bấm "Bắt đầu". */
function guideOpen() {
  hud?.openGuideSetup(guide.lastSetup, (s) => {
    if (settings.mode !== 'guide') setMode('guide', false);
    if (!guide.hasFix) geo.start();
    guide.start(s);
    if (s.floorNow !== s.floorTo) toast(ui, t('guideStairs'), 4000);
    warnIfNoCompass();
  });
}
/** Dải sáng cần la bàn mới biết hướng; không có thì báo để người dùng hiệu chỉnh. */
function warnIfNoCompass() {
  setTimeout(() => {
    if (settings.mode !== 'indoor' && geo.compass === null) toast(ui, t('guideNoCompass'), 7000, true);
  }, 4000);
}
guide.onArrive = () => {
  toast(ui, t('guideArrived')(getLang() === 'vi' ? DESTINATION.shortVi : DESTINATION.shortEn), 5000);
  if (settings.sound) chime();
};

markers.onFix = (fix) => {
  if (settings.mode !== 'indoor') return;
  localizer.fixAtPanel(fix.panel);
  sensors.recenter(fix.panel.side === 'orange' ? Math.PI / 2 : -Math.PI / 2);
  toast(ui, `${t('fixed')} ${fix.panel.id}`, 2200);
};

// bước chân → cập nhật vị trí (dead-reckoning)
const fwd = new THREE.Vector3();
sensors.onStep = () => {
  fwd.set(0, 0, -1).applyQuaternion(R.camera.quaternion);
  if (settings.mode === 'indoor') localizer.onStep(fwd);
  else guide.step(fwd);
};

hand.onChange = (active, grabbing) => {
  if (hand.status !== 'ready') return;
  hud?.setHand(!active ? 'off' : grabbing ? 'hold' : 'seen');
};
indoor.petals.onGrab = () => {
  if (settings.sound) chime();
};

// ---------------------------------------------------------------- tay ảo để thử trên máy tính (?demo=hand)
class DemoHand implements ColliderSource {
  active = true;
  private t = 0;
  private c = new THREE.Vector3();
  private v = new THREE.Vector3();
  private q = new THREE.Quaternion();
  grabbing = false;
  readonly mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0x0a7fc6, wireframe: true, transparent: true, opacity: 0.6 }),
  );
  update(dt: number, cam: THREE.Camera) {
    this.t += dt;
    const prev = this.c.clone();
    const local = new THREE.Vector3(Math.sin(this.t * 0.9) * 0.12, -0.05 + Math.cos(this.t * 1.3) * 0.06, -0.42);
    this.c.copy(local.applyMatrix4(cam.matrixWorld));
    this.v.subVectors(this.c, prev).divideScalar(Math.max(dt, 1e-3));
    this.q.copy(cam.quaternion);
    this.grabbing = this.t % 9 > 6; // mở 6 s để hứng, nắm 3 s
    this.mesh.position.copy(this.c);
  }
  colliders(): DynamicCollider[] {
    return [{ kind: 'sphere', c: this.c, r: 0.045, vel: this.v, palm: true }];
  }
  cup() {
    return { center: this.c, radius: 0.07, quaternion: this.q, grabbing: this.grabbing, vel: this.v };
  }
}
const demoHand = params.get('demo') === 'hand' ? new DemoHand() : null;
if (demoHand) {
  indoor.petals.sources.push(demoHand);
  world.add(demoHand.mesh);
}

// ---------------------------------------------------------------- chụp ảnh
const titleImg = new Image();
titleImg.src = new URL('./brand/title-cream.webp', document.baseURI).href;

function capture() {
  const dpr = Math.min(2, devicePixelRatio || 1);
  const W = Math.round(innerWidth * dpr), H = Math.round(innerHeight * dpr);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  if (hasCamera && feed.ready) {
    const L = feed.layout();
    ctx.save();
    if (feed.mirrored) {
      ctx.translate(W, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(feed.video, -L.ox * dpr, -L.oy * dpr, L.vw * L.scale * dpr, L.vh * L.scale * dpr);
    ctx.restore();
  } else {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#f3efe2');
    g.addColorStop(1, '#cfc6b1');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }
  // vẽ lại cảnh rồi chép ngay trong cùng tác vụ (không cần preserveDrawingBuffer)
  R.render();
  ctx.drawImage(R.gl.domElement, 0, 0, W, H);
  // chữ ký triển lãm ở góc dưới
  const grad = ctx.createLinearGradient(0, H * 0.78, 0, H);
  grad.addColorStop(0, 'rgba(0,58,110,0)');
  grad.addColorStop(1, 'rgba(0,58,110,0.55)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, H * 0.78, W, H * 0.22);
  if (titleImg.complete && titleImg.naturalWidth) {
    const tw = Math.min(W * 0.42, 420 * dpr);
    const th = (tw * titleImg.naturalHeight) / titleImg.naturalWidth;
    ctx.drawImage(titleImg, 20 * dpr, H - th - 22 * dpr, tw, th);
  }
  ctx.fillStyle = 'rgba(252,250,240,0.9)';
  ctx.font = `italic ${14 * dpr}px "EB Garamond", serif`;
  ctx.textAlign = 'right';
  ctx.fillText('Di tích Nhà tù Hỏa Lò · Xuân 2027', W - 18 * dpr, H - 24 * dpr);
  const flash = document.createElement('div');
  flash.className = 'flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 500);
  c.toBlob(
    (blob) => {
      if (!blob || !hud) return;
      hud.showPhoto(URL.createObjectURL(blob), blob);
    },
    'image/jpeg',
    0.9,
  );
}

// ---------------------------------------------------------------- vòng lặp
let last = performance.now();
let lightAt = 0;
let darkFor = 0;
let darkWarned = false;
let gustAt = 0;
const light = new THREE.Color(1, 1, 1);
const camPosRoom = new THREE.Vector3();
const fwdRoom = new THREE.Vector3();
const roomToClip = new THREE.Matrix4();
const invWorldQ = new THREE.Quaternion();
const dbg = DEBUG ? document.body.appendChild(Object.assign(document.createElement('div'), { className: 'debug' })) : null;
const VISION_MS = 100;
/** Quay nhanh hơn mức này (rad/s) thì ảnh nhoè, chưa đưa vào mô hình. */
const MAX_SURFACE_TURN = 1.2;
let layoutAt = 0;
let visionAt = 0;
let surfaceAt = 0;
const visionQ = new THREE.Quaternion();
// ?debug: ô nhỏ góc trên trái cho thấy app đang coi đâu là sàn (xanh)
const dbgMask = DEBUG ? document.body.appendChild(Object.assign(document.createElement('canvas'), { width: GRID_W, height: GRID_H })) : null;
if (dbgMask) dbgMask.style.cssText = 'position:fixed;left:8px;top:8px;width:72px;height:128px;z-index:60;opacity:.75;pointer-events:none;image-rendering:pixelated;background:#000';

function drawFloorMask(c: HTMLCanvasElement) {
  const ctx = c.getContext('2d');
  if (!ctx) return;
  const img = ctx.createImageData(GRID_W, GRID_H);
  const ai = surfaces.ready;
  (ai ? surfaces.floorMask : floorVision.mask).forEach((m, i) => {
    img.data[i * 4 + 1] = m * 255;
    img.data[i * 4 + 2] = ai ? surfaces.ceilMask[i] * 255 : 0;
    img.data[i * 4 + 3] = 255;
  });
  ctx.putImageData(img, 0, 0);
}

function tick(now: number, frame?: XRFrame) {
  if (!running) return;
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  const inXR = !!xr.session;
  let cam: THREE.Camera = R.camera;

  if (inXR) {
    xr.frame(frame, now);
    cam = R.gl.xr.getCamera();
  } else {
    sensors.update(dt);
    localizer.update(dt);
    R.camera.quaternion.copy(sensors.quaternion);
    if (settings.mode === 'indoor') R.camera.position.copy(localizer.position);
    else R.camera.position.set(guide.position.x, room.user.eyeHeightDefault, guide.position.y);
    if (feed.ready) R.setVFov(feed.displayVFov(room.camera.longEdgeFovDeg));
    R.camera.updateMatrixWorld();
  }

  // camera trong hệ toạ độ phòng
  world.updateMatrixWorld();
  camPosRoom.setFromMatrixPosition(cam.matrixWorld);
  world.worldToLocal(camPosRoom);
  world.getWorldQuaternion(invWorldQ).invert();
  fwdRoom.set(0, 0, -1).applyQuaternion(cam.getWorldQuaternion(new THREE.Quaternion())).applyQuaternion(invWorldQ);
  const pitch = (Math.asin(THREE.MathUtils.clamp(fwdRoom.y, -1, 1)) * 180) / Math.PI;

  // ánh sáng từ camera (2 lần/giây)
  if (now - lightAt > 500 && hasCamera && !inXR) {
    lightAt = now;
    const s = feed.sampleLight();
    if (s) {
      const b = THREE.MathUtils.lerp(0.62, 1.04, THREE.MathUtils.smoothstep(s.lum, 0.05, 0.55));
      const m = Math.max(s.r, s.g, s.b, 1e-3);
      light.setRGB(b * (0.88 + 0.12 * (s.r / m)), b * (0.88 + 0.12 * (s.g / m)), b * (0.88 + 0.12 * (s.b / m)));
      indoor.petals.setLight(light);
      artViewer.setLight(s.lum);
      darkFor = s.lum < 0.08 ? darkFor + 0.5 : 0;
      if (darkFor > 4 && !darkWarned && settings.mode === 'indoor') {
        darkWarned = true;
        toast(ui, t('errLowLight'), 5000, true);
      }
    }
  }

  // AR nâng cao đã có sàn thật từ hit-test; chế độ camera thì nhận sàn từ hình ảnh
  const useVision = !inXR && hasCamera && settings.mode === 'indoor';
  const canScan = useVision && feed.ready && sensors.hasOrientation && !sensors.stale && !feed.mirrored;
  if (useVision && !canScan) {
    floorVision.reset();
    surfaces.reset();
  }
  if (canScan) segmenter.start();
  if (canScan && segmenter.status === 'ready') {
    // máy yếu hoặc đang tiết kiệm pin thì chạy thưa đi
    const every = quality.batterySaver ? 1200 : quality.level === 'low' ? 700 : 300;
    if (!segmenter.busy && now - surfaceAt >= every && sensors.angularVel.length() < MAX_SURFACE_TURN) {
      const rgba = feed.sampleGrid(SEG_W, SEG_H);
      if (rgba) {
        surfaceAt = now;
        segmenter.segment(rgba, R.camera);
      }
    }
  } else if (canScan && (now - visionAt >= VISION_MS || visionQ.angleTo(R.camera.quaternion) > 0.08)) {
    const grid = feed.sampleGrid(GRID_W, GRID_H);
    if (grid) {
      const sec = Math.min(0.5, (now - visionAt) / 1000);
      floorDistances(floorDist, R.camera.projectionMatrixInverse, R.camera.quaternion, R.camera.position.y);
      floorVision.update(grid, floorDist, sec);
      const p = R.camera.position;
      roomMap.recenter(p.x, p.z);
      if (floorVision.ready) roomMap.observe(floorVision.mask, R.camera.projectionMatrixInverse, R.camera.quaternion, p, sec);
      ceiling.update(grid, R.camera.projectionMatrixInverse, R.camera.quaternion, p.y, (dx, dz) => roomMap.wallAlong(p.x, p.z, dx, dz));
      visionAt = now;
      visionQ.copy(R.camera.quaternion);
      if (dbgMask) drawFloorMask(dbgMask);
    }
  }

  if (settings.mode === 'indoor') {
    const up = THREE.MathUtils.smoothstep(pitch, 32, 52);
    const down = THREE.MathUtils.smoothstep(-pitch, 25, 50);
    // tán cây hiện cả khi nhìn thẳng (ở mép trên khung hình), chỉ tắt khi cúi hẳn xuống
    const canopy = THREE.MathUtils.smoothstep(pitch, -42, -12) * (settings.reading ? 0.55 : 1);
    // độ cao trần: AR nâng cao lấy từ mặt phẳng thật nếu có, camera thường lấy từ hình ảnh
    const ceilingY = inXR ? xr.ceilingHeight ?? DEFAULT_CEILING : ceiling.height;
    roomCam.copy(camPosRoom);
    indoor.petals.room!.ceilingY = ceilingY;
    if (now - layoutAt > 250) {
      layoutAt = now;
      indoor.branches.layout(camPosRoom.x, camPosRoom.z, ceilingY, indoor.petals.room!.isInside);
    }
    indoor.branches.clipTarget = useVision && surfaces.ready ? 1 : 0;
    indoor.branches.update(dt, canopy, up, light, settings.reduceMotion);
    indoor.petals.lookUp = up;
    indoor.petals.lookDown = down;
    if (!inXR && hasCamera) {
      hand.update(now, feed, R.camera);
      artTracker.smooth(dt);
      artViewer.update(dt, artTracker.poseReady ? artTracker.matrix : null);
      occluder.update(hand, camPosRoom);
      if (hand.active && hand.palmVel.length() > 1.0 && now - gustAt > 120) {
        gustAt = now;
        indoor.petals.wind.addGust(hand.palm, hand.palmVel.clone().multiplyScalar(0.5), 0.45, 0.6);
      }
    }
    if (demoHand) demoHand.update(dt, R.camera);
    indoor.petals.floorMask = useVision ? (surfaces.ready ? surfaces : floorVision) : null;
    if (!inXR || xr.placed) {
      roomToClip.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).multiply(world.matrixWorld);
      indoor.petals.update(dt, roomToClip, camPosRoom, fwdRoom);
    }
  } else {
    guide.pointScale = R.gl.getPixelRatio() * innerHeight * 0.02;
    guide.update(dt, R.camera, geo.compass === null ? null : { value: geo.compass, at: geo.compassAt });
    if (settings.mode === 'outdoor') outdoor.update(dt, sensors.angularVel, settings.reduceMotion);
    const showMap = guide.hasFix && (guide.phase === 'walk' || guide.phase === 'locating' || guide.phase === 'arrived');
    minimap.setVisible(showMap);
    if (showMap && now - minimapAt > 100) {
      minimapAt = now;
      const toLatLng = (p: { e: number; n: number }) => fromEnu(p.e, p.n, DESTINATION.lat, DESTINATION.lng);
      minimap.update({
        me: toLatLng(guide.userEnu),
        heading: guide.north.ready ? guide.heading(R.camera) : 0,
        route: guide.routeEnu?.map(toLatLng) ?? null,
        dest: DESTINATION,
        accuracy: guide.accuracy,
      });
    }
    hud?.setGuide({ phase: guide.phase, floorNow: guide.floorNow, floorTo: guide.floorTo, remaining: guide.distanceLeft, accuracy: guide.accuracy, routeState: guide.routeState });
  }

  quality.tick(dt);
  R.render();

  if (dbg && Math.floor(now / 250) !== Math.floor((now - dt * 1000) / 250)) {
    const st = indoor.petals.stats();
    dbg.textContent =
      `fps ${quality.fps.toFixed(0)} · ${quality.batterySaver ? 'low*' : quality.level}\n` +
      `rơi ${st.falling} · đọng ${st.resting} · giữ ${st.held}\n` +
      `x ${localizer.position.x.toFixed(2)} z ${localizer.position.z.toFixed(2)} · pitch ${pitch.toFixed(0)}°\n` +
      `trần ${ceiling.height.toFixed(2)} m${ceiling.measured ? '' : ' (mặc định)'}\n` +
      `AI ${segmenter.status}${segmenter.lastMs ? ` · ${segmenter.lastMs.toFixed(0)} ms` : ''}\n` +
      `tay ${hand.status}${hand.active ? ` · ${hand.depth.toFixed(2)} m${hand.grabbing ? ' · nắm' : ''}` : ''}`;
  }
}

addEventListener('resize', () => {
  floorVision.reset();
  R.resize();
  outdoor.layoutFrame(R.camera);
});
document.addEventListener('visibilitychange', () => {
  // ẩn tab → dừng camera để tiết kiệm pin, quay lại thì bật lại
  if (!running || xr.session) return;
  if (document.hidden) {
    floorVision.reset();
    feed.stop();
  } else if (hasCamera) {
    feed.start().catch(() => undefined);
  }
});

// cho kiểm thử tự động / gỡ lỗi
(window as unknown as Record<string, unknown>).__dgx = { indoor, outdoor, sensors, localizer, hand, settings, setMode, quality, R, floorVision, artTracker, artViewer, guide, handlers, geo, askPanel, minimap, roomMap, ceiling, surfaces, segmenter };
