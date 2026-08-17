/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · COMPORTAMIENTO COMPARTIDO
   ───────────────────────────────────────────────────────────────────────
   · Animaciones de entrada (.rm-in / .rm-stagger / .rm-bar) con un ÚNICO
     IntersectionObserver que deja de observar cada elemento al revelarlo.
     Sin listeners de scroll, sin librerías, sin layout thrashing:
     solo se animan transform y opacity.
   · Respeta prefers-reduced-motion (revela todo de inmediato).
   · Pinta el bloque de redes del footer desde site-config.js.
   · Cablea los destinos de WhatsApp declarados con data-wa="motos|inversiones".
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var cfg = window.RIDERMEX_CONFIG;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1 · Redes sociales del footer ─────────────────────────────────── */
  if (cfg && typeof cfg.renderSocial === 'function') {
    cfg.renderSocial('[data-social-footer]');
  }

  /* ── 2 · Destinos de WhatsApp centralizados ────────────────────────────
     Cualquier <a data-wa="inversiones"> recibe la URL real desde la
     configuración. data-wa-msg permite un mensaje contextual propio.
     Así ningún CTA queda con un número escrito a mano.
     ──────────────────────────────────────────────────────────────────── */
  if (cfg && typeof cfg.waUrl === 'function') {
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      var canal = a.getAttribute('data-wa');
      var url = cfg.waUrl(canal, a.getAttribute('data-wa-msg') || '');
      if (url) a.setAttribute('href', url);
    });
  }

  /* ── 3 · Año dinámico en el footer ─────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ── 4 · Animaciones de entrada ────────────────────────────────────── */
  var animados = document.querySelectorAll('.rm-in, .rm-stagger, .rm-bar');
  if (!animados.length) return;

  if (reduce || !('IntersectionObserver' in window)) {
    animados.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  animados.forEach(function (el) { io.observe(el); });
})();
