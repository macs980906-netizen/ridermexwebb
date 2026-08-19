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

  // La ilustración "Imagen en preparación" se publica también como variable
  // CSS para poder pintarla DE FONDO en los contenedores de imagen.
  //
  // Por qué: 59 de los 149 modelos apuntan a fotos alojadas en dominios de
  // terceros. Cuando uno de esos dominios no responde, el navegador tarda
  // ~20 s en dar la petición por fallida, y sólo entonces salta el onerror
  // que pone el placeholder. Durante esos 20 s la tarjeta se ve como un
  // recuadro negro vacío (y en el panel de red la petición aparece
  // "pendiente", no fallida, por eso no se detecta como error 404).
  // Con el placeholder de fondo la ilustración se ve desde el primer
  // fotograma y la foto real simplemente la tapa cuando llega.
  document.documentElement.style.setProperty(
    "--cat-placeholder", 'url("' + PLACEHOLDER + '")'
  );

  // Dominio canónico del sitio (usado en los datos estructurados).
  var SITE = "https://www.ridermex.com";
  var CATALOG_URL = SITE + "/catalogo.html";

  // Texto introductorio por marca. Mismo contenido que el índice estático
  // de catalogo.html (scripts/build-catalog-index.py): si cambias uno,
  // cambia el otro. Solo describe lo que la data realmente contiene.
  var BRAND_INTRO = {
    bajaj: "Modelos Bajaj disponibles en RiderMex, con las familias Pulsar, Dominar, Avenger y Boxer.",
    carabela: "Modelos Carabela disponibles en RiderMex: urbanas, doble propósito, todo terreno y cuatrimotos.",
    cfmoto: "Modelos CF Moto disponibles en RiderMex, entre naked NK, deportivas SR y doble propósito.",
    islo: "Modelos Islo disponibles en RiderMex, con opciones utilitarias y de trabajo.",
    ryder: "Modelos Ryder disponibles en RiderMex, incluyendo motocarros de carga y de pasajeros.",
    um: "Modelos UM Motorcycles disponibles en RiderMex, con la gama Renegade, DSR y Xtreet.",
    vento: "Modelos Vento disponibles en RiderMex: motonetas, scooters, urbanas y doble propósito.",
    tvs: "Modelos TVS disponibles en RiderMex, con la urbana Stryker y la gama deportiva Apache RTR.",
    cflite: "Modelos CF Lite disponibles en RiderMex: naked 250NK, deportiva 250SR y doble propósito 250DUAL.",
    honda: "Modelos Honda disponibles en RiderMex, encabezados por la urbana compacta NAVI.",
    zmoto: "Modelos Zmoto disponibles en RiderMex, con opciones urbanas, scooters y todo terreno."
  };

  // ── utilidades ─────────────────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // atributo src seguro (evita romper el placeholder onerror en bucle)
  //
  // La ilustración "Imagen en preparación" es 4:3, pero los contenedores no
  // lo son (las tarjetas de marca son 16:10) y todos usan object-fit:cover:
  // recortaban la ilustración y su leyenda, y la tarjeta se veía como un
  // recuadro negro vacío. Por eso el placeholder se marca con la clase
  // .is-placeholder, que en catalog.css lo muestra completo (contain).
  // Se marca en los dos caminos posibles: cuando no hay foto asignada y
  // cuando la foto existe pero no carga (onerror).
  function imgTag(src, alt, extraClass, eager) {
    var s = src || PLACEHOLDER;
    var cls = (extraClass ? extraClass + " " : "") + (src ? "" : "is-placeholder");
    return '<img src="' + esc(s) + '" alt="' + esc(alt) + '"' +
      (cls.trim() ? ' class="' + cls.trim() + '"' : "") +
      (eager ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"') +
      ' onerror="this.onerror=null;this.classList.add(\'is-placeholder\');' +
      'this.src=window.RIDERMEX_CATALOG.PLACEHOLDER_IMAGE">';
  }
  // Alt descriptivo y único por imagen (evita "imagen1" / "moto").
  function altFor(m, i) {
    var base = "Motocicleta " + m.brand + " " + m.model +
      (m.category ? " (" + m.category + ")" : "") + " disponible en RiderMex";
    return i > 0 ? base + " — vista " + (i + 1) : base;
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
    var brands = CAT.getAllBrands();
    var q = (query || "").trim().toLowerCase();

    applySEO({
      title: "Catálogo de motos RiderMex | Marcas y modelos",
      description: "Catálogo de motos RiderMex: " + brands.length + " marcas y " +
        CAT.motorcycles.length + " modelos con fotografías, características y ficha técnica."
    });
    // ItemList de marcas: ayuda a entender la estructura del catálogo.
    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        crumbList([
          { label: "Inicio", url: SITE + "/" },
          { label: "Catálogo", url: CATALOG_URL }
        ]),
        {
          "@type": "ItemList",
          name: "Marcas de motos disponibles en RiderMex",
          numberOfItems: brands.length,
          itemListElement: brands.map(function (b, i) {
            return {
              "@type": "ListItem",
              position: i + 1,
              name: b.name,
              url: CATALOG_URL + "#/marca/" + b.slug
            };
          })
        }
      ]
    });

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
    var models = CAT.getMotorcyclesByBrand(brandSlug);
    var q = (query || "").trim().toLowerCase();
    var shown = q ? models.filter(function (m) {
      return (m.model + " " + (m.category || "")).toLowerCase().indexOf(q) !== -1;
    }) : models;

    var intro = BRAND_INTRO[brandSlug] ||
      "Modelos " + brand.name + " disponibles en RiderMex.";

    applySEO({
      title: "Motos " + brand.name + " | Catálogo RiderMex",
      description: intro + " " + models.length +
        (models.length === 1 ? " modelo" : " modelos") +
        " con fotografías, características y ficha técnica.",
      image: absUrl(brand.image)
    });
    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        crumbList([
          { label: "Inicio", url: SITE + "/" },
          { label: "Catálogo", url: CATALOG_URL },
          { label: brand.name, url: CATALOG_URL + "#/marca/" + brand.slug }
        ]),
        {
          "@type": "ItemList",
          name: "Modelos " + brand.name + " en RiderMex",
          numberOfItems: models.length,
          itemListElement: models.map(function (m, i) {
            return {
              "@type": "ListItem",
              position: i + 1,
              name: m.brand + " " + m.model,
              url: CATALOG_URL + "#/moto/" + m.slug
            };
          })
        }
      ]
    });

    var bc = breadcrumb([
      { label: "Inicio", href: "index.html" },
      { label: "Catálogo", href: "#/" },
      { label: brand.name }
    ]);

    var head =
      '<div class="cat-head" style="text-align:left">' +
        '<span class="cat-eyebrow">Catálogo · ' + esc(brand.name) + "</span>" +
        '<h1 class="cat-title">Motos <span>' + esc(brand.name) + "</span></h1>" +
      "</div>" +
      // Contexto textual indexable, además del grid de tarjetas.
      '<p class="brand-intro">' + esc(intro) +
        " Explora fotografías, características y opciones para iniciar tu proceso de compra: " +
        'abre la ficha del modelo que te interese y pide información sin salir del catálogo. ' +
        'También puedes <a href="index.html#preguntas-frecuentes">revisar cómo elegir tu moto</a> ' +
        'o <a href="motos.html#formulario-motos">tramitar tu crédito</a>.</p>' +
      '<div class="cat-toolbar">' +
        '<a class="btn-cat btn-cat-ghost" href="#/">‹ Volver al catálogo</a>' +
        '<span class="cat-count">' + models.length + (models.length === 1 ? " modelo" : " modelos") + "</span>" +
        shareButton("Motos " + brand.name + " | RiderMex",
                    CATALOG_URL + "#/marca/" + brand.slug) +
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
    bindShare();
  }

  function modelCard(m) {
    var price = m.price ? '<div class="model-card-price">' + esc(m.price) + "</div>" : "";
    var desc = m.shortDescription ? '<div class="model-card-desc">' + esc(m.shortDescription) + "</div>" : "";
    return '<a class="model-card" href="#/moto/' + esc(m.slug) + '">' +
      '<div class="model-card-media">' + imgTag(m.mainImage, altFor(m, 0)) + "</div>" +
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
    var images = CAT.getImages(m);

    var descLine = (m.shortDescription || m.category || "").trim();
    applySEO({
      title: m.brand + " " + m.model + " | Características y fotos | RiderMex",
      description: m.brand + " " + m.model +
        (descLine ? " — " + descLine + "." : ".") +
        " Fotografías, características y ficha técnica en el catálogo RiderMex." +
        " Solicita información y conoce las opciones de financiamiento.",
      image: absUrl(images[0])
    });

    // Product SIN precio, stock, SKU, rating ni reviews: esos datos no
    // existen confirmados en el proyecto y no se inventan.
    var product = {
      "@type": "Product",
      name: m.brand + " " + m.model,
      brand: { "@type": "Brand", name: m.brand },
      url: CATALOG_URL + "#/moto/" + m.slug
    };
    if (m.description && m.description.trim()) product.description = m.description.trim();
    else if (descLine) product.description = descLine;
    if (m.category) product.category = m.category;
    var absImgs = images.map(absUrl).filter(Boolean);
    if (absImgs.length) product.image = absImgs;
    if (m.specs && m.specs.length) {
      product.additionalProperty = m.specs.map(function (s) {
        return { "@type": "PropertyValue", name: s.label, value: s.value };
      });
    }
    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        crumbList([
          { label: "Inicio", url: SITE + "/" },
          { label: "Catálogo", url: CATALOG_URL },
          { label: m.brand, url: CATALOG_URL + "#/marca/" + m.brandSlug },
          { label: m.model, url: CATALOG_URL + "#/moto/" + m.slug }
        ]),
        product
      ]
    });

    var bc = breadcrumb([
      { label: "Inicio", href: "index.html" },
      { label: "Catálogo", href: "#/" },
      { label: m.brand, href: "#/marca/" + m.brandSlug },
      { label: m.model }
    ]);

    // Galería
    var thumbs = images.length > 1
      ? '<div class="gallery-thumbs">' + images.map(function (src, i) {
          return '<div class="gallery-thumb' + (i === 0 ? " is-active" : "") + '" data-src="' + esc(src) +
            '" data-alt="' + esc(altFor(m, i)) + '">' +
            imgTag(src, altFor(m, i)) + "</div>";
        }).join("") + "</div>"
      : "";
    var gallery =
      '<div class="detail-gallery">' +
        '<div class="gallery-main">' + imgTag(images[0], altFor(m, 0), null, true) + "</div>" +
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
          shareButton(m.brand + " " + m.model + " | RiderMex",
                      CATALOG_URL + "#/moto/" + m.slug) +
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

    // ── También puedes explorar ──
    // Criterio real, no inventado: primero modelos de la MISMA marca y la
    // MISMA categoría; si no alcanzan, se completa con la misma marca.
    // Si la marca solo tiene este modelo, el bloque no se muestra.
    var siblings = CAT.getMotorcyclesByBrand(m.brandSlug).filter(function (x) {
      return x.slug !== m.slug;
    });
    var sameCat = m.category ? siblings.filter(function (x) { return x.category === m.category; }) : [];
    var related = sameCat.concat(siblings.filter(function (x) { return sameCat.indexOf(x) === -1; }))
                         .slice(0, 4);
    var relatedSection = "";
    if (related.length) {
      var lead = sameCat.length
        ? "Otros modelos " + m.brand + " de la misma categoría en el catálogo RiderMex."
        : "Otros modelos " + m.brand + " disponibles en el catálogo RiderMex.";
      relatedSection =
        '<div class="detail-related"><h2>También puedes explorar</h2>' +
        '<p class="rel-lead">' + esc(lead) + "</p>" +
        '<div class="model-grid">' + related.map(modelCard).join("") + "</div>" +
        '<div style="margin-top:18px;display:flex;gap:12px;flex-wrap:wrap">' +
          '<a class="btn-cat btn-cat-ghost" href="#/marca/' + esc(m.brandSlug) + '">Ver todos los modelos ' + esc(m.brand) + "</a>" +
          '<a class="btn-cat btn-cat-ghost" href="#/">Volver al catálogo completo</a>' +
        "</div></div>";
    }

    // Bloque de ayuda a la decisión: responde "cómo pido información".
    var howToSection =
      '<div class="detail-section"><h2>Cómo solicitar información de este modelo</h2>' +
      '<p class="desc-text">Pulsa «Quiero esta moto» y tu solicitud llega con el modelo ya ' +
      'identificado, para que un asesor te confirme disponibilidad, condiciones y opciones ' +
      'de financiamiento. También puedes verlo en persona en cualquiera de las ' +
      '<a href="motos.html#agencias">5 agencias RiderMex</a> o llamar al ' +
      '<a href="tel:5510000680">55 1000 0680</a>.</p></div>';

    root.innerHTML = bc +
      '<div class="detail-layout">' + gallery + info + "</div>" +
      descSection + featSection + specSection + howToSection + relatedSection;

    bindGallery();
    bindGlow();
    bindShare();
  }

  // ── componentes compartidos ──────────────────────────────────────────
  // Compartir: usa Web Share API en móvil y copia el enlace como respaldo.
  // El comportamiento vive en site-ui.js (data-share).
  function shareButton(title, url) {
    return '<button type="button" class="btn-share" data-share' +
      ' data-share-title="' + esc(title) + '"' +
      ' data-share-url="' + esc(url) + '"' +
      ' aria-label="Compartir ' + esc(title) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>' +
      '<path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>' +
      '<span class="share-label">Compartir</span></button>';
  }

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
        var alt = t.getAttribute("data-alt");
        if (main && src) { main.src = src; if (alt) main.alt = alt; }
        thumbs.forEach(function (x) { x.classList.remove("is-active"); });
        t.classList.add("is-active");
      });
    });
  }

  // efecto glow que sigue al cursor (coherente con el resto del sitio)
  // site-ui.js enlaza los [data-share] presentes al cargar la página; el
  // catálogo los crea después de cada render, así que se enlazan aquí.
  function bindShare() {
    root.querySelectorAll("[data-share]").forEach(function (btn) {
      if (btn.dataset.shareBound) return;
      btn.dataset.shareBound = "1";
      btn.addEventListener("click", async function () {
        var url = btn.getAttribute("data-share-url") || location.href;
        var title = btn.getAttribute("data-share-title") || document.title;
        var label = btn.querySelector(".share-label");
        if (navigator.share) {
          try {
            await navigator.share({ title: title, url: url });
            if (window.rmTrack) window.rmTrack("share", { method: "web_share", item: title });
            return;
          } catch (e) { if (e && e.name === "AbortError") return; }
        }
        try {
          await navigator.clipboard.writeText(url);
          if (label) {
            var prev = label.textContent;
            label.textContent = "¡Enlace copiado!";
            btn.classList.add("is-copied");
            setTimeout(function () { label.textContent = prev; btn.classList.remove("is-copied"); }, 2000);
          }
          if (window.rmTrack) window.rmTrack("share", { method: "copy_link", item: title });
        } catch (e) { window.prompt("Copia el enlace:", url); }
      });
    });
  }

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
  function setOG(property, content) {
    var el = document.querySelector('meta[property="' + property + '"]');
    if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
    el.setAttribute("content", content);
  }

  // ── SEO por vista ─────────────────────────────────────────────────────
  // El hash no crea URLs distintas para el buscador, así que el canónico
  // es SIEMPRE catalogo.html. Lo que sí cambia por vista es el título, la
  // descripción, las tarjetas sociales y los datos estructurados, para
  // que al compartir un enlace o al leerlo un motor de respuesta se
  // describa la vista real.
  function applySEO(opts) {
    setTitle(opts.title);
    setMeta("description", opts.description);
    setOG("og:title", opts.title);
    setOG("og:description", opts.description);
    setOG("og:url", CATALOG_URL);
    if (opts.image && opts.image.indexOf("http") === 0) setOG("og:image", opts.image);
    setMeta("twitter:title", opts.title);
    setMeta("twitter:description", opts.description);
  }

  // JSON-LD dinámico: se reemplaza en cada cambio de vista.
  function setJsonLd(data) {
    var id = "cat-jsonld";
    var el = document.getElementById(id);
    if (!data) { if (el) el.parentNode.removeChild(el); return; }
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  function crumbList(items) {
    return {
      "@type": "BreadcrumbList",
      itemListElement: items.map(function (it, i) {
        var entry = { "@type": "ListItem", position: i + 1, name: it.label };
        if (it.url) entry.item = it.url;
        return entry;
      })
    };
  }

  function absUrl(src) {
    if (!src) return null;
    if (src.indexOf("http") === 0) return src;
    if (src.indexOf("data:") === 0) return null;
    return SITE + "/" + src.replace(/^\//, "");
  }

  // ── router ────────────────────────────────────────────────────────────
  var currentSearch = "";
  function route() {
    var hash = location.hash.replace(/^#\/?/, ""); // sin "#/" inicial
    var parts = hash.split("/").filter(Boolean);
    window.scrollTo({ top: 0, behavior: "auto" });

    // El índice estático sigue en el HTML servido (lo que ve un rastreador),
    // pero se oculta dentro de una marca o de una ficha para no repetir todo
    // el catálogo debajo del contenido de la vista.
    var idx = document.getElementById("indice-catalogo");
    if (idx) idx.style.display = parts.length ? "none" : "";

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
