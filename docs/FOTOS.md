# Inventario de fotografías del catálogo

Generado a partir de `src/data/motorcycles.js`. Sirve para decidir **qué
fotos conseguir primero**. Actualízalo cuando cambien los datos.

## Resumen

| Marca | Modelos | Foto propia | Foto externa | Sin foto |
|---|---:|---:|---:|---:|
| Vento | 43 | 0 | 0 | **43** |
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
| **TOTAL** | **149** | **39** | **59** | **51** |

Sólo **39 de 149 modelos (26 %)** tienen una fotografía alojada en el
propio sitio.

## Hay dos problemas distintos, no uno

### 1. Sin foto — 51 modelos

No tienen ninguna imagen asignada. Muestran la ilustración "RiderMex ·
Imagen en preparación". Es un pendiente puro de contenido.

Vento concentra 43 de los 51.

### 2. Foto prestada de otro dominio — 59 modelos

Sí tienen foto, pero apunta al servidor de otra empresa:

| Dominio | Modelos |
|---|---:|
| `images.ctfassets.net` (Contentful de Galgo) | 29 |
| `www.rydermx.com` | 15 |
| `www.islo.com.mx` | 6 |
| `www.zmoto.com.mx` | 6 |
| `www.motocool.net` | 2 |
| `zoommotos.mx` | 1 |

**Este es el origen de los "recuadros negros vacíos"** que se reportaron
en la revisión de diseño. Cuando uno de esos dominios no responde, el
navegador tarda unos 20 segundos en dar la petición por fallida; hasta
entonces no salta la ilustración de respaldo. En el panel de red la
petición aparece *pendiente*, no fallida — por eso la revisión no
encontró ningún error 404 y concluyó que faltaba contenido.

Ya se mitigó en el código (la ilustración se pinta de fondo y se ve desde
el primer fotograma, ver `catalog.css`), pero la dependencia sigue: esas
fotos pueden desaparecer o bloquearse en cualquier momento porque no son
nuestras. Conviene además revisar con quién corresponda si el sitio tiene
derecho a usarlas.

## Prioridad sugerida

1. **Bajaj Pulsar — 15 modelos.** Es la familia más vendida de la marca y
   los 15 dependen del mismo dominio externo (Contentful). Si ese dominio
   falla, la línea más vendida del catálogo se queda sin una sola foto.
2. **Resto de Bajaj — 5 modelos** (Avenger, Boxer, Dominar). Misma
   dependencia.
3. **Vento — 43 modelos.** Es el hueco más grande en número, pero hoy se
   ve resuelto con la ilustración de respaldo, así que molesta menos que
   una marca que aparenta tener fotos y a veces no las muestra.
4. **Ryder (17) y Zmoto (16)** — sustituir las prestadas por propias.
5. **Islo (6), TVS (3), CF Lite (3), Honda NAVI (1).**

## Cómo se asigna una foto

En `src/data/motorcycles.js`, en el modelo correspondiente:

```js
"mainImage": "assets/img/motos/<archivo>",
"gallery": ["assets/img/motos/<archivo>", "..."]
```

Con `mainImage` vacío la interfaz usa la ilustración automáticamente: no
hay que hacer nada más para que un modelo sin foto se vea correcto.
