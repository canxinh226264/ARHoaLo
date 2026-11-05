import * as THREE from 'three';

/**
 * Trường gió: nhiễu tổng-sin rẻ (đủ "ngẫu nhiên" bằng mắt) + các luồng gió
 * cục bộ sinh ra khi vẫy tay nhanh.
 */
interface Gust {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  radius: number;
  life: number;
  maxLife: number;
}

export class Wind {
  strength = 0.22; // m/s – gió nền rất nhẹ (trong nhà)
  base = new THREE.Vector3(0.05, 0, 0.02);
  private gusts: Gust[] = [];
  private t = 0;

  addGust(pos: THREE.Vector3, vel: THREE.Vector3, radius = 0.5, life = 0.7) {
    if (this.gusts.length > 12) this.gusts.shift();
    this.gusts.push({ pos: pos.clone(), vel: vel.clone().clampLength(0, 3), radius, life, maxLife: life });
  }

  update(dt: number) {
    this.t += dt;
    for (let i = this.gusts.length - 1; i >= 0; i--) {
      const g = this.gusts[i];
      g.life -= dt;
      g.pos.addScaledVector(g.vel, dt * 0.6);
      g.radius += dt * 0.5;
      if (g.life <= 0) this.gusts.splice(i, 1);
    }
  }

  sample(x: number, y: number, z: number, out: THREE.Vector3): THREE.Vector3 {
    const t = this.t;
    const A = this.strength;
    out.set(
      this.base.x + A * (Math.sin(0.7 * x + 0.9 * t) + 0.6 * Math.sin(1.3 * z - 0.6 * t + 1.7)),
      A * 0.35 * Math.sin(0.8 * y + 1.1 * t + x),
      this.base.z + A * (Math.sin(0.9 * z + 0.5 * t + 2.1) + 0.5 * Math.sin(1.7 * x + 0.8 * t)),
    );
    for (const g of this.gusts) {
      const dx = x - g.pos.x, dy = y - g.pos.y, dz = z - g.pos.z;
      const d2 = dx * dx + dy * dy + dz * dz;
      const r2 = g.radius * g.radius;
      if (d2 < r2) {
        const k = (1 - d2 / r2) * (g.life / g.maxLife);
        out.addScaledVector(g.vel, k);
      }
    }
    return out;
  }
}
