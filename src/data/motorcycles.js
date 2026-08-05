/* ═══════════════════════════════════════════════════════════════════════
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

(function (global) {
  "use strict";

  // Destino del CTA "Quiero esta moto" (editable en un solo lugar).
  var MOTORCYCLE_FORM_TARGET = "motos.html#formulario-motos";

  // Imagen de reserva cuando un modelo no tiene foto usable.
  var PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20800%20600'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%23161616'/%3E%3Cstop%20offset='1'%20stop-color='%230a0a0a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='800'%20height='600'%20fill='url(%23g)'/%3E%3Ccircle%20cx='400'%20cy='300'%20r='150'%20fill='none'%20stroke='%23E10600'%20stroke-width='2'%20opacity='.25'/%3E%3Cpath%20d='M250%20360h60l40-70h120l30%2050h60'%20fill='none'%20stroke='%23E10600'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'%20opacity='.7'/%3E%3Ccircle%20cx='300'%20cy='380'%20r='45'%20fill='none'%20stroke='%23E10600'%20stroke-width='6'%20opacity='.7'/%3E%3Ccircle%20cx='500'%20cy='380'%20r='45'%20fill='none'%20stroke='%23E10600'%20stroke-width='6'%20opacity='.7'/%3E%3Ctext%20x='400'%20y='500'%20fill='%23888'%20font-family='Poppins,Arial,sans-serif'%20font-size='30'%20font-weight='700'%20text-anchor='middle'%3ERiderMex%3C/text%3E%3Ctext%20x='400'%20y='535'%20fill='%23555'%20font-family='Inter,Arial,sans-serif'%20font-size='18'%20text-anchor='middle'%3EImagen%20en%20preparaci%C3%B3n%3C/text%3E%3C/svg%3E";

  var MOTORCYCLES = [
  {
    "id": "vento-alpina-300",
    "slug": "vento-alpina-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "ALPINA 300",
    "category": "Adventure",
    "shortDescription": "Adventure · 300 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Potencia",
        "value": "28 HP"
      },
      {
        "label": "Transmisión",
        "value": "Manual 6 velocidades"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "300 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "28 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual 6 velocidades"
      }
    ],
    "source": "https://www.vento.com/alpina-300/",
    "available": true
  },
  {
    "id": "vento-atom-2-0-170",
    "slug": "vento-atom-2-0-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "ATOM 2.0 170",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 170 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "170 c.c."
      },
      {
        "label": "Potencia",
        "value": "10 HP"
      },
      {
        "label": "Transmisión",
        "value": "Automática CVT"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "170 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "10 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática CVT"
      }
    ],
    "source": "https://www.vento.com/atom-170/",
    "available": true
  },
  {
    "id": "vento-axus-170",
    "slug": "vento-axus-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "AXUS 170",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 170 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "170 c.c."
      },
      {
        "label": "Potencia",
        "value": "10 HP"
      },
      {
        "label": "Transmisión",
        "value": "Automática CVT"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "170 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "10 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática CVT"
      }
    ],
    "source": "https://www.vento.com/axus-170/",
    "available": true
  },
  {
    "id": "vento-blast-125",
    "slug": "vento-blast-125",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "BLAST 125",
    "category": "Ciudad",
    "shortDescription": "Ciudad · 125 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c."
      },
      {
        "label": "Potencia",
        "value": "7 HP"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática 4 velocidades"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "125 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "7 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Semiautomática 4 velocidades"
      }
    ],
    "source": "https://www.vento.com/blast-125/",
    "available": true
  },
  {
    "id": "vento-n-400",
    "slug": "vento-n-400",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "N 400",
    "category": "Pendiente",
    "shortDescription": "Pendiente · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pendiente"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Pendiente"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/producto/lucky-7-400/",
    "available": true
  },
  {
    "id": "vento-r-300",
    "slug": "vento-r-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "R 300",
    "category": "Pendiente",
    "shortDescription": "Pendiente · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pendiente"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Pendiente"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "",
    "available": true
  },
  {
    "id": "vento-cougar-250",
    "slug": "vento-cougar-250",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "COUGAR 250",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/cougar-250/",
    "available": true
  },
  {
    "id": "vento-corsel-300",
    "slug": "vento-corsel-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CORSEL 300",
    "category": "Trabajo",
    "shortDescription": "Trabajo · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Trabajo"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Trabajo"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/corsel-300/",
    "available": true
  },
  {
    "id": "vento-colt-300",
    "slug": "vento-colt-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "COLT 300",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/colt-300/",
    "available": true
  },
  {
    "id": "vento-crossmax-170",
    "slug": "vento-crossmax-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CROSSMAX 170",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/crossmax-170/",
    "available": true
  },
  {
    "id": "vento-crossmax-220",
    "slug": "vento-crossmax-220",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CROSSMAX 220",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · 220 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "220 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "220 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/crossmax-220-led/",
    "available": true
  },
  {
    "id": "vento-crossmax-250",
    "slug": "vento-crossmax-250",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CROSSMAX 250",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · 250 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "250 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/crossmax-250/",
    "available": true
  },
  {
    "id": "vento-crossmax-330rally",
    "slug": "vento-crossmax-330rally",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CROSSMAX 330RALLY",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · 330 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "330 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "330 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/crossmax-330-rally/",
    "available": true
  },
  {
    "id": "vento-cyclone-210",
    "slug": "vento-cyclone-210",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "CYCLONE 210",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/cyclone-210-2-0/",
    "available": true
  },
  {
    "id": "vento-dakar-300",
    "slug": "vento-dakar-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "DAKAR 300",
    "category": "Adventure",
    "shortDescription": "Adventure · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/producto/dakar-300/",
    "available": true
  },
  {
    "id": "vento-dakar-330",
    "slug": "vento-dakar-330",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "DAKAR 330",
    "category": "Adventure",
    "shortDescription": "Adventure · 330 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "330 c.c."
      },
      {
        "label": "Potencia",
        "value": "30 HP"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "330 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "30 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/dakar-330/",
    "available": true
  },
  {
    "id": "vento-falkon-250z3",
    "slug": "vento-falkon-250z3",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "FALKON 250Z3",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/falkon-250/",
    "available": true
  },
  {
    "id": "vento-gladiator-200-2-0",
    "slug": "vento-gladiator-200-2-0",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "GLADIATOR 200. 2.0",
    "category": "Cuatrimoto",
    "shortDescription": "Cuatrimoto · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/gladiator-200-2-0/",
    "available": true
  },
  {
    "id": "vento-gtspro-300",
    "slug": "vento-gtspro-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "GTSPRO 300",
    "category": "Adventure",
    "shortDescription": "Adventure · 300 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Potencia",
        "value": "25 HP"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Adventure"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "300 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "25 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/gts-300/",
    "available": true
  },
  {
    "id": "vento-hipster-170",
    "slug": "vento-hipster-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "HIPSTER 170",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 170 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "170 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "170 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática"
      }
    ],
    "source": "https://www.vento.com/hipster-170/",
    "available": true
  },
  {
    "id": "vento-hyper-310",
    "slug": "vento-hyper-310",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "HYPER 310",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 310 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "310 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "310 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/producto/hyper-2310/",
    "available": true
  },
  {
    "id": "vento-intrepidsx-125",
    "slug": "vento-intrepidsx-125",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "INTREPIDSX 125",
    "category": "Ciudad",
    "shortDescription": "Ciudad · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/intrepid-125-sx/",
    "available": true
  },
  {
    "id": "vento-lithium-190",
    "slug": "vento-lithium-190",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "LITHIUM 190",
    "category": "Ciudad",
    "shortDescription": "Ciudad · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/lithium-190-5-0/",
    "available": true
  },
  {
    "id": "vento-m1-200",
    "slug": "vento-m1-200",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "M1 200",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 200 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "200 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática"
      }
    ],
    "source": "https://www.vento.com/m1-200/",
    "available": true
  },
  {
    "id": "vento-nitrox-250t3",
    "slug": "vento-nitrox-250t3",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "NITROX 250T3",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 250 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "250 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/nitrox-250-t3/",
    "available": true
  },
  {
    "id": "vento-nitrox-300t3",
    "slug": "vento-nitrox-300t3",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "NITROX 300T3",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 300 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "300 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/nitrox-300-t3/",
    "available": true
  },
  {
    "id": "vento-nitrox-330",
    "slug": "vento-nitrox-330",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "NITROX 330",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 330 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "330 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "330 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/nitrox-330-sr/",
    "available": true
  },
  {
    "id": "vento-ovni-170",
    "slug": "vento-ovni-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "OVNI 170",
    "category": "Ciudad",
    "shortDescription": "Ciudad · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/ovni-170/",
    "available": true
  },
  {
    "id": "vento-ovnitrack-170",
    "slug": "vento-ovnitrack-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "OVNITRACK 170",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/ovni-track-170/",
    "available": true
  },
  {
    "id": "vento-onyx-250",
    "slug": "vento-onyx-250",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "ONYX 250",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/onyx-250/",
    "available": true
  },
  {
    "id": "vento-phantom-170s",
    "slug": "vento-phantom-170s",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "PHANTOM 170S.",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 170 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "170 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "170 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática"
      }
    ],
    "source": "https://www.vento.com/phantom-170-s/",
    "available": true
  },
  {
    "id": "vento-rambler-125",
    "slug": "vento-rambler-125",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "RAMBLER 125",
    "category": "Doble Propósito",
    "shortDescription": "Doble Propósito · 125 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Doble Propósito"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "125 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/rambler-125/",
    "available": true
  },
  {
    "id": "vento-rapid-125rt",
    "slug": "vento-rapid-125rt",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "RAPID 125RT",
    "category": "Ciudad",
    "shortDescription": "Ciudad · 125 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c."
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "125 c.c."
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Semiautomática"
      }
    ],
    "source": "https://www.vento.com/rapid-125/",
    "available": true
  },
  {
    "id": "vento-reptile-200xt",
    "slug": "vento-reptile-200xt",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "REPTILE 200XT",
    "category": "Cuatrimoto",
    "shortDescription": "Cuatrimoto · 200 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      },
      {
        "label": "Potencia",
        "value": "12.8 HP"
      },
      {
        "label": "Transmisión",
        "value": "Automática CVT con reversa"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "200 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "12.8 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Automática CVT con reversa"
      }
    ],
    "source": "https://www.vento.com/reptile-trek-200/",
    "available": true
  },
  {
    "id": "vento-rex-350",
    "slug": "vento-rex-350",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "REX 350",
    "category": "Cuatrimoto",
    "shortDescription": "Cuatrimoto · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/rex-350-4x4-efi/",
    "available": true
  },
  {
    "id": "vento-rex-550",
    "slug": "vento-rex-550",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "REX 550",
    "category": "Cuatrimoto",
    "shortDescription": "Cuatrimoto · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Cuatrimoto"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/rex-550-4x4-efi/",
    "available": true
  },
  {
    "id": "vento-rocketman-300",
    "slug": "vento-rocketman-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "ROCKETMAN 300",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/producto/rocketman-racing-300/",
    "available": true
  },
  {
    "id": "vento-rocketman-300pl",
    "slug": "vento-rocketman-300pl",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "ROCKETMAN 300PL",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · 300 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Potencia",
        "value": "24 HP"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "300 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "24 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Manual"
      }
    ],
    "source": "https://www.vento.com/rocketman-platinum-300/",
    "available": true
  },
  {
    "id": "vento-ruda-f4-170",
    "slug": "vento-ruda-f4-170",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "RUDA F4 170",
    "category": "Motoneta",
    "shortDescription": "Motoneta · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/ruda-170-f3/",
    "available": true
  },
  {
    "id": "vento-ryder-190",
    "slug": "vento-ryder-190",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "RYDER 190",
    "category": "Ciudad",
    "shortDescription": "Ciudad · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/ryder-190-5-0/",
    "available": true
  },
  {
    "id": "vento-screamer-300",
    "slug": "vento-screamer-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "SCREAMER 300",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/screamer-300/",
    "available": true
  },
  {
    "id": "vento-screamer-sportivo-300",
    "slug": "vento-screamer-sportivo-300",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "SCREAMER SPORTIVO 300",
    "category": "Rebeldes / Custom",
    "shortDescription": "Rebeldes / Custom · Consultar página oficial",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión",
        "value": "Consultar página oficial"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Rebeldes / Custom"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Potencia / dato visible",
        "value": "Consultar página oficial"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Consultar página oficial"
      }
    ],
    "source": "https://www.vento.com/screamer-sportivo-300/",
    "available": true
  },
  {
    "id": "vento-spectra-125",
    "slug": "vento-spectra-125",
    "brand": "Vento",
    "brandSlug": "vento",
    "model": "SPECTRA 125",
    "category": "Ciudad",
    "shortDescription": "Ciudad · 125 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c."
      },
      {
        "label": "Potencia",
        "value": "7 HP"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática 4 velocidades"
      }
    ],
    "specs": [
      {
        "label": "Categoría / familia",
        "value": "Ciudad"
      },
      {
        "label": "Cilindrada / dato visible",
        "value": "125 c.c."
      },
      {
        "label": "Potencia / dato visible",
        "value": "7 HP"
      },
      {
        "label": "Transmisión / dato visible",
        "value": "Semiautomática 4 velocidades"
      }
    ],
    "source": "https://www.vento.com/spectra-7i/",
    "available": true
  },
  {
    "id": "bajaj-avenger-cruise-220",
    "slug": "bajaj-avenger-cruise-220",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Avenger Cruise 220",
    "category": "Avenger",
    "shortDescription": "Avenger · 220 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/1lOhw7NHuiwmebq9a9Ihnc/73fc85f769ea62664f50ba64c1b08fb0/Bajaj_Avenger_220_Cruise_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/1lOhw7NHuiwmebq9a9Ihnc/73fc85f769ea62664f50ba64c1b08fb0/Bajaj_Avenger_220_Cruise_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2IPNulaWULipBCLHlPmejY/6091d6cece6c43c4e79132b8432b3232/Moto_Bajaj_Avenger_220_Cruise_2022_Galgo_M_xico_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5tJLeiKuHRTu2skAPoO0zK/4205034e51ff5d0f8983b3296a5f40e9/Moto_Bajaj_Avenger_220_Cruise_2022_Galgo_M_xico_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6GqeegRpoRulElp0KaRRc3/edc2c9778ed426efc0e414c3bf225f98/Moto_Bajaj_Avenger_220_Cruise_2022_Galgo_M_xico_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Avenger"
      },
      {
        "label": "Cilindrada",
        "value": "220 cc"
      },
      {
        "label": "Potencia",
        "value": "19.04 HP @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "17.05 Nm @ 7,000 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Refrigeración por aceite"
      },
      {
        "label": "Rendimiento",
        "value": "≈24–30 km/L"
      },
      {
        "label": "Peso",
        "value": "159 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero con ABS monocanal / tambor trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Avenger"
      },
      {
        "label": "Cilindrada",
        "value": "220 cc"
      },
      {
        "label": "Potencia",
        "value": "19.04 HP @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "17.05 Nm @ 7,000 rpm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica (FI)"
      },
      {
        "label": "Refrigeración",
        "value": "Refrigeración por aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero con ABS monocanal / tambor trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica con buje antifricción"
      },
      {
        "label": "Suspensión trasera",
        "value": "Doble amortiguador"
      },
      {
        "label": "Neumáticos D/T",
        "value": "90/90-17 / 130/90-15"
      },
      {
        "label": "Tanque",
        "value": "13–14 L"
      },
      {
        "label": "Peso",
        "value": "159 kg"
      },
      {
        "label": "Tablero",
        "value": "Análogo con indicador en tanque"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈24–30 km/L"
      }
    ],
    "source": "https://www.bajajauto.com/es-mx/motocicletas/avenger-cruise-220",
    "available": true
  },
  {
    "id": "bajaj-boxer-bm-150",
    "slug": "bajaj-boxer-bm-150",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Boxer BM 150",
    "category": "Boxer",
    "shortDescription": "Boxer · 144.8 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/zlbNnVfDUJiOhVNIu9xAj/6a695756f483b929cf2c49ddea2f7bc5/Bajaj_Boxer_BM_150_Galgo_M__xico_Principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/zlbNnVfDUJiOhVNIu9xAj/6a695756f483b929cf2c49ddea2f7bc5/Bajaj_Boxer_BM_150_Galgo_M__xico_Principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/9H1KeWFtBS9VIo9pFBBXV/04f5df150c72c7d6eb09b5f76db7abfd/Bajaj_Boxer_BM_150_Galgo_M__xico_Carrousel_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/jKSi7yFs6GQBSWsjlJdJZ/4a73990cc6116e965de83322dc46f320/Bajaj_Boxer_BM_150_Galgo_M__xico_Carrousel_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4yajGSHdNxs0OyAlSijjBt/2b827d5d1fa76383894d69c1081f0cc8/Bajaj_Boxer_BM_150_Galgo_M__xico_Carrousel_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Boxer"
      },
      {
        "label": "Cilindrada",
        "value": "144.8 cc"
      },
      {
        "label": "Potencia",
        "value": "11.8 HP"
      },
      {
        "label": "Torque",
        "value": "≈12.3 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈45 km/L"
      },
      {
        "label": "Peso",
        "value": "≈123 kg"
      },
      {
        "label": "Frenos",
        "value": "Tambor delantero / tambor trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Boxer"
      },
      {
        "label": "Cilindrada",
        "value": "144.8 cc"
      },
      {
        "label": "Potencia",
        "value": "11.8 HP"
      },
      {
        "label": "Torque",
        "value": "≈12.3 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Carburador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Tambor delantero / tambor trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Doble amortiguador SNS"
      },
      {
        "label": "Neumáticos D/T",
        "value": "90/90-17 / 100/90-17"
      },
      {
        "label": "Tanque",
        "value": "10.7 L"
      },
      {
        "label": "Peso",
        "value": "≈123 kg"
      },
      {
        "label": "Tablero",
        "value": "Análogo"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈45 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX250-bajaj-boxer-bm-150",
    "available": true
  },
  {
    "id": "bajaj-dominar-250-ug",
    "slug": "bajaj-dominar-250-ug",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Dominar 250 UG",
    "category": "Dominar",
    "shortDescription": "Dominar · 248.8–249 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/CJZUg0WwHaLOwxWZaO8Sq/72f7a205209ae049682b3d2e42b7aae8/00.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/CJZUg0WwHaLOwxWZaO8Sq/72f7a205209ae049682b3d2e42b7aae8/00.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2WKRzsqXZd3IbSzEYFqPeY/76265649e1991f82d2ebaa46776b923c/Bajaj_Dominar_250_-_Amarillo_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2EsyPJaVSov6OAcOz6Xhkx/f85367802cc1d1140b70d9073b3e2010/Bajaj_Dominar_250_-_Rojo_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4JHIkUTdHIPwQNkOdM2T5h/025b139967633d735167b01bc7ab694a/Bajaj_Dominar_250_-_Negra_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "248.8–249 cc"
      },
      {
        "label": "Potencia",
        "value": "26.63 HP"
      },
      {
        "label": "Torque",
        "value": "23.5 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈37 km/L"
      },
      {
        "label": "Peso",
        "value": "≈180 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "248.8–249 cc"
      },
      {
        "label": "Potencia",
        "value": "26.63 HP"
      },
      {
        "label": "Torque",
        "value": "23.5 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla invertida"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/80-17"
      },
      {
        "label": "Tanque",
        "value": "13 L"
      },
      {
        "label": "Peso",
        "value": "≈180 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈37 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX246-bajaj-dominar-250-ug",
    "available": true
  },
  {
    "id": "bajaj-dominar-400-te",
    "slug": "bajaj-dominar-400-te",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Dominar 400 TE",
    "category": "Dominar",
    "shortDescription": "Dominar · 373.3 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3POa28ljuzZgmj1axnWi80/98b45f10825a4e1cd8806c223739801c/Bajaj_Dominar_400_UG_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3POa28ljuzZgmj1axnWi80/98b45f10825a4e1cd8806c223739801c/Bajaj_Dominar_400_UG_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1Z11KMY2wxerJJYHMTjYuO/3619985923d2d1c20b3681730a798e60/Dominar_400_Galgo_Mexico_Carrousel_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7KkTVIiEm0cqNuNkTIjABh/6fc2eb9bfbbe9fdce67839576fb3da98/Dominar_400_Galgo_Mexico_Carrousel_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4Vx15tnnaTjDTM6bMGCKE3/d484a814acaf44459060e7eeacf3a1f0/Bajaj_Dominar_400_Touring_001.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "373.3 cc"
      },
      {
        "label": "Potencia",
        "value": "39.9 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈25–28 km/L"
      },
      {
        "label": "Peso",
        "value": "≈193 kg con kit touring"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "373.3 cc"
      },
      {
        "label": "Potencia",
        "value": "39.9 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla invertida 43 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "110/70-17 / 150/60-17"
      },
      {
        "label": "Tanque",
        "value": "13 L"
      },
      {
        "label": "Peso",
        "value": "≈193 kg con kit touring"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈25–28 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX253-bajaj-dominar-400-te",
    "available": true
  },
  {
    "id": "bajaj-dominar-400-ug",
    "slug": "bajaj-dominar-400-ug",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Dominar 400 UG",
    "category": "Dominar",
    "shortDescription": "Dominar · 373.3 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/7gOgd7IxhELCRVvsDNi4Lh/918f6a7325dc74b0f7b15b82b206ad65/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/7gOgd7IxhELCRVvsDNi4Lh/918f6a7325dc74b0f7b15b82b206ad65/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3hwW5s9KVwDe8PL9XZMg9y/557059b7da0854977736f31f1abd5e8c/DOM400-ROJA.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2bvTgLJZvsFwRUKAitZ46O/3d835fd5134b05f612a94141881aa16f/imagen_principal__79_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4Vx15tnnaTjDTM6bMGCKE3/d484a814acaf44459060e7eeacf3a1f0/Bajaj_Dominar_400_Touring_001.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "373.3 cc"
      },
      {
        "label": "Potencia",
        "value": "39.9 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈25 km/L"
      },
      {
        "label": "Peso",
        "value": "≈187–193 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Dominar"
      },
      {
        "label": "Cilindrada",
        "value": "373.3 cc"
      },
      {
        "label": "Potencia",
        "value": "39.9 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla invertida 43 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "110/70-17 / 150/60-17"
      },
      {
        "label": "Tanque",
        "value": "13 L"
      },
      {
        "label": "Peso",
        "value": "≈187–193 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈25 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX247-bajaj-dominar-400-ug",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-125-fi-cbs",
    "slug": "bajaj-pulsar-n-125-fi-cbs",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 125 FI CBS",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 124.6 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3ZFcON0QpmSCc2koYYtuHE/12cc8def0c3a4bbfcb93c3e48d0b98c9/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3ZFcON0QpmSCc2koYYtuHE/12cc8def0c3a4bbfcb93c3e48d0b98c9/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7ADntWPWghGAPbHmHVTo3v/7ff44e7598c0d1862bfeb2a816da7ad3/galeria01.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5zEj9HgdFc4ZQsgJWobtzi/3efb1a67e64b7f27e2a37bea2a1e6e95/galeria02.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2Cskvamxp6hOgpYSrG8pK4/8b3ea64ad9d61919394b8bf873698a5c/galeria03.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "124.6 cc"
      },
      {
        "label": "Potencia",
        "value": "12 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈60 km/L"
      },
      {
        "label": "Peso",
        "value": "125 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero CBS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "124.6 cc"
      },
      {
        "label": "Potencia",
        "value": "12 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero CBS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock"
      },
      {
        "label": "Neumáticos D/T",
        "value": "80/100-17 / 110/80-17"
      },
      {
        "label": "Tanque",
        "value": "9.5 L"
      },
      {
        "label": "Peso",
        "value": "125 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈60 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX3098-bajaj-pulsar-n-125",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-125-car",
    "slug": "bajaj-pulsar-n-125-car",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 125 Car",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 125 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3ZFcON0QpmSCc2koYYtuHE/12cc8def0c3a4bbfcb93c3e48d0b98c9/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3ZFcON0QpmSCc2koYYtuHE/12cc8def0c3a4bbfcb93c3e48d0b98c9/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7ADntWPWghGAPbHmHVTo3v/7ff44e7598c0d1862bfeb2a816da7ad3/galeria01.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5zEj9HgdFc4ZQsgJWobtzi/3efb1a67e64b7f27e2a37bea2a1e6e95/galeria02.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2Cskvamxp6hOgpYSrG8pK4/8b3ea64ad9d61919394b8bf873698a5c/galeria03.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "11.5 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈40 km/L"
      },
      {
        "label": "Peso",
        "value": "125 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "11.5 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Carburador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock"
      },
      {
        "label": "Neumáticos D/T",
        "value": "90/90-17 / 120/80-17"
      },
      {
        "label": "Tanque",
        "value": "9.5 L"
      },
      {
        "label": "Peso",
        "value": "125 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈40 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX3506-bajaj-pulsar-n-125-carburada",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-125-ug",
    "slug": "bajaj-pulsar-ns-125-ug",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 125 UG",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 125 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/6PcgCRDs4NkjzV2tCweDbG/cbae515f23432f856b4eba5da384dfa2/Bajaj_Pulsar_NS_125_UG_Imagen_principal2_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/6PcgCRDs4NkjzV2tCweDbG/cbae515f23432f856b4eba5da384dfa2/Bajaj_Pulsar_NS_125_UG_Imagen_principal2_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/33yzt3nvg663JfLE9j8fks/2f40fc6e47535450d310ed596dce422f/Bajaj_Pulsar_NS_125_UG_Imagen_principal_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2zzIVVRu5elZNduxiQwlcb/16bde9efa05cf324fc245a88dc33975e/Bajaj_Pulsar_NS_125_UG_Imagen_principal3_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6zli7lPql404aOOiXkKi8t/cc2073ca0e1d872ab6e4a8d7ed1e4a46/Bajaj_Pulsar_NS_125_UG_Galeria2_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "12 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈45 km/L"
      },
      {
        "label": "Peso",
        "value": "141 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "12 HP"
      },
      {
        "label": "Torque",
        "value": "11 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Según versión/mercado; confirmar unidad"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / tambor trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock"
      },
      {
        "label": "Neumáticos D/T",
        "value": "80/100-17 / 100/90-17"
      },
      {
        "label": "Tanque",
        "value": "10 L"
      },
      {
        "label": "Peso",
        "value": "141 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital/Análogo"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈45 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX1512-bajaj-pulsar-ns-125-ug",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-160",
    "slug": "bajaj-pulsar-n-160",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 160",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 164.82 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/Bnojn2wxWVc2qWx96qWLm/630f174fadac572ee64707af3ee69d05/Moto_Bajaj_Pulsar_N_160_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/Bnojn2wxWVc2qWx96qWLm/630f174fadac572ee64707af3ee69d05/Moto_Bajaj_Pulsar_N_160_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5Pvep5iOTWaz6qK713KUAB/b4954d29f5f842e792845c549335da86/Bajaj_Pulsar_N_160_Galeria1_Galgo_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/35OPjiAqE6YN1uVqZmTOOC/9f40cd553bbc4f9c62a966b67cbc9040/Bajaj_Pulsar_N_160_Galeria2_Galgo_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6BkAbJZS9IrzkEx9THpE1r/f305b5b5bf167a966d7d911a8cfb0d4e/Bajaj_Pulsar_N_160_Galeria3_Galgo_.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire/aceite según configuración"
      },
      {
        "label": "Rendimiento",
        "value": "≈38–40 km/L"
      },
      {
        "label": "Peso",
        "value": "154 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Carburador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire/aceite según configuración"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "14 L"
      },
      {
        "label": "Peso",
        "value": "154 kg"
      },
      {
        "label": "Tablero",
        "value": "Mixto"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈38–40 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX451-bajaj-pulsar-n-160",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-160",
    "slug": "bajaj-pulsar-ns-160",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 160",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 160 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/5QeSMp1USvAGiUM7NzgTeR/af6d65725c22916eeb4f084841be6f39/Bajaj_Pulsar_160_NS_TD_ABS_UG_Galgo_Per_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/5QeSMp1USvAGiUM7NzgTeR/af6d65725c22916eeb4f084841be6f39/Bajaj_Pulsar_160_NS_TD_ABS_UG_Galgo_Per_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1mTD09VM522r28MIdVjDqj/4d5243a9d4543f15022c9fd397bbb96e/bajaj-pulsar-160-ns-fi-ug-plano-lateral.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2tRMD1yX8wYdF1iDyzrUGW/dd8fafbd78aef5214bbdfec300becea4/bajaj-pulsar-160-ns-fi-ug-plano-lateral.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7HcdOqWLHwyyTn8mh9ZN9Z/6dfdc80ff05063c0a5892d79b5b99ac1/bajaj-pulsar-160-ns-fi-ug-plano-diagonal.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "160 cc"
      },
      {
        "label": "Potencia",
        "value": "15.5 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "148 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero CBS / disco trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "160 cc"
      },
      {
        "label": "Potencia",
        "value": "15.5 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero CBS / disco trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "90/90-17 / 120/80-17"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Peso",
        "value": "148 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital/Análogo según año"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX3262-bajaj-pulsar-ns-160",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-160-fi-abs-ug",
    "slug": "bajaj-pulsar-n-160-fi-abs-ug",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 160 FI + ABS UG",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 164.82 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/5KcdAR7h2T6DgsfOZabTyo/d38c3df3a068bd1fc5683c9a35e707a3/Bajaj_Pulsar_N_160_2024_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/5KcdAR7h2T6DgsfOZabTyo/d38c3df3a068bd1fc5683c9a35e707a3/Bajaj_Pulsar_N_160_2024_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1HdyzIiEKQMmncjdrpAVKv/49d0f11013ad5822f82c7f734ca82979/Bajaj_Pulsar_N_160_2024_Galgo_M_xico__1_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/17bGs6X2qCjV4SsSn7lsKk/34eefb707ae9cb367dd986d6fa8a99a6/Bajaj_Pulsar_N_160_2024_Galgo_M_xico__2_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4TywesUd3Me6UgQStm27aQ/d3513e2c93df56462f2dae107a1ec5e5/Bajaj_Pulsar_N_160_2024_Galgo_M_xico__3_.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "≈154 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "14 L"
      },
      {
        "label": "Peso",
        "value": "≈154 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.motosbajaj.com.mx/product-page/pulsar-n-160-fi-abs-ug",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-160-fi-abs-premium",
    "slug": "bajaj-pulsar-n-160-fi-abs-premium",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 160 FI + ABS Premium",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 164.82 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/6R3mZW6WdJA4lCPreF0bR9/cea4a278c21bbaa870e65a795508be8c/Bajaj_Pulsar_N_160_FI_ABS_Premium_Imagen_principal_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/6R3mZW6WdJA4lCPreF0bR9/cea4a278c21bbaa870e65a795508be8c/Bajaj_Pulsar_N_160_FI_ABS_Premium_Imagen_principal_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2vDp67I7LVLqrtSPy8dYty/23e3a9de644016efc8010c9e6ce1927b/Bajaj_Pulsar_N_160_Galeria_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7G19Uom8IAsE5hzQYHr4uS/b3f04385bc6007cb2fe759839b8d316b/Bajaj_Pulsar_N_160_Galeria_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "≈40 km/L"
      },
      {
        "label": "Peso",
        "value": "154 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "164.82 cc"
      },
      {
        "label": "Potencia",
        "value": "15.7 HP"
      },
      {
        "label": "Torque",
        "value": "14.6 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica invertida"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "14 L"
      },
      {
        "label": "Peso",
        "value": "154 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈40 km/L"
      }
    ],
    "source": "https://www.motosbajaj.com.mx/product-page/pulsar-n-160-fi-abs-premium",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-200",
    "slug": "bajaj-pulsar-ns-200",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 200",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 199.5–200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/E5Y5eGWA8YlhfFVyNISfb/c5e58bc6750e06e0ded5388af24a5d11/Bajaj_pulsar_ns_200_galgo_m_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/E5Y5eGWA8YlhfFVyNISfb/c5e58bc6750e06e0ded5388af24a5d11/Bajaj_pulsar_ns_200_galgo_m_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3T33LfLh7EyM4dhQZz2Kbl/35439be7578c0bb18b55622598d7a1fc/bajaj-pulsar-ns-200-close-up-faro.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/33B9SMEgrMFZ1Jh9DXtxY9/cf5f67b169894e9c8ac794f655f981d6/bajaj-pulsar-ns-200-close-up-tablero.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/65i63xwRj68OqlIkt0LX6o/08eb3c833ebdd3c30efbb526c55c57d2/bajaj-pulsar-ns-200-close-up-motor.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "18.6 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "≈158 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "18.6 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Carburador / confirmar año"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Peso",
        "value": "≈158 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital/Análogo"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX1172-bajaj-pulsar-ns-200-2023",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-200-fi-abs",
    "slug": "bajaj-pulsar-ns-200-fi-abs",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 200 FI ABS",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 199.5–200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/1byr0derItwW6P4WhMqCRV/25f5462a063a85b5107a07313b94d2fa/Imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/1byr0derItwW6P4WhMqCRV/25f5462a063a85b5107a07313b94d2fa/Imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/v4fOlCKRzYAN19XM5c34Y/8fb6196fba728d3d3c9af41bc112ccfe/descarga__1_.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/59LrRGnv0GSsjy7GH4ccJc/2c76c4ccae11bf57d671ad617503e758/descarga__2_.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3Hn33KZ2Ip7WLybyLIU5PZ/12d8ac73c4d465a03d02280da3eb33f3/Bajaj_Pulsar_NS_200_15.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "18.74 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "≈158 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "18.74 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Invertida"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Peso",
        "value": "≈158 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX245-bajaj-pulsar-200-ns-fi-abs",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-250",
    "slug": "bajaj-pulsar-n-250",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 250",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 249–250 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/4RxbRFRNzlhu2RJfqBgeF7/1ca682a20ae05bbf97b356618ab89b43/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/4RxbRFRNzlhu2RJfqBgeF7/1ca682a20ae05bbf97b356618ab89b43/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7GmjE6o1kT8tkkJeTkQU8D/a564734a6567291cacacb8626ae834ba/Bajaj_Pulsar_N_250_Galeria1_Galgo.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3PF50CdSIDjHJXawo8VHGS/84feb291c58dc0a37184a0d3e172fbc0/Bajaj_Pulsar_N_250_Galeria2_Galgo.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1chgHSW62yNzJxmKq32hhT/1593e0214e379ce2945bced0878719b4/Bajaj_Pulsar_N_250_Galeria3_Galgo.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "249–250 cc"
      },
      {
        "label": "Potencia",
        "value": "24 HP"
      },
      {
        "label": "Torque",
        "value": "21 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "≈162 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "249–250 cc"
      },
      {
        "label": "Potencia",
        "value": "24 HP"
      },
      {
        "label": "Torque",
        "value": "21 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Carburador"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco delantero / disco trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock ajustable"
      },
      {
        "label": "Neumáticos D/T",
        "value": "110/80-17 / 140/70-17"
      },
      {
        "label": "Tanque",
        "value": "14 L"
      },
      {
        "label": "Peso",
        "value": "≈162 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX329-bajaj-pulsar-n-250",
    "available": true
  },
  {
    "id": "bajaj-pulsar-n-250-fi-abs",
    "slug": "bajaj-pulsar-n-250-fi-abs",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar N 250 FI + ABS",
    "category": "Pulsar N",
    "shortDescription": "Pulsar N · 249.07 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/BsE5skGm1R5RHIbF3ep0m/8daeafdca7278687d9075285ac56a369/imagen_principal.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/BsE5skGm1R5RHIbF3ep0m/8daeafdca7278687d9075285ac56a369/imagen_principal.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1zVK85ueluY4CKlDG65Pf9/520414adaf73fcca72932352374e4c7c/33_pulsar-n250_360_black_2023_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6vujIsqYWGIqaOtCW9FyWS/8f2db20e5d50e4cd26d8e9c29357f8ce/21_pulsar-n250_360_black_2023_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/50XMpF7xM98VTjzQqt1cOB/7cb8b93d9dd0a98dcdd9be6f54c7b4dd/pulsar_2024_roja_1_1_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "249.07 cc"
      },
      {
        "label": "Potencia",
        "value": "24 HP"
      },
      {
        "label": "Torque",
        "value": "21.5 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Rendimiento",
        "value": "≈30–35 km/L"
      },
      {
        "label": "Peso",
        "value": "≈162 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar N"
      },
      {
        "label": "Cilindrada",
        "value": "249.07 cc"
      },
      {
        "label": "Potencia",
        "value": "24 HP"
      },
      {
        "label": "Torque",
        "value": "21.5 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS delantero / disco ABS trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "14 L"
      },
      {
        "label": "Peso",
        "value": "≈162 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈30–35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX2450-bajaj-n-250-fi-abs",
    "available": true
  },
  {
    "id": "bajaj-pulsar-f-250",
    "slug": "bajaj-pulsar-f-250",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar F 250",
    "category": "Pulsar F",
    "shortDescription": "Pulsar F · 249.07 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/2BvXVsnnxx4e4AdH0C5fFr/eec3e771820eeafd61d05180209f0acc/Bajaj_Pulsar_F250_Imagen_principal_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/2BvXVsnnxx4e4AdH0C5fFr/eec3e771820eeafd61d05180209f0acc/Bajaj_Pulsar_F250_Imagen_principal_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7pxBgY1UqWlS907DAb6PVw/1d66b6538e8b5585673867a90f9f4de5/Bajaj_Pulsar_F250_Galeria5_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7vU72EZ3rG34lvDP6CUCfu/efb6605fad3546fe2e036af73da522bb/Bajaj_Pulsar_F250_Galeria4_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/hIWTawxGk1dhPw0BZqOJm/c0067ef5f412818b338432ac6161944d/Bajaj_Pulsar_F250_Galeria2_Galgo.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar F"
      },
      {
        "label": "Cilindrada",
        "value": "249.07 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "≈21.5 Nm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Rendimiento",
        "value": "≈35 km/L"
      },
      {
        "label": "Peso",
        "value": "164 kg"
      },
      {
        "label": "Frenos",
        "value": "ABS delantero / disco trasero"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar F"
      },
      {
        "label": "Cilindrada",
        "value": "249.07 cc"
      },
      {
        "label": "Potencia",
        "value": "24.5 HP"
      },
      {
        "label": "Torque",
        "value": "≈21.5 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Frenos",
        "value": "ABS delantero / disco trasero"
      },
      {
        "label": "Suspensión delantera",
        "value": "Telescópica con buje antifricción"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "13–14 L"
      },
      {
        "label": "Peso",
        "value": "164 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX3265-bajaj-pulsar-f250",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-400-z",
    "slug": "bajaj-pulsar-ns-400-z",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 400 Z",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 373.27 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/2FmKm74RLvilDBdmUu6iny/ae3ee30fe70fb481dd86913423976a48/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/2FmKm74RLvilDBdmUu6iny/ae3ee30fe70fb481dd86913423976a48/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/Z5N28UdsbwqSSgqdEQqTp/cc2de093a47e857937df2de716ea867c/Bajaj_Pulsar_NS_400z_01.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5zspEsJvQkPYwH2WOYHzD/2f92f14519911ba4deda738a91c106f1/Bajaj_Pulsar_NS_400z_02.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7sMRbIgNtKdlfz5T9ol0o0/70b5bf999687eeff10076a6a8532a3e1/Bajaj_Pulsar_NS_400z_03.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "373.27 cc"
      },
      {
        "label": "Potencia",
        "value": "39.45–40 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈30 km/L"
      },
      {
        "label": "Peso",
        "value": "≈174 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "373.27 cc"
      },
      {
        "label": "Potencia",
        "value": "39.45–40 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "USD 43 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox ajustable"
      },
      {
        "label": "Neumáticos D/T",
        "value": "110/70-17 / 140/70-17"
      },
      {
        "label": "Tanque",
        "value": "12–13 L"
      },
      {
        "label": "Peso",
        "value": "≈174 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital con conectividad"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈30 km/L"
      }
    ],
    "source": "https://www.motosbajaj.com.mx/product-page/pulsar-ns-400-z",
    "available": true
  },
  {
    "id": "bajaj-pulsar-ns-400-ug",
    "slug": "bajaj-pulsar-ns-400-ug",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar NS 400 UG",
    "category": "Pulsar NS",
    "shortDescription": "Pulsar NS · 373.27 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/2FmKm74RLvilDBdmUu6iny/ae3ee30fe70fb481dd86913423976a48/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/2FmKm74RLvilDBdmUu6iny/ae3ee30fe70fb481dd86913423976a48/imagen_principal.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/Z5N28UdsbwqSSgqdEQqTp/cc2de093a47e857937df2de716ea867c/Bajaj_Pulsar_NS_400z_01.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5zspEsJvQkPYwH2WOYHzD/2f92f14519911ba4deda738a91c106f1/Bajaj_Pulsar_NS_400z_02.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7sMRbIgNtKdlfz5T9ol0o0/70b5bf999687eeff10076a6a8532a3e1/Bajaj_Pulsar_NS_400z_03.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "373.27 cc"
      },
      {
        "label": "Potencia",
        "value": "39.45 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈25–30 km/L"
      },
      {
        "label": "Peso",
        "value": "≈174 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar NS"
      },
      {
        "label": "Cilindrada",
        "value": "373.27 cc"
      },
      {
        "label": "Potencia",
        "value": "39.45 HP"
      },
      {
        "label": "Torque",
        "value": "35 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ABS doble canal / disco ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Barras invertidas"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox"
      },
      {
        "label": "Neumáticos D/T",
        "value": "110/70-17 / 150/60-17"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Peso",
        "value": "≈174 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈25–30 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX3566-bajaj-pulsar-ns-400z-ug",
    "available": true
  },
  {
    "id": "bajaj-pulsar-200-rs",
    "slug": "bajaj-pulsar-200-rs",
    "brand": "Bajaj",
    "brandSlug": "bajaj",
    "model": "Pulsar 200 RS",
    "category": "Pulsar RS",
    "shortDescription": "Pulsar RS · 199.5–200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3DiG5vbUlzNn2cnYuO6oad/20453f7c5a412ae9ea2aa815a6f8a390/bajaj-pulsar-rs-200-primer-plano.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3DiG5vbUlzNn2cnYuO6oad/20453f7c5a412ae9ea2aa815a6f8a390/bajaj-pulsar-rs-200-primer-plano.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2Jv1QbhUaS0GJ3LlqSu53O/7637da0d405737743991dc0979b6e188/bajaj-pulsar-rs-200-close-up-faro.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5O8xoCzMiAL0xnqwTYElsi/6bc52bf0139991f16e69bd89657b7e3d/bajaj-pulsar-rs-200-close-up-tablero.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3q9nZBJhOqRu46qXqKhEuv/9de96c83372a604dc3a295338c6fd470/bajaj-pulsar-rs-200-close-up-motor.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Pulsar RS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.14 HP"
      },
      {
        "label": "Torque",
        "value": "18.3 Nm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Rendimiento",
        "value": "≈35–40 km/L"
      },
      {
        "label": "Peso",
        "value": "≈166 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado ABS / disco ventilado ABS"
      }
    ],
    "specs": [
      {
        "label": "Familia",
        "value": "Pulsar RS"
      },
      {
        "label": "Cilindrada",
        "value": "199.5–200 cc"
      },
      {
        "label": "Potencia",
        "value": "24.14 HP"
      },
      {
        "label": "Torque",
        "value": "18.3 Nm"
      },
      {
        "label": "Alimentación",
        "value": "Inyección electrónica"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado ABS / disco ventilado ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Horquilla telescópica"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock Nitrox ajustable"
      },
      {
        "label": "Neumáticos D/T",
        "value": "100/80-17 / 130/70-17"
      },
      {
        "label": "Tanque",
        "value": "13 L"
      },
      {
        "label": "Peso",
        "value": "≈166 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital/Análogo"
      },
      {
        "label": "Rendimiento estimado",
        "value": "≈35–40 km/L"
      }
    ],
    "source": "https://www.galgo.com/mx/motos/MX1333-bajaj-pulsar-rs-200",
    "available": true
  },
  {
    "id": "islo-rabbit-rush",
    "slug": "islo-rabbit-rush",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Rabbit Rush",
    "category": "Motoneta",
    "shortDescription": "Motoneta · 149.5 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2024/11/rabbit_banner1-1400x900.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2024/11/rabbit_banner1-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/rabbit_banner2-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/rabbit_banner3-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/rabbit_banner4-1400x900.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "7 hp @ 7,500 rpm"
      },
      {
        "label": "Torque",
        "value": "10.8 Nm (Galgo)"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "2.8 L/100 km"
      },
      {
        "label": "Peso",
        "value": "106 kg"
      },
      {
        "label": "Frenos",
        "value": "Mecánico por expansión"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Motoneta"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "7 hp @ 7,500 rpm"
      },
      {
        "label": "Torque",
        "value": "10.8 Nm (Galgo)"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      },
      {
        "label": "Embrague",
        "value": "Centrífugo"
      },
      {
        "label": "Freno delantero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Freno trasero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Rines",
        "value": "Aleación"
      },
      {
        "label": "Neumático delantero",
        "value": "2.15-10"
      },
      {
        "label": "Neumático trasero",
        "value": "2.15-10"
      },
      {
        "label": "Tanque",
        "value": "4 L"
      },
      {
        "label": "Rendimiento",
        "value": "2.8 L/100 km"
      },
      {
        "label": "Peso",
        "value": "106 kg"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "205 × 71 × 125 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital personalizable"
      },
      {
        "label": "Iluminación",
        "value": "Híbrida LED/halógena"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Crashbar, cubrepuños, bloqueo de llave, compartimentos, USB y parrilla"
      }
    ],
    "source": "https://www.islo.com.mx/producto/rabbit-ruch/",
    "available": true
  },
  {
    "id": "islo-trip-150",
    "slug": "islo-trip-150",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Trip 150",
    "category": "Utilitaria",
    "shortDescription": "Utilitaria · 149.5 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2024/11/ISLO-TRIP150_LIFESTYLE_1.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2024/11/ISLO-TRIP150_LIFESTYLE_1.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/ISLO-TRIP150_LIFESTYLE_3.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/ISLO-TRIP150_LIFESTYLE_5.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/ISLO-TRIP150_LIFESTYLE_6A.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "9.6 hp @ 8,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/L"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "9.6 hp @ 8,500 rpm"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Embrague",
        "value": "Multidisco en baño de aceite"
      },
      {
        "label": "Freno delantero",
        "value": "Disco ventilado"
      },
      {
        "label": "Freno trasero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Rines",
        "value": "Aleación"
      },
      {
        "label": "Neumático delantero",
        "value": "2.75-18"
      },
      {
        "label": "Neumático trasero",
        "value": "90/90-18"
      },
      {
        "label": "Tanque",
        "value": "9 L"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/L"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "198 × 77 × 114 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Híbrido análogo/digital"
      },
      {
        "label": "Iluminación",
        "value": "LED/DRL"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Parrilla de carga, amortiguadores reforzados y puerto USB"
      }
    ],
    "source": "https://www.islo.com.mx/producto/trip-150/",
    "available": true
  },
  {
    "id": "islo-freedom",
    "slug": "islo-freedom",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Freedom",
    "category": "Utilitaria",
    "shortDescription": "Utilitaria · 149.5 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2024/11/FREEDOM_banner_1-1400x900.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2024/11/FREEDOM_banner_1-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/FREEDOM_banner_2-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/FREEDOM_banner_3-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/FREEDOM_banner_6-1400x900.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "10.4 hp @ 7,000 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/L"
      },
      {
        "label": "Peso",
        "value": "92 kg (resumen) / 130 kg (tabla)"
      },
      {
        "label": "Frenos",
        "value": "Mecánico por expansión"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "149.5 cc"
      },
      {
        "label": "Potencia",
        "value": "10.4 hp @ 7,000 rpm"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos, 4V"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Embrague",
        "value": "Multidisco en baño de aceite"
      },
      {
        "label": "Freno delantero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Freno trasero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Rines",
        "value": "Rayos"
      },
      {
        "label": "Neumático delantero",
        "value": "2.75-18"
      },
      {
        "label": "Neumático trasero",
        "value": "90/90-18"
      },
      {
        "label": "Tanque",
        "value": "14.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/L"
      },
      {
        "label": "Peso",
        "value": "92 kg (resumen) / 130 kg (tabla)"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "203 × 79 × 114 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Análogo"
      },
      {
        "label": "Iluminación",
        "value": "Halógena"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Llave antirrobo, parrilla reforzada y amortiguadores reforzados"
      }
    ],
    "source": "https://www.islo.com.mx/producto/freedom/",
    "available": true
  },
  {
    "id": "islo-mutant-250r",
    "slug": "islo-mutant-250r",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Mutant 250R",
    "category": "Street",
    "shortDescription": "Street · 250 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2024/11/mutant_banner_1-1400x900.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2024/11/mutant_banner_1-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/mutant_banner_2-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/mutant_banner_3-1400x900.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2024/11/mutant_banner_4-1400x900.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "16 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "20 Nm (Galgo)"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "25 km/L"
      },
      {
        "label": "Peso",
        "value": "120 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "16 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "20 Nm (Galgo)"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos, 4V"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Embrague",
        "value": "Multidisco en baño de aceite"
      },
      {
        "label": "Freno delantero",
        "value": "Disco ventilado"
      },
      {
        "label": "Freno trasero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Rines",
        "value": "Aleación"
      },
      {
        "label": "Neumático delantero",
        "value": "10/80-16"
      },
      {
        "label": "Neumático trasero",
        "value": "120/70-17"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Rendimiento",
        "value": "25 km/L"
      },
      {
        "label": "Peso",
        "value": "120 kg"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "254 × 82 × 116 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Digital"
      },
      {
        "label": "Iluminación",
        "value": "Halógena (ficha); LED/DRL en descripción"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Crashbar, sliders, USB, amortiguadores reforzados y respaldo de pasajero"
      }
    ],
    "source": "https://www.islo.com.mx/producto/mutant-250r/",
    "available": true
  },
  {
    "id": "islo-blackwing",
    "slug": "islo-blackwing",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Blackwing",
    "category": "Crucero",
    "shortDescription": "Crucero · 250 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2025/04/ISLO-BLACKWING-LS_1.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2025/04/ISLO-BLACKWING-LS_1.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/04/ISLO-BLACKWING-LS_2.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/04/ISLO-BLACKWING-LS_3.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/04/ISLO-BLACKWING-LS_4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Crucero"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 hp @ 8,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Radiador de aceite"
      },
      {
        "label": "Rendimiento",
        "value": "24 km/L"
      },
      {
        "label": "Peso",
        "value": "145 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Crucero"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 hp @ 8,500 rpm"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos, 4V"
      },
      {
        "label": "Refrigeración",
        "value": "Radiador de aceite"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Embrague",
        "value": "Multidisco en baño de aceite"
      },
      {
        "label": "Freno delantero",
        "value": "Disco ventilado"
      },
      {
        "label": "Freno trasero",
        "value": "Mecánico por expansión"
      },
      {
        "label": "Rines",
        "value": "Rayos"
      },
      {
        "label": "Neumático delantero",
        "value": "110/90-16"
      },
      {
        "label": "Neumático trasero",
        "value": "120/90-15"
      },
      {
        "label": "Tanque",
        "value": "15 L"
      },
      {
        "label": "Rendimiento",
        "value": "24 km/L"
      },
      {
        "label": "Peso",
        "value": "145 kg"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "226 × 88 × 111 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Análogo"
      },
      {
        "label": "Iluminación",
        "value": "Halógena"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Puerto USB, crashbar, sliders, amortiguadores reforzados y parrilla"
      }
    ],
    "source": "https://www.islo.com.mx/producto/blackwing/",
    "available": true
  },
  {
    "id": "islo-montana-adv250",
    "slug": "islo-montana-adv250",
    "brand": "Islo",
    "brandSlug": "islo",
    "model": "Montana ADV250",
    "category": "Doble propósito",
    "shortDescription": "Doble propósito · 250 cc",
    "description": "",
    "mainImage": "https://www.islo.com.mx/wp-content/uploads/2025/12/ISLO-MONTANA-ADV250-LS_2.jpg",
    "gallery": [
      "https://www.islo.com.mx/wp-content/uploads/2025/12/ISLO-MONTANA-ADV250-LS_2.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/12/ISLO-MONTANA-ADV250-LS_3.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/12/ISLO-MONTANA-ADV250-LS_4.jpg",
      "https://www.islo.com.mx/wp-content/uploads/2025/12/ISLO-MONTANA-ADV250-LS_6.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble propósito"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "16 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm (Galgo)"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "2.9 L/100 km"
      },
      {
        "label": "Peso",
        "value": "141 kg"
      },
      {
        "label": "Frenos",
        "value": "Disco ventilado"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Doble propósito"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "16 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm (Galgo)"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 4 tiempos"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Arranque",
        "value": "Eléctrico y patada"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Embrague",
        "value": "Multidisco en baño de aceite"
      },
      {
        "label": "Freno delantero",
        "value": "Disco ventilado"
      },
      {
        "label": "Freno trasero",
        "value": "Disco ventilado"
      },
      {
        "label": "Rines",
        "value": "Rayos"
      },
      {
        "label": "Neumático delantero",
        "value": "3.00-21"
      },
      {
        "label": "Neumático trasero",
        "value": "4.60-18"
      },
      {
        "label": "Tanque",
        "value": "12.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "2.9 L/100 km"
      },
      {
        "label": "Peso",
        "value": "141 kg"
      },
      {
        "label": "Dimensiones (L×A×H)",
        "value": "254 × 82 × 116 cm"
      },
      {
        "label": "Capacidad de carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero",
        "value": "Híbrido análogo/digital"
      },
      {
        "label": "Iluminación",
        "value": "LED/DRL + faros auxiliares LED"
      },
      {
        "label": "Equipamiento destacado",
        "value": "Monoshock, crashbar, sliders, cubrepuños, USB, parrilla y llantas todo terreno"
      }
    ],
    "source": "https://www.islo.com.mx/producto/montana-adv-250/",
    "available": true
  },
  {
    "id": "carabela-coyote",
    "slug": "carabela-coyote",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Coyote",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 cc",
    "description": "Scooter utilitario con enfoque urbano y diseño deportivo.",
    "mainImage": "assets/img/motos/catalogo/carabela/coyote-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/coyote-1.jpg",
      "assets/img/motos/catalogo/carabela/coyote-2.jpg",
      "assets/img/motos/catalogo/carabela/coyote-3.jpg",
      "assets/img/motos/catalogo/carabela/coyote-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "4 L"
      },
      {
        "label": "Rendimiento",
        "value": "32 km/l"
      },
      {
        "label": "Peso",
        "value": "104 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "HP",
        "value": "9.6 hp"
      },
      {
        "label": "Combustible",
        "value": "4 L"
      },
      {
        "label": "Rendimiento",
        "value": "32 km/l"
      },
      {
        "label": "Peso",
        "value": "104 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/coyote-gp/",
    "available": true
  },
  {
    "id": "carabela-venom-175",
    "slug": "carabela-venom-175",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Venom 175",
    "category": "Scooter",
    "shortDescription": "Scooter · 175 cc",
    "description": "Scooter de mayor cilindrada con enfoque de movilidad y confort.",
    "mainImage": "assets/img/motos/catalogo/carabela/venom175-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/venom175-1.jpg",
      "assets/img/motos/catalogo/carabela/venom175-2.jpg",
      "assets/img/motos/catalogo/carabela/venom175-3.jpg",
      "assets/img/motos/catalogo/carabela/venom175-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "175 cc"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Combustible",
        "value": "8.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "122 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "175 cc"
      },
      {
        "label": "HP",
        "value": "14.5 hp"
      },
      {
        "label": "Combustible",
        "value": "8.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "122 kg"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-venom-175/",
    "available": true
  },
  {
    "id": "carabela-kronos",
    "slug": "carabela-kronos",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Kronos",
    "category": "Utilitaria",
    "shortDescription": "Utilitaria · 150 cc",
    "description": "Ligera y rápida, equipada con parrilla de carga.",
    "mainImage": "assets/img/motos/catalogo/carabela/kronos-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/kronos-1.jpg",
      "assets/img/motos/catalogo/carabela/kronos-2.jpg",
      "assets/img/motos/catalogo/carabela/kronos-3.jpg",
      "assets/img/motos/catalogo/carabela/kronos-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "11 L"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/l"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "HP",
        "value": "9.6 hp"
      },
      {
        "label": "Combustible",
        "value": "11 L"
      },
      {
        "label": "Rendimiento",
        "value": "38 km/l"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-kronos/",
    "available": true
  },
  {
    "id": "carabela-bat-150",
    "slug": "carabela-bat-150",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Bat 150",
    "category": "Utilitaria",
    "shortDescription": "Utilitaria · 150 cc",
    "description": "Moto utilitaria con parrilla de carga y enfoque de trabajo/traslado.",
    "mainImage": "assets/img/motos/catalogo/carabela/bat150-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/bat150-1.jpg",
      "assets/img/motos/catalogo/carabela/bat150-2.jpg",
      "assets/img/motos/catalogo/carabela/bat150-3.jpg",
      "assets/img/motos/catalogo/carabela/bat150-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-bat150/",
    "available": true
  },
  {
    "id": "carabela-hunter-110",
    "slug": "carabela-hunter-110",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Hunter 110",
    "category": "Semiautomática",
    "shortDescription": "Semiautomática · 110 cc",
    "description": "Alta autonomía y conducción cómoda para ciudad.",
    "mainImage": "assets/img/motos/catalogo/carabela/hunter110-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/hunter110-1.jpg",
      "assets/img/motos/catalogo/carabela/hunter110-2.jpg",
      "assets/img/motos/catalogo/carabela/hunter110-3.jpg",
      "assets/img/motos/catalogo/carabela/hunter110-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Semiautomática"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática, 4 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "4 L"
      },
      {
        "label": "Rendimiento",
        "value": "50 km/l"
      },
      {
        "label": "Peso",
        "value": "92 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Semiautomática"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      },
      {
        "label": "HP",
        "value": "7 hp"
      },
      {
        "label": "Combustible",
        "value": "4 L"
      },
      {
        "label": "Rendimiento",
        "value": "50 km/l"
      },
      {
        "label": "Peso",
        "value": "92 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática, 4 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-hunter-110/",
    "available": true
  },
  {
    "id": "carabela-fishbone",
    "slug": "carabela-fishbone",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Fishbone",
    "category": "Crucero",
    "shortDescription": "Crucero · 200 cc",
    "description": "Cruiser con postura relajada y enfoque de paseo.",
    "mainImage": "assets/img/motos/catalogo/carabela/fishbone-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/fishbone-1.jpg",
      "assets/img/motos/catalogo/carabela/fishbone-2.jpg",
      "assets/img/motos/catalogo/carabela/fishbone-3.jpg",
      "assets/img/motos/catalogo/carabela/fishbone-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Crucero"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Crucero"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-fishbone/",
    "available": true
  },
  {
    "id": "carabela-kronos-200",
    "slug": "carabela-kronos-200",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Kronos 200",
    "category": "Street",
    "shortDescription": "Street · 200 cc",
    "description": "Street con iluminación LED/DRL y tablero digital.",
    "mainImage": "assets/img/motos/catalogo/carabela/kronos200-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/kronos200-1.jpg",
      "assets/img/motos/catalogo/carabela/kronos200-2.jpg",
      "assets/img/motos/catalogo/carabela/kronos200-3.jpg",
      "assets/img/motos/catalogo/carabela/kronos200-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "11 L"
      },
      {
        "label": "Rendimiento",
        "value": "25 km/l"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "HP",
        "value": "14 hp"
      },
      {
        "label": "Combustible",
        "value": "11 L"
      },
      {
        "label": "Rendimiento",
        "value": "25 km/l"
      },
      {
        "label": "Peso",
        "value": "95 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-kronos-revolution-200/",
    "available": true
  },
  {
    "id": "carabela-r250z",
    "slug": "carabela-r250z",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "R250Z",
    "category": "Street",
    "shortDescription": "Street · 250 cc",
    "description": "Street con freno ABS y enfoque deportivo.",
    "mainImage": "assets/img/motos/catalogo/carabela/r250z-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/r250z-1.jpg",
      "assets/img/motos/catalogo/carabela/r250z-2.jpg",
      "assets/img/motos/catalogo/carabela/r250z-3.jpg",
      "assets/img/motos/catalogo/carabela/r250z-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Enfriamiento",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-r250z/",
    "available": true
  },
  {
    "id": "carabela-r300z-4v",
    "slug": "carabela-r300z-4v",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "R300Z 4V",
    "category": "Street",
    "shortDescription": "Street · 300 cc",
    "description": "Street de enfoque deportivo; las fotos siguen la línea de referencia enviada.",
    "mainImage": "assets/img/motos/catalogo/carabela/r300z4v-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/r300z4v-1.jpg",
      "assets/img/motos/catalogo/carabela/r300z4v-2.jpg",
      "assets/img/motos/catalogo/carabela/r300z4v-3.jpg",
      "assets/img/motos/catalogo/carabela/r300z4v-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Enfriamiento",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-r300z-4v/",
    "available": true
  },
  {
    "id": "carabela-atlas-98",
    "slug": "carabela-atlas-98",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Atlas 98",
    "category": "Todo terreno / Kart",
    "shortDescription": "Todo terreno / Kart · 98 cc",
    "description": "Kart recreativo. Fuente oficial disponible con pocas fotos completas.",
    "mainImage": "assets/img/motos/catalogo/carabela/atlas98-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/atlas98-1.jpg",
      "assets/img/motos/catalogo/carabela/atlas98-2.jpg",
      "assets/img/motos/catalogo/carabela/atlas98-3.jpg",
      "assets/img/motos/catalogo/carabela/atlas98-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Todo terreno / Kart"
      },
      {
        "label": "Cilindrada",
        "value": "98 cc"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "1.3 L"
      },
      {
        "label": "Peso",
        "value": "62 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Todo terreno / Kart"
      },
      {
        "label": "Cilindrada",
        "value": "98 cc"
      },
      {
        "label": "HP",
        "value": "2.48 hp"
      },
      {
        "label": "Combustible",
        "value": "1.3 L"
      },
      {
        "label": "Peso",
        "value": "62 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-atlas-98/",
    "available": true
  },
  {
    "id": "carabela-arena-pro",
    "slug": "carabela-arena-pro",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Arena Pro",
    "category": "Todo terreno",
    "shortDescription": "Todo terreno · 110 cc",
    "description": "Mini enduro orientada a usuarios jóvenes.",
    "mainImage": "assets/img/motos/catalogo/carabela/arenapro-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/arenapro-1.jpg",
      "assets/img/motos/catalogo/carabela/arenapro-2.jpg",
      "assets/img/motos/catalogo/carabela/arenapro-3.jpg",
      "assets/img/motos/catalogo/carabela/arenapro-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "3.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "54 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      },
      {
        "label": "HP",
        "value": "7.5 hp"
      },
      {
        "label": "Combustible",
        "value": "3.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "54 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-arena-pro/",
    "available": true
  },
  {
    "id": "carabela-route-r-sonora",
    "slug": "carabela-route-r-sonora",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Route R Sonora",
    "category": "Todo terreno",
    "shortDescription": "Todo terreno · 249 cc",
    "description": "Doble propósito / adventure con orientación de viaje y ruta.",
    "mainImage": "assets/img/motos/catalogo/carabela/routersonora-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/routersonora-1.jpg",
      "assets/img/motos/catalogo/carabela/routersonora-2.jpg",
      "assets/img/motos/catalogo/carabela/routersonora-3.jpg",
      "assets/img/motos/catalogo/carabela/routersonora-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 6 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-route-r-sonora/",
    "available": true
  },
  {
    "id": "carabela-dirt3",
    "slug": "carabela-dirt3",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Dirt3",
    "category": "Todo terreno",
    "shortDescription": "Todo terreno · 110 cc",
    "description": "Mini moto off-road para uso recreativo.",
    "mainImage": "assets/img/motos/catalogo/carabela/dirt3-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/dirt3-1.jpg",
      "assets/img/motos/catalogo/carabela/dirt3-2.jpg",
      "assets/img/motos/catalogo/carabela/dirt3-3.jpg",
      "assets/img/motos/catalogo/carabela/dirt3-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "110 cc"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-dirt3/",
    "available": true
  },
  {
    "id": "carabela-dakota-320r",
    "slug": "carabela-dakota-320r",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Dakota 320R",
    "category": "Todo terreno",
    "shortDescription": "Todo terreno · 320 cc",
    "description": "Dual sport / adventure con crashbar y DRL LED.",
    "mainImage": "assets/img/motos/catalogo/carabela/dakota320r-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/dakota320r-1.jpg",
      "assets/img/motos/catalogo/carabela/dakota320r-2.jpg",
      "assets/img/motos/catalogo/carabela/dakota320r-3.jpg",
      "assets/img/motos/catalogo/carabela/dakota320r-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "320 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Radiador de aceite"
      },
      {
        "label": "Combustible",
        "value": "12.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "2.9 l/100 km"
      },
      {
        "label": "Peso",
        "value": "145 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Todo terreno"
      },
      {
        "label": "Cilindrada",
        "value": "320 cc"
      },
      {
        "label": "HP",
        "value": "21.45 hp"
      },
      {
        "label": "Combustible",
        "value": "12.5 L"
      },
      {
        "label": "Rendimiento",
        "value": "2.9 l/100 km"
      },
      {
        "label": "Peso",
        "value": "145 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Radiador de aceite"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 5 velocidades"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-dakota-320r/",
    "available": true
  },
  {
    "id": "carabela-hills-150",
    "slug": "carabela-hills-150",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Hills 150",
    "category": "ATV",
    "shortDescription": "ATV · 150 cc",
    "description": "ATV con parrillas de carga y enfoque recreativo / transporte.",
    "mainImage": "assets/img/motos/catalogo/carabela/hills150-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/hills150-1.jpg",
      "assets/img/motos/catalogo/carabela/hills150-2.jpg",
      "assets/img/motos/catalogo/carabela/hills150-3.jpg",
      "assets/img/motos/catalogo/carabela/hills150-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Combustible",
        "value": "7 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "135 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "HP",
        "value": "10.4 hp"
      },
      {
        "label": "Combustible",
        "value": "7 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "135 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática por variador + reversa"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-hills/",
    "available": true
  },
  {
    "id": "carabela-voodoo",
    "slug": "carabela-voodoo",
    "brand": "Carabela",
    "brandSlug": "carabela",
    "model": "Voodoo",
    "category": "ATV",
    "shortDescription": "ATV · 200 cc",
    "description": "ATV deportiva; la fuente oficial ofrece pocas fotos completas.",
    "mainImage": "assets/img/motos/catalogo/carabela/voodoo-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/carabela/voodoo-1.jpg",
      "assets/img/motos/catalogo/carabela/voodoo-2.jpg",
      "assets/img/motos/catalogo/carabela/voodoo-3.jpg",
      "assets/img/motos/catalogo/carabela/voodoo-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 4 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      },
      {
        "label": "Combustible",
        "value": "5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "155 kg"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "HP",
        "value": "13.8 hp"
      },
      {
        "label": "Combustible",
        "value": "5 L"
      },
      {
        "label": "Rendimiento",
        "value": "30 km/l"
      },
      {
        "label": "Peso",
        "value": "155 kg"
      },
      {
        "label": "Enfriamiento",
        "value": "Líquido"
      },
      {
        "label": "Transmisión",
        "value": "Manual, 4 velocidades + reversa"
      }
    ],
    "source": "https://www.carabelatienda.com/producto/carabela-voodoo/",
    "available": true
  },
  {
    "id": "zmoto-runga-pasajeros",
    "slug": "zmoto-runga-pasajeros",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Runga Pasajeros",
    "category": "Motocarro de pasajeros",
    "shortDescription": "Motocarro de pasajeros · 250 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.product/47/image_1024/ZMOTO%20RUNGA250P%20%28Rojo%29?unique=734f61a",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.product/47/image_1024/ZMOTO%20RUNGA250P%20%28Rojo%29?unique=734f61a",
      "https://www.zmoto.com.mx/web/image/product.image/62/image_1024/RUNGA%20PASAJ%20RJ%20LATERAL.webp?unique=c786f24",
      "https://www.zmoto.com.mx/web/image/product.image/64/image_1024/RUNGA%20PASAJ%20RJ%20BACK.webp?unique=c786f24",
      "https://www.zmoto.com.mx/web/image/product.image/65/image_1024/RUNGA%20PASAJ%20RJ%20FRONT.webp?unique=c786f24"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro de pasajeros"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 kW @ 8,500 rpm (revisar unidad)"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro de pasajeros"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 kW @ 8,500 rpm (revisar unidad)"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Velocidad máx.",
        "value": "60 km/h"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      },
      {
        "label": "Llantas",
        "value": "4.50-12 / 4.50-12"
      },
      {
        "label": "Capacidad / carga",
        "value": "9 pasajeros"
      },
      {
        "label": "Dimensiones",
        "value": "3500 × 1250 × 1850 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-runga250p-23",
    "available": true
  },
  {
    "id": "zmoto-runga-320z",
    "slug": "zmoto-runga-320z",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Runga 320Z",
    "category": "Motocarro de carga",
    "shortDescription": "Motocarro de carga · 320 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.product/45/image_1024/ZMOTO%20RUNGA320Z%20%28Rojo%29?unique=734f61a",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.product/45/image_1024/ZMOTO%20RUNGA320Z%20%28Rojo%29?unique=734f61a",
      "https://www.zmoto.com.mx/web/image/product.image/76/image_1024/image_1920?unique=94b6f9e",
      "https://images.ctfassets.net/8zlbnewncp6f/2Rf3YLB91lzrf23Ubv2AFg/74074df6a9ccf6ae1630a02e0be44d2e/Moto_Zmoto_Runga_320Z_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/VIls4A8g92qxYhywLG4mr/32529cda998ee3e8039c7eb58dae448b/Zmoto_Runga_320Z_Lifestyle1_Galgo.jpg?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro de carga"
      },
      {
        "label": "Cilindrada",
        "value": "320 cc"
      },
      {
        "label": "Potencia",
        "value": "12.5 kW @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "22.3 Nm @ 4,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro de carga"
      },
      {
        "label": "Cilindrada",
        "value": "320 cc"
      },
      {
        "label": "Potencia",
        "value": "12.5 kW @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "22.3 Nm @ 4,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      },
      {
        "label": "Llantas",
        "value": "5.00-12 / 5.00-12"
      },
      {
        "label": "Capacidad / carga",
        "value": "1,000 kg"
      },
      {
        "label": "Dimensiones",
        "value": "3500 × 1480 × 1850 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-runga320z-22",
    "available": true
  },
  {
    "id": "zmoto-runga-250z",
    "slug": "zmoto-runga-250z",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Runga 250Z",
    "category": "Motocarro con cabina",
    "shortDescription": "Motocarro con cabina · 250 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/658THtxTZatZ2ny0cgOKgt/c553acd4f6a234a1133a81995505d30d/Imagen_principal__6_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/658THtxTZatZ2ny0cgOKgt/c553acd4f6a234a1133a81995505d30d/Imagen_principal__6_.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/36eFpOlifSVIHDGAGLnrGd/0703eb108bff4283b2c2c56b22727888/Moto_Runga_250_con_Cabina_Galgo_M%C3%A9xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/ZMDWHz4i645MNcu8ZIMGY/5812478086df3675213ed6bb5bba8631/f7bb62_80b6fcaa2ae94361812bc4e2dd67ee1c-mv2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://www.motocool.net/web/image/product.template/25/image_1920?unique=c3d85fa"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro con cabina"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.5 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro con cabina"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.5 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Velocidad máx.",
        "value": "60 km/h"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      },
      {
        "label": "Llantas",
        "value": "4.50-12 / 4.50-12"
      },
      {
        "label": "Capacidad / carga",
        "value": "800 kg"
      },
      {
        "label": "Dimensiones",
        "value": "Caja 1220 × 1830 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/runga-250z-25",
    "available": true
  },
  {
    "id": "zmoto-runga-250",
    "slug": "zmoto-runga-250",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Runga 250",
    "category": "Motocarro de carga",
    "shortDescription": "Motocarro de carga · 250 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.product/49/image_1024/ZMOTO%20RUNGA250%20%28Rojo%29?unique=14a61c2",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.product/49/image_1024/ZMOTO%20RUNGA250%20%28Rojo%29?unique=14a61c2",
      "https://www.zmoto.com.mx/web/image/product.image/85/image_1024/FRONTAL.webp?unique=7e12bac",
      "https://www.zmoto.com.mx/web/image/product.image/86/image_1024/LATERAL%202.webp?unique=7e12bac",
      "https://www.zmoto.com.mx/web/image/product.image/87/image_1024/LATERAL.webp?unique=7e12bac"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro de carga"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.5 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro de carga"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.5 hp @ 7,000 rpm"
      },
      {
        "label": "Torque",
        "value": "17.5 Nm @ 5,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Velocidad máx.",
        "value": "55 km/h"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      },
      {
        "label": "Llantas",
        "value": "4.50-12 / 4.50-12"
      },
      {
        "label": "Capacidad / carga",
        "value": "800 kg"
      },
      {
        "label": "Dimensiones",
        "value": "Caja 1220 × 1830 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-runga250-24",
    "available": true
  },
  {
    "id": "zmoto-zmax-plus",
    "slug": "zmoto-zmax-plus",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Zmax Plus",
    "category": "Motocarro compacto de carga",
    "shortDescription": "Motocarro compacto de carga · 200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3jA1O5HsUgZfLVuw5WqOZd/0fd4893cb431f2329e27396216d58a96/Moto_Zmoto_ZMX_200_Plus_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3jA1O5HsUgZfLVuw5WqOZd/0fd4893cb431f2329e27396216d58a96/Moto_Zmoto_ZMX_200_Plus_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/tiCcRrlnrAq39PZLMl0Mc/829a7367ba7b145b05fd7ad456578c47/Moto_Zmoto_ZMX_200_Plus_Galgo_M_xico_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3oI5tMdbaCDflsyXsA9f4x/b082a9c18a57bfd1ea72183bb5904d8b/Moto_Zmoto_ZMX_200_Plus_Galgo_M_xico__2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2xvB0mOP3KMBitLO2rFYgt/b45b8d78bf6aafcccb3c1fe3a2d2cb45/Moto_Zmoto_ZMX_200_Plus_Galgo_M_xico_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro compacto de carga"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "12 hp (referencia oficial ZMAX200)"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro compacto de carga"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "12 hp (referencia oficial ZMAX200)"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Capacidad / carga",
        "value": "500 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Encendido eléctrico"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-zmax200plus-29",
    "available": true
  },
  {
    "id": "zmoto-zmax-200",
    "slug": "zmoto-zmax-200",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Zmax 200",
    "category": "Motocarro compacto de carga",
    "shortDescription": "Motocarro compacto de carga · 200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3hMk2yh9d3TEiEuGxeYHQt/c0a3878174139be706f975a477beeb77/Zmoto_ZMAX_200_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3hMk2yh9d3TEiEuGxeYHQt/c0a3878174139be706f975a477beeb77/Zmoto_ZMAX_200_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/50NYnnLSXTY92d38YJATi7/c08c40d36d9a52a6832bce85a4695737/Zmoto_Zmax_200_1_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6SadrKb7JAj7iXP4D9xSoY/a302e5b80716bdbccfb427d10f5067ea/Zmoto_Zmax_200_1_4.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/1uXPLsHXenDcEnH9AUp579/7296cff90ccfca241fc551115f20200d/Zmoto_ZMAX_200_Lifestyle2_Galgo.jpg?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro compacto de carga"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "12 hp @ 7,000 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro compacto de carga"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "12 hp @ 7,000 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Capacidad / carga",
        "value": "500 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Encendido eléctrico"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-zmax200-28",
    "available": true
  },
  {
    "id": "zmoto-carguero-320",
    "slug": "zmoto-carguero-320",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Carguero 320",
    "category": "Motocarro con caja hidráulica",
    "shortDescription": "Motocarro con caja hidráulica · 300–320 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/6fJx0weVGPmnDUq7LL3ufp/9146c08a6852be0b4abaed7cb0593a5c/RUNGA_CARGUERO_300_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/6fJx0weVGPmnDUq7LL3ufp/9146c08a6852be0b4abaed7cb0593a5c/RUNGA_CARGUERO_300_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/66kbfuG3DjMNNIRBN1kQgV/769d404081ba86868c006e2988f77207/RUNGA_CARGUERO_300_Galeria1_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3A2IwXuFiqkVclK3za2O1n/164460b8cf1c35fbaff4c0b4660e0cad/Zmoto_Runga_320_Carguero_Lifestyle1_Galgo.jpg?fm=webp&q=100&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/FmRv7ynyvSS00M2pAOV95/81458894252e924ff942fc459b7fb311/Zmoto_Runga_320_Carguero_Lifestyle2_Galgo.jpg?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro con caja hidráulica"
      },
      {
        "label": "Cilindrada",
        "value": "300–320 cc"
      },
      {
        "label": "Potencia",
        "value": "12.5 kW @ 6,000 rpm"
      },
      {
        "label": "Torque",
        "value": "22.3 Nm (Galgo)"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Motocarro con caja hidráulica"
      },
      {
        "label": "Cilindrada",
        "value": "300–320 cc"
      },
      {
        "label": "Potencia",
        "value": "12.5 kW @ 6,000 rpm"
      },
      {
        "label": "Torque",
        "value": "22.3 Nm (Galgo)"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa"
      },
      {
        "label": "Frenos",
        "value": "Tambor hidráulico D/T"
      },
      {
        "label": "Llantas",
        "value": "5.00-12 / 5.00-12"
      },
      {
        "label": "Capacidad / carga",
        "value": "Carga pesada; caja basculante hidráulica"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital + Bluetooth"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-carguero-runga320z-26310",
    "available": true
  },
  {
    "id": "zmoto-sx6-250",
    "slug": "zmoto-sx6-250",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "SX6 250",
    "category": "Doble propósito",
    "shortDescription": "Doble propósito · 250 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/6ecaGe14VpbPSjXPcHDnvQ/6ea2b85bdce736d4cd9104010830165f/Zmoto_SX6_250_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/6ecaGe14VpbPSjXPcHDnvQ/6ea2b85bdce736d4cd9104010830165f/Zmoto_SX6_250_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6gx1vH1W4B9bELP7x9mRjo/b2b40906116bb16adae8ed35b02fcb3b/Zmotos_SX6_250-1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/74WtmmCuDUsbxkNSAem4Kr/c8518c7accfc5cdcc15bba8bb572af99/Zmoto_SX6_250_Lifestyle1_Galgo.jpg?fm=webp&q=100&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/blIeLkE1MxQqyTIJMFjVT/1f05427c7085e1346ccc22c93eb0f355/Zmoto_SX6_250_Lifestyle2_Galgo.jpg?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble propósito"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "14 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Frenos",
        "value": "Disco D/T"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Doble propósito"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc"
      },
      {
        "label": "Potencia",
        "value": "17.8 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "14 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Velocidad máx.",
        "value": "97.8 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco D/T"
      },
      {
        "label": "Llantas",
        "value": "Todo terreno"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "N/D; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-sx6250-26",
    "available": true
  },
  {
    "id": "zmoto-nitro-150",
    "slug": "zmoto-nitro-150",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Nitro 150",
    "category": "Street utilitaria",
    "shortDescription": "Street utilitaria · 150 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/7shGlNrXidlHqvWONhBXK1/0e4617fafe76ab0fb4a0fed110bb9f0b/NITRO_150_Imagen_principal_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/7shGlNrXidlHqvWONhBXK1/0e4617fafe76ab0fb4a0fed110bb9f0b/NITRO_150_Imagen_principal_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6hTGabnCxJGUbPuS92FQS3/ad1934026b981a2432ad9a3d7929a0d9/NITRO_150_Galeria1_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6mnzH19Hd6cUeUqNmBtsse/55f7d79d73e46efa10289f0dd54fc3f0/NITRO_150_Lifestyle1_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/19GFFGeDSOKZ1uM8naTbHp/8448545594ce6e69d96e73a8327d62dd/NITRO_150_Lifestyle2_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "12.07 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "11 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Street utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "12.07 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "11 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Velocidad máx.",
        "value": "95 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      },
      {
        "label": "Llantas",
        "value": "2.75-18 / 3.25-18"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Dimensiones",
        "value": "2000 × 750 × 1100 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-nitro150r-21",
    "available": true
  },
  {
    "id": "zmoto-zm-150",
    "slug": "zmoto-zm-150",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "ZM 150",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 cc",
    "description": "",
    "mainImage": "https://zoommotos.mx/cdn/shop/files/banners-ZMOTO-ZM150-azul-1.jpg?v=1722463053&width=1946",
    "gallery": [
      "https://zoommotos.mx/cdn/shop/files/banners-ZMOTO-ZM150-azul-1.jpg?v=1722463053&width=1946",
      "https://zoommotos.mx/cdn/shop/files/banners-ZMOTO-ZM150-azul-2.jpg?v=1722463053&width=1946",
      "https://zoommotos.mx/cdn/shop/files/banners-ZMOTO-ZM150-azul-7.jpg?v=1722463053&width=1946",
      "https://images.ctfassets.net/8zlbnewncp6f/1Bxhii1V1HDCwZf00jhadr/336a5f512dd3a0d71ee4351018852562/Zmoto_ZM_150Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor hidráulico"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Velocidad máx.",
        "value": "70 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor hidráulico"
      },
      {
        "label": "Llantas",
        "value": "3.50-10 / 3.50-10"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Dimensiones",
        "value": "1820 × 655 × 1115 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zm-150-27",
    "available": true
  },
  {
    "id": "zmoto-crx-150",
    "slug": "zmoto-crx-150",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "CRX 150",
    "category": "Street",
    "shortDescription": "Street · 150 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.template/18/image_1024/ZMOTO%20CRX150?unique=6d25439",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.template/18/image_1024/ZMOTO%20CRX150?unique=6d25439",
      "https://images.ctfassets.net/8zlbnewncp6f/15ZRk00gaN6dttAO93zbD1/bb1a838cf24720b371514dd045d87404/Moto_Zmoto_CRX_150_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/3Q3WWTVH7ATb2zYzG2OoxD/cbf7c95883c9eda2693b986f4c752dab/Moto_Zmoto_CRX_150_Galgo_M_xico_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/75OSrkIUoq877rXWZphs8i/4d7458f71237366e36a65314b6d884c4/Moto_Zmoto_CRX_150_Galgo_M_xico_4.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "14.4 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "13 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "14.4 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "13 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Velocidad máx.",
        "value": "80 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      },
      {
        "label": "Llantas",
        "value": "80/90-17 / 110/80-17"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-crx150-18",
    "available": true
  },
  {
    "id": "zmoto-maxx-125",
    "slug": "zmoto-maxx-125",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Maxx 125",
    "category": "Semiautomática urbana",
    "shortDescription": "Semiautomática urbana · 125 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.image/15/image_1024/MAXX%20125?unique=290f9ac",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.image/15/image_1024/MAXX%20125?unique=290f9ac",
      "https://www.zmoto.com.mx/web/image/product.image/16/image_1024/MAXX%20125?unique=290f9ac",
      "https://images.ctfassets.net/8zlbnewncp6f/2X5iCuP5EMUGa6N6zs24d3/9cae7e8e68543e415ddd3c476f410f10/Moto_Zmoto_MAXX_125_Galgo_M_xico_1.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2myHNcpVKqyY3hiT55ypi8/dd2c9cb1409e80d5a8b43c9ab047f43d/Moto_Zmoto_MAXX_125_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Semiautomática urbana"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "7.25 kW @ 8,500 rpm (revisar unidad)"
      },
      {
        "label": "Torque",
        "value": "9.23 Nm @ 6,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Semiautomática urbana"
      },
      {
        "label": "Cilindrada",
        "value": "125 cc"
      },
      {
        "label": "Potencia",
        "value": "7.25 kW @ 8,500 rpm (revisar unidad)"
      },
      {
        "label": "Torque",
        "value": "9.23 Nm @ 6,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Semiautomática"
      },
      {
        "label": "Velocidad máx.",
        "value": "85 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      },
      {
        "label": "Llantas",
        "value": "2.50-17 / 2.75-17"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg recomendado; sitio oficial muestra 246 kg"
      },
      {
        "label": "Dimensiones",
        "value": "1930 × 690 × 1100 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-maxx125-20",
    "available": true
  },
  {
    "id": "zmoto-crx-300",
    "slug": "zmoto-crx-300",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "CRX 300",
    "category": "Street deportiva",
    "shortDescription": "Street deportiva · 300 cc",
    "description": "",
    "mainImage": "assets/img/motos/zmoto-crx300.png",
    "gallery": [
      "assets/img/motos/zmoto-crx300.png",
      "https://images.ctfassets.net/8zlbnewncp6f/6pjHaD5TbJuViUhArK2bYX/ab9b7cc94ceec15a306a7a08ad714aaa/CRX300_Imagen_principal_Galgo_M_xico.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/ndd77KJBm4xRQuGEx8hpa/11f13af4da91ce76db4bf6ae24567f44/Zmoto_CRX300_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7cgvHvxMw7vZ8As7PaskA3/be861391fa03d530c8ec99c6f42ff4dd/Zmoto_CRX300_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street deportiva"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Potencia",
        "value": "15 kW @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "21 Nm @ 6,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Street deportiva"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Potencia",
        "value": "15 kW @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "21 Nm @ 6,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "6 velocidades"
      },
      {
        "label": "Velocidad máx.",
        "value": "90 km/h (oficial)"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      },
      {
        "label": "Llantas",
        "value": "110/70-17 / 140/70-17"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital, Full LED; encendido eléctrico"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-crx300-26309",
    "available": true
  },
  {
    "id": "zmoto-crx-200",
    "slug": "zmoto-crx-200",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "CRX 200",
    "category": "Street",
    "shortDescription": "Street · 200 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/3aswqwWq9QeZz1RZjdRPwo/481e4b2558518b6b7d5768a8011e55a2/CRX_200_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/3aswqwWq9QeZz1RZjdRPwo/481e4b2558518b6b7d5768a8011e55a2/CRX_200_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/4JeM6rp6so1XduMhMuy2fn/4adc9ff07a17942090e0e6cdf067ac73/CRX_200_3.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/6Npwd4wJUjRLLAbbqvFc3t/1dee94d6583fa631be361013c789c963/CRX_200_2.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/2JpxhvN6sSUnsBMXU1oZ4c/7171189bf7a223e051c15474134ac679/CRX_200_.jpg?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "15.8 hp @ 8,000 rpm"
      },
      {
        "label": "Torque",
        "value": "15.5 Nm @ 6,000 rpm"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Street"
      },
      {
        "label": "Cilindrada",
        "value": "200 cc"
      },
      {
        "label": "Potencia",
        "value": "15.8 hp @ 8,000 rpm"
      },
      {
        "label": "Torque",
        "value": "15.5 Nm @ 6,000 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades"
      },
      {
        "label": "Velocidad máx.",
        "value": "80 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      },
      {
        "label": "Llantas",
        "value": "80/90-17 / 130/70-17"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-crx200-5230",
    "available": true
  },
  {
    "id": "zmoto-300-pro",
    "slug": "zmoto-300-pro",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "300 Pro",
    "category": "Doble propósito / enduro",
    "shortDescription": "Doble propósito / enduro · 300 cc",
    "description": "",
    "mainImage": "https://www.zmoto.com.mx/web/image/product.template/16/image_1024/ZMOTO%20300PRO-SPORT?unique=2c185c9",
    "gallery": [
      "https://www.zmoto.com.mx/web/image/product.template/16/image_1024/ZMOTO%20300PRO-SPORT?unique=2c185c9",
      "https://www.zmoto.com.mx/web/image/product.image/1/image_1024/300%20PRO?unique=08ac2b5",
      "https://www.zmoto.com.mx/web/image/product.image/2/image_1024/300%20PRO?unique=08ac2b5",
      "https://images.ctfassets.net/8zlbnewncp6f/2XucOtyLy9Sh5sZ1m7NoM8/450a08254b6c9c8af3cea3da86587d4c/Zmoto_300_Pro_Lifestyle1_Galgo.png?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble propósito / enduro"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Potencia",
        "value": "25 hp @ 8,000 rpm"
      },
      {
        "label": "Torque",
        "value": "Dato oficial inconsistente"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa (sitio oficial)"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Doble propósito / enduro"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc"
      },
      {
        "label": "Potencia",
        "value": "25 hp @ 8,000 rpm"
      },
      {
        "label": "Torque",
        "value": "Dato oficial inconsistente"
      },
      {
        "label": "Refrigeración",
        "value": "Aceite"
      },
      {
        "label": "Transmisión",
        "value": "5 velocidades + reversa (sitio oficial)"
      },
      {
        "label": "Velocidad máx.",
        "value": "85 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / disco"
      },
      {
        "label": "Llantas",
        "value": "90/90-21 / 4.60-100 R18"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Dimensiones",
        "value": "2080 × 1140 × 810 mm"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital, LED, USB; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-300pro-sport-16",
    "available": true
  },
  {
    "id": "zmoto-aktiva-150",
    "slug": "zmoto-aktiva-150",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Aktiva 150",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/6adRWAcxZ3sub2kAv3xbIQ/4a67d43a31e6d9fe372c6c3b475272ba/AKTIVA150_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/6adRWAcxZ3sub2kAv3xbIQ/4a67d43a31e6d9fe372c6c3b475272ba/AKTIVA150_Imagen_principal_Galgo_M_xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/57xTA1pkKJUqMIYz2ub0xI/b60fca46343ae2f1b32847e56c630117/Imagen_principal.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/307MYotruKqtRzCn6lZv6X/eefc3bffddcf574460f8fb74d5d1360f/Galeria2.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/7aMskOUlIsbXozKK0McJzc/524d9ba196830852d070b6b6515c0f20/Galeria2.png?fit=pad&fm=webp&h=1200&q=95&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Velocidad máx.",
        "value": "60 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      },
      {
        "label": "Llantas",
        "value": "3.5-R10 / 3.5-R10"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Digital; eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-aktiva150-5191",
    "available": true
  },
  {
    "id": "zmoto-rapid-150",
    "slug": "zmoto-rapid-150",
    "brand": "Zmoto",
    "brandSlug": "zmoto",
    "model": "Rapid 150",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 cc",
    "description": "",
    "mainImage": "https://images.ctfassets.net/8zlbnewncp6f/5TYgWLuQ75seD5n9THFLL1/1203c7a4f84b00f55bcf2dd020ca4b80/ZMoto_Rapid_150_2025_Imagen_principal_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
    "gallery": [
      "https://images.ctfassets.net/8zlbnewncp6f/5TYgWLuQ75seD5n9THFLL1/1203c7a4f84b00f55bcf2dd020ca4b80/ZMoto_Rapid_150_2025_Imagen_principal_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/O3WZAFadj2yUBWQB1jOTP/603f5e6f3ae3491a99b9d20eafde5e60/ZMoto_Rapid_150_2025_Galeria1_Galgo_M%C3%A9xico.png?fit=pad&fm=webp&h=1200&q=95&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5oLm68ibfA76rEw3EmDf7n/cba3b4cdb94a881315053023c734a54a/Zmoto_Rapid_150_Lifestyle1_Galgo.png?fm=webp&q=100&w=1600",
      "https://images.ctfassets.net/8zlbnewncp6f/5wOjwTKPvYxaTzxqVuzQg/fdc400df6acdb5f5b3c878505357024d/Zmoto_Rapid_150_Lifestyle2_Galgo.png?fm=webp&q=100&w=1600"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      }
    ],
    "specs": [
      {
        "label": "Tipo",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 cc"
      },
      {
        "label": "Potencia",
        "value": "8.3 hp @ 8,500 rpm"
      },
      {
        "label": "Torque",
        "value": "8.8 Nm @ 7,500 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Transmisión",
        "value": "Automática"
      },
      {
        "label": "Velocidad máx.",
        "value": "60 km/h"
      },
      {
        "label": "Frenos",
        "value": "Disco / tambor"
      },
      {
        "label": "Llantas",
        "value": "3.5-R10 / 3.5-R10"
      },
      {
        "label": "Capacidad / carga",
        "value": "150 kg"
      },
      {
        "label": "Tablero / encendido",
        "value": "Análogo (oficial); eléctrico y patada"
      }
    ],
    "source": "https://www.zmoto.com.mx/shop/zmoto-rapid150-5190",
    "available": true
  },
  {
    "id": "ryder-aztekita-200",
    "slug": "ryder-aztekita-200",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita 200",
    "category": "Motocarro",
    "shortDescription": "Motocarro · 200 c.c.",
    "description": "",
    "mainImage": "",
    "gallery": [],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$49,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-200-cc-104408",
    "available": true,
    "year": "2026",
    "price": "$49,999.00"
  },
  {
    "id": "ryder-aztekita-250-cc",
    "slug": "ryder-aztekita-250-cc",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita 250 CC",
    "category": "Motocarro",
    "shortDescription": "Motocarro · 250 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106439/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106439/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$68,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-250-106439",
    "available": true,
    "year": "2026",
    "price": "$68,999.00"
  },
  {
    "id": "ryder-aztekita-300-cc",
    "slug": "ryder-aztekita-300-cc",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita 300 CC",
    "category": "Motocarro",
    "shortDescription": "Motocarro · 300 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106437/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106437/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$68,102.59"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-300-106437",
    "available": true,
    "year": "2026",
    "price": "$68,102.59"
  },
  {
    "id": "ryder-aztekita-300-volteo",
    "slug": "ryder-aztekita-300-volteo",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita 300 Volteo",
    "category": "Motocarro",
    "shortDescription": "Motocarro · 300 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106464/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106464/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Motocarro"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$74,999.14"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-300-volteo-106464",
    "available": true,
    "year": "2026",
    "price": "$74,999.14"
  },
  {
    "id": "ryder-aztekita-350-plus",
    "slug": "ryder-aztekita-350-plus",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita 350 Plus",
    "category": "ATV / Trabajo",
    "shortDescription": "ATV / Trabajo · 350 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/111184/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/111184/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "ATV / Trabajo"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "350 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "ATV / Trabajo"
      },
      {
        "label": "Cilindrada",
        "value": "350 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$89,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-350-plus-111184",
    "available": true,
    "year": "2026",
    "price": "$89,999.00"
  },
  {
    "id": "ryder-aztekita-atv-300",
    "slug": "ryder-aztekita-atv-300",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "Aztekita ATV 300",
    "category": "ATV",
    "shortDescription": "ATV · 300 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/111185/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/111185/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "ATV"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$109,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/aztekita-atv-300-111185",
    "available": true,
    "year": "2026",
    "price": "$109,999.00"
  },
  {
    "id": "ryder-rd-1",
    "slug": "ryder-rd-1",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "RD-1",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 125 c.c. aprox.",
    "description": "",
    "mainImage": "https://www.motocool.net/web/image/product.template/93766/image_1920",
    "gallery": [
      "https://www.motocool.net/web/image/product.template/93766/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2025/2026"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c. aprox."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c. aprox."
      },
      {
        "label": "Precio de referencia",
        "value": "$20,499.00"
      },
      {
        "label": "Año",
        "value": "2025/2026"
      }
    ],
    "source": "https://www.motocool.net/shop/rd-1-93766",
    "available": true,
    "year": "2025/2026",
    "price": "$20,499.00"
  },
  {
    "id": "ryder-rd-1-5",
    "slug": "ryder-rd-1-5",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "RD-1.5",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 150 c.c. aprox.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/112095/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/112095/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c. aprox."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c. aprox."
      },
      {
        "label": "Precio de referencia",
        "value": "$29,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/rd-1-5-112095",
    "available": true,
    "year": "2026",
    "price": "$29,999.00"
  },
  {
    "id": "ryder-rd-2",
    "slug": "ryder-rd-2",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "RD-2",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 200 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/111192/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/111192/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "200 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$36,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/rd-2-111192",
    "available": true,
    "year": "2026",
    "price": "$36,499.00"
  },
  {
    "id": "ryder-rd-2-5",
    "slug": "ryder-rd-2-5",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "RD-2.5",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 250 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106441/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106441/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "250 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$44,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/rd-2-5-106441",
    "available": true,
    "year": "2026",
    "price": "$44,999.00"
  },
  {
    "id": "ryder-rd-3r",
    "slug": "ryder-rd-3r",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "RD-3R",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 300 c.c.",
    "description": "",
    "mainImage": "assets/img/motos/ryder-rd3-300.jpg",
    "gallery": [
      "assets/img/motos/ryder-rd3-300.jpg",
      "https://www.motocool.net/web/image/product.template/111191/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$49,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.motocool.net/shop/rd-3r-111191",
    "available": true,
    "year": "2026",
    "price": "$49,999.00"
  },
  {
    "id": "ryder-md-1-5",
    "slug": "ryder-md-1-5",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "MD-1.5",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106449/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106449/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$23,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/md-1-5-106449",
    "available": true,
    "year": "2026",
    "price": "$23,499.00"
  },
  {
    "id": "ryder-md-1-75",
    "slug": "ryder-md-1-75",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "MD-1.75",
    "category": "Scooter",
    "shortDescription": "Scooter · 150/175 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106448/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106448/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "150/175 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150/175 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$27,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/md-1-75-106448",
    "available": true,
    "year": "2026",
    "price": "$27,499.00"
  },
  {
    "id": "ryder-md-2-180",
    "slug": "ryder-md-2-180",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "MD-2 180",
    "category": "Scooter",
    "shortDescription": "Scooter · 180 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106447/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106447/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "180 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "180 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$32,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/md-2-180-106447",
    "available": true,
    "year": "2026",
    "price": "$32,499.00"
  },
  {
    "id": "ryder-md-adv-180",
    "slug": "ryder-md-adv-180",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "MD-ADV 180",
    "category": "Scooter / ADV",
    "shortDescription": "Scooter / ADV · 180 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106446/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106446/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter / ADV"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "180 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter / ADV"
      },
      {
        "label": "Cilindrada",
        "value": "180 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$47,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/md-adv-106446",
    "available": true,
    "year": "2026",
    "price": "$47,499.00"
  },
  {
    "id": "ryder-ad-1",
    "slug": "ryder-ad-1",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "AD-1",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106452/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106452/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$26,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/ad-1-106452",
    "available": true,
    "year": "2026",
    "price": "$26,499.00"
  },
  {
    "id": "ryder-ad-1-5",
    "slug": "ryder-ad-1-5",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "AD-1.5",
    "category": "Scooter",
    "shortDescription": "Scooter · 150 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/106451/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/106451/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "150 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$26,999.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/ad-1-5-106451",
    "available": true,
    "year": "2026",
    "price": "$26,999.00"
  },
  {
    "id": "ryder-ud-1",
    "slug": "ryder-ud-1",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "UD-1",
    "category": "Utilitaria",
    "shortDescription": "Utilitaria · 125 c.c. aprox.",
    "description": "",
    "mainImage": "https://www.motocool.net/web/image/product.template/93765/image_1920",
    "gallery": [
      "https://www.motocool.net/web/image/product.template/93765/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c. aprox."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Utilitaria"
      },
      {
        "label": "Cilindrada",
        "value": "125 c.c. aprox."
      },
      {
        "label": "Precio de referencia",
        "value": "$21,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.motocool.net/shop/ud-1-93765",
    "available": true,
    "year": "2026",
    "price": "$21,499.00"
  },
  {
    "id": "ryder-sd-3",
    "slug": "ryder-sd-3",
    "brand": "Ryder",
    "brandSlug": "ryder",
    "model": "SD-3",
    "category": "Urban Sport",
    "shortDescription": "Urban Sport · 300 c.c.",
    "description": "",
    "mainImage": "https://www.rydermx.com/web/image/product.template/111194/image_1920",
    "gallery": [
      "https://www.rydermx.com/web/image/product.template/111194/image_1920"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Año",
        "value": "2026"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Urban Sport"
      },
      {
        "label": "Cilindrada",
        "value": "300 c.c."
      },
      {
        "label": "Precio de referencia",
        "value": "$41,499.00"
      },
      {
        "label": "Año",
        "value": "2026"
      }
    ],
    "source": "https://www.rydermx.com/shop/rd-3-300-copia-111194",
    "available": true,
    "year": "2026",
    "price": "$41,499.00"
  },
  {
    "id": "cfmoto-nk250-low",
    "slug": "cfmoto-nk250-low",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "NK250 LOW",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/nk250low-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/nk250low-1.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250low-2.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250low-3.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250low-4.jpg"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Peso",
        "value": "158 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$52,999 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Relación compresión",
        "value": "11.3:1"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Dimensiones",
        "value": "1990 x 780 x 1070 mm"
      },
      {
        "label": "Distancia entre ejes",
        "value": "1360 mm"
      },
      {
        "label": "Altura asiento",
        "value": "795 mm"
      },
      {
        "label": "Altura al piso",
        "value": "150 mm"
      },
      {
        "label": "Peso vacío",
        "value": "158 kg"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Iluminación",
        "value": "Full LED"
      },
      {
        "label": "Pantalla",
        "value": "LCD"
      },
      {
        "label": "Puertos",
        "value": "USB A / USB C"
      },
      {
        "label": "Batería",
        "value": "12V / 9Ah"
      },
      {
        "label": "Llave",
        "value": "Mecánica"
      },
      {
        "label": "Clutch",
        "value": "No indicado para esta versión (antirrebote solo FI+ABS)"
      },
      {
        "label": "Suspensión delantera",
        "value": "Barras convencionales 37 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock central"
      },
      {
        "label": "Recorrido d/t",
        "value": "120 / 40 mm"
      },
      {
        "label": "Llanta delantera",
        "value": "110/70 R17"
      },
      {
        "label": "Llanta trasera",
        "value": "140/60 R17"
      },
      {
        "label": "Basculante",
        "value": "Tubular cuadrado doble brazo"
      }
    ],
    "source": "https://www.cflite.com.mx/250-nk",
    "available": true,
    "price": "$52,999 MXN"
  },
  {
    "id": "cfmoto-nk250-high",
    "slug": "cfmoto-nk250-high",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "NK250 HIGH",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/nk250high-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/nk250high-1.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250high-2.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250high-3.jpg",
      "assets/img/motos/catalogo/cfmoto/nk250high-4.jpg"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Peso",
        "value": "158 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$59,999 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Relación compresión",
        "value": "11.3:1"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Dimensiones",
        "value": "1990 x 780 x 1070 mm"
      },
      {
        "label": "Distancia entre ejes",
        "value": "1360 mm"
      },
      {
        "label": "Altura asiento",
        "value": "795 mm"
      },
      {
        "label": "Altura al piso",
        "value": "150 mm"
      },
      {
        "label": "Peso vacío",
        "value": "158 kg"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Iluminación",
        "value": "Full LED"
      },
      {
        "label": "Pantalla",
        "value": "LCD"
      },
      {
        "label": "Puertos",
        "value": "USB A / USB C"
      },
      {
        "label": "Batería",
        "value": "12V / 9Ah"
      },
      {
        "label": "Llave",
        "value": "Mecánica"
      },
      {
        "label": "Clutch",
        "value": "Solo en versión FI+ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Barras convencionales 37 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock central"
      },
      {
        "label": "Recorrido d/t",
        "value": "120 / 40 mm"
      },
      {
        "label": "Llanta delantera",
        "value": "110/70 R17"
      },
      {
        "label": "Llanta trasera",
        "value": "140/60 R17"
      },
      {
        "label": "Basculante",
        "value": "Tubular cuadrado doble brazo"
      }
    ],
    "source": "https://www.cflite.com.mx/250-nk",
    "available": true,
    "price": "$59,999 MXN"
  },
  {
    "id": "cfmoto-sr250-low",
    "slug": "cfmoto-sr250-low",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SR250 LOW",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sr250low-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sr250low-1.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250low-2.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250low-3.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250low-4.jpg"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Peso",
        "value": "165 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$58,499 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Relación compresión",
        "value": "11.3:1"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Dimensiones",
        "value": "2000 x 750 x 1080 mm"
      },
      {
        "label": "Distancia entre ejes",
        "value": "1360 mm"
      },
      {
        "label": "Altura asiento",
        "value": "780 mm"
      },
      {
        "label": "Altura al piso",
        "value": "135 mm"
      },
      {
        "label": "Peso vacío",
        "value": "165 kg"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Iluminación",
        "value": "Full LED"
      },
      {
        "label": "Pantalla",
        "value": "LCD"
      },
      {
        "label": "Puertos",
        "value": "USB A / USB C"
      },
      {
        "label": "Batería",
        "value": "12V / 9Ah"
      },
      {
        "label": "Llave",
        "value": "Mecánica"
      },
      {
        "label": "Clutch",
        "value": "No indicado para esta versión (antirrebote solo FI+ABS)"
      },
      {
        "label": "Suspensión delantera",
        "value": "Barras convencionales 37 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock central"
      },
      {
        "label": "Recorrido d/t",
        "value": "115 / 40 mm"
      },
      {
        "label": "Llanta delantera",
        "value": "110/70 R17"
      },
      {
        "label": "Llanta trasera",
        "value": "140/60 R17"
      },
      {
        "label": "Basculante",
        "value": "Tubular cuadrado doble brazo"
      }
    ],
    "source": "https://www.cflite.com.mx/250-sr",
    "available": true,
    "price": "$58,499 MXN"
  },
  {
    "id": "cfmoto-sr250-high",
    "slug": "cfmoto-sr250-high",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SR250 HIGH",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sr250high-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sr250high-1.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250high-2.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250high-3.jpg",
      "assets/img/motos/catalogo/cfmoto/sr250high-4.jpg"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Peso",
        "value": "165 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$65,499 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Rendimiento",
        "value": "27 km/L"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP @ 9750 RPM"
      },
      {
        "label": "Torque",
        "value": "22 Nm @ 7500 RPM"
      },
      {
        "label": "Relación compresión",
        "value": "11.3:1"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Dimensiones",
        "value": "2000 x 750 x 1080 mm"
      },
      {
        "label": "Distancia entre ejes",
        "value": "1360 mm"
      },
      {
        "label": "Altura asiento",
        "value": "780 mm"
      },
      {
        "label": "Altura al piso",
        "value": "135 mm"
      },
      {
        "label": "Peso vacío",
        "value": "165 kg"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Iluminación",
        "value": "Full LED"
      },
      {
        "label": "Pantalla",
        "value": "LCD"
      },
      {
        "label": "Puertos",
        "value": "USB A / USB C"
      },
      {
        "label": "Batería",
        "value": "12V / 9Ah"
      },
      {
        "label": "Llave",
        "value": "Mecánica"
      },
      {
        "label": "Clutch",
        "value": "Solo en versión FI+ABS"
      },
      {
        "label": "Suspensión delantera",
        "value": "Barras convencionales 37 mm"
      },
      {
        "label": "Suspensión trasera",
        "value": "Monoshock central"
      },
      {
        "label": "Recorrido d/t",
        "value": "115 / 40 mm"
      },
      {
        "label": "Llanta delantera",
        "value": "110/70 R17"
      },
      {
        "label": "Llanta trasera",
        "value": "140/60 R17"
      },
      {
        "label": "Basculante",
        "value": "Tubular cuadrado doble brazo"
      }
    ],
    "source": "https://www.cflite.com.mx/250-sr",
    "available": true,
    "price": "$65,499 MXN"
  },
  {
    "id": "cfmoto-230-dual",
    "slug": "cfmoto-230-dual",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "230 DUAL",
    "category": "",
    "shortDescription": "229 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/230dual-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/230dual-1.jpg",
      "assets/img/motos/catalogo/cfmoto/230dual-2.jpg",
      "assets/img/motos/catalogo/cfmoto/230dual-3.jpg",
      "assets/img/motos/catalogo/cfmoto/230dual-4.jpg"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "229 cc"
      },
      {
        "label": "Potencia",
        "value": "14 HP @ 7000 RPM"
      },
      {
        "label": "Torque",
        "value": "16.5 Nm @ 5000 RPM"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Rendimiento",
        "value": "31 km/L"
      },
      {
        "label": "Peso",
        "value": "132 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$31,990 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico"
      },
      {
        "label": "Desplazamiento",
        "value": "229 cc"
      },
      {
        "label": "Rendimiento",
        "value": "31 km/L"
      },
      {
        "label": "Potencia",
        "value": "14 HP @ 7000 RPM"
      },
      {
        "label": "Torque",
        "value": "16.5 Nm @ 5000 RPM"
      },
      {
        "label": "Relación compresión",
        "value": "8.7:1"
      },
      {
        "label": "Refrigeración",
        "value": "Aire"
      },
      {
        "label": "Dimensiones",
        "value": "2113 x 855 x 1190 mm"
      },
      {
        "label": "Distancia entre ejes",
        "value": "1350 mm"
      },
      {
        "label": "Altura asiento",
        "value": "838 mm"
      },
      {
        "label": "Altura al piso",
        "value": "265 mm"
      },
      {
        "label": "Peso vacío",
        "value": "132 kg"
      },
      {
        "label": "Tanque",
        "value": "12 L"
      },
      {
        "label": "Iluminación",
        "value": "Halógena"
      },
      {
        "label": "Pantalla",
        "value": "LCD"
      },
      {
        "label": "Puertos",
        "value": "No especificado"
      },
      {
        "label": "Batería",
        "value": "No especificado"
      },
      {
        "label": "Llave",
        "value": "No especificado"
      },
      {
        "label": "Clutch",
        "value": "No especificado"
      },
      {
        "label": "Suspensión delantera",
        "value": "No especificado en el extracto visible"
      },
      {
        "label": "Suspensión trasera",
        "value": "No especificado en el extracto visible"
      },
      {
        "label": "Recorrido d/t",
        "value": "No especificado en el extracto visible"
      },
      {
        "label": "Llanta delantera",
        "value": "No especificado en el extracto visible"
      },
      {
        "label": "Llanta trasera",
        "value": "No especificado en el extracto visible"
      },
      {
        "label": "Basculante",
        "value": "No especificado en el extracto visible"
      }
    ],
    "source": "https://www.cflite.com.mx/230-dual",
    "available": true,
    "price": "$31,990 MXN"
  },
  {
    "id": "cfmoto-nk250-fun",
    "slug": "cfmoto-nk250-fun",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "NK250 FUN",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/nk250fun-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/nk250fun-1.png",
      "assets/img/motos/catalogo/cfmoto/nk250fun-2.png",
      "assets/img/motos/catalogo/cfmoto/nk250fun-3.png",
      "assets/img/motos/catalogo/cfmoto/nk250fun-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.5 HP"
      },
      {
        "label": "Torque",
        "value": "22 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso",
        "value": "151 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$68,880 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.5 HP"
      },
      {
        "label": "Torque",
        "value": "22 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso vacío",
        "value": "151 kg"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "Digital/TFT"
      },
      {
        "label": "Clutch",
        "value": "Multidisco"
      }
    ],
    "source": "https://www.cfmotomx.com/250-nk",
    "available": true,
    "price": "$68,880 MXN"
  },
  {
    "id": "cfmoto-nk300",
    "slug": "cfmoto-nk300",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "NK300",
    "category": "",
    "shortDescription": "292 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/nk300-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/nk300-1.png",
      "assets/img/motos/catalogo/cfmoto/nk300-2.png",
      "assets/img/motos/catalogo/cfmoto/nk300-3.png",
      "assets/img/motos/catalogo/cfmoto/nk300-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "292 cc"
      },
      {
        "label": "Potencia",
        "value": "28.6 HP"
      },
      {
        "label": "Torque",
        "value": "25.3 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso",
        "value": "151 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$83,990 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "292 cc"
      },
      {
        "label": "Potencia",
        "value": "28.6 HP"
      },
      {
        "label": "Torque",
        "value": "25.3 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso vacío",
        "value": "151 kg"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "Digital/TFT"
      },
      {
        "label": "Clutch",
        "value": "Antirrebote"
      }
    ],
    "source": "https://www.cfmotomx.com/300-nk",
    "available": true,
    "price": "$83,990 MXN"
  },
  {
    "id": "cfmoto-nk450",
    "slug": "cfmoto-nk450",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "NK450",
    "category": "",
    "shortDescription": "449 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/nk450-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/nk450-1.png",
      "assets/img/motos/catalogo/cfmoto/nk450-2.png",
      "assets/img/motos/catalogo/cfmoto/nk450-3.png",
      "assets/img/motos/catalogo/cfmoto/nk450-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "449 cc"
      },
      {
        "label": "Potencia",
        "value": "51 HP"
      },
      {
        "label": "Torque",
        "value": "40 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$119,900 MXN"
      },
      {
        "label": "Motor",
        "value": "Bicilíndrico en paralelo, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "449 cc"
      },
      {
        "label": "Potencia",
        "value": "51 HP"
      },
      {
        "label": "Torque",
        "value": "40 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "TFT"
      }
    ],
    "source": "https://www.cfmotomx.com/450-nk",
    "available": true,
    "price": "$119,900 MXN"
  },
  {
    "id": "cfmoto-sr250-fun",
    "slug": "cfmoto-sr250-fun",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SR250 FUN",
    "category": "",
    "shortDescription": "249 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sr250fun-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sr250fun-1.png",
      "assets/img/motos/catalogo/cfmoto/sr250fun-2.png",
      "assets/img/motos/catalogo/cfmoto/sr250fun-3.png",
      "assets/img/motos/catalogo/cfmoto/sr250fun-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP"
      },
      {
        "label": "Torque",
        "value": "22 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso",
        "value": "165 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$74,900 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "249 cc"
      },
      {
        "label": "Potencia",
        "value": "27.4 HP"
      },
      {
        "label": "Torque",
        "value": "22 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Altura asiento",
        "value": "765 mm"
      },
      {
        "label": "Peso vacío",
        "value": "165 kg"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "Digital/TFT"
      },
      {
        "label": "Clutch",
        "value": "Antirrebote"
      }
    ],
    "source": "https://www.cfmotomx.com/250sr-fun",
    "available": true,
    "price": "$74,900 MXN"
  },
  {
    "id": "cfmoto-sr300-sport",
    "slug": "cfmoto-sr300-sport",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SR300 SPORT",
    "category": "",
    "shortDescription": "298 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sr300sport-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sr300sport-1.png",
      "assets/img/motos/catalogo/cfmoto/sr300sport-2.png",
      "assets/img/motos/catalogo/cfmoto/sr300sport-3.png",
      "assets/img/motos/catalogo/cfmoto/sr300sport-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "298 cc"
      },
      {
        "label": "Potencia",
        "value": "29.5 HP"
      },
      {
        "label": "Torque",
        "value": "27 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso",
        "value": "155 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$89,990 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "298 cc"
      },
      {
        "label": "Potencia",
        "value": "29.5 HP"
      },
      {
        "label": "Torque",
        "value": "27 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso vacío",
        "value": "155 kg"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "TFT 5\""
      },
      {
        "label": "Clutch",
        "value": "Deslizante"
      },
      {
        "label": "Suspensión delantera",
        "value": "Invertida"
      }
    ],
    "source": "https://www.cfmotomx.com/300sr-sport",
    "available": true,
    "price": "$89,990 MXN"
  },
  {
    "id": "cfmoto-sr450",
    "slug": "cfmoto-sr450",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SR450",
    "category": "",
    "shortDescription": "449 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sr450-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sr450-1.png",
      "assets/img/motos/catalogo/cfmoto/sr450-2.png",
      "assets/img/motos/catalogo/cfmoto/sr450-3.png",
      "assets/img/motos/catalogo/cfmoto/sr450-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "449 cc"
      },
      {
        "label": "Potencia",
        "value": "51 HP @ 9,500 rpm"
      },
      {
        "label": "Torque",
        "value": "40 N.m @ 7,750 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "+20 km/L aprox."
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$134,800 MXN"
      },
      {
        "label": "Motor",
        "value": "Bicilíndrico en paralelo, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "449 cc"
      },
      {
        "label": "Rendimiento",
        "value": "+20 km/L aprox."
      },
      {
        "label": "Potencia",
        "value": "51 HP @ 9,500 rpm"
      },
      {
        "label": "Torque",
        "value": "40 N.m @ 7,750 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Altura asiento",
        "value": "795 mm"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "TFT curva 5\""
      },
      {
        "label": "Clutch",
        "value": "Deslizante"
      },
      {
        "label": "Suspensión delantera",
        "value": "Invertida"
      }
    ],
    "source": "https://www.cfmotomx.com/450-sr-tc",
    "available": true,
    "price": "$134,800 MXN"
  },
  {
    "id": "cfmoto-mt450",
    "slug": "cfmoto-mt450",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "MT450",
    "category": "",
    "shortDescription": "449.5 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/mt450-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/mt450-1.png",
      "assets/img/motos/catalogo/cfmoto/mt450-2.png",
      "assets/img/motos/catalogo/cfmoto/mt450-3.png",
      "assets/img/motos/catalogo/cfmoto/mt450-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "449.5 cc"
      },
      {
        "label": "Potencia",
        "value": "43.5 HP"
      },
      {
        "label": "Torque",
        "value": "44 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Peso",
        "value": "185 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$129,990 MXN"
      },
      {
        "label": "Motor",
        "value": "Bicilíndrico en paralelo, DOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "449.5 cc"
      },
      {
        "label": "Potencia",
        "value": "43.5 HP"
      },
      {
        "label": "Torque",
        "value": "44 N.m"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Altura al piso",
        "value": "220 mm"
      },
      {
        "label": "Peso vacío",
        "value": "185 kg"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "TFT"
      }
    ],
    "source": "https://www.cfmotomx.com/450-mt",
    "available": true,
    "price": "$129,990 MXN"
  },
  {
    "id": "cfmoto-papio-xo-racer",
    "slug": "cfmoto-papio-xo-racer",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "PAPIO XO RACER",
    "category": "",
    "shortDescription": "126 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/papioxoracer-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/papioxoracer-1.png",
      "assets/img/motos/catalogo/cfmoto/papioxoracer-2.png",
      "assets/img/motos/catalogo/cfmoto/papioxoracer-3.png",
      "assets/img/motos/catalogo/cfmoto/papioxoracer-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "126 cc"
      },
      {
        "label": "Potencia",
        "value": "7 kW @ 8,250 rpm"
      },
      {
        "label": "Torque",
        "value": "9.2 N.m @ 6,500 rpm"
      },
      {
        "label": "Peso",
        "value": "114 kg"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$54,800 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico"
      },
      {
        "label": "Desplazamiento",
        "value": "126 cc"
      },
      {
        "label": "Potencia",
        "value": "7 kW @ 8,250 rpm"
      },
      {
        "label": "Torque",
        "value": "9.2 N.m @ 6,500 rpm"
      },
      {
        "label": "Altura asiento",
        "value": "760 mm"
      },
      {
        "label": "Peso vacío",
        "value": "114 kg"
      },
      {
        "label": "Tanque",
        "value": "7 L"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      }
    ],
    "source": "https://www.cfmotomx.com/moto",
    "available": true,
    "price": "$54,800 MXN"
  },
  {
    "id": "cfmoto-sc150",
    "slug": "cfmoto-sc150",
    "brand": "CF Moto",
    "brandSlug": "cfmoto",
    "model": "SC150",
    "category": "",
    "shortDescription": "149 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/cfmoto/sc150-1.png",
    "gallery": [
      "assets/img/motos/catalogo/cfmoto/sc150-1.png",
      "assets/img/motos/catalogo/cfmoto/sc150-2.png",
      "assets/img/motos/catalogo/cfmoto/sc150-3.png",
      "assets/img/motos/catalogo/cfmoto/sc150-4.png"
    ],
    "highlights": [
      {
        "label": "Cilindrada",
        "value": "149 cc"
      },
      {
        "label": "Potencia",
        "value": "10.5 kW @ 8,250 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Rendimiento",
        "value": "2.5–2.7 L/100 km"
      }
    ],
    "specs": [
      {
        "label": "Precio",
        "value": "$68,800 MXN"
      },
      {
        "label": "Motor",
        "value": "Monocilíndrico, 2 válvulas, SOHC"
      },
      {
        "label": "Desplazamiento",
        "value": "149 cc"
      },
      {
        "label": "Rendimiento",
        "value": "2.5–2.7 L/100 km"
      },
      {
        "label": "Potencia",
        "value": "10.5 kW @ 8,250 rpm"
      },
      {
        "label": "Refrigeración",
        "value": "Líquida"
      },
      {
        "label": "Tanque",
        "value": "8.5 L"
      },
      {
        "label": "Iluminación",
        "value": "LED"
      },
      {
        "label": "Pantalla",
        "value": "TFT multifunción"
      },
      {
        "label": "Clutch",
        "value": "CVT"
      }
    ],
    "source": "https://www.cfmotomx.com/moto",
    "available": true,
    "price": "$68,800 MXN"
  },
  {
    "id": "um-matrix",
    "slug": "um-matrix",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Matrix",
    "category": "Scooter",
    "shortDescription": "Scooter",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/matrix-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/matrix-1.jpg",
      "assets/img/motos/catalogo/um/matrix-2.jpg",
      "assets/img/motos/catalogo/um/matrix-3.jpg",
      "assets/img/motos/catalogo/um/matrix-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      }
    ],
    "source": "https://ummotosmexico.mx/shop/product/matrix-150-evo-2022/",
    "available": true
  },
  {
    "id": "um-xpeed",
    "slug": "um-xpeed",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Xpeed",
    "category": "Scooter",
    "shortDescription": "Scooter · 149.6 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/xpeed-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/xpeed-1.jpg",
      "assets/img/motos/catalogo/um/xpeed-2.jpg",
      "assets/img/motos/catalogo/um/xpeed-3.jpg",
      "assets/img/motos/catalogo/um/xpeed-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "149.6 cc"
      },
      {
        "label": "Potencia",
        "value": "5.30 HP @ 7500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Automática (CVT)"
      },
      {
        "label": "Refrigeración",
        "value": "Por aire"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Scooter"
      },
      {
        "label": "Cilindrada",
        "value": "149.6 cc"
      },
      {
        "label": "Potencia",
        "value": "5.30 HP @ 7500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Automática (CVT)"
      },
      {
        "label": "Enfriamiento",
        "value": "Por aire"
      }
    ],
    "source": "https://ummotosmexico.mx/umw/modelos_xpeed_150_x.html",
    "available": true
  },
  {
    "id": "um-xtreet-rs-250-4v",
    "slug": "um-xtreet-rs-250-4v",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Xtreet RS 250 4V",
    "category": "Sport",
    "shortDescription": "Sport · 223 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/xtreetrs2504v-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/xtreetrs2504v-1.jpg",
      "assets/img/motos/catalogo/um/xtreetrs2504v-2.jpg",
      "assets/img/motos/catalogo/um/xtreetrs2504v-3.jpg",
      "assets/img/motos/catalogo/um/xtreetrs2504v-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Sport"
      },
      {
        "label": "Cilindrada",
        "value": "223 cc"
      },
      {
        "label": "Potencia",
        "value": "15.4 HP @ 7500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Cadena / caja manual"
      },
      {
        "label": "Refrigeración",
        "value": "Aire + radiador de aceite"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Sport"
      },
      {
        "label": "Cilindrada",
        "value": "223 cc"
      },
      {
        "label": "Potencia",
        "value": "15.4 HP @ 7500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Cadena / caja manual"
      },
      {
        "label": "Enfriamiento",
        "value": "Aire + radiador de aceite"
      }
    ],
    "source": "https://ummotosmexico.mx/views/modules/Sport_Xtreet_SS.php",
    "available": true
  },
  {
    "id": "um-dsr-rally-250-4v",
    "slug": "um-dsr-rally-250-4v",
    "brand": "UM",
    "brandSlug": "um",
    "model": "DSR Rally 250 4V",
    "category": "Doble propósito / Adventure",
    "shortDescription": "Doble propósito / Adventure · 250 cc (referencia del modelo)",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/dsrrally2504v-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/dsrrally2504v-1.jpg",
      "assets/img/motos/catalogo/um/dsrrally2504v-2.jpg",
      "assets/img/motos/catalogo/um/dsrrally2504v-3.jpg",
      "assets/img/motos/catalogo/um/dsrrally2504v-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Doble propósito / Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc (referencia del modelo)"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Doble propósito / Adventure"
      },
      {
        "label": "Cilindrada",
        "value": "250 cc (referencia del modelo)"
      }
    ],
    "source": "https://ummotosmexico.mx/",
    "available": true
  },
  {
    "id": "um-renegade-sport-300s",
    "slug": "um-renegade-sport-300s",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Renegade Sport 300S",
    "category": "Cruiser",
    "shortDescription": "Cruiser · 279.5 cc",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/renegadesport300s-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/renegadesport300s-1.jpg",
      "assets/img/motos/catalogo/um/renegadesport300s-2.jpg",
      "assets/img/motos/catalogo/um/renegadesport300s-3.jpg",
      "assets/img/motos/catalogo/um/renegadesport300s-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cruiser"
      },
      {
        "label": "Cilindrada",
        "value": "279.5 cc"
      },
      {
        "label": "Potencia",
        "value": "24.8 HP @ 8500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Cadena reforzada 520 / caja manual"
      },
      {
        "label": "Refrigeración",
        "value": "Líquido"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Cruiser"
      },
      {
        "label": "Cilindrada",
        "value": "279.5 cc"
      },
      {
        "label": "Potencia",
        "value": "24.8 HP @ 8500 RPM"
      },
      {
        "label": "Transmisión",
        "value": "Cadena reforzada 520 / caja manual"
      },
      {
        "label": "Enfriamiento",
        "value": "Líquido"
      }
    ],
    "source": "https://ummotosmexico.mx/views/modules/Cruiser_NewSport.php",
    "available": true
  },
  {
    "id": "um-renegade-classic-lx",
    "slug": "um-renegade-classic-lx",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Renegade Classic LX",
    "category": "Cruiser clásica",
    "shortDescription": "Cruiser clásica",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/renegadeclassiclx-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/renegadeclassiclx-1.jpg",
      "assets/img/motos/catalogo/um/renegadeclassiclx-2.jpg",
      "assets/img/motos/catalogo/um/renegadeclassiclx-3.jpg",
      "assets/img/motos/catalogo/um/renegadeclassiclx-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cruiser clásica"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Cruiser clásica"
      }
    ],
    "source": "https://ummotosmexico.mx/",
    "available": true
  },
  {
    "id": "um-renegade-st-300",
    "slug": "um-renegade-st-300",
    "brand": "UM",
    "brandSlug": "um",
    "model": "Renegade ST 300",
    "category": "Cruiser",
    "shortDescription": "Cruiser · 300 cc (referencia del modelo)",
    "description": "",
    "mainImage": "assets/img/motos/catalogo/um/renegadest300-1.jpg",
    "gallery": [
      "assets/img/motos/catalogo/um/renegadest300-1.jpg",
      "assets/img/motos/catalogo/um/renegadest300-2.jpg",
      "assets/img/motos/catalogo/um/renegadest300-3.jpg",
      "assets/img/motos/catalogo/um/renegadest300-4.jpg"
    ],
    "highlights": [
      {
        "label": "Categoría",
        "value": "Cruiser"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc (referencia del modelo)"
      }
    ],
    "specs": [
      {
        "label": "Categoría",
        "value": "Cruiser"
      },
      {
        "label": "Cilindrada",
        "value": "300 cc (referencia del modelo)"
      }
    ],
    "source": "https://ummotosmexico.mx/",
    "available": true
  }
];

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
