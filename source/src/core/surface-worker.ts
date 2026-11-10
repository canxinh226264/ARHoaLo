/// <reference lib="webworker" />
import * as tf from '@tensorflow/tfjs-core';
import { setWasmPaths } from '@tensorflow/tfjs-backend-wasm';
import { loadGraphModel, type GraphModel } from '@tensorflow/tfjs-converter';
import wasmPlain from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm.wasm?url';
import wasmSimd from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-simd.wasm?url';
import { logitsToFrame } from './surface-classes';

/**
 * Worker chạy mô hình phân vùng sàn/trần/tường. Tách khỏi luồng chính và dùng CPU (WASM),
 * nên không tranh GPU với hoa đào và không làm giật khung hình.
 */
const OUTPUT = 'logits/semantic/BiasAdd';
const scope = self as unknown as DedicatedWorkerGlobalScope;
let model: GraphModel | null = null;

async function init(url: string) {
  // Bản đa luồng cần header cross-origin isolation, sẽ chặn ô bản đồ OpenStreetMap, nên không dùng.
  tf.env().set('WASM_HAS_MULTITHREAD_SUPPORT', false);
  setWasmPaths({ 'tfjs-backend-wasm.wasm': wasmPlain, 'tfjs-backend-wasm-simd.wasm': wasmSimd, 'tfjs-backend-wasm-threaded-simd.wasm': wasmSimd });
  await tf.setBackend('wasm');
  await tf.ready();
  model = await loadGraphModel(url);
  scope.postMessage({ type: 'ready' });
}

function segment(buffer: ArrayBuffer, w: number, h: number) {
  const start = performance.now();
  const rgba = new Uint8ClampedArray(buffer);
  const rgb = new Float32Array(w * h * 3);
  for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) {
    rgb[j] = rgba[i] / 127.5 - 1;
    rgb[j + 1] = rgba[i + 1] / 127.5 - 1;
    rgb[j + 2] = rgba[i + 2] / 127.5 - 1;
  }
  const input = tf.tensor4d(rgb, [1, h, w, 3]);
  const output = model!.execute(input, OUTPUT) as tf.Tensor;
  const [, oh, ow, oc] = output.shape;
  const frame = logitsToFrame(output.dataSync(), oh, ow, oc);
  tf.dispose([input, output]);
  scope.postMessage({ type: 'result', frame, ms: performance.now() - start }, [frame.floor.buffer, frame.ceil.buffer, frame.wall.buffer]);
}

scope.onmessage = (e: MessageEvent) => {
  const m = e.data;
  try {
    if (m.type === 'init') init(m.url).catch((err) => scope.postMessage({ type: 'error', message: String(err) }));
    else if (m.type === 'frame') segment(m.rgba, m.w, m.h);
  } catch (err) {
    scope.postMessage({ type: 'error', message: String(err) });
  }
};
