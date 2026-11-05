/** Kiểu tối thiểu cho bản dựng sẵn MindAR 1.2.5 (MIT, hiukim) – chỉ phần app dùng. */
export class Controller {
  constructor(opts: { inputWidth: number; inputHeight: number; maxTrack?: number; debugMode?: boolean });
  projectionTransform: number[][];
  markerDimensions: [number, number][] | null;
  inputLoader: { loadInput(input: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement): { dispose(): void } };
  addImageTargets(url: string): Promise<{ dimensions: [number, number][] }>;
  dummyRun(input: HTMLVideoElement): void;
  _detectAndMatch(inputT: unknown, targetIndexes: number[]): Promise<{ targetIndex: number; modelViewTransform: number[][] }>;
  _trackAndUpdate(inputT: unknown, last: number[][], targetIndex: number): Promise<number[][] | null>;
  _glModelViewMatrix(modelViewTransform: number[][], targetIndex: number): number[];
  dispose(): void;
}
export class Compiler {
  compileImageTargets(images: (HTMLImageElement | HTMLCanvasElement)[], progress: (p: number) => void): Promise<unknown>;
  exportData(): Promise<Uint8Array>;
}
