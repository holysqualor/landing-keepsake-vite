import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';
const source = 'src/assets/images/source';
const output = 'public/assets/images';
await mkdir(output, { recursive: true });
for (const file of await readdir(source)) {
  if (!/\.(png|jpe?g)$/i.test(file)) continue;
  const name = parse(file).name;
  for (const width of [400, 800]) {
    for (const format of ['avif', 'webp', 'jpeg']) {
      const extension = format === 'jpeg' ? 'jpg' : format;
      await sharp(join(source, file))
        .resize({ width, withoutEnlargement: true })
        .toFormat(format, { quality: format === 'avif' ? 55 : 78 })
        .toFile(join(output, `${name}-${width}.${extension}`));
    }
  }
}
console.log('Generated responsive images in public/assets/images');
