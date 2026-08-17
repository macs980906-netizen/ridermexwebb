/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · ESTRUCTURA DE CATÁLOGO (preparada para crecer)
   ───────────────────────────────────────────────────────────────────────
   Este archivo NO reemplaza el catálogo actual de motos.html; define la
   estructura de datos hacia la que puede migrar cuando existan datos reales
   (fotos por moto, precio/condiciones, página o vista individual por modelo).

   ▸ NO inventes motos, precios ni marcas: rellena solo con información real.
   ▸ Cada MARCA puede tener contenido específico (copy, lineamientos visuales,
     assets, modelos y CTAs propios) — útil para marcas como TBS.
   ▸ Cada MOTO sigue el esquema `motoSchema` de abajo (incluye `slug` para su
     ruta/página individual).

   Esquema por moto:
     {
       slug:        'vento-crossmax-300-rally',   // ruta individual única
       marca:       'Vento',
       modelo:      'Crossmax 300 Rally',
       categoria:   'Doble propósito',
       imagenes:    ['assets/img/motos/vento-crossmax-300-rally.jpg'],
       precio:      null,        // number | null  (no inventar)
       condiciones: '',          // texto de financiamiento si aplica
       descripcion: '',
       cta:         { label: 'Cotizar por WhatsApp', href: 'https://wa.me/5215510000645'  // canal de MOTOS (ver site-config.js) }
     }
   ═══════════════════════════════════════════════════════════════════════ */

window.RIDERMEX_CATALOGO = {
  // Referencia del esquema (documentación en tiempo de ejecución).
  motoSchema: ['slug', 'marca', 'modelo', 'categoria', 'imagenes', 'precio', 'condiciones', 'descripcion', 'cta'],

  // CTA por defecto para cualquier moto que aún no defina el suyo.
  ctaPorDefecto: { label: 'Tramita tu crédito', href: 'motos.html#credito' },

  /* Marcas activas hoy (los modelos viven aún como chips en motos.html;
     migrar aquí conforme haya fotos/datos reales por modelo). Cada marca
     admite: copy, lineamientosVisuales, assets, cta y modelos[] específicos. */
  marcas: [
    { id: 'vento',    nombre: 'Vento',    especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'islo',     nombre: 'Islo',     especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'carabela', nombre: 'Carabela', especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'bajaj',    nombre: 'Bajaj',    especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'tvs',      nombre: 'TVS',      especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'cfmoto',   nombre: 'CF Moto',  especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'zmoto',    nombre: 'Zmoto',    especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] },
    { id: 'ryder',    nombre: 'Ryder',    especifica: false, copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] }

    /* ── TBS ──────────────────────────────────────────────────────────────
       Marca reservada para contenido ESPECÍFICO (copy, lineamientos visuales,
       modelos, assets y CTAs propios). NO tratar como marca genérica y NO
       llenar hasta recibir el brief oficial de TBS. Descomenta y completa:

       , { id: 'tbs', nombre: 'TBS', especifica: true,
           copy: '', lineamientosVisuales: '', assets: {}, cta: null, modelos: [] }
       ──────────────────────────────────────────────────────────────────── */
  ]
};
