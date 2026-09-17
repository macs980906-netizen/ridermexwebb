/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · VISOR EMBEBIDO (componente compartido)
   ───────────────────────────────────────────────────────────────────────
   Abre una herramienta del sitio a pantalla completa ENCIMA de la página,
   sin navegar ni abrir pestaña nueva. Hoy lo usan:

     · el simulador de inversión  → /simulador-inversion
     · el press room "En los medios" → /medios

   Las dos son documentos HTML completos con su propio CSS (definen
   .section, .btn, .kicker… igual que inversiones.html), así que no se
   pueden pegar dentro del documento sin romperlo: van en un <iframe>.

   ── Cómo se marca un enlace ──────────────────────────────────────────
       <a href="/medios" data-embed="RiderMex en los medios">Ver…</a>

   El href se mantiene real y el enlace sigue siendo un enlace:
     · sin JavaScript, navega a la página como siempre;
     · con ctrl/cmd+clic o clic central, abre en otra pestaña (el usuario
       lo pidió explícitamente, ahí no mandamos nosotros);
     · un buscador lo sigue leyendo como enlace interno.
   El visor es una mejora encima, no un requisito.

   ── Botón "atrás" ────────────────────────────────────────────────────
   Al abrir se empuja una entrada en el historial. En un teléfono, "atrás"
   es el gesto natural para cerrar algo que se abrió encima: así cierra el
   visor en vez de sacar al usuario de la página.

   Se carga con:  <script src="site-embed.js" defer></script>
                  <link rel="stylesheet" href="site-embed.css">
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var overlay = null;      // el visor, se crea una sola vez y se reutiliza
  var frame = null;
  var titleEl = null;
  var loadingEl = null;
  var lastTrigger = null;  // para devolver el foco al cerrar
  var isOpen = false;
  var pushedState = false;
  var currentUrl = "";     // herramienta cargada ahora mismo ("" = ninguna)

  /* Marca de historial propia: así distinguimos "cerró el visor" de
     cualquier otro cambio de hash de la página. */
  var STATE = { rmEmbed: true };

  function build() {
    overlay = document.createElement("div");
    overlay.className = "rm-embed";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Herramienta RiderMex");
    overlay.hidden = false;

    overlay.innerHTML =
      '<div class="rm-embed-bar">' +
        /* Sin logotipo: las dos herramientas traen el suyo en su propia
           cabecera, justo debajo de esta barra, y se veían duplicados. */
        '<span class="rm-embed-title"></span>' +
        '<button type="button" class="rm-embed-close">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
               'stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
          '<span>Cerrar</span>' +
        '</button>' +
      '</div>' +
      '<div class="rm-embed-stage">' +
        '<div class="rm-embed-loading">' +
          '<span class="rm-embed-spinner" aria-hidden="true"></span>' +
          '<span>Cargando…</span>' +
        '</div>' +
        '<iframe class="rm-embed-frame" title="Herramienta RiderMex" ' +
                'allow="clipboard-write" referrerpolicy="same-origin"></iframe>' +
      '</div>';

    frame = overlay.querySelector(".rm-embed-frame");
    titleEl = overlay.querySelector(".rm-embed-title");
    loadingEl = overlay.querySelector(".rm-embed-loading");

    overlay.querySelector(".rm-embed-close").addEventListener("click", function () {
      requestClose();
    });

    frame.addEventListener("load", function () {
      if (!currentUrl) return;                  // ignora el about:blank del cierre
      loadingEl.classList.add("is-hidden");
      frame.classList.add("is-ready");
      /* El foco NO se mete dentro del iframe: si vive ahí, la tecla Escape
         deja de llegar a este documento. Se queda en el botón de cerrar, y
         de ahí el usuario tabula hacia la herramienta cuando quiere.
         (Aun así, la herramienta reenvía su propio Escape: ver
         site-embed-child.js, por si el usuario ya hizo clic dentro.) */
    });

    document.body.appendChild(overlay);
  }

  /* El iframe carga la herramienta con ?embed=1 para que sepa que está
     dentro del visor y esconda sus propios enlaces de "volver al sitio":
     si no, la portada de RiderMex se abriría DENTRO del recuadro. */
  function embedUrl(href) {
    return href + (href.indexOf("?") === -1 ? "?" : "&") + "embed=1";
  }

  /* La herramienta se carga SIEMPRE con location.replace, nunca asignando
     .src. Asignar .src cuando el iframe ya tiene un documento cargado
     empuja una entrada en el historial de la pestaña, y entonces el botón
     "atrás" retrocedía dentro del marco —de una herramienta a la anterior—
     en vez de cerrar el visor. replace() navega sin dejar rastro. */
  function loadTool(url) {
    currentUrl = url;
    try {
      frame.contentWindow.location.replace(url);
    } catch (e) {
      frame.setAttribute("src", url);   // último recurso
    }
  }

  function unloadTool() {
    if (!currentUrl) return;
    currentUrl = "";
    try {
      frame.contentWindow.location.replace("about:blank");
    } catch (e) {
      frame.removeAttribute("src");
    }
    frame.classList.remove("is-ready");
  }

  function open(href, title, trigger) {
    if (!overlay) build();
    lastTrigger = trigger || null;

    titleEl.textContent = title || "Herramienta RiderMex";
    frame.setAttribute("title", title || "Herramienta RiderMex");
    loadingEl.classList.remove("is-hidden");
    frame.classList.remove("is-ready");
    loadTool(embedUrl(href));

    document.documentElement.classList.add("rm-embed-lock");
    document.body.classList.add("rm-embed-lock");
    overlay.classList.add("is-open");
    isOpen = true;

    overlay.querySelector(".rm-embed-close").focus();

    try {
      history.pushState(STATE, "", location.href);
      pushedState = true;
    } catch (e) {
      pushedState = false;   // navegador sin History API: el visor igual cierra
    }
  }

  /* Cerrar tiene UN solo camino real: teardown(). Lo que pide cerrar —la ✕,
     Escape o la propia herramienta— pasa primero por el historial, para que
     la entrada que se empujó al abrir no quede colgando y el botón "atrás"
     no tenga que pulsarse dos veces. El popstate resultante es el que
     ejecuta el cierre. Mezclar los dos caminos (cerrar y además retroceder)
     descuadraba la bandera al encadenar aperturas y dejaba el visor abierto
     al pulsar "atrás". */
  function requestClose() {
    if (!isOpen) return;

    if (pushedState) {
      pushedState = false;
      try {
        history.back();
        /* Red de seguridad: si por lo que sea no llega el popstate, el
           visor se cierra igual en vez de quedarse trabado. */
        window.setTimeout(function () { if (isOpen) teardown(); }, 350);
        return;
      } catch (e) { /* sin History API: se cierra a mano, abajo */ }
    }
    teardown();
  }

  function teardown() {
    if (!isOpen) return;
    isOpen = false;

    overlay.classList.remove("is-open");
    document.documentElement.classList.remove("rm-embed-lock");
    document.body.classList.remove("rm-embed-lock");

    /* Se descarga la herramienta al cerrar: son documentos pesados y no
       tiene sentido dejarlos vivos detrás de la página. */
    window.setTimeout(function () {
      if (!isOpen) unloadTool();
    }, 300);

    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus();
    lastTrigger = null;
  }

  function init() {
    /* Un solo listener en el documento: los enlaces marcados pueden estar
       en cualquier parte (cintillo, módulo, pie) y en cualquier página. */
    document.addEventListener("click", function (ev) {
      // ctrl/cmd/shift/alt o clic que no sea el principal: es del usuario.
      if (ev.defaultPrevented || ev.button !== 0) return;
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;

      var link = ev.target.closest ? ev.target.closest("a[data-embed]") : null;
      if (!link) return;

      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#") return;

      ev.preventDefault();
      open(href, link.getAttribute("data-embed") || link.textContent.trim(), link);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && isOpen) requestClose();
    });

    /* Único ejecutor del cierre: llega tanto del "atrás" del navegador como
       del history.back() que dispara requestClose(). */
    window.addEventListener("popstate", function () {
      if (!isOpen) return;
      pushedState = false;
      teardown();
    });

    /* La herramienta embebida avisa cuando el usuario pulsa su propio
       "volver al sitio": se cierra el visor en vez de navegar dentro. */
    window.addEventListener("message", function (ev) {
      if (ev.origin !== location.origin) return;
      if (ev.data && ev.data.rmEmbed === "close") requestClose();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
