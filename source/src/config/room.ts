import roomJson from './room.json';
import routeJson from './route.json';
import markersJson from './markers.json';

export type Vec3 = [number, number, number];

export interface Panel {
  id: string;
  side: 'orange' | 'stone';
  x0: number;
  x1: number;
  width: number;
  height: number;
  y0: number;
  landmark?: boolean;
  note?: string;
}

export interface ColliderDef {
  id: string;
  type: 'plane' | 'aabb' | 'cylinder';
  axis?: 'x' | 'y' | 'z';
  value?: number;
  normal?: number;
  min?: Vec3;
  max?: Vec3;
  center?: Vec3;
  radius?: number;
  yMin?: number;
  yMax?: number;
  restSurface?: boolean;
  soft?: boolean;
}

export interface BranchAnchor {
  id: string;
  x: number;
  y: number;
  z: number;
  reach: number;
  seed: number;
}

export interface Room {
  corridor: {
    length: number;
    width: number;
    wallHeight: number;
    stoneWallHeight: number;
    ceiling: number | null;
    gateOpeningWidth: number;
  };
  user: { eyeHeightMin: number; eyeHeightMax: number; eyeHeightDefault: number; strideMeters: number };
  camera: { longEdgeFovDeg: number };
  panels: Panel[];
  colliders: ColliderDef[];
  exclusionZones: { id: string; type: 'aabb'; min: Vec3; max: Vec3; forbid: string[] }[];
  branchAnchors: BranchAnchor[];
}

export interface Route {
  anchor: string;
  startStandOff: number;
  waypoints: Vec3[];
  gate: { id: string; position: Vec3; arriveRadius: number };
  ribbonWidth: number;
}

export const room = roomJson as unknown as Room;
export const route = routeJson as unknown as Route;
export const markers = markersJson as unknown as {
  outdoor: { id: string; physicalWidth: number; src: string }[];
  indoor: { id: string; physicalWidth: number; src: string }[];
  excluded: string[];
};

export const W = room.corridor.width;
export const HALF_W = W / 2;
export const LEN = room.corridor.length;

/** Panel làm mốc căn lại vị trí (relocalize thủ công hoặc bằng image target). */
export const landmarkPanels = room.panels.filter((p) => p.landmark);

export function panelCenterX(p: Panel) {
  return (p.x0 + p.x1) / 2;
}
