/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · comportamientos compartidos de UI
   ───────────────────────────────────────────────────────────────────────
   Pequeño, sin dependencias y tolerante a fallos: si algo no existe en la
   página, esa parte simplemente no hace nada.

     1. track()          — envía eventos a GA4 SOLO si ya está instalado.
     2. simulator_click  — evento del CTA del simulador.
     3. Botón compartir  — Web Share API con copia de enlace como respaldo.
     4. Anclas de la misma página — hacen scroll aunque la URL ya tenga ese
        ancla (si no, el enlace parece muerto).

   Se carga con:  <script src="site-ui.js" defer></script>
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── 1 · Tracking ────────────────────────────────────────────────────
     NO instala ninguna plataforma de analytics. Si en el futuro se añade
     GA4 (gtag) o un dataLayer, estos eventos empiezan a llegar solos.
     Mientras no exista, la función es un no-op silencioso. */
  function track(event, params) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", event, params || {});
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(Object.assign({ event: event }, params || {}));
      }
    } catch (e) { /* nunca romper la navegación por un error de tracking */ }
  }
  window.rmTrack = track;

  function init() {
    /* ── 2 · CTA del simulador ── */
    document.querySelectorAll("[data-sim-cta]").forEach(function (el) {
      el.addEventListener("click", function () {
        track("simulator_click", {
          location: document.title,
          link_url: el.getAttribute("href") || ""
        });
      });
    });

    /* ── 3 · Botón compartir ──
       Web Share API donde exista (móvil sobre todo); si no, copia el enlace
       al portapapeles. En AMBOS casos se confirma en el propio botón: antes,
       cuando el navegador sí tenía navigator.share (Chrome de escritorio
       también lo tiene) se compartía sin que apareciera ningún aviso y el
       botón parecía no hacer nada. */
    bindShare(document);
  }

  function bindShare(scope) {
    (scope || document).querySelectorAll("[data-share]").forEach(function (btn) {
      if (btn.dataset.shareBound) return;
      btn.dataset.shareBound = "1";

      // El aviso se anuncia también a lectores de pantalla.
      if (!btn.hasAttribute("aria-live")) btn.setAttribute("aria-live", "polite");

      function confirmar(texto) {
        var label = btn.querySelector(".share-label");
        if (!label) return;
        if (btn.dataset.shareRestore) return;      // ya hay un aviso en curso
        btn.dataset.shareRestore = label.textContent;
        label.textContent = texto;
        btn.classList.add("is-copied");
        setTimeout(function () {
          label.textContent = btn.dataset.shareRestore || "Compartir";
          delete btn.dataset.shareRestore;
          btn.classList.remove("is-copied");
        }, 2000);
      }

      btn.addEventListener("click", async function () {
        var url = btn.getAttribute("data-share-url") || location.href;
        var title = btn.getAttribute("data-share-title") || document.title;

        if (navigator.share) {
          try {
            await navigator.share({ title: title, url: url });
            confirmar("¡Enlace compartido!");
            track("share", { method: "web_share", item: title });
            return;
          } catch (e) {
            if (e && e.name === "AbortError") return;  // el usuario canceló
            // cualquier otro fallo cae al portapapeles, abajo
          }
        }

        try {
          await navigator.clipboard.writeText(url);
          confirmar("¡Enlace copiado!");
          track("share", { method: "copy_link", item: title });
        } catch (e) {
          window.prompt("Copia el enlace:", url);
        }
      });
    });
  }
  // El catálogo crea sus botones después de cada render y los enlaza con esto.
  window.rmBindShare = bindShare;

  /* ── 4 · Anclas de la misma página ───────────────────────────────────
     "Ver todas las agencias →" apunta a motos.html#agencias. Si ya estás
     en motos.html#agencias, el navegador no hace nada: la URL no cambia y
     la página no se mueve, así que el enlace parece roto. Aquí se fuerza
     el scroll cuando el destino está en esta misma página. */
  function sameHref(a) {
    var href = a.getAttribute("href") || "";
    if (!href || href.indexOf("://") !== -1) return null;
    var parts = href.split("#");
    var file = parts[0].split("?")[0];
    var hash = parts[1];
    if (!hash) return null;
    var here = location.pathname.split("/").pop() || "index.html";
    // Sin archivo ("#agencias") o con el archivo de esta misma página.
    if (file && file !== here) return null;
    return hash;
  }

  function initAnchorScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.hasAttribute("download") || a.target === "_blank") return;
      var hash = sameHref(a);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return;              // sin destino real: no interceptar nada
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Mantener la URL y el historial coherentes con lo que se ve.
      if (location.hash !== "#" + hash) {
        history.pushState(null, "", "#" + hash);
      }
      // Que el foco siga al contenido (accesibilidad por teclado).
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    });
  }

  /* ── 5 · Llegada a una página CON ancla ──────────────────────────────
     Al entrar desde otra página a motos.html#agencias, el navegador hace
     el salto inicial con scroll-behavior:smooth. Si mientras dura esa
     animación cambia la altura del documento (fotos sin dimensiones,
     fuentes que terminan de cargar), Chrome cancela el desplazamiento y
     la página se queda arriba: el enlace parece no hacer nada. Pasa de
     forma intermitente, y en conexiones lentas casi siempre.

     Aquí se repite el salto una vez que la página ya se asentó, de forma
     instantánea (sin animación que se pueda cancelar). Si la persona ya
     movió el scroll por su cuenta, no se le mueve la página. */
  function initHashLanding() {
    var hash = (location.hash || "").replace("#", "");
    if (!hash) return;
    if (!document.getElementById(hash)) return;   // p. ej. rutas #/marca/... del catálogo

    var userMoved = false;
    var markMoved = function () { userMoved = true; };
    ["wheel", "touchstart", "keydown"].forEach(function (ev) {
      window.addEventListener(ev, markMoved, { passive: true, once: true });
    });

    function land() {
      if (userMoved) return;
      var el = document.getElementById(hash);
      if (!el) return;
      var target = el.getBoundingClientRect().top + window.scrollY -
        (parseFloat(getComputedStyle(el).scrollMarginTop) || 0);
      if (Math.abs(window.scrollY - target) < 4) return;   // ya está en su sitio
      window.scrollTo({ top: target, behavior: "auto" });
    }

    // OJO: no se puede esperar al evento `load`. Esta página incrusta un
    // formulario y fotos de dominios de terceros; si uno de ellos no
    // responde, `load` no llega hasta que la petición vence (~20 s) y para
    // entonces la persona ya se fue. Se reintenta por tiempo, que sí ocurre
    // pase lo que pase con la red.
    land();
    [60, 250, 600, 1200, 2500].forEach(function (ms) { setTimeout(land, ms); });
    window.addEventListener("load", land);
  }

  /* ── 6 · Botón flotante de WhatsApp ──────────────────────────────────
     En Inversiones el botón fijo "Hablar con un asesor" acababa encimado
     sobre los CTA verdes de la propia página (p. ej. "Hablar por WhatsApp"
     de la sección final): dos botones idénticos, uno sobre otro. Mientras
     haya uno de esos CTA a la vista, el flotante se aparta. */
  function initFloatingWa() {
    var float = document.querySelector(".wa-float");
    if (!float || !("IntersectionObserver" in window)) return;
    var ctas = document.querySelectorAll(".btn-whatsapp");
    if (!ctas.length) return;

    // Se guarda QUÉ botones están a la vista, no cuántos: el observer
    // reporta también los que NO intersecan (incluido el primer disparo),
    // así que llevar un contador daba resultados falsos.
    var aLaVista = [];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = aLaVista.indexOf(e.target);
        if (e.isIntersecting && i === -1) aLaVista.push(e.target);
        else if (!e.isIntersecting && i !== -1) aLaVista.splice(i, 1);
      });
      float.classList.toggle("is-tucked", aLaVista.length > 0);
    }, { rootMargin: "-10% 0px -10% 0px" });

    ctas.forEach(function (c) { io.observe(c); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      init(); initAnchorScroll(); initHashLanding(); initFloatingWa();
    });
  } else {
    init();
    initAnchorScroll();
    initHashLanding();
    initFloatingWa();
  }
})();
