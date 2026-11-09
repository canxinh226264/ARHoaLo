/**
 * Tạo models/surface từ mô hình DeepLab v3+ MobileNetV2 huấn luyện trên ADE20K (TensorFlow, Apache-2.0).
 * Bản gốc luôn chạy ở 513×513 và quá chậm cho điện thoại, nên công cụ này:
 *  - bỏ phần tiền xử lý, nhận thẳng ảnh H×W đã chuẩn hoá [-1, 1];
 *  - gộp SpaceToBatch + DepthwiseConv + BatchToSpace thành conv giãn (nhanh gấp 5 lần trên WASM);
 *  - đổi các kích thước cố định theo H×W, dừng ở lớp logits.
 * Chạy: node tools/build-surface-model.mjs (cần mạng). Đổi kích thước thì sửa cả SEG_W, SEG_H
 * trong src/core/surface-segmenter.ts.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const H = 225, W = 129;
const SOURCE = 'https://tfhub.dev/tensorflow/tfjs-model/deeplab/ade20k/1/quantized/2/1';
const OUTPUT = 'logits/semantic/BiasAdd';
if ((H - 1) % 8 || (W - 1) % 8) throw new Error('H, W phải có dạng 8k+1');

async function get(name) {
  const res = await fetch(`${SOURCE}/${name}?tfjs-format=file`);
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const model = JSON.parse(await get('model.json'));
const shards = [];
for (const group of model.weightsManifest) for (const path of group.paths) shards.push(await get(path));
const blob = Buffer.concat(shards);

const nodes = model.modelTopology.node;
const byName = new Map(nodes.map((n) => [n.name, n]));
const clean = (i) => i.replace(/^\^/, '').split(':')[0];

const weights = new Map();
let offset = 0;
for (const group of model.weightsManifest) {
  for (const w of group.weights) {
    const count = w.shape.reduce((a, b) => a * b, 1), q = w.quantization;
    const size = count * (q ? (q.dtype === 'uint8' ? 1 : 2) : 4);
    weights.set(w.name, { spec: w, data: blob.subarray(offset, offset + size) });
    offset += size;
  }
}
if (offset !== blob.length) throw new Error('Kích thước trọng số không khớp');

function intsOf(name) {
  const { spec, data } = weights.get(name);
  const q = spec.quantization, out = [];
  for (let i = 0; i < spec.shape.reduce((a, b) => a * b, 1); i++) {
    out.push(Math.round(q ? (q.dtype === 'uint8' ? data[i] : data.readUInt16LE(i * 2)) * q.scale + q.min : data.readInt32LE(i * 4)));
  }
  return out;
}

const input = {
  name: 'input',
  op: 'Placeholder',
  attr: { dtype: { type: 'DT_FLOAT' }, shape: { shape: { dim: [1, H, W, 3].map((d) => ({ size: String(d) })) } } },
};
byName.set('input', input);

const rewire = new Map([['sub_7', 'input']]);
for (const after of nodes.filter((n) => n.op === 'BatchToSpaceND')) {
  const conv = byName.get(clean(after.input[0]));
  const before = byName.get(clean(conv.input[0]));
  if (conv.op !== 'DepthwiseConv2dNative' || before.op !== 'SpaceToBatchND') throw new Error(`Mẫu lạ tại ${after.name}`);
  const [rate] = intsOf(clean(before.input[1]));
  conv.input[0] = before.input[0];
  conv.attr.dilations = { list: { i: ['1', String(rate), String(rate), '1'] } };
  conv.attr.padding = { s: Buffer.from('SAME').toString('base64') };
  rewire.set(after.name, conv.name);
}
for (const n of nodes) if (n.input) n.input = n.input.map((i) => rewire.get(clean(i)) ?? i);

const featureH = (H - 1) / 8 + 1, featureW = (W - 1) / 8 + 1;
byName.get('AvgPool2D/AvgPool').attr.ksize.list.i = ['1', String(featureH), String(featureW), '1'];
const fixedSizes = {
  'ResizeBilinear/size': [featureH, featureW],
  'decoder/ResizeBilinear/size': [(H - 1) / 4 + 1, (W - 1) / 4 + 1],
};

const keep = new Set();
for (const stack = [OUTPUT]; stack.length; ) {
  const name = stack.pop();
  if (keep.has(name)) continue;
  keep.add(name);
  for (const i of byName.get(name).input ?? []) stack.push(clean(i));
}

const specs = [], chunks = [];
for (const [name, { spec, data }] of weights) {
  if (!keep.has(name)) continue;
  if (fixedSizes[name]) {
    const b = Buffer.alloc(8);
    b.writeInt32LE(fixedSizes[name][0], 0);
    b.writeInt32LE(fixedSizes[name][1], 4);
    chunks.push(b);
    specs.push({ name, shape: spec.shape, dtype: 'int32' });
  } else {
    chunks.push(data);
    specs.push(spec);
  }
}

const out = fileURLToPath(new URL('../../models/surface/', import.meta.url));
mkdirSync(out, { recursive: true });
writeFileSync(
  `${out}model.json`,
  JSON.stringify({
    format: 'graph-model',
    modelTopology: { ...model.modelTopology, node: [input, ...nodes.filter((n) => keep.has(n.name) && n.name !== 'input')] },
    weightsManifest: [{ paths: ['weights.bin'], weights: specs }],
  }),
);
const bin = Buffer.concat(chunks);
writeFileSync(`${out}weights.bin`, bin);
console.log(`Đã ghi ${out} (${(bin.length / 1048576).toFixed(1)} MB, ${H}×${W})`);
