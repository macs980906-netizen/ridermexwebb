#!/usr/bin/env python3
"""
RIDERMEX · Índice estático del catálogo (SEO / AEO)
───────────────────────────────────────────────────────────────────────────
El catálogo se renderiza con JavaScript y hash routing, así que el HTML que
recibe un rastreador que no ejecuta JS está vacío. Este script escribe dentro
de `catalogo.html` un índice REAL —texto + enlaces— de las 8 marcas y los 142
modelos, tomado de src/data/motorcycles.js.

No inventa nada: solo vuelca marca, modelo, categoría y cilindrada tal como
están en la data.

Uso:  python3 scripts/build-catalog-index.py
Ejecutar cada vez que cambie src/data/motorcycles.js.
"""
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data", "motorcycles.js")
PAGE = os.path.join(ROOT, "catalogo.html")

# Delimitadores explícitos. NO usar "</div>" como fin: al regenerar sobre un
# índice ya lleno, el primer </div> es el de la primera marca y el resto del
# contenido anterior sobrevive (el índice se duplicaba en cada ejecución).
START = "<!-- CAT-INDEX:START -->"
END = "<!-- CAT-INDEX:END -->"

# Texto introductorio por marca. Corto, útil e indexable: contexto real de lo
# que hay en el catálogo, sin afirmaciones técnicas que la data no respalde.
BRAND_INTRO = {
    "bajaj": "Modelos Bajaj disponibles en RiderMex, con las familias Pulsar, Dominar, Avenger y Boxer.",
    "carabela": "Modelos Carabela disponibles en RiderMex: urbanas, doble propósito, todo terreno y cuatrimotos.",
    "cfmoto": "Modelos CF Moto disponibles en RiderMex, entre naked NK, deportivas SR y doble propósito.",
    "islo": "Modelos Islo disponibles en RiderMex, con opciones utilitarias y de trabajo.",
    "ryder": "Modelos Ryder disponibles en RiderMex, incluyendo motocarros de carga y de pasajeros.",
    "um": "Modelos UM Motorcycles disponibles en RiderMex, con la gama Renegade, DSR y Xtreet.",
    "vento": "Modelos Vento disponibles en RiderMex: motonetas, scooters, urbanas y doble propósito.",
    "zmoto": "Modelos Zmoto disponibles en RiderMex, con opciones urbanas, scooters y todo terreno.",
    "tvs": "Modelos TVS disponibles en RiderMex, con la urbana Stryker y la gama deportiva Apache RTR.",
    "cflite": "Modelos CF Lite disponibles en RiderMex: naked 250NK, deportiva 250SR y doble propósito 250DUAL.",
    "honda": "Modelos Honda disponibles en RiderMex, encabezados por la urbana compacta NAVI.",
}


def load_motorcycles():
    src = open(DATA, encoding="utf-8").read()
    start = src.index("var MOTORCYCLES = ") + len("var MOTORCYCLES = ")
    end = src.index("\n];", start) + 3
    return json.loads(src[start:end].rstrip().rstrip(";"))


def esc(s):
    return html.escape(str(s or ""), quote=True)


def main():
    motos = load_motorcycles()

    brands = {}
    for m in motos:
        b = brands.setdefault(m["brandSlug"], {"name": m["brand"], "models": []})
        b["models"].append(m)
    for b in brands.values():
        b["models"].sort(key=lambda m: m["model"])

    order = sorted(brands.items(), key=lambda kv: kv[1]["name"].lower())

    out = []
    for slug, b in order:
        intro = BRAND_INTRO.get(slug, "Modelos %s disponibles en RiderMex." % b["name"])
        count = len(b["models"])
        out.append('<div class="cat-index-brand">')
        out.append(
            '<h3><a href="#/marca/%s">Motos %s en RiderMex</a> '
            '<span class="cat-index-count">%d %s</span></h3>'
            % (esc(slug), esc(b["name"]), count, "modelo" if count == 1 else "modelos")
        )
        out.append("<p>%s</p>" % esc(intro))
        out.append("<ul>")
        for m in b["models"]:
            meta = m.get("shortDescription") or m.get("category") or ""
            label = "%s %s" % (b["name"], m["model"])
            li = '<li><a href="#/moto/%s">%s</a>' % (esc(m["slug"]), esc(label))
            if meta:
                li += ' <span class="cat-index-meta">%s</span>' % esc(meta)
            out.append(li + "</li>")
        out.append("</ul>")
        out.append("</div>")

    block = "\n      ".join(out)
    page = open(PAGE, encoding="utf-8").read()
    if START not in page or END not in page:
        raise SystemExit(
            "catalogo.html no tiene los delimitadores %s / %s. "
            "Restaura el bloque #cat-index-content antes de regenerar." % (START, END))
    i = page.index(START) + len(START)
    j = page.index(END, i)
    new = page[:i] + "\n      " + block + "\n      " + page[j:]
    open(PAGE, "w", encoding="utf-8").write(new)

    print("Índice generado: %d marcas, %d modelos" % (len(brands), len(motos)))


if __name__ == "__main__":
    main()
