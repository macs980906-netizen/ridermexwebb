#!/usr/bin/env python3
# Genera src/data/motorcycles.js a partir de los Excel en assets/CATALOGO.
# NO inventa datos: sólo normaliza lo que existe en los archivos fuente.
import openpyxl, os, re, json, unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAT = os.path.join(ROOT, 'assets', 'CATALOGO')

def cell(v):
    if v is None: return ''
    return str(v).replace(' ',' ').strip()

def load(fname):
    wb = openpyxl.load_workbook(os.path.join(CAT, fname), data_only=True)
    data = {}
    for ws in wb.worksheets:
        data[ws.title] = [[cell(c) for c in r] for r in ws.iter_rows(values_only=True)]
    wb.close()
    return data

def header_index(rows):
    for i, r in enumerate(rows):
        if r and r[0] == 'No.':
            return i
    return 0

def slugify(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode('ascii')
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return re.sub(r'-+', '-', s).strip('-')

EMPTY = {'', 'n/d', 'nd', 'n/a', 'na', '-', '--', 'no indicado', 'no aplica', 'sin dato', 'por confirmar'}
def is_empty(v):
    return v is None or cell(v).lower() in EMPTY

# Columnas internas que NO se muestran como especificación al usuario final.
EXCLUDE_TOKENS = ['no.', 'marca', 'modelo', 'estatus', 'observ', 'fuente', 'url',
                  'validaci', 'comentario', 'revisi', 'equivalencia', 'pagina',
                  'página', 'archivo', 'carpeta', 'nota', 'foto']
def is_excluded_col(label):
    l = label.lower()
    return any(tok in l for tok in EXCLUDE_TOKENS)

# --- Config por marca ------------------------------------------------------
# photos: (sheet, model_col, [image_cols en orden de preferencia])
BRANDS = [
    dict(slug='vento', name='Vento', files=['Catalogo_VENTO_Fichas_y_Fuentes_Oficiales_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=1, photos=None),
    dict(slug='bajaj', name='Bajaj', files=['Catalogo_Bajaj_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=2,
         photos=('CONTROL_FOTOS', 1, [5, 4])),
    dict(slug='islo', name='Islo', files=['Catalogo_ISLO_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=2,
         photos=('CONTROL_FOTOS', 1, [4])),
    dict(slug='carabela', name='Carabela', files=['Catalogo_Carabela_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='RESUMEN', model_col=2, photos=None, desc_col=12),
    dict(slug='zmoto', name='Zmoto', files=['Catalogo_ZMOTO_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=2,
         photos=('CONTROL_FOTOS', 1, [4])),
    dict(slug='ryder', name='Ryder', files=['Catalogo_RYDER_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=1,
         photos=('CONTROL', 1, [2])),
    dict(slug='cfmoto', name='CF Moto',
         files=['Catalogo_CFLITE_Fichas_y_Fotos_RiderMex.xlsx',
                'Catalogo_CFMOTO_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=1, photos=None),
    dict(slug='um', name='UM', files=['Catalogo_UM_Fichas_y_Fotos_RiderMex.xlsx'],
         fichas='FICHAS_TECNICAS', model_col=1, photos=None),
]

# Imágenes locales ya presentes en el repo (se prefieren sobre externas).
LOCAL_IMAGES = {
    ('bajaj', 'dominar 400 ug'): 'assets/img/motos/bajaj-dominar-400.webp',
    ('zmoto', 'crx 300'): 'assets/img/motos/zmoto-crx300.png',
    ('ryder', 'rd-3r'): 'assets/img/motos/ryder-rd3-300.jpg',
}

# Etiquetas candidatas para "características destacadas" (orden de aparición).
HIGHLIGHT_KEYS = [
    ('Categoría', ['categor', 'tipo', 'familia']),
    ('Año', ['año', 'ano']),
    ('Cilindrada', ['cilindrada', 'desplazamiento']),
    ('Potencia', ['potencia']),
    ('Torque', ['torque']),
    ('Transmisión', ['transmis']),
    ('Refrigeración', ['refriger', 'enfriamiento']),
    ('Combustible', ['combustible']),
    ('Rendimiento', ['rendimiento']),
    ('Peso', ['peso']),
    ('Frenos', ['frenos', 'freno delantero']),
]

def convert_drive(url):
    m = re.search(r'/file/d/([^/]+)/', url)
    if m:
        return 'https://drive.google.com/uc?export=view&id=' + m.group(1)
    m = re.search(r'[?&]id=([^&]+)', url)
    if 'drive.google.com' in url and m:
        return 'https://drive.google.com/uc?export=view&id=' + m.group(1)
    return url

def looks_like_image(url):
    if not url or not url.startswith('http'):
        return False
    low = url.lower()
    if any(low.split('?')[0].endswith(ext) for ext in ('.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif')):
        return True
    # Endpoints de imagen conocidos de los sitios oficiales usados en la fuente.
    if 'images.ctfassets.net' in low: return True
    if '/web/image/' in low: return True            # Odoo (ryder, zmoto)
    if '/wp-content/uploads/' in low: return True    # WordPress (islo)
    return False

def collect_photos(sheets, cfg):
    """Devuelve dict {modelo_normalizado: [urls...]}"""
    if not cfg['photos']:
        return {}
    sheet, mcol, icols = cfg['photos']
    rows = sheets.get(sheet, [])
    hidx = header_index(rows)
    out = {}
    for r in rows[hidx + 1:]:
        if not r or len(r) <= mcol:
            continue
        model = cell(r[mcol])
        if not model:
            continue
        url = ''
        for ic in icols:
            if len(r) > ic and r[ic] and cell(r[ic]).startswith('http'):
                url = convert_drive(cell(r[ic]))
                break
        if not url or not looks_like_image(url):
            continue
        key = slugify(model)
        out.setdefault(key, [])
        if url not in out[key]:
            out[key].append(url)
    return out

# --- Construcción ----------------------------------------------------------
motorcycles = []
report = {'brands': 0, 'models': 0, 'with_image': 0, 'placeholder': 0, 'brand_stats': {}}
used_slugs = set()

for cfg in BRANDS:
    brand_models = 0
    brand_img = 0
    photos = {}
    fichas_rows_all = []
    for fi, fname in enumerate(cfg['files']):
        sheets = load(fname)
        photos.update(collect_photos(sheets, cfg))
        rows = sheets.get(cfg['fichas'], [])
        hidx = header_index(rows)
        header = rows[hidx]
        for r in rows[hidx + 1:]:
            if not r or not r[0]:
                continue
            fichas_rows_all.append((header, r))

    for header, r in fichas_rows_all:
        model = cell(r[cfg['model_col']]) if len(r) > cfg['model_col'] else ''
        if not model:
            continue
        nkey = slugify(model)

        # specs (todas las columnas técnicas no internas)
        specs_items = []
        row_map = {}
        for ci, label in enumerate(header):
            label = cell(label)
            if not label or ci >= len(r):
                continue
            val = cell(r[ci])
            row_map[label.lower()] = val
            if is_excluded_col(label) or is_empty(val):
                continue
            specs_items.append({'label': label, 'value': val})

        # highlights curados
        highlights = []
        seen_lbl = set()
        for out_label, keys in HIGHLIGHT_KEYS:
            for it in specs_items:
                ll = it['label'].lower()
                if any(k in ll for k in keys):
                    if out_label in seen_lbl:
                        break
                    highlights.append({'label': out_label, 'value': it['value']})
                    seen_lbl.add(out_label)
                    break

        # categoria
        category = ''
        for it in specs_items:
            ll = it['label'].lower()
            if 'categor' in ll or ll == 'tipo' or 'familia' in ll:
                category = it['value']
                break

        # año / precio
        year = ''
        price = ''
        for k, v in row_map.items():
            if ('año' in k or 'ano' in k) and not is_empty(v):
                year = v
            if 'precio' in k and not is_empty(v) and '$' in v:
                price = v

        # cilindrada para short description
        cilindrada = ''
        for it in specs_items:
            if 'cilindrada' in it['label'].lower() or 'desplazamiento' in it['label'].lower():
                cilindrada = it['value']
                break
        parts = [p for p in [category, cilindrada] if p]
        short_desc = ' · '.join(parts)

        # descripcion real (sólo si la fuente trae una redacción descriptiva)
        description = ''
        if cfg.get('desc_col') is not None and len(r) > cfg['desc_col']:
            d = cell(r[cfg['desc_col']])
            if d and not is_empty(d):
                description = d

        # imágenes
        gallery = list(photos.get(nkey, []))
        local = LOCAL_IMAGES.get((cfg['slug'], model.lower()))
        if local:
            gallery = [local] + [g for g in gallery if g != local]
        main_image = gallery[0] if gallery else ''
        if main_image:
            brand_img += 1

        # fuente oficial (referencia, no se inventa)
        source = ''
        for k, v in row_map.items():
            if ('fuente' in k or 'url' in k) and v.startswith('http'):
                source = v
                break

        # slug único
        slug = cfg['slug'] + '-' + nkey
        base_slug = slug
        n = 2
        while slug in used_slugs:
            slug = f'{base_slug}-{n}'
            n += 1
        used_slugs.add(slug)

        moto = {
            'id': slug,
            'slug': slug,
            'brand': cfg['name'],
            'brandSlug': cfg['slug'],
            'model': model,
            'category': category,
            'shortDescription': short_desc,
            'description': description,
            'mainImage': main_image,
            'gallery': gallery,
            'highlights': highlights,
            'specs': specs_items,
            'source': source,
            'available': True,
        }
        if year:
            moto['year'] = year
        if price:
            moto['price'] = price
        motorcycles.append(moto)
        brand_models += 1

    report['brand_stats'][cfg['name']] = {'models': brand_models, 'withImage': brand_img}
    report['models'] += brand_models
    report['with_image'] += brand_img

report['brands'] = len(BRANDS)
report['placeholder'] = report['models'] - report['with_image']

# --- Escritura del archivo JS ---------------------------------------------
PLACEHOLDER = (
    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20"
    "viewBox='0%200%20800%20600'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20"
    "x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%23161616'/%3E"
    "%3Cstop%20offset='1'%20stop-color='%230a0a0a'/%3E%3C/linearGradient%3E%3C/defs%3E"
    "%3Crect%20width='800'%20height='600'%20fill='url(%23g)'/%3E"
    "%3Ccircle%20cx='400'%20cy='300'%20r='150'%20fill='none'%20stroke='%23E10600'%20"
    "stroke-width='2'%20opacity='.25'/%3E"
    "%3Cpath%20d='M250%20360h60l40-70h120l30%2050h60'%20fill='none'%20stroke='%23E10600'%20"
    "stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'%20opacity='.7'/%3E"
    "%3Ccircle%20cx='300'%20cy='380'%20r='45'%20fill='none'%20stroke='%23E10600'%20stroke-width='6'%20opacity='.7'/%3E"
    "%3Ccircle%20cx='500'%20cy='380'%20r='45'%20fill='none'%20stroke='%23E10600'%20stroke-width='6'%20opacity='.7'/%3E"
    "%3Ctext%20x='400'%20y='500'%20fill='%23888'%20font-family='Poppins,Arial,sans-serif'%20"
    "font-size='30'%20font-weight='700'%20text-anchor='middle'%3ERiderMex%3C/text%3E"
    "%3Ctext%20x='400'%20y='535'%20fill='%23555'%20font-family='Inter,Arial,sans-serif'%20"
    "font-size='18'%20text-anchor='middle'%3EImagen%20en%20preparaci%C3%B3n%3C/text%3E%3C/svg%3E"
)

banner = '''/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · CATÁLOGO DE MOTOS — DATA NORMALIZADA
   ───────────────────────────────────────────────────────────────────────
   ARCHIVO GENERADO desde los Excel maestros en `assets/CATALOGO/`.
   La web consume ESTE archivo, no los Excel.  Para regenerar tras cambiar
   los Excel:  python3 scripts/generate-catalog.py

   Puedes editar a mano cualquier campo (descripciones, imágenes, precios).
   Reglas:
     • No inventar marcas, modelos, precios ni características.
     • `mainImage` / `gallery` vacíos  → la UI usa PLACEHOLDER_IMAGE.
     • CTA global editable en MOTORCYCLE_FORM_TARGET (abajo).
   ═══════════════════════════════════════════════════════════════════════ */
'''

lines = []
lines.append(banner)
lines.append('(function (global) {')
lines.append('  "use strict";')
lines.append('')
lines.append('  // Destino del CTA "Quiero esta moto" (editable en un solo lugar).')
lines.append('  var MOTORCYCLE_FORM_TARGET = "motos.html#formulario-motos";')
lines.append('')
lines.append('  // Imagen de reserva cuando un modelo no tiene foto usable.')
lines.append('  var PLACEHOLDER_IMAGE = ' + json.dumps(PLACEHOLDER) + ';')
lines.append('')
lines.append('  var MOTORCYCLES = ' + json.dumps(motorcycles, ensure_ascii=False, indent=2) + ';')
lines.append('')

runtime = r'''
  // ── Derivación de marcas a partir de las motos ─────────────────────────
  function buildBrands(motos) {
    var map = {};
    motos.forEach(function (m) {
      if (!map[m.brandSlug]) {
        map[m.brandSlug] = {
          slug: m.brandSlug,
          name: m.brand,
          count: 0,
          image: "",
          categories: {}
        };
      }
      var b = map[m.brandSlug];
      b.count += 1;
      if (!b.image && m.mainImage) b.image = m.mainImage;
      if (m.category) b.categories[m.category] = true;
    });
    return Object.keys(map).map(function (k) {
      var b = map[k];
      b.categoryList = Object.keys(b.categories);
      delete b.categories;
      return b;
    }).sort(function (a, b) { return a.name.localeCompare(b.name, "es"); });
  }

  var BRANDS = buildBrands(MOTORCYCLES);

  function getAllBrands() { return BRANDS.slice(); }
  function getBrandBySlug(slug) {
    for (var i = 0; i < BRANDS.length; i++) if (BRANDS[i].slug === slug) return BRANDS[i];
    return null;
  }
  function getMotorcyclesByBrand(slug) {
    return MOTORCYCLES.filter(function (m) { return m.brandSlug === slug; });
  }
  function getMotorcycleBySlug(slug) {
    for (var i = 0; i < MOTORCYCLES.length; i++) if (MOTORCYCLES[i].slug === slug) return MOTORCYCLES[i];
    return null;
  }
  // Imágenes usables de una moto (o placeholder si no hay ninguna).
  function getImages(m) {
    var imgs = (m.gallery && m.gallery.length) ? m.gallery
             : (m.mainImage ? [m.mainImage] : []);
    return imgs.length ? imgs : [PLACEHOLDER_IMAGE];
  }

  global.RIDERMEX_CATALOG = {
    motorcycles: MOTORCYCLES,
    brands: BRANDS,
    MOTORCYCLE_FORM_TARGET: MOTORCYCLE_FORM_TARGET,
    PLACEHOLDER_IMAGE: PLACEHOLDER_IMAGE,
    getAllBrands: getAllBrands,
    getBrandBySlug: getBrandBySlug,
    getMotorcyclesByBrand: getMotorcyclesByBrand,
    getMotorcycleBySlug: getMotorcycleBySlug,
    getImages: getImages
  };
})(typeof window !== "undefined" ? window : this);
'''
lines.append(runtime)

os.makedirs(os.path.join(ROOT, 'src', 'data'), exist_ok=True)
with open(os.path.join(ROOT, 'src', 'data', 'motorcycles.js'), 'w', encoding='utf-8') as fh:
    fh.write('\n'.join(lines))

print(json.dumps(report, ensure_ascii=False, indent=2))
print('\nTotal motos:', len(motorcycles))
