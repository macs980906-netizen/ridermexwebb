# Catálogo de motos RiderMex

Flujo: **Catálogo → Marca → Modelos → Ficha individual**, tipo marketplace.

## Piezas

| Archivo | Rol |
|---|---|
| `assets/CATALOGO/*.xlsx` | Fuente maestra (Excel por marca). **No se consume en runtime.** |
| `scripts/generate-catalog.py` | Convierte los Excel en la data normalizada. |
| `src/data/motorcycles.js` | Data normalizada que **sí** consume la web (+ helpers). |
| `catalogo.html` | Página del catálogo (contenedor + scripts). |
| `catalog.js` | Router (hash) + render de marcas, modelos y ficha. |
| `catalog.css` | Estilos del catálogo y de la ficha individual. |

## Rutas (hash routing, funciona en Vercel sin rewrites)

- `catalogo.html` — marcas
- `catalogo.html#/marca/:brandSlug` — modelos de una marca
- `catalogo.html#/moto/:motoSlug` — ficha individual

También `/catalogo` redirige a `/catalogo.html` (ver `vercel.json`).

## Regenerar la data desde los Excel

```bash
pip install openpyxl
python3 scripts/generate-catalog.py
```

Reescribe `src/data/motorcycles.js`. Se puede editar a mano después.

## Cómo agregar / cambiar cosas

- **Marca nueva:** agrega su Excel en `assets/CATALOGO/`, añade una entrada en la
  lista `BRANDS` de `scripts/generate-catalog.py` (slug, nombre, hoja de fichas,
  columna del modelo y, si aplica, hoja/columnas de fotos) y regenera. Las marcas
  se derivan solas a partir de las motos.
- **Modelo nuevo:** agrégalo como fila en la hoja de fichas del Excel de su marca y
  regenera; o añade un objeto al array `MOTORCYCLES` en `src/data/motorcycles.js`
  (mínimo `brand`, `brandSlug`, `model`, `slug` único).
- **Imágenes de un modelo:** pon URLs en `gallery` (la primera es `mainImage`).
  Para migrar a imágenes internas, sube archivos a
  `assets/catalogo/marca/modelo/01.webp` y usa esa ruta en `gallery`.
  Si una imagen no carga, la UI muestra el placeholder automáticamente.
- **Descripciones:** edita `description` (general) o `shortDescription` (corta) del
  modelo. Si `description` está vacío, la ficha usa un texto neutral editable en
  `catalog.js` (`descText`).
- **CTA "Quiero esta moto":** constante `MOTORCYCLE_FORM_TARGET` al inicio de
  `src/data/motorcycles.js` (hoy `motos.html#formulario-motos`). El slug del modelo
  viaja como `?modelo=slug` y `motos.html` muestra un banner con el modelo elegido.

## Reglas

- No inventar marcas, modelos, precios ni características: sólo datos de la fuente.
- Precio sólo se muestra si el campo existe y es inequívoco (Ryder y CF Moto hoy).
- Campos vacíos no se renderizan.

## SEO del catálogo

El catálogo es una SPA con hash routing. El hash **no llega al servidor**, así que
Google no ve `#/marca/...` ni `#/moto/...` como URLs distintas. Lo que se hizo:

- **Canonical único:** todas las vistas canonizan a `catalogo.html`. No se meten
  rutas con hash en `sitemap.xml`.
- **Índice estático:** `catalogo.html` incluye un bloque `#indice-catalogo` con las
  11 marcas y los 149 modelos como texto y enlaces reales dentro del HTML servido.
  Es lo que lee un rastreador que no ejecuta JS.
  Se genera con `python3 scripts/build-catalog-index.py`.
  **Hay que regenerarlo cada vez que cambie `src/data/motorcycles.js`.**
- **Metadata por vista:** `catalog.js` actualiza `title`, `description`, Open Graph
  y Twitter Card según la ruta activa (marcas / marca / ficha), para que al
  compartir un enlace se describa la vista real.
- **JSON-LD dinámico:** `catalog.js` inyecta `BreadcrumbList` en las tres vistas,
  `ItemList` en catálogo y marca, y `Product` en la ficha. El `Product` **no**
  declara `offers`, `price`, `sku`, `aggregateRating` ni `review`: esos datos no
  existen confirmados en el proyecto.
- **Texto introductorio por marca:** el objeto `BRAND_INTRO` está duplicado en
  `catalog.js` y en `scripts/build-catalog-index.py`. Si cambias uno, cambia el otro.

## Consistencia de fotografías

`scripts/prefer-white-background.py` reordena la galería de cada modelo para que la
primera imagen (la que se usa en grids y vitrinas) tenga fondo blanco de estudio
cuando exista esa opción entre las fotos ya presentes en el proyecto.

```bash
pip install pillow
python3 scripts/prefer-white-background.py --dry-run   # ver qué cambiaría
python3 scripts/prefer-white-background.py             # aplicar
```

No descarga ni genera imágenes: sólo reordena. Los umbrales (`MIN_LUM`, `MAX_SAT`,
`MAX_STD`) están calibrados para que una foto de calle luminosa **no** pase por
foto de producto.

## Componentes globales y configuración

| Archivo | Rol |
|---|---|
| `site-header.css` / `site-header.js` | Header global. Mismo marcado en las 6 páginas. |
| `site-footer.css` | Footer global, con los dos grupos de redes sociales. |
| `site-config.js` | Fuente de verdad de WhatsApp y redes sociales. |
| `scripts/verify.mjs` | Lo que corre `npm run build`. Falla el deploy si algo se rompe. |

### Canales de WhatsApp — no se cruzan

| Canal | Número | Dónde se usa |
|---|---|---|
| Motos · compra | 55 1000 0645 | CTAs "quiero mi moto / empezar proceso", Contacto → *Comprar una moto* |
| Motos · general | 55 1000 0680 | Botón flotante de catálogo y motos, footer, `tel:` |
| Inversiones | 55 9990 0619 | Toda la página de Inversiones y Contacto → *Quiero invertir* |

`scripts/verify.mjs` comprueba que ningún HTML use un `wa.me` que no esté
declarado en `site-config.js`, y que el CTA "Quiero invertir" de Contacto
apunte al WhatsApp de Inversiones (no a `inversiones.html`).

### Redes sociales

Reales y publicadas: Instagram, Facebook y TikTok de RiderMex; Instagram y
Facebook de RiderMex Inversiones. **Faltan por proporcionar:** YouTube y
LinkedIn de ambas marcas, y TikTok de Inversiones. Están como cadena vacía
en `site-config.js` y **no se renderizan** en el footer: no se inventan
cuentas ni se enlaza a la home genérica de ninguna red.

## Simulador de inversión

| | |
|---|---|
| Archivo oficial | `RiderMex_Simulador_Inversion_V4_HISTORICO_70_ACTUAL_75.html` (raíz) |
| Ruta pública | `/simulador-inversion` (reescritura en `vercel.json`) |
| Cómo se abre | CTA compacto en `inversiones.html#simulador`, en pestaña nueva |
| Evento | `simulator_click` (ver `site-ui.js`; solo se envía si hay GA4) |

**Nunca se muestra embebido.** Las versiones anteriores
(`calculadora-inversion/` y `assets/RiderMex_Simulador_Inversion_V3_META_300.html`)
se conservan en disco por historial, pero **ninguna navegación pública apunta
a ellas** y están en `Disallow` del `robots.txt`.

La ruta limpia funciona en Vercel; con un servidor estático local plano hay
que abrir el archivo directamente (mismo caso que `/catalogo`).

## Marcas nuevas: TVS, CF Lite y Honda

Fichas publicadas con datos técnicos reales y **fotografías pendientes**: la
ficha muestra el placeholder del catálogo, no una imagen inventada. Para
cargarlas, sigue el `LEEME.md` de cada carpeta en
`assets/img/motos/catalogo/{tvs,cflite,honda}/`.

Campos marcados como "depende de la versión" (no se afirman como definitivos):

- **TVS Apache RTR 160 4V FI**: freno trasero y llanta trasera.
- **TVS Apache RTR 200 4V FI**: modos de manejo.
- **CF Lite 250SR**: embrague antirrebote (slipper) y pantalla TFT.
- **CF Lite 250DUAL**: ABS de doble canal, versiones por mercado, y no se
  declara SOHC/DOHC.
- **Honda NAVI**: sin potencia, torque, velocidad, rendimiento, año ni
  precio. La transmisión queda "por confirmar".

## Analítica y Search Console

- **GA4: no instalado.** No hay ningún Measurement ID `G-…` en el proyecto y
  no se inventó. `site-ui.js` ya emite `simulator_click` y `share` vía
  `gtag`/`dataLayer`: en cuanto se pegue el snippet de GA4, los eventos
  empiezan a llegar sin tocar más código.
- **Search Console: sin verificar.** No hay meta de verificación ni archivo
  HTML de Google. Lo técnico ya está listo (sitemap, robots, canonicals,
  metadata); falta pegar el token de verificación del dominio final.

## Animación "Tu camino" · fondos

El recorrido tiene **5 escenas** (no 6): Bosque, Ciudad, Desierto, Viaje Noche
y Ruta Inversión, con un fondo cada una en
`assets/RIDERMEX_CAMINO_ELEMENTSPNG/`.

El **orden de los fondos lo define el cliente** y no sigue el orden de las
carpetas. Cada fondo se usa exactamente una vez. Asignación vigente:

| Escena | Etiqueta | Fondo que usa |
|---|---|---|
| 1 | Bosque | `1_Bosque/fondo_bosque.jpeg` |
| 2 | Ciudad | `5_RutaInversion/Fondo_RutaInversion.jpeg` |
| 3 | Desierto | `2_Ciudad/Fondo.jpeg` |
| 4 | Viaje Noche | `3_Desierto/Fondo_Desierto.png` |
| 5 | Ruta Inversión | `4_ViajeNoche/fondo_viajenoche.jpeg` |

Sólo cambia el `src` de `.journey-scene-bg`. Los elementos decorativos
(`.jel`), textos, carretera, moto, scroll y CTAs siguen igual, así que las
etiquetas de estado (BOSQUE, CIUDAD…) no siempre coinciden con el paisaje
del fondo: es intencional según la instrucción de reordenar únicamente los
fondos.

Como la escena 1 pasó a un cielo claro, el panel de texto
(`.journey-card`) se opacó de `.82/.6` a `.94/.86` y el chip
`.journey-eyebrow` ganó contraste. Es el único ajuste de legibilidad.

## Contexto de industria (Inversiones)

Bloque `#industria-titulo`, justo debajo del hero. Cifras: ~2.0 M de
motocicletas vendidas en México en 2025 (AMFIM) frente a ~1.63 M de
vehículos ligeros nuevos (AMDA). Las fuentes y el disclaimer están en la
propia pieza. El dato vive como **HTML real**, no dentro de una imagen.
