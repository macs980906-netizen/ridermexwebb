/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · VISOR EMBEBIDO · lado de la herramienta
   ───────────────────────────────────────────────────────────────────────
   Va DENTRO de las herramientas que el visor abre en un iframe:

     · RiderMex_Simulador_Flujo_Plusvalia_Crecimiento_Anual_V3.html
     · medios.html

   El visor (site-embed.js) las carga con ?embed=1. Este script se encarga
   de lo que la herramienta no puede resolver sola desde dentro del marco:

   1. Marca <html class="is-embedded"> para que la herramienta pueda
      esconder sus propios enlaces de "volver al sitio": ahí el visor ya
      tiene su botón de cerrar, y navegar dentro del marco cargaría la
      portada de RiderMex dentro del recuadro.

   2. Convierte esos enlaces —los marcados con data-site-exit— en "cierra
      el visor", que es el equivalente real de volver.

   3. Reenvía la tecla Escape a la página de arriba. Hace falta: en cuanto
      el usuario toca la herramienta, el foco vive dentro del iframe y el
      Escape ya no llega solo al documento que abrió el visor.

   Fuera del visor no hace absolutamente nada: la herramienta se comporta
   como la página independiente que también es.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var framed = window.parent !== window;
  var flagged = false;
  try {
    flagged = new URLSearchParams(location.search).get("embed") === "1";
  } catch (e) { /* navegador sin URLSearchParams: se queda como página suelta */ }

  if (!framed || !flagged) return;

  function closeViewer() {
    window.parent.postMessage({ rmEmbed: "close" }, location.origin);
  }

  document.documentElement.classList.add("is-embedded");

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") closeViewer();
  });

  function wire() {
    var exits = document.querySelectorAll("[data-site-exit]");
    for (var i = 0; i < exits.length; i++) {
      exits[i].addEventListener("click", function (ev) {
        ev.preventDefault();
        closeViewer();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
