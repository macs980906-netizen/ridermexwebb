# Fotografías · TVS

Carpeta reservada para las fotos reales de los modelos TVS del catálogo.
Hoy están **vacías a propósito**: la ficha muestra el placeholder de
RiderMex ("Imagen en preparación") en lugar de una foto inventada.

## Cómo activar las fotos

1. Sube los archivos aquí con este nombre (marca-modelo-N.ext):

   | Modelo | Archivos esperados |
   |---|---|
   | Stryker 3V | `tvs-stryker-3v-1.webp` … `-4.webp` |
   | Apache RTR 160 4V FI | `tvs-apache-rtr-160-1.webp` … `-4.webp` |
   | Apache RTR 200 4V FI | `tvs-apache-rtr-200-1.webp` … `-4.webp` |

2. En `src/data/motorcycles.js`, en el modelo correspondiente, rellena:

   ```js
   "mainImage": "assets/img/motos/catalogo/tvs/tvs-stryker-3v-1.webp",
   "gallery": [
     "assets/img/motos/catalogo/tvs/tvs-stryker-3v-1.webp",
     "assets/img/motos/catalogo/tvs/tvs-stryker-3v-2.webp"
   ],
   ```

3. Corre `npm run build` para comprobar que las rutas existen, y
   `python3 scripts/prefer-white-background.py` para que la primera imagen
   sea la de fondo blanco si hay varias.

La primera imagen de `gallery` es la que se usa en grids y vitrinas:
prioriza una toma de producto con fondo blanco.
