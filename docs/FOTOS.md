# Inventario de fotografías del catálogo

Generado a partir de `src/data/motorcycles.js`. Sirve para decidir **qué
fotos conseguir primero**. Actualízalo cuando cambien los datos.

## Resumen

| Marca | Modelos | Foto propia | Foto externa | Sin foto |
|---|---:|---:|---:|---:|
| Vento | 43 | **38** | 0 | 5 |
| Bajaj | 20 | 0 | **20** | 0 |
| Ryder | 19 | 1 | **17** | 1 |
| Zmoto | 17 | 1 | **16** | 0 |
| Carabela | 16 | 16 | 0 | 0 |
| CF Moto | 14 | 14 | 0 | 0 |
| UM | 7 | 7 | 0 | 0 |
| Islo | 6 | 0 | **6** | 0 |
| TVS | 3 | 0 | 0 | **3** |
| CF Lite | 3 | 0 | 0 | **3** |
| Honda | 1 | 0 | 0 | **1** |
| **TOTAL** | **149** | **77** | **59** | **13** |

**77 de 149 modelos (52 %)** ya tienen fotografía propia alojada en el
sitio, frente a 39 (26 %) antes de cargar las de Vento.

## Vento: 38 de 43 modelos con foto

Las fotos originales que entregó el cliente están íntegras en
`assets/originales-vento/<MODELO>/` (51 carpetas, ~1 300 archivos, 204 MB).
De cada carpeta se seleccionó la foto de producto y hasta cuatro de
galería, y se copiaron ya renombradas a
`assets/img/motos/vento/<slug>/<slug>-01…05.<ext>`.

**Cómo se eligieron.** La numeración de los archivos (`SPEC01`, `SPC-01`,
`SP-01`…) NO indica cuál es la vista principal: mezcla la moto completa
con primeros planos de freno, asiento o tablero, y con anuncios de la
alarma VenTec donde la moto sale desenfocada al fondo. Sí resultaron
fiables los archivos con `MAIN` en el nombre y los `GAL-` /
`FOTOGALERIA` / `LIFESTYLE`, que siempre muestran la moto entera. Cada
imagen elegida se revisó a ojo en una hoja de contactos antes de
publicarla.

### Los 5 modelos Vento que siguen sin foto

| Modelo | Motivo |
|---|---|
| N 400 | No hay carpeta con ese nombre |
| NITROX 250T3 | No hay carpeta (sólo llegó NITROX 330) |
| NITROX 300T3 | No hay carpeta (sólo llegó NITROX 330) |
| ROCKETMAN 300 | No hay carpeta (sólo llegó ROCKETMAN 300PL) |
| R 300 | La carpeta `R_300` sólo contiene imágenes de la **DAKAR 300** |

En `R_300` se dejó a propósito la ilustración de respaldo: publicar una
Dakar 300 como si fuera la R 300 sería mostrar un producto que no es.

### 12 carpetas de fotos sin modelo en el catálogo

Llegaron fotos de 12 modelos Vento que **no existen** en
`src/data/motorcycles.js`, así que no se muestran en ninguna parte:

SPIRIT 170 · STORM 2.0 300 · STREETROD 170 · TERRADS 170 · THRILLER 250 ·
THUNDER 300S · TORNADO 300 · WORKMAN 190 · WORKMAN 250 · XPLOR 190 ·
XPRESS 170 · YUMA 250

Para publicarlos hacen falta sus datos (categoría, cilindrada, precio de
referencia). Las fotos ya están listas en `assets/originales-vento/`.

### Nota sobre el peso del repositorio

`assets/originales-vento/` ocupa 204 MB y sólo se usan 34 MB. Se conservó
íntegro para no perder material del cliente, pero puede podarse en
cualquier momento: las fotos publicadas ya están copiadas aparte en
`assets/img/motos/vento/` y no dependen de esa carpeta.

## Sigue pendiente: 59 fotos prestadas de otros dominios

Bajaj (20), Ryder (17), Zmoto (16) e Islo (6) siguen apuntando al servidor
de otra empresa:

| Dominio | Modelos |
|---|---:|
| `images.ctfassets.net` (Contentful de Galgo) | 29 |
| `www.rydermx.com` | 15 |
| `www.islo.com.mx` | 6 |
| `www.zmoto.com.mx` | 6 |
| `www.motocool.net` | 2 |
| `zoommotos.mx` | 1 |

Esas fotos pueden dejar de cargar en cualquier momento porque no son
nuestras; cuando eso pasa se ve la ilustración de respaldo. Conviene
además revisar con quien corresponda si el sitio tiene derecho a usarlas.

**Prioridad ahora que Vento está resuelto:**

1. **Bajaj Pulsar — 15 modelos.** La familia más vendida de la marca, y
   las 15 dependen del mismo dominio externo.
2. **Resto de Bajaj — 5 modelos** (Avenger, Boxer, Dominar).
3. **Ryder (17) y Zmoto (16)** — sustituir las prestadas por propias.
4. **Islo (6), TVS (3), CF Lite (3), Honda NAVI (1)** y los 5 Vento de
   arriba.

## Cómo se asigna una foto

En `src/data/motorcycles.js`, en el modelo correspondiente:

```js
"mainImage": "assets/img/motos/<archivo>",
"gallery": ["assets/img/motos/<archivo>", "..."]
```

Con `mainImage` vacío la interfaz usa la ilustración automáticamente: no
hay que hacer nada más para que un modelo sin foto se vea correcto.
