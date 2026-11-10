/** Biểu tượng nét mảnh, dùng currentColor. */
const s = (body: string, vb = '0 0 24 24') =>
  `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icons = {
  camera: s('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.6"/>'),
  motion: s('<rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4.5 9.5a8 8 0 0 0 0 5M19.5 9.5a8 8 0 0 1 0 5"/>'),
  book: s('<path d="M3.5 5.5c3-1 5.5-.6 8.5 1.2 3-1.8 5.5-2.2 8.5-1.2v13c-3-1-5.5-.6-8.5 1.2-3-1.8-5.5-2.2-8.5-1.2z"/><path d="M12 6.7v13"/>'),
  menu: s('<path d="M5 8h14M5 12h14M5 16h9"/>'),
  blossom: s(
    '<g transform="translate(12 12)">' +
      [0, 72, 144, 216, 288].map((a) => `<path transform="rotate(${a})" d="M0 -1.5C-3 -3.5 -3.2 -7.5 -1.2 -9L0 -8l1.2 1C3.2 -7.5 3 -3.5 0 -1.5z"/>`).join('') +
      '<circle r="1.2"/></g>',
  ),
  hand: s('<path d="M8 12V6.5a1.4 1.4 0 0 1 2.8 0V11M10.8 10.5V5a1.4 1.4 0 0 1 2.8 0v5.5M13.6 10.5V6.2a1.4 1.4 0 0 1 2.8 0v6.3M16.4 11.5a1.4 1.4 0 0 1 2.8 0V15a6 6 0 0 1-6 6h-1.4a6 6 0 0 1-4.6-2.2L4.6 15.4a1.4 1.4 0 0 1 2.1-1.8L8 15"/>'),
  door: s('<path d="M6 20V4h12v16M3.5 20h17"/><path d="M14.5 12h.01"/>'),
  path: s('<path d="M6 20c0-5 12-4 12-9S10 6 10 3"/><circle cx="10" cy="3" r="0.6"/>'),
  pin: s('<path d="M12 20.5s-6-5.2-6-10.3a6 6 0 0 1 12 0c0 5.1-6 10.3-6 10.3z"/><circle cx="12" cy="10.2" r="2.2"/>'),
  close: s('<path d="M6 6l12 12M18 6L6 18"/>'),
  chat: s('<path d="M4 6.5h16v10.5H10l-4 3.5V17H4z"/><path d="M8.5 11.7h.01M12 11.7h.01M15.5 11.7h.01"/>'),
  gear: s(`<path d="${gearPath()}"/><circle cx="12" cy="12" r="3"/>`),
  globe: s('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.5 3.6 5.3 3.6 8.5s-1.2 6-3.6 8.5c-2.4-2.5-3.6-5.3-3.6-8.5s1.2-6 3.6-8.5z"/>'),
  play: s('<circle cx="12" cy="12" r="8.5"/><path d="M10.2 8.6l5.2 3.4-5.2 3.4z"/>'),
  help: s('<circle cx="12" cy="12" r="8.5"/><path d="M9.5 9.5a2.6 2.6 0 0 1 5 .9c0 1.8-2.5 2.2-2.5 3.9M12 16.9h.01"/>'),
  flip: s('<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><path d="M8.9 12.6a3.2 3.2 0 0 1 5.6-1.8M15.1 13.4a3.2 3.2 0 0 1-5.6 1.8"/><path d="M14.8 8.9l-.3 1.9-1.9-.3M9.2 17.1l.3-1.9 1.9.3"/>'),
  speaker: s('<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/>'),
};

/** Bánh răng 8 răng, vẽ bằng một đường khép kín. */
function gearPath() {
  const n = 8, rIn = 6.6, rOut = 9;
  const pts: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    // góc lệch (radian) của chân răng và đỉnh răng so với tâm răng
    for (const [da, r] of [[-0.26, rIn], [-0.17, rOut], [0.17, rOut], [0.26, rIn]] as const) {
      const ang = a + da;
      pts.push(`${(12 + Math.sin(ang) * r).toFixed(2)} ${(12 - Math.cos(ang) * r).toFixed(2)}`);
    }
  }
  return `M${pts.join('L')}Z`;
}

/** Minh hoạ onboarding (nét xanh cobalt, cánh hoa hồng). */
const petal = (x: number, y: number, r = 0, cls = '') =>
  `<path class="${cls}" transform="translate(${x} ${y}) rotate(${r})" d="M0 7C-5 3 -5 -4 -2 -7L0 -5.5 2 -7C5 -4 5 3 0 7z" fill="#FFC1D6" stroke="#FF8FB1" stroke-width="1"/>`;

export const illustrations = [
  // 1. hai bàn tay khum hứng hoa (nhìn chính diện)
  `<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .f1{animation:f1 2.6s ease-in infinite}@keyframes f1{0%{transform:translate(66px,2px) rotate(-20deg);opacity:0}15%{opacity:1}70%{transform:translate(66px,66px) rotate(40deg);opacity:1}100%{transform:translate(66px,68px) rotate(40deg);opacity:1}}
  </style>
  <g fill="#FCFAF0" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M66 96c-16 0-30-8-36-22l-6-16c-1-4 4-6 6-3l5 8-3-16c-1-4 5-5 6-1l3 13-1-17c0-4 6-4 6 0l1 17 1-14c0-4 6-4 6 0l1 26c3 6 7 12 12 14z"/>
    <path d="M66 96c16 0 30-8 36-22l6-16c1-4-4-6-6-3l-5 8 3-16c1-4-5-5-6-1l-3 13 1-17c0-4-6-4-6 0l-1 17-1-14c0-4-6-4-6 0l-1 26c-3 6-7 12-12 14z"/>
  </g>
  <g class="f1">${petal(0, 0)}</g></svg>`,
  // 2. ngẩng điện thoại lên
  `<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .p2{transform-origin:66px 96px;animation:p2 2.8s ease-in-out infinite}@keyframes p2{0%,20%{transform:rotate(0)}50%,85%{transform:rotate(-38deg)}100%{transform:rotate(0)}}
    .b2{animation:b2 2.8s ease-in-out infinite}@keyframes b2{0%,30%{opacity:0}50%,85%{opacity:1}100%{opacity:0}}
  </style>
  <g class="b2" fill="none" stroke="#4A3B36" stroke-width="2" stroke-linecap="round"><path d="M8 12c26 4 50 2 74 12M40 15c4 6 10 8 16 8"/></g>
  <g class="b2">${petal(30, 18, 10)}${petal(58, 22, -20)}${petal(80, 26, 30)}</g>
  <g class="p2" fill="#FCFAF0" stroke="#00539B" stroke-width="2"><rect x="52" y="52" width="28" height="48" rx="5"/><circle cx="66" cy="94" r="1.6" fill="#00539B"/></g></svg>`,
  // 3. hướng xuống sàn, gạt hoa
  `<svg viewBox="0 0 132 112" aria-hidden="true"><style>
    .h3{animation:h3 2.4s ease-in-out infinite}@keyframes h3{0%,100%{transform:translateX(-18px)}50%{transform:translateX(18px)}}
    .s3{animation:s3 2.4s ease-out infinite}@keyframes s3{0%,40%{transform:translate(0,0) rotate(0)}70%{transform:translate(16px,-22px) rotate(90deg)}100%{transform:translate(22px,-4px) rotate(140deg)}}
  </style>
  <path d="M10 92h112" stroke="#00539B" stroke-width="2" stroke-linecap="round"/>
  ${petal(36, 88, 80)}${petal(52, 89, 100)}${petal(90, 88, 70)}${petal(104, 89, 95)}
  <g class="s3">${petal(70, 86, 85)}</g>
  <g class="h3" fill="none" stroke="#00539B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 78c4-8 14-12 24-10l14 4c4 1 4 6 0 7l-12-1"/><path d="M60 70l-4-14M68 68l-2-16M76 69l1-14"/></g></svg>`,
];
