import * as THREE from 'three';

/** Canvas Three.js trong suốt phủ lên camera feed. */
export class Renderer {
  readonly gl: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private pixelRatio = 2;

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    this.gl.setClearColor(0x000000, 0);
    this.gl.outputColorSpace = THREE.SRGBColorSpace;
    this.camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.03, 80);
    this.scene.add(this.camera); // để gắn vật thể "dính màn hình" (khung hoa ngoài phòng)
    this.resize();
  }

  setPixelRatio(r: number) {
    this.pixelRatio = r;
    this.resize();
  }

  setVFov(deg: number) {
    if (Math.abs(this.camera.fov - deg) > 0.05) {
      this.camera.fov = deg;
      this.camera.updateProjectionMatrix();
    }
  }

  resize() {
    const w = innerWidth;
    const h = innerHeight;
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelRatio));
    this.gl.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.gl.render(this.scene, this.camera);
  }
}
