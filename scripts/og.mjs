// Regenera public/og.png: captura del hero a 1200x630 con un navegador sin interfaz.
//
// Uso (desde la raíz del repo):
//   CI=true pnpm run build && node scripts/og.mjs
//
// Hace falta Edge o Chrome instalado. Si no está en una ruta habitual:
//   BROWSER="C:\ruta\a\msedge.exe" node scripts/og.mjs
// Después hay que volver a hacer el build para que dist/ lleve la imagen nueva.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = resolve(fileURLToPath(import.meta.url), '..', '..');
const dist = join(raiz, 'dist');
const salida = join(raiz, 'public', 'og.png');
const ANCHO = 1200;
const ALTO = 630;

if (!existsSync(join(dist, 'index.html'))) {
  console.error('No hay dist/index.html. Ejecuta antes: CI=true pnpm run build');
  process.exit(1);
}

const candidatos = [
  process.env.BROWSER,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/microsoft-edge',
].filter(Boolean);
const navegador = candidatos.find((ruta) => existsSync(ruta));
if (!navegador) {
  console.error('No encuentro Edge ni Chrome. Define BROWSER con la ruta del ejecutable.');
  process.exit(1);
}

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
};

// Servidor estático mínimo sobre dist/, para que las rutas absolutas (/_astro/...) resuelvan.
const servidor = createServer((req, res) => {
  const ruta = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  let archivo = join(dist, ruta);
  if (!archivo.startsWith(dist)) {
    res.writeHead(403).end();
    return;
  }
  if (existsSync(archivo) && statSync(archivo).isDirectory()) archivo = join(archivo, 'index.html');
  if (!existsSync(archivo)) {
    res.writeHead(404).end();
    return;
  }
  res.writeHead(200, { 'content-type': tipos[extname(archivo)] ?? 'application/octet-stream' });
  res.end(readFileSync(archivo));
});

await new Promise((ok) => servidor.listen(0, '127.0.0.1', ok));
const { port } = servidor.address();

// virtual-time-budget deja correr la animación del ticket (unos 1,7 s) antes de capturar.
// spawn y no spawnSync: el servidor de arriba necesita el bucle de eventos libre.
const codigo = await new Promise((ok) => {
  const proc = spawn(
    navegador,
    [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      `--window-size=${ANCHO},${ALTO}`,
      '--virtual-time-budget=6000',
      `--screenshot=${salida}`,
      `http://127.0.0.1:${port}/`,
    ],
    { stdio: 'inherit' },
  );
  const limite = setTimeout(() => proc.kill(), 60000);
  proc.on('exit', (c) => {
    clearTimeout(limite);
    ok(c);
  });
});
servidor.close();

if (codigo !== 0 || !existsSync(salida)) {
  console.error('El navegador no generó la captura.');
  process.exit(1);
}

// Comprobación del tamaño real leyendo la cabecera IHDR del PNG.
const png = readFileSync(salida);
const ancho = png.readUInt32BE(16);
const alto = png.readUInt32BE(20);
console.log(`og.png: ${ancho}x${alto}, ${(png.length / 1024).toFixed(0)} KB -> ${salida}`);
if (ancho !== ANCHO || alto !== ALTO) {
  console.error(`Tamaño inesperado: se esperaba ${ANCHO}x${ALTO}.`);
  process.exit(1);
}
