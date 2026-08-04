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
