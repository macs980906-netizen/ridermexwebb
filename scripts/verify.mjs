/**
 * RIDERMEX · Verificación de build
 * ───────────────────────────────────────────────────────────────────────────
 * El sitio es estático (sin bundler), así que "build" no compila nada. Lo que
 * sí puede hacer es comprobar que lo que se va a publicar no está roto.
 *
 * Comprueba, sin dependencias externas:
 *   1. Que todo recurso local referenciado (src/href) exista en disco.
 *   2. Que las imágenes del catálogo existan.
 *   3. Que cada bloque JSON-LD sea JSON válido.
 *   4. Que cada página tenga <title>, meta description y canonical únicos.
 *   5. Que el índice estático de catalogo.html siga sincronizado con la data.
 *   6. Que las URLs del sitemap correspondan a archivos reales.
 *   7. Que no queden enlaces al header antiguo ni marcado huérfano.
 *
 * Uso:  npm run build     (o: node scripts/verify.mjs)
 * Sale con código 1 si encuentra algo roto, para que el deploy falle.
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, normalize } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const PAGES = [
  "index.html",
  "catalogo.html",
  "motos.html",
  "inversiones.html",
  "quienes-somos.html",
  "contacto.html",
];

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const read = (p) => readFileSync(join(ROOT, p), "utf8");

// ── 1 · recursos locales ───────────────────────────────────────────────────
const allFiles = [...PAGES, "calculadora-inversion/index.html"];
for (const file of allFiles) {
  const html = read(file);
  const base = dirname(file);
  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const raw = m[1];
    if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(raw)) continue;
    const clean = decodeURIComponent(raw.split("?")[0].split("#")[0]);
    if (!clean) continue;
    const path = normalize(join(base === "." ? "" : base, clean));
    if (!existsSync(join(ROOT, path))) fail(`${file}: recurso inexistente → ${raw}`);
  }
}

// ── 2 · imágenes del catálogo ──────────────────────────────────────────────
const dataSrc = read("src/data/motorcycles.js");
const start = dataSrc.indexOf("var MOTORCYCLES = ") + "var MOTORCYCLES = ".length;
const end = dataSrc.indexOf("\n];", start) + 3;
let motos;
try {
  motos = JSON.parse(dataSrc.slice(start, end).trim().replace(/;$/, ""));
} catch (e) {
  fail(`src/data/motorcycles.js: el array MOTORCYCLES no es JSON válido (${e.message})`);
  motos = [];
}
for (const m of motos) {
  for (const img of [m.mainImage, ...(m.gallery || [])]) {
    if (!img || img.startsWith("http")) continue;
    if (!existsSync(join(ROOT, img))) fail(`catálogo (${m.slug}): imagen inexistente → ${img}`);
  }
}

// ── 3 · JSON-LD ────────────────────────────────────────────────────────────
for (const file of PAGES) {
  const html = read(file);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  blocks.forEach((b, i) => {
    try {
      JSON.parse(b[1]);
    } catch (e) {
      fail(`${file}: JSON-LD #${i + 1} inválido → ${e.message}`);
    }
  });
}

// ── 4 · metadata única por página ──────────────────────────────────────────
const seen = { title: new Map(), desc: new Map(), canonical: new Map() };
for (const file of PAGES) {
  const html = read(file);
  const pick = (re, label) => {
    const m = html.match(re);
    if (!m) fail(`${file}: falta ${label}`);
    return m ? m[1].trim() : null;
  };
  const title = pick(/<title>([^<]*)<\/title>/, "<title>");
  const desc = pick(/<meta name="description" content="([^"]*)"/, "meta description");
  const canonical = pick(/<link rel="canonical" href="([^"]*)"/, "canonical");

  for (const [key, value] of [["title", title], ["desc", desc], ["canonical", canonical]]) {
    if (!value) continue;
    const prev = seen[key].get(value);
    if (prev) fail(`${file}: ${key} duplicado con ${prev} → "${value.slice(0, 60)}"`);
    else seen[key].set(value, file);
  }

  // Un solo <h1> por página (el del catálogo lo pinta catalog.js).
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (file !== "catalogo.html" && h1s !== 1) fail(`${file}: tiene ${h1s} <h1> (debe tener exactamente 1)`);

  // Header global presente e idéntico.
  if (!html.includes('<header class="rm-header">')) fail(`${file}: no usa el header global .rm-header`);
  if (!html.includes('href="site-header.css"')) fail(`${file}: no carga site-header.css`);
  if (!html.includes('src="site-header.js"')) fail(`${file}: no carga site-header.js`);
  if (!html.includes('id="contenido"')) fail(`${file}: falta el ancla #contenido del enlace "saltar al contenido"`);
}

// ── 5 · índice estático del catálogo sincronizado ──────────────────────────
const catalogo = read("catalogo.html");
const indexed = new Set([...catalogo.matchAll(/href="#\/moto\/([^"]+)"/g)].map((m) => m[1]));
const missing = motos.filter((m) => !indexed.has(m.slug));
if (missing.length) {
  fail(
    `catalogo.html: el índice estático está desactualizado, faltan ${missing.length} modelo(s) ` +
      `(p. ej. ${missing.slice(0, 3).map((m) => m.slug).join(", ")}). ` +
      `Corre: python3 scripts/build-catalog-index.py`
  );
}
const brandsInData = new Set(motos.map((m) => m.brandSlug));
const brandsIndexed = new Set([...catalogo.matchAll(/href="#\/marca\/([^"]+)"/g)].map((m) => m[1]));
for (const b of brandsInData) {
  if (!brandsIndexed.has(b)) fail(`catalogo.html: la marca "${b}" no está en el índice estático`);
}

// ── 6 · sitemap ────────────────────────────────────────────────────────────
const sitemap = read("sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!locs.length) fail("sitemap.xml: no contiene ninguna <loc>");
const origin = locs[0].match(/^https?:\/\/[^/]+/)?.[0];
for (const loc of locs) {
  if (!loc.startsWith(origin)) fail(`sitemap.xml: dominio inconsistente en ${loc}`);
  const path = loc.slice(origin.length).replace(/^\//, "") || "index.html";
  if (!existsSync(join(ROOT, path))) fail(`sitemap.xml: URL sin archivo → ${loc}`);
}
for (const page of PAGES) {
  const expected = page === "index.html" ? `${origin}/` : `${origin}/${page}`;
  if (!locs.includes(expected)) warn(`sitemap.xml: falta ${expected}`);
}
if (!read("robots.txt").includes("Sitemap:")) fail("robots.txt: falta la línea Sitemap:");

// ── 7 · restos del header antiguo ──────────────────────────────────────────
for (const file of PAGES) {
  const html = read(file);
  if (/class="nav-toggle"/.test(html)) fail(`${file}: queda marcado del header antiguo (.nav-toggle)`);
  if (/class="nav-wrap"/.test(html)) fail(`${file}: queda marcado del header antiguo (.nav-wrap)`);
}

// ── Resultado ──────────────────────────────────────────────────────────────
const pages = PAGES.length;
console.log(`RiderMex · verificación de build`);
console.log(`  páginas: ${pages} · modelos en catálogo: ${motos.length} · marcas: ${brandsInData.size}`);

for (const w of warnings) console.log(`  AVISO  ${w}`);

if (errors.length) {
  console.error(`\n${errors.length} problema(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log("  ✓ sin problemas");
