/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · CONFIGURACIÓN CENTRAL
   ───────────────────────────────────────────────────────────────────────
   Fuente de verdad de los canales de contacto y las redes sociales.

   El sitio es estático: el HTML lleva los href literales (los enlaces del
   footer son señal de enlazado interno y no deben depender de JS). Este
   archivo existe para que haya UN solo lugar donde consultar y actualizar
   los destinos, y `scripts/verify.mjs` comprueba en cada build que ningún
   HTML use un wa.me o una red social que no esté declarada aquí.

   ▸ Si cambia un número o se abre una red nueva: edítalo aquí Y en el HTML,
     y corre `npm run build` para confirmar que todo quedó alineado.

   REGLA: los canales de MOTOS y los de INVERSIONES nunca se cruzan.
   ═══════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";

  // ── WhatsApp ─────────────────────────────────────────────────────────
  // MOTOS · 55 1000 0645 — asesor de compra (CTAs de "quiero mi moto").
  var WHATSAPP_MOTOS = "https://wa.me/5215510000645";
  var WHATSAPP_MOTOS_MSG = WHATSAPP_MOTOS +
    "?text=Hola%2C%20quiero%20comprar%20una%20moto%20con%20RiderMex";

  // Línea general publicada (botón flotante, tel: y footer).
  // El 55 1000 0680 que se usaba aquí NO EXISTE: confirmado por el cliente.
  // Se reemplazó por el 55 1000 0645, el mismo de los CTAs de compra. Se
  // conserva la constante aparte por si en el futuro vuelve a haber una
  // línea general distinta a la de ventas.
  var WHATSAPP_MOTOS_GENERAL = WHATSAPP_MOTOS;

  // INVERSIONES · 55 9990 0619 — asesor de inversión. Mensaje precargado
  // ya existente en el proyecto; se reutiliza tal cual.
  var WHATSAPP_INVERSIONES = "https://wa.me/5215599900619";
  var WHATSAPP_INVERSIONES_MSG = WHATSAPP_INVERSIONES +
    "?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20RiderMex%20Inversiones." +
    "%20Me%20interesa%20revisar%20qu%C3%A9%20modelo%20me%20conviene%20y%20agendar%20un%20Zoom.";

  // ── Redes sociales ───────────────────────────────────────────────────
  // Solo URLs REALES verificadas en el proyecto. Las cadenas vacías son
  // cuentas que no se han proporcionado: no se renderizan (ver el footer).
  // NO rellenar con perfiles genéricos ni inventados.
  var SOCIAL = {
    ridermex: {
      instagram: "https://www.instagram.com/ridermexof",
      facebook: "https://www.facebook.com/rider.mex.motos",
      tiktok: "https://www.tiktok.com/@ridermexoficial",
      youtube: "",   // PENDIENTE: falta URL real
      linkedin: ""   // PENDIENTE: falta URL real
    },
    inversiones: {
      instagram: "https://www.instagram.com/ridermex_inversiones",
      facebook: "https://www.facebook.com/inversionesridermex",
      tiktok: "",    // PENDIENTE: falta URL real
      youtube: "",   // PENDIENTE: falta URL real
      linkedin: ""   // PENDIENTE: falta URL real
    }
  };

  // ── Otros destinos ───────────────────────────────────────────────────
  var MEDIOS_URL = "https://medios-ridermex.netlify.app/";
  var TELEFONO = "5510000645";   // el 0680 no existe (ver arriba)
  var EMAIL = "info@ridermex.com";
  // AVISO DE PRIVACIDAD — publicado. La ruta limpia /aviso-de-privacidad
  // es la que declara el propio documento legal en su sección 10; el
  // rewrite a aviso-privacidad.html vive en vercel.json.
  var AVISO_PRIVACIDAD = "/aviso-de-privacidad";

  global.RIDERMEX_CONFIG = {
    WHATSAPP_MOTOS: WHATSAPP_MOTOS,
    WHATSAPP_MOTOS_MSG: WHATSAPP_MOTOS_MSG,
    WHATSAPP_MOTOS_GENERAL: WHATSAPP_MOTOS_GENERAL,
    WHATSAPP_INVERSIONES: WHATSAPP_INVERSIONES,
    WHATSAPP_INVERSIONES_MSG: WHATSAPP_INVERSIONES_MSG,
    SOCIAL: SOCIAL,
    MEDIOS_URL: MEDIOS_URL,
    TELEFONO: TELEFONO,
    EMAIL: EMAIL,
    AVISO_PRIVACIDAD: AVISO_PRIVACIDAD
  };
})(typeof window !== "undefined" ? window : this);
