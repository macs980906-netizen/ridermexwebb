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
// Los comentarios documentan rutas de ejemplo (href="…"): no son recursos.
const stripComments = (html) => html.replace(/<!--[\s\S]*?-->/g, "");

// ── 1 · recursos locales ───────────────────────────────────────────────────
// Las rutas limpias (p. ej. /simulador-inversion) no son archivos: las sirve
// una reescritura de vercel.json. Se resuelven contra esa configuración para
// comprobar que el destino real sí existe en disco.
const vercel = JSON.parse(read("vercel.json"));
const rewrites = new Map(
  (vercel.rewrites || []).map((r) => [r.source.replace(/\/$/, ""), r.destination])
);
for (const [source, dest] of rewrites) {
  const target = dest.replace(/^\//, "");
  if (!existsSync(join(ROOT, target))) {
    fail(`vercel.json: la reescritura ${source} apunta a un archivo inexistente → ${dest}`);
  }
}

const allFiles = [...PAGES, "calculadora-inversion/index.html"];
for (const file of allFiles) {
  const html = stripComments(read(file));
  const base = dirname(file);
  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const raw = m[1];
    if (/^(https?:|mailto:|tel:|data:|#|\/\/)/.test(raw)) continue;
    const clean = decodeURIComponent(raw.split("?")[0].split("#")[0]);
    if (!clean) continue;
    // ¿Es una ruta limpia declarada en vercel.json?
    if (rewrites.has(clean.replace(/\/$/, ""))) continue;
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

// ── 4b · estructura HTML balanceada ────────────────────────────────────────
// Un generador que duplicaba contenido dejó etiquetas sin cerrar sin que
// nada lo detectara. Este chequeo lo hace imposible de pasar por alto.
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr"]);
// Quita bloques <script> y <style> en ORDEN DE APARICIÓN. Hacerlo con dos
// replace() encadenados falla: un comentario CSS del Home contiene el texto
// "<script>", y al filtrar scripts primero se comía el </style> siguiente.
function stripCode(html) {
  let out = "";
  let i = 0;
  while (i < html.length) {
    const s = html.toLowerCase().indexOf("<script", i);
    const t = html.toLowerCase().indexOf("<style", i);
    const first = (s === -1) ? t : (t === -1) ? s : Math.min(s, t);
    if (first === -1) { out += html.slice(i); break; }
    const tag = (first === s) ? "</script>" : "</style>";
    const close = html.toLowerCase().indexOf(tag, first);
    out += html.slice(i, first);
    if (close === -1) { i = html.length; break; }
    i = close + tag.length;
  }
  return out;
}

for (const file of PAGES) {
  const html = stripCode(stripComments(read(file)));
  const stack = [];
  let broken = null;
  for (const m of html.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g)) {
    const [, closing, tagRaw, selfClose] = m;
    const tag = tagRaw.toLowerCase();
    if (VOID.has(tag) || selfClose === "/" || tag === "!doctype") continue;
    if (!closing) { stack.push(tag); continue; }
    if (stack[stack.length - 1] === tag) { stack.pop(); continue; }
    const at = stack.lastIndexOf(tag);
    if (at === -1) { broken = broken || `</${tag}> sin apertura`; continue; }
    broken = broken || `<${stack[stack.length - 1]}> sin cerrar antes de </${tag}>`;
    stack.length = at;
  }
  if (broken) fail(`${file}: HTML mal anidado — ${broken}`);
  else if (stack.length) fail(`${file}: HTML mal anidado — <${stack[stack.length - 1]}> sin cerrar`);
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

// ── 7 · restos del header/footer antiguos ──────────────────────────────────
for (const file of PAGES) {
  const html = read(file);
  if (/class="nav-toggle"/.test(html)) fail(`${file}: queda marcado del header antiguo (.nav-toggle)`);
  if (/class="nav-wrap"/.test(html)) fail(`${file}: queda marcado del header antiguo (.nav-wrap)`);
  const footers = (html.match(/<footer/g) || []).length;
  if (footers !== 1) fail(`${file}: tiene ${footers} <footer> (debe tener exactamente 1)`);
  if (!html.includes('<footer class="rm-footer">')) fail(`${file}: no usa el footer global .rm-footer`);
  if (!html.includes('href="site-footer.css"')) fail(`${file}: no carga site-footer.css`);
}

// ── 7b · FAQPage debe coincidir con las preguntas visibles ─────────────────
// Google exige que el schema replique lo que el usuario ve. Al mover las
// FAQs de sitio es fácil que una quede desincronizada: aquí se detecta.
const decode = (t) =>
  t.replace(/<[^>]+>/g, "")
   .replace(/&aacute;/g, "á").replace(/&eacute;/g, "é").replace(/&iacute;/g, "í")
   .replace(/&oacute;/g, "ó").replace(/&uacute;/g, "ú").replace(/&ntilde;/g, "ñ")
   .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
   .replace(/\s+/g, " ").trim();

for (const file of PAGES) {
  const html = read(file);
  const schemaQs = [...html.matchAll(/"@type":\s*"Question",\s*"name":\s*"((?:[^"\\]|\\.)*)"/g)]
    .map((m) => m[1].replace(/\\"/g, '"'));
  if (!schemaQs.length) continue;

  const visibleQs = [
    ...[...html.matchAll(/<summary>([\s\S]*?)<\/summary>/g)].map((m) => decode(m[1])),
  ];
  for (const q of schemaQs) {
    if (!visibleQs.includes(q)) {
      fail(`${file}: la pregunta del FAQPage no está visible en la página → "${q.slice(0, 60)}"`);
    }
  }
}

// ── 8 · canales centralizados en site-config.js ────────────────────────────
// Ningún HTML debe usar un WhatsApp o una red social que no esté declarada
// en la configuración: así los canales de motos e inversiones no se cruzan
// por accidente y no aparecen cuentas inventadas.
const cfgSrc = read("site-config.js");
const declaredWa = new Set(
  [...cfgSrc.matchAll(/"(https:\/\/wa\.me\/\d+)"/g)].map((m) => m[1])
);
const declaredSocial = new Set(
  [...cfgSrc.matchAll(/"(https:\/\/www\.(?:instagram|facebook|tiktok|youtube|linkedin)\.com\/[^"]+)"/g)].map((m) => m[1])
);
if (!declaredWa.size) fail("site-config.js: no declara ningún WhatsApp");
if (!declaredSocial.size) fail("site-config.js: no declara ninguna red social");

for (const file of PAGES) {
  const html = stripComments(read(file));
  for (const m of html.matchAll(/https:\/\/wa\.me\/(\d+)/g)) {
    const base = `https://wa.me/${m[1]}`;
    if (!declaredWa.has(base)) {
      fail(`${file}: WhatsApp no declarado en site-config.js → ${base}`);
    }
  }
  for (const m of html.matchAll(/https:\/\/www\.(?:instagram|facebook|tiktok|youtube|linkedin)\.com\/[^"']+/g)) {
    if (!declaredSocial.has(m[0])) {
      fail(`${file}: red social no declarada en site-config.js → ${m[0]}`);
    }
  }
}

// El CTA de inversión de Contacto debe abrir el WhatsApp de inversiones,
// no la página de inversiones (requisito de negocio).
const contacto = stripComments(read("contacto.html"));
const invAnchor = contacto.match(/<a[^>]*contacto-card--inv[^>]*>/);
const invHref = invAnchor && invAnchor[0].match(/href="([^"]+)"/);
if (!invHref || !invHref[1].startsWith("https://wa.me/5215599900619")) {
  fail(`contacto.html: "Quiero invertir" debe apuntar al WhatsApp de Inversiones, apunta a → ${invHref ? invHref[1] : "(no se encontró el enlace)"}`);
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
