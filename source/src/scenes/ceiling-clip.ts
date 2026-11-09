import * as THREE from 'three';

/**
 * Chỉ cho cành đào hiện ở đúng hướng là trần thật (từ SurfaceMap), để tường và đồ vật
 * che được tán hoa thay vì bị hoa vẽ đè lên.
 */
export const ceilingUniforms = {
  uSurface: { value: null as THREE.Texture | null },
  uClip: { value: 0 },
};

/** Khai báo GLSL dùng trong vertex shader. */
export const CEILING_GLSL = /* glsl */ `
  uniform sampler2D uSurface;
  uniform float uClip;
  float ceilingMask(vec3 worldPos) {
    if (uClip < 0.001) return 1.0;
    vec3 d = normalize(worldPos - cameraPosition);
    vec2 uv = vec2(atan(d.x, -d.z) / 6.2831853 + 0.5, asin(clamp(d.y, -1.0, 1.0)) / 3.1415927 + 0.5);
    return mix(1.0, smoothstep(0.35, 0.7, texture2D(uSurface, uv).g), uClip);
  }
`;

/** Thêm cắt theo trần vào vật liệu dựng sẵn của three (Mesh hoặc InstancedMesh). */
export function clipToCeiling<T extends THREE.Material>(m: T): T {
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uSurface = ceilingUniforms.uSurface;
    shader.uniforms.uClip = ceilingUniforms.uClip;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${CEILING_GLSL}\nvarying float vCeiling;`)
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 ceilingWorld = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          ceilingWorld = instanceMatrix * ceilingWorld;
        #endif
        vCeiling = ceilingMask((modelMatrix * ceilingWorld).xyz);`,
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vCeiling;')
      .replace('#include <dithering_fragment>', '#include <dithering_fragment>\ngl_FragColor.a *= vCeiling;');
  };
  m.customProgramCacheKey = () => 'ceiling-clip';
  return m;
}
