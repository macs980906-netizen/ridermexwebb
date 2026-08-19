/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · HEADER GLOBAL — comportamiento
   ───────────────────────────────────────────────────────────────────────
   · Menú hamburguesa accesible (aria-expanded + Escape + click fuera).
   · Estado .is-scrolled del header.
   · Marca el enlace de la página actual con aria-current="page".
   Se carga con:  <script src="site-header.js" defer></script>
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function init() {
    var header = document.querySelector(".rm-header");
    if (!header) return;

    var toggle = header.querySelector(".rm-nav-toggle");
    var nav = header.querySelector(".rm-nav");

    // ── Menú móvil ──────────────────────────────────────────────────────
    function closeNav() {
      if (!nav || !toggle) return;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && nav) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeNav);
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeNav();
      });

      document.addEventListener("click", function (e) {
        if (!header.contains(e.target)) closeNav();
      });
    }

    // ── Estado al hacer scroll ──────────────────────────────────────────
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── Página activa ───────────────────────────────────────────────────
    // Varios enlaces del menú comparten archivo (Agencias y Financiamiento
    // viven los dos en motos.html, con anclas distintas). Marcar por archivo
    // encendía los dos a la vez, así que aquí sólo puede haber UN activo:
    // gana la sección que el usuario está viendo de verdad.
    var here = location.pathname.split("/").pop() || "index.html";

    var candidates = [];
    header.querySelectorAll(".rm-nav-links li:not(.rm-nav-cta) > a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.charAt(0) === "#" || href.indexOf("://") !== -1) return;
      var file = href.split("#")[0].split("?")[0];
      if (file && file === here) {
        candidates.push({ link: a, hash: (href.split("#")[1] || "") });
      }
    });
    if (!candidates.length) return;

    function setActive(entry) {
      candidates.forEach(function (c) {
        if (c === entry) c.link.setAttribute("aria-current", "page");
        else c.link.removeAttribute("aria-current");
      });
    }

    // Un solo enlace para esta página: no hay ambigüedad que resolver.
    if (candidates.length === 1) {
      setActive(candidates[0]);
      return;
    }

    // Con varios candidatos se observa la sección de cada uno y gana la que
    // ocupa la parte alta del viewport. Si ninguna está visible (por ejemplo
    // arriba del todo), se usa el ancla de la URL y, si no la hay, ninguno.
    var targets = candidates
      .map(function (c) {
        return { entry: c, el: c.hash ? document.getElementById(c.hash) : null };
      })
      .filter(function (t) { return t.el; });

    function fromHash() {
      var h = location.hash.replace("#", "");
      if (!h) return null;
      for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].hash === h) return candidates[i];
      }
      return null;
    }

    function update() {
      var best = null;
      var bestTop = Infinity;
      var limit = header.getBoundingClientRect().height + 40;
      targets.forEach(function (t) {
        var top = t.el.getBoundingClientRect().top;
        // La sección ya empezó (su borde superior pasó el header) y es la
        // más cercana a él: esa es la que el usuario está leyendo.
        if (top <= limit && limit - top < bestTop) {
          bestTop = limit - top;
          best = t.entry;
        }
      });
      setActive(best || fromHash());
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("hashchange", update);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
