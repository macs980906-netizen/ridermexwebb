/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · motos.html — sección "Elige tu marca"
   Genera tabs de marca + chips de modelos desde src/data/motorcycles.js.
   Cada chip enlaza a la ficha individual del modelo:
     catalogo.html#/moto/:slug
   Reutiliza las clases existentes (filtro-btn, marca-panel, categoria-block,
   modelo-chips, modelo-chip) y añade su propio manejo de tabs.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";
  var CAT = window.RIDERMEX_CATALOG;
  var tabsEl = document.getElementById("marca-tabs-dyn");
  var panelsEl = document.getElementById("marca-panels-dyn");
  if (!CAT || !tabsEl || !panelsEl) return;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var brands = CAT.getAllBrands();
  if (!brands.length) return;

  // Tabs
  tabsEl.innerHTML = brands.map(function (b, i) {
    return '<button class="filtro-btn' + (i === 0 ? " active" : "") +
      '" data-marca="' + esc(b.slug) + '">' + esc(b.name) + "</button>";
  }).join("");

  // Panels: agrupa los modelos de cada marca por categoría (orden de aparición).
  panelsEl.innerHTML = brands.map(function (b, i) {
    var motos = CAT.getMotorcyclesByBrand(b.slug);
    var order = [];
    var groups = {};
    motos.forEach(function (m) {
      var key = (m.category && m.category.trim()) ? m.category.trim() : "Modelos";
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(m);
    });

    var blocks = order.map(function (cat) {
      var chips = groups[cat].map(function (m) {
        return '<a class="modelo-chip" href="catalogo.html#/moto/' + esc(m.slug) +
          '" title="Ver ficha de ' + esc(m.brand + " " + m.model) + '">' +
          esc(m.model) + "</a>";
      }).join("");
      return '<div class="categoria-block"><h4>' + esc(cat) +
        '</h4><div class="modelo-chips">' + chips + "</div></div>";
    }).join("");

    return '<div class="marca-panel' + (i === 0 ? " is-active" : "") +
      '" data-marca="' + esc(b.slug) + '">' + blocks +
      '<a href="catalogo.html#/marca/' + esc(b.slug) +
      '" class="btn-moto marca-cta">Ver fichas de ' + esc(b.name) + "</a></div>";
  }).join("");

  // Tabs: cambio de panel (binding propio, independiente de script.js).
  var tabBtns = tabsEl.querySelectorAll(".filtro-btn");
  var panels = panelsEl.querySelectorAll(".marca-panel");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var marca = btn.dataset.marca;
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.dataset.marca === marca);
      });
    });
  });
})();
