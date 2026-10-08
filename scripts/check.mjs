import { build } from 'esbuild';
import { existsSync, unlinkSync } from 'node:fs';
import assert from 'node:assert/strict';
await build({stdin:{contents:'import React from "react"; import {renderToStaticMarkup} from "react-dom/server"; import App from "./src/App.jsx"; export default renderToStaticMarkup(React.createElement(App));',resolveDir:process.cwd(),loader:'jsx'},outfile:'.qa-render.mjs',bundle:true,platform:'node',format:'esm',packages:'external',jsx:'automatic'});
try {
 const {default:html}=await import('../.qa-render.mjs');
 for(const id of ['inicio','plantas','sobre','conheca','localizacao','contato']) assert(html.includes(`id="${id}"`),`Missing section ${id}`);
 for(const match of html.matchAll(/src="(\/images\/[^\"]+)"/g)) assert(existsSync('public'+match[1]),`Missing asset ${match[1]}`);
 assert.equal((html.match(/class="product-card"/g)||[]).length,4);
 assert.equal((html.match(/Ampliar foto:/g)||[]).length,7);
 assert(!html.includes('ADICIONAR'));
 assert(html.includes('https://wa.me/558393433040?text='));
 for(const tag of html.matchAll(/<a\b[^>]+target="_blank"[^>]*>/g)) assert(tag[0].includes('rel="noopener noreferrer"'));
 console.log('OK: sections, four categories, seven gallery photos, image files, external links and contact fallback.');
} finally {unlinkSync('.qa-render.mjs');}
