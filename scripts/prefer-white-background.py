#!/usr/bin/env python3
"""
RIDERMEX · Consistencia visual del catálogo
───────────────────────────────────────────────────────────────────────────
Reordena la galería de cada modelo para que la PRIMERA imagen (la que se usa
como `mainImage` en grids, vitrinas y catálogo) sea la de fondo más limpio /
blanco cuando exista esa opción.

NO inventa, NO descarga ni genera imágenes: solo reordena las fotografías que
ya están en el proyecto. Si un modelo tiene una sola foto, se deja igual.

Criterio de "fondo blanco de estudio": se muestrea el marco exterior de la
imagen (10%) y debe cumplir TRES condiciones absolutas a la vez —
luminancia media alta, saturación casi nula y poca varianza. Una foto de
calle luminosa no pasa el filtro (tiene color y textura), así que nunca se
sustituye una buena foto de producto por una ambiental.

Uso:  python3 scripts/prefer-white-background.py [--dry-run]
"""
import json
import os
import re
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "src", "data", "motorcycles.js")
SAMPLE = 220          # lado al que se reduce la imagen para muestrear
# Umbrales absolutos de "fondo blanco de estudio" (marco exterior):
MIN_LUM = 225.0       # luminancia media (fondo claro de estudio)
MAX_SAT = 10.0        # saturación media (blanco/gris ≈ 0; descarta exteriores)
MAX_STD = 65.0        # desviación de luminancia (la moto entra en el marco)


def frame_stats(path):
    """(luminancia media, saturación media, desviación) del marco exterior."""
    try:
        im = Image.open(path).convert("RGB")
    except Exception:
        return None
    im.thumbnail((SAMPLE, SAMPLE))
    w, h = im.size
    px = im.load()
    bw = max(2, int(w * 0.10))
    bh = max(2, int(h * 0.10))

    vals = []
    for y in range(h):
        edge_row = y < bh or y >= h - bh
        for x in range(w):
            if not (edge_row or x < bw or x >= w - bw):
                continue
            vals.append(px[x, y])

    if not vals:
        return None

    n = len(vals)
    lum = [0.299 * r + 0.587 * g + 0.114 * b for (r, g, b) in vals]
    mean_lum = sum(lum) / n
    std = (sum((v - mean_lum) ** 2 for v in lum) / n) ** 0.5
    sat = sum(max(r, g, b) - min(r, g, b) for (r, g, b) in vals) / n
    return (mean_lum, sat, std)


def is_white_bg(stats):
    if stats is None:
        return False
    lum, sat, std = stats
    return lum >= MIN_LUM and sat <= MAX_SAT and std <= MAX_STD


def main():
    dry = "--dry-run" in sys.argv
    src = open(DATA, encoding="utf-8").read()

    # El array de motos es JSON puro dentro del archivo JS.
    start = src.index("var MOTORCYCLES = ") + len("var MOTORCYCLES = ")
    end = src.index("\n];", start) + 3
    motos = json.loads(src[start:end].rstrip().rstrip(";"))

    cache = {}
    changed = 0

    for m in motos:
        gallery = m.get("gallery") or []
        # Solo se puede evaluar lo que está en disco (las URLs remotas de las
        # marcas ya son fotos oficiales de estudio; se respetan como vienen).
        local = [g for g in gallery if g and not g.startswith("http")]
        if len(gallery) < 2 or len(local) < 2:
            continue

        def stats_of(g):
            if g.startswith("http"):
                return None
            if g not in cache:
                p = os.path.join(ROOT, g)
                cache[g] = frame_stats(p) if os.path.exists(p) else None
            return cache[g]

        # Si la primera imagen ya tiene fondo blanco, no se toca nada.
        if is_white_bg(stats_of(gallery[0])):
            continue

        candidate = next((g for g in gallery[1:] if is_white_bg(stats_of(g))), None)
        if candidate is None:
            continue

        new_gallery = [candidate] + [g for g in gallery if g != candidate]
        old_first = gallery[0]
        m["gallery"] = new_gallery
        if not m.get("mainImage") or m["mainImage"] == old_first:
            m["mainImage"] = candidate
        changed += 1
        lum, sat, std = stats_of(candidate)
        print("  %-34s %s → %s  (lum %.0f · sat %.0f · std %.0f)"
              % (m["slug"], os.path.basename(old_first),
                 os.path.basename(candidate), lum, sat, std))

    print("\nModelos reordenados: %d de %d" % (changed, len(motos)))
    if dry or not changed:
        return

    body = json.dumps(motos, ensure_ascii=False, indent=2)
    # Reindentado a 2 espacios extra para conservar el estilo del archivo.
    body = "\n".join(("  " + ln) if ln.strip() else ln for ln in body.split("\n"))
    out = src[:start] + body.lstrip() + src[end:]
    open(DATA, "w", encoding="utf-8").write(out)
    print("Escrito: %s" % DATA)


if __name__ == "__main__":
    main()
