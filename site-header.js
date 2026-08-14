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
    var here = location.pathname.split("/").pop() || "index.html";
    header.querySelectorAll(".rm-nav-links a").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.charAt(0) === "#" || href.indexOf("://") !== -1) return;
      var file = href.split("#")[0].split("?")[0];
      if (file && file === here) a.setAttribute("aria-current", "page");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
