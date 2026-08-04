/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · CATÁLOGO — router + render (SPA con hash routing)
   Consume window.RIDERMEX_CATALOG (src/data/motorcycles.js).
   Rutas (funcionan en Vercel sin rewrites porque el hash no llega al server):
     catalogo.html                    → marcas
     catalogo.html#/marca/:brandSlug  → modelos de la marca
     catalogo.html#/moto/:motoSlug    → ficha individual
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var CAT = window.RIDERMEX_CATALOG;
  var root = document.getElementById("catalog-root");
  if (!CAT || !root) return;

  var PLACEHOLDER = CAT.PLACEHOLDER_IMAGE;
  var FORM_TARGET = CAT.MOTORCYCLE_FORM_TARGET;

  // ── utilidades ─────────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // atributo src seguro (evita romper el placeholder onerror en bucle)
  function imgTag(src, alt, extraClass, eager) {
    var s = src || PLACEHOLDER;
    return '<img src="' + esc(s) + '" alt="' + esc(alt) + '"' +
      (extraClass ? ' class="' + extraClass + '"' : "") +
      (eager ? "" : ' loading="lazy"') +
      ' onerror="this.onerror=null;this.src=window.RIDERMEX_CATALOG.PLACEHOLDER_IMAGE">';
  }
  function chevron() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
  }
  var formUrl = function (moto) {
    // Pasa el modelo como parámetro para que el equipo lo identifique.
    var hashSplit = FORM_TARGET.split("#");
    var path = hashSplit[0];
    var hash = hashSplit[1] ? "#" + hashSplit[1] : "";
    var sep = path.indexOf("?") === -1 ? "?" : "&";
    return path + sep + "modelo=" + encodeURIComponent(moto.slug) + hash;
  };

  function breadcrumb(items) {
    var html = '<nav class="breadcrumb" aria-label="Ruta de navegación">';
    items.forEach(function (it, i) {
      if (i > 0) html += '<span class="sep">›</span>';
      if (it.href) html += '<a href="' + esc(it.href) + '">' + esc(it.label) + "</a>";
      else html += '<span class="current">' + esc(it.label) + "</span>";
    });
    return html + "</nav>";
  }

  function setTitle(t) { document.title = t; }

  // ── VISTA 1: marcas ──────────────────────────────────────────────────
  function renderBrands(query) {
    setTitle("Catálogo de Motos | RiderMex");
    var brands = CAT.getAllBrands();
    var q = (query || "").trim().toLowerCase();

    var head =
      '<div class="cat-head">' +
        '<span class="cat-eyebrow">Catálogo RiderMex</span>' +
        '<h1 class="cat-title">Elige tu <span>marca</span></h1>' +
        '<p class="cat-subtitle">' + brands.length + " marcas · " + CAT.motorcycles.length +
          " modelos. Explora por marca y abre la ficha de cada moto.</p>" +
        searchBox("Busca una marca o modelo…", q) +
      "</div>";

    // Si hay búsqueda, mostramos modelos coincidentes en vez de marcas.
    if (q) {
      var matches = CAT.motorcycles.filter(function (m) {
        return (m.model + " " + m.brand + " " + (m.category || "")).toLowerCase().indexOf(q) !== -1;
      });
      if (!matches.length) {
        root.innerHTML = head + emptyState(
          "Sin resultados",
          'No encontramos modelos para “' + esc(query) + "”.",
          [{ label: "Ver todo el catálogo", href: "#/", primary: true }]
        );
        return;
      }
      root.innerHTML = head +
        '<div class="cat-count" style="margin-bottom:16px">' + matches.length + " modelo(s) encontrados</div>" +
        '<div class="model-grid">' + matches.map(modelCard).join("") + "</div>";
      bindGlow();
      return;
    }

    var cards = brands.map(function (b) {
      return '<a class="brand-card" href="#/marca/' + esc(b.slug) + '">' +
        '<div class="brand-card-media">' + imgTag(b.image, b.name, null, false) + "</div>" +
        '<div class="brand-card-body">' +
          '<div class="brand-card-name">' + esc(b.name) + "</div>" +
          '<div class="brand-card-count">' + b.count + (b.count === 1 ? " modelo" : " modelos") + "</div>" +
          '<span class="brand-card-cta">Ver modelos ' + chevron() + "</span>" +
        "</div></a>";
    }).join("");

    root.innerHTML = head + '<div class="brand-grid">' + cards + "</div>";
    bindGlow();
  }

  // ── VISTA 2: modelos de una marca ────────────────────────────────────
  function renderBrand(brandSlug, query) {
    var brand = CAT.getBrandBySlug(brandSlug);
    if (!brand) {
      setTitle("Marca no encontrada | RiderMex");
      root.innerHTML = breadcrumb([
        { label: "Inicio", href: "index.html" },
        { label: "Catálogo", href: "#/" },
        { label: "Marca no encontrada" }
      ]) + emptyState(
        "Marca no encontrada",
        "La marca que buscas no está disponible en el catálogo.",
        [{ label: "Volver al catálogo", href: "#/", primary: true }]
      );
      return;
    }
    setTitle(brand.name + " | Catálogo RiderMex");
    var models = CAT.getMotorcyclesByBrand(brandSlug);
    var q = (query || "").trim().toLowerCase();
    var shown = q ? models.filter(function (m) {
      return (m.model + " " + (m.category || "")).toLowerCase().indexOf(q) !== -1;
    }) : models;

    var bc = breadcrumb([
      { label: "Inicio", href: "index.html" },
      { label: "Catálogo", href: "#/" },
      { label: brand.name }
    ]);

    var head =
      '<div class="cat-head" style="text-align:left">' +
        '<span class="cat-eyebrow">Catálogo · ' + esc(brand.name) + "</span>" +
        '<h1 class="cat-title">Modelos <span>' + esc(brand.name) + "</span></h1>" +
      "</div>" +
      '<div class="cat-toolbar">' +
        '<a class="btn-cat btn-cat-ghost" href="#/">‹ Volver al catálogo</a>' +
        '<span class="cat-count">' + models.length + (models.length === 1 ? " modelo" : " modelos") + "</span>" +
      "</div>";

    var body;
    if (!shown.length) {
      body = emptyState(
        q ? "Sin resultados" : "Sin modelos por ahora",
        q ? 'No encontramos modelos para “' + esc(query) + '” en ' + esc(brand.name) + "."
          : "No encontramos modelos disponibles para esta marca.",
        [{ label: "Volver al catálogo", href: "#/", primary: true }]
      );
    } else {
      body = '<div class="model-grid">' + shown.map(modelCard).join("") + "</div>";
    }

    root.innerHTML = bc + head + body;
    bindGlow();
  }

  function modelCard(m) {
    var price = m.price ? '<div class="model-card-price">' + esc(m.price) + "</div>" : "";
    var desc = m.shortDescription ? '<div class="model-card-desc">' + esc(m.shortDescription) + "</div>" : "";
    return '<a class="model-card" href="#/moto/' + esc(m.slug) + '">' +
      '<div class="model-card-media">' + imgTag(m.mainImage, m.brand + " " + m.model) + "</div>" +
      '<div class="model-card-body">' +
        '<div class="model-card-brand">' + esc(m.brand) + "</div>" +
        '<div class="model-card-name">' + esc(m.model) + "</div>" +
        desc + price +
        '<span class="model-card-foot">Ver modelo ' + chevron() + "</span>" +
      "</div></a>";
  }

  // ── VISTA 3: ficha individual ────────────────────────────────────────
  function renderDetail(slug) {
    var m = CAT.getMotorcycleBySlug(slug);
    if (!m) {
      setTitle("Moto no encontrada | RiderMex");
      root.innerHTML = breadcrumb([
        { label: "Inicio", href: "index.html" },
        { label: "Catálogo", href: "#/" },
        { label: "Moto no encontrada" }
      ]) + emptyState(
        "Moto no encontrada",
        "No encontramos este modelo en el catálogo.",
        [{ label: "Volver al catálogo", href: "#/", primary: true }]
      );
      return;
    }
    setTitle(m.brand + " " + m.model + " | Catálogo RiderMex");
    setMeta("description", "Conoce " + m.brand + " " + m.model +
      " en el catálogo RiderMex y solicita atención personalizada.");

    var images = CAT.getImages(m);
    var bc = breadcrumb([
      { label: "Inicio", href: "index.html" },
      { label: "Catálogo", href: "#/" },
      { label: m.brand, href: "#/marca/" + m.brandSlug },
      { label: m.model }
    ]);

    // Galería
    var thumbs = images.length > 1
      ? '<div class="gallery-thumbs">' + images.map(function (src, i) {
          return '<div class="gallery-thumb' + (i === 0 ? " is-active" : "") + '" data-src="' + esc(src) + '">' +
            imgTag(src, m.model + " vista " + (i + 1)) + "</div>";
        }).join("") + "</div>"
      : "";
    var gallery =
      '<div class="detail-gallery">' +
        '<div class="gallery-main">' + imgTag(images[0], m.brand + " " + m.model, null, true) + "</div>" +
        thumbs +
      "</div>";

    // Meta chips
    var chips = "";
    if (m.category) chips += '<span class="detail-chip">' + esc(m.category) + "</span>";
    if (m.year) chips += '<span class="detail-chip">' + esc(m.year) + "</span>";
    if (m.version) chips += '<span class="detail-chip">' + esc(m.version) + "</span>";
    if (m.available) chips += '<span class="detail-chip avail">Disponible</span>';

    var price = m.price
      ? '<div class="detail-price">' + esc(m.price) + "</div>" +
        '<div class="detail-price-note">Precio de referencia — confírmalo con tu asesor.</div>'
      : "";

    // Resumen (primeros destacados)
    var summary = "";
    if (m.highlights && m.highlights.length) {
      summary =
        '<div class="detail-summary"><h4>Resumen</h4><div class="summary-grid">' +
        m.highlights.slice(0, 6).map(function (h) {
          return '<div class="summary-item"><div class="lbl">' + esc(h.label) +
            '</div><div class="val">' + esc(h.value) + "</div></div>";
        }).join("") + "</div></div>";
    }

    var info =
      '<div class="detail-info">' +
        '<div class="detail-brand">' + esc(m.brand) + "</div>" +
        '<h1 class="detail-title">' + esc(m.model) + "</h1>" +
        (chips ? '<div class="detail-meta">' + chips + "</div>" : "") +
        (m.shortDescription ? '<p class="detail-short">' + esc(m.shortDescription) + "</p>" : "") +
        price +
        summary +
        '<div class="detail-actions">' +
          '<a class="btn-cat btn-cat-primary" href="' + esc(formUrl(m)) + '">Quiero esta moto</a>' +
          '<a class="btn-cat btn-cat-ghost" href="#/marca/' + esc(m.brandSlug) + '">Volver al catálogo</a>' +
        "</div>" +
      "</div>";

    // Descripción general
    var descText = m.description && m.description.trim()
      ? esc(m.description)
      : "Este modelo forma parte del catálogo disponible de RiderMex. Solicita atención " +
        "personalizada para conocer disponibilidad, condiciones y opciones de compra.";
    var descSection =
      '<div class="detail-section"><h2>Descripción general</h2>' +
      '<p class="desc-text">' + descText + "</p></div>";

    // Características destacadas
    var featSection = "";
    if (m.highlights && m.highlights.length) {
      featSection =
        '<div class="detail-section"><h2>Características destacadas</h2>' +
        '<div class="feature-grid">' + m.highlights.map(function (h) {
          return '<div class="feature-tile"><div class="lbl">' + esc(h.label) +
            '</div><div class="val">' + esc(h.value) + "</div></div>";
        }).join("") + "</div></div>";
    }

    // Ficha técnica completa (colapsable)
    var specSection = "";
    if (m.specs && m.specs.length) {
      var rows = m.specs.map(function (s) {
        return '<tr><td class="k">' + esc(s.label) + '</td><td class="v">' + esc(s.value) + "</td></tr>";
      }).join("");
      var srcLine = m.source
        ? '<div class="spec-source">Fuente oficial: <a href="' + esc(m.source) +
          '" target="_blank" rel="noopener noreferrer">' + esc(m.source) + "</a></div>"
        : "";
      specSection =
        '<div class="detail-section"><details class="spec-accordion" open>' +
          '<summary>Ficha técnica completa' +
            '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>' +
          "</summary>" +
          '<table class="spec-table"><tbody>' + rows + "</tbody></table>" +
          srcLine +
        "</details></div>";
    }

    root.innerHTML = bc +
      '<div class="detail-layout">' + gallery + info + "</div>" +
      descSection + featSection + specSection;

    bindGallery();
  }

  // ── componentes compartidos ──────────────────────────────────────────
  function searchBox(placeholder, value) {
    return '<div class="cat-search">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>' +
      '<input type="search" id="cat-search-input" placeholder="' + esc(placeholder) +
      '" value="' + esc(value || "") + '" autocomplete="off">' +
      "</div>";
  }

  function emptyState(title, text, actions) {
    var btns = (actions || []).map(function (a) {
      return '<a class="btn-cat ' + (a.primary ? "btn-cat-primary" : "btn-cat-ghost") +
        '" href="' + esc(a.href) + '">' + esc(a.label) + "</a>";
    }).join("");
    return '<div class="cat-empty">' +
      '<div class="cat-empty-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>' +
      "<h2>" + esc(title) + "</h2><p>" + text + "</p>" +
      '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">' + btns + "</div>" +
      "</div>";
  }

  function bindGallery() {
    var main = root.querySelector(".gallery-main img");
    var thumbs = root.querySelectorAll(".gallery-thumb");
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () {
        var src = t.getAttribute("data-src");
        if (main && src) main.src = src;
        thumbs.forEach(function (x) { x.classList.remove("is-active"); });
        t.classList.add("is-active");
      });
    });
  }

  // efecto glow que sigue al cursor (coherente con el resto del sitio)
  function bindGlow() {
    root.querySelectorAll(".brand-card, .model-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  function bindSearch() {
    var input = document.getElementById("cat-search-input");
    if (!input) return;
    // Mantener el foco/caret tras re-render mientras se escribe.
    input.addEventListener("input", function () {
      var val = input.value;
      var pos = input.selectionStart;
      currentSearch = val;
      renderBrands(val);
      bindSearch();
      var again = document.getElementById("cat-search-input");
      if (again) { again.focus(); try { again.setSelectionRange(pos, pos); } catch (e) {} }
    });
  }

  function setMeta(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }

  // ── router ────────────────────────────────────────────────────────────
  var currentSearch = "";
  function route() {
    var hash = location.hash.replace(/^#\/?/, ""); // sin "#/" inicial
    var parts = hash.split("/").filter(Boolean);
    window.scrollTo({ top: 0, behavior: "auto" });

    if (parts[0] === "moto" && parts[1]) {
      renderDetail(decodeURIComponent(parts[1]));
    } else if (parts[0] === "marca" && parts[1]) {
      renderBrand(decodeURIComponent(parts[1]));
    } else {
      renderBrands(currentSearch);
      bindSearch();
    }
  }

  window.addEventListener("hashchange", function () {
    // Al cambiar de vista se limpia la búsqueda previa.
    if (!/^#\/?(marca|moto)\//.test(location.hash)) { /* volver a marcas */ }
    else currentSearch = "";
    route();
  });
  route();
})();
