/** One-Euro filter (Casiez et al. 2012): mượt khi tay đứng yên, bám nhanh khi tay chuyển động. */
class LowPass {
  private y = 0;
  private init = false;
  filter(x: number, a: number) {
    this.y = this.init ? a * x + (1 - a) * this.y : x;
    this.init = true;
    return this.y;
  }
  get value() {
    return this.y;
  }
  reset() {
    this.init = false;
  }
}

export class OneEuro {
  private x = new LowPass();
  private dx = new LowPass();
  private last = -1;
  constructor(public minCutoff = 1.2, public beta = 0.6, public dCutoff = 1.0) {}

  private alpha(cutoff: number, dt: number) {
    const tau = 1 / (2 * Math.PI * cutoff);
    return 1 / (1 + tau / dt);
  }

  filter(v: number, tSec: number) {
    const first = this.last < 0;
    const dt = first ? 1 / 30 : Math.max(1e-3, tSec - this.last);
    this.last = tSec;
    const prev = this.x.value;
    const d = first ? 0 : (v - prev) / dt;
    const ed = this.dx.filter(d, this.alpha(this.dCutoff, dt));
    const cutoff = this.minCutoff + this.beta * Math.abs(ed);
    return this.x.filter(v, this.alpha(cutoff, dt));
  }

  reset() {
    this.x.reset();
    this.dx.reset();
    this.last = -1;
  }
}

export class OneEuro3 {
  private f = [new OneEuro(), new OneEuro(), new OneEuro()];
  constructor(minCutoff = 1.2, beta = 0.6) {
    this.f.forEach((o) => { o.minCutoff = minCutoff; o.beta = beta; });
  }
  filter(x: number, y: number, z: number, t: number, out: { x: number; y: number; z: number }) {
    out.x = this.f[0].filter(x, t);
    out.y = this.f[1].filter(y, t);
    out.z = this.f[2].filter(z, t);
    return out;
  }
  reset() {
    this.f.forEach((o) => o.reset());
  }
}
