// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : npm run og
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (p) => `data:font/woff2;base64,${readFileSync(p).toString('base64')}`;
const corm = font('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2');
const cormI = font('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2');
const man = font('node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2');
const css = `@font-face{font-family:C;src:url(${corm})}@font-face{font-family:C;font-style:italic;src:url(${cormI})}@font-face{font-family:M;src:url(${man})}
*{margin:0;box-sizing:border-box}body{background:#faf6f1;color:#1e2a44;font-family:M}`;

const graduations = Array.from({ length: 56 }, (_, i) => i + 1)
  .map((n) => `<span style="${n === 17 ? 'color:#9c5530;font-weight:800;outline:2px solid #9c5530;outline-offset:3px' : ''}">${n}</span>`).join('');

const og = `<style>${css}
.w{width:1200px;height:630px;display:grid;grid-template-columns:1.25fr 1fr;position:relative;overflow:hidden}
.g{padding:70px 0 0 72px}
.l{color:#9c5530;font-size:22px;font-weight:650}
h1{font-family:C;font-weight:500;font-size:76px;line-height:1;margin-top:22px;max-width:11ch}
.s{margin-top:28px;font-size:24px}
.d{background:#ebd5cc;display:grid;place-items:center}
.n{font-family:C;font-size:150px;line-height:.85}
.n small{font-size:44px;color:#4b556b}
.r{font-size:22px;margin-top:10px}
.b{font-family:C;font-style:italic;font-size:30px;color:#7f4325;margin-top:24px}
.t{position:absolute;left:0;right:0;bottom:24px;height:40px;background:#f1e3c4;border-top:1px solid #c9b48a;border-bottom:1px solid #c9b48a;display:flex;gap:0;font-size:13px;align-items:flex-end;padding:0 0 6px 12px;
background-image:repeating-linear-gradient(90deg,#1e2a44 0 1px,transparent 1px 11px);background-size:100% 12px;background-repeat:no-repeat}
.t span{width:22px;text-align:center;flex:none}
</style><div class="w"><div class="g"><p class="l">27 rue de Paris, Saint-Brice-sous-Forêt</p>
<h1>Coiffure et couleur sur-mesure à Saint-Brice</h1><p class="s">L'atelier du cheveu <i style="font-family:C;font-size:30px;color:#9c5530">by Valérie</i> · 01 39 90 00 44</p></div>
<div class="d"><div style="text-align:center;margin-top:-40px"><p class="n">4,8<small> / 5</small></p><p class="r">Google, 100 avis</p><p class="b">Avec ou sans rendez-vous</p></div></div>
<div class="t">${graduations}</div></div>`;

const icon = `<style>${css}body{width:180px;height:180px;background:#1e2a44;display:grid;place-items:center}
.c{position:absolute;inset:12px;border:3px dashed #d9946b;border-radius:16px}
p{font-family:C;font-style:italic;color:#faf6f1;font-size:118px;line-height:1;margin-top:-8px}</style><div class="c"></div><p>V</p>`;

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
await pg.setContent(og); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/og.png' });
await pg.setViewportSize({ width: 180, height: 180 });
await pg.setContent(icon); await pg.waitForTimeout(300);
await pg.screenshot({ path: 'public/apple-touch-icon.png' });
await b.close();
console.log('og.png et apple-touch-icon.png générés');
