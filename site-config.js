/* ═══════════════════════════════════════════════════════════════════════
   RIDERMEX · CONFIGURACIÓN CENTRAL DEL SITIO
   ───────────────────────────────────────────────────────────────────────
   Fuente ÚNICA de verdad para destinos que se repiten en varias páginas:
   WhatsApp, redes sociales, agencias y datos de contacto.

   ▸ REGLA: no inventar números, handles ni URLs. Si un dato no existe,
     se deja como cadena vacía ('') y NO se renderiza.
   ▸ Para cambiar un destino en todo el sitio, edítalo AQUÍ (una sola vez).
   ═══════════════════════════════════════════════════════════════════════ */

(function (global) {
  'use strict';

  /* ── WhatsApp ──────────────────────────────────────────────────────────
     DOS canales separados. NO cruzarlos:
       · MOTOS       → 55 1000 0680 (teléfono de las agencias / compradores)
       · INVERSIONES → 55 9990 0619 (asesores de RiderMex Inversiones)
     Formato wa.me: 52 + 1 + 10 dígitos (celular México).
     ──────────────────────────────────────────────────────────────────── */
  var WHATSAPP = {
    motos: {
      numero: '5215510000680',
      display: '55 1000 0680',
      mensaje: 'Hola, vi la página de RiderMex y quiero información para comprar mi moto.'
    },
    inversiones: {
      numero: '5215599900619',
      display: '55 9990 0619',
      mensaje: 'Hola, vi la página de RiderMex Inversiones. Me interesa revisar qué modelo me conviene y hablar con un asesor.'
    }
  };

  function waUrl(canal, mensaje) {
    var c = WHATSAPP[canal];
    if (!c) return '';
    var texto = mensaje || c.mensaje;
    return 'https://wa.me/' + c.numero + (texto ? '?text=' + encodeURIComponent(texto) : '');
  }

  /* URLs listas para usar (las que se cablean en el HTML). */
  var MOTOS_WHATSAPP_URL = waUrl('motos');
  var INVESTMENT_WHATSAPP_URL = waUrl('inversiones');

  /* ── Redes sociales ────────────────────────────────────────────────────
     Solo URLs REALES verificadas en el proyecto. Las vacías ('') no se
     pintan: cuando existan las cuentas, basta con rellenarlas aquí.

     PENDIENTES DE PROPORCIONAR:
       · RiderMex            → youtube, linkedin
       · RiderMex Inversiones → todas (instagram, facebook, tiktok, youtube, linkedin)
     ──────────────────────────────────────────────────────────────────── */
  var SOCIAL_LINKS = {
    ridermex: {
      label: 'RiderMex',
      instagram: 'https://instagram.com/ridermexof',
      facebook: 'https://facebook.com/ridermexof',
      tiktok: 'https://tiktok.com/@ridermexoficial',
      youtube: '',
      linkedin: ''
    },
    inversiones: {
      label: 'RiderMex Inversiones',
      instagram: '',
      facebook: '',
      tiktok: '',
      youtube: '',
      linkedin: ''
    }
  };

  /* Nombre visible + icono (SVG inline, sin dependencias externas). */
  var SOCIAL_META = {
    instagram: {
      nombre: 'Instagram',
      icon: '<path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0Z"/>'
    },
    facebook: {
      nombre: 'Facebook',
      icon: '<path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>'
    },
    tiktok: {
      nombre: 'TikTok',
      icon: '<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.79-2.46V9.8a5.71 5.71 0 1 0 4.88 5.65V9.01a7.35 7.35 0 0 0 4.28 1.38V7.3a4.28 4.28 0 0 1-3.22-1.48Z"/>'
    },
    youtube: {
      nombre: 'YouTube',
      icon: '<path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15.02V8.98L15.2 12 10 15.02Z"/>'
    },
    linkedin: {
      nombre: 'LinkedIn',
      icon: '<path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.98h3.5V21h-3.5V8.98Zm5.68 0h3.36v1.64h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.2 4.18 5.06V21h-3.5v-5.37c0-1.28-.02-2.93-1.85-2.93-1.85 0-2.13 1.4-2.13 2.84V21h-3.5V8.98Z"/>'
    }
  };

  /* Orden de aparición de las redes dentro de cada grupo. */
  var SOCIAL_ORDER = ['instagram', 'facebook', 'tiktok', 'youtube', 'linkedin'];

  /* ── Agencias (datos REALES) ───────────────────────────────────────────
     Solo se publica lo verificado. `direccion`/`horario` vacíos significan
     "confírmalo con tu asesor" y NO se inventan.
     `tour360` queda preparado: en cuanto exista la URL, el botón se activa.
     ──────────────────────────────────────────────────────────────────── */
  var AGENCIAS = [
    {
      id: 'naucalpan',
      nombre: 'RiderMex Naucalpan',
      direccion: 'Av. Dr. Gustavo Baz 98, Col. Alce Blanco, Naucalpan de Juárez, Edo. de México 53370',
      localidad: 'Naucalpan de Juárez',
      region: 'Estado de México',
      cp: '53370',
      horario: 'Lun–Vie 9:30–18:30 · Sáb 9:30–15:30',
      telefono: '55 1000 0680',
      maps: 'https://maps.app.goo.gl/8JzPoomq7miDJgpb6',
      tour360: ''
    },
    {
      id: 'ceda',
      nombre: 'RiderMex CEDA / Central de Abasto',
      direccion: '',
      localidad: 'Ciudad de México',
      region: 'Ciudad de México',
      cp: '',
      horario: '',
      telefono: '55 1000 0680',
      maps: 'https://maps.app.goo.gl/184gp5qYb4c3xvca6',
      tour360: ''
    },
    {
      id: 'coapa',
      nombre: 'RiderMex Coapa',
      direccion: '',
      localidad: 'Ciudad de México',
      region: 'Ciudad de México',
      cp: '',
      horario: '',
      telefono: '55 1000 0680',
      maps: 'https://maps.app.goo.gl/jmXYJPeA9UENghr6A',
      tour360: ''
    },
    {
      id: 'chalco',
      nombre: 'RiderMex Chalco',
      direccion: '',
      localidad: 'Chalco',
      region: 'Estado de México',
      cp: '',
      horario: '',
      telefono: '55 1000 0680',
      maps: 'https://maps.app.goo.gl/oTFbM1T9N3GxbDin8',
      tour360: ''
    }
  ];

  var CONTACTO = {
    email: 'info@ridermex.com',
    telefono: '55 1000 0680',
    telefonoHref: 'tel:5510000680',
    direccion: 'Av. Dr. Gustavo Baz 98, Col. Alce Blanco, Naucalpan de Juárez, Edo. de México 53370'
  };

  /* Prensa / apariciones públicas de la marca. */
  var MEDIOS_URL = 'https://medios-ridermex.netlify.app/';

  /* Aviso de privacidad — sin URL final todavía.
     Cuando exista, ponla aquí y el enlace deja de ser placeholder. */
  var AVISO_PRIVACIDAD_URL = '';

  /* ── Render del bloque social del footer ───────────────────────────────
     Pinta dos grupos (RiderMex / RiderMex Inversiones) omitiendo por
     completo cualquier red sin URL real. Si un grupo se queda sin redes,
     el grupo entero no se renderiza (nada de iconos rotos).
     ──────────────────────────────────────────────────────────────────── */
  function renderSocial(target) {
    var host = typeof target === 'string' ? document.querySelector(target) : target;
    if (!host) return;

    var html = Object.keys(SOCIAL_LINKS).map(function (grupo) {
      var datos = SOCIAL_LINKS[grupo];
      var enlaces = SOCIAL_ORDER.filter(function (red) {
        return datos[red];
      }).map(function (red) {
        var meta = SOCIAL_META[red];
        return '<a class="social-link" href="' + datos[red] + '" target="_blank" rel="noopener noreferrer"' +
          ' aria-label="' + meta.nombre + ' de ' + datos.label + '" title="' + meta.nombre + ' de ' + datos.label + '">' +
          '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + meta.icon + '</svg>' +
          '<span>' + meta.nombre + '</span></a>';
      }).join('');

      if (!enlaces) return '';
      return '<div class="social-group">' +
        '<p class="social-group-title">' + datos.label + '</p>' +
        '<div class="social-links">' + enlaces + '</div>' +
        '</div>';
    }).join('');

    host.innerHTML = html;
  }

  global.RIDERMEX_CONFIG = {
    WHATSAPP: WHATSAPP,
    MOTOS_WHATSAPP_URL: MOTOS_WHATSAPP_URL,
    INVESTMENT_WHATSAPP_URL: INVESTMENT_WHATSAPP_URL,
    waUrl: waUrl,
    SOCIAL_LINKS: SOCIAL_LINKS,
    SOCIAL_META: SOCIAL_META,
    SOCIAL_ORDER: SOCIAL_ORDER,
    AGENCIAS: AGENCIAS,
    CONTACTO: CONTACTO,
    MEDIOS_URL: MEDIOS_URL,
    AVISO_PRIVACIDAD_URL: AVISO_PRIVACIDAD_URL,
    renderSocial: renderSocial
  };
})(window);
