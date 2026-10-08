import sharp from 'sharp';
import { copyFile, mkdir } from 'node:fs/promises';
const names=['flor-amarela','roseira','folhagem-rosa-verde','flores-lilas','flores-roxas','plantas-prateadas','orquidea-01','hero-orquidea'];
await mkdir('public/images',{recursive:true});
for (const [i,name] of names.entries()) {
 const source=`public/images/originals/ghflora${i+1}.png`;
 for (const width of [480,960]) await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:82,effort:6}).toFile(`public/images/${name}${width===480?'-480':''}.webp`);
}
await copyFile('public/images/hero-orquidea.webp','public/images/orquidea-02.webp');
await copyFile('public/images/hero-orquidea-480.webp','public/images/orquidea-02-480.webp');
console.log('Fotografias WebP geradas; originais preservados.');
