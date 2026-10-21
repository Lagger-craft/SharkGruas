import { copyFile, cp, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(root, '_site');

// Paginas publicas del sitio.
const paginas = (await readdir(root)).filter((file) => file.endsWith('.html')).sort();
if (!paginas.includes('index.html')) throw new Error('Falta index.html en la raiz.');

// Incluye solamente los recursos en Media que usan las paginas, no documentos del proyecto.
const html = (await Promise.all(paginas.map((pagina) => readFile(join(root, pagina), 'utf8')))).join('\n');
const media = new Set();
for (const match of html.matchAll(/(?:src|data)=["'](Media\/[^"'\s)]+)["']|url\(["']?(Media\/[^"'\s)]+)/g)) {
  const asset = match[1] || match[2];
  if (!/^Media\/[A-Za-z0-9_.-]+$/.test(asset)) {
    throw new Error(`Ruta de recurso no admitida: ${asset}`);
  }
  const source = join(root, asset);
  if (!(await stat(source)).isFile()) throw new Error(`Recurso invalido: ${asset}`);
  media.add(asset);
}
if (media.size === 0) throw new Error('No se encontraron los recursos de la maqueta.');

await mkdir(output, { recursive: true });
for (const pagina of paginas) await copyFile(join(root, pagina), join(output, pagina));
await cp(join(root, 'assets'), join(output, 'assets'), { recursive: true });
await mkdir(join(output, 'Media'), { recursive: true });
for (const asset of media) await copyFile(join(root, asset), join(output, asset));
await writeFile(join(output, '.nojekyll'), '', 'utf8');
console.log(`Sitio preparado en _site: ${paginas.length} paginas y ${media.size} recursos.`);
