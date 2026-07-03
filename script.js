// Barra de progreso de scroll
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
}, { passive: true });

// Menú hamburguesa (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav ul');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-active');
    navMenu.classList.toggle('is-open');
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-active');
      navMenu.classList.remove('is-open');
    });
  });
}

// Header con sombra/glow al hacer scroll
const siteHeader = document.querySelector('header');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Glow que sigue al cursor dentro de las tarjetas (sensación interactiva/IA)
const glowCards = document.querySelectorAll('.pilar-card, .pain-card, .agencia-card, .testimonial-card, .moto-card, .path-card, .modelo-card');
glowCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});

// Animación de aparición al hacer scroll (escala + blur, estilo Apple)
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));
}

// Parallax sutil del hero (la cuadrícula de fondo se mueve más lento que el contenido)
const parallaxHero = document.querySelector('.hero');
if (parallaxHero) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight * 1.2) {
      parallaxHero.style.setProperty('--parallax-y', (y * 0.35) + 'px');
      const heroContent = parallaxHero.querySelectorAll('.hero-kicker, .hero h1, .hero p, .hero-cta, .hero-tag');
      heroContent.forEach(el => {
        el.style.transform = `translateY(${y * 0.15}px)`;
        el.style.opacity = Math.max(1 - y / 500, 0);
      });
    }
  }, { passive: true });
}

// Showcase tipo Apple: imagen fija (sticky) mientras el texto de specs va cambiando
const showcase = document.querySelector('.showcase');
if (showcase) {
  const frames = Array.from(showcase.querySelectorAll('.showcase-frame'));
  const showcaseImg = showcase.querySelector('.showcase-img');
  const nameEl = showcase.querySelector('.showcase-model-name');
  const priceEl = showcase.querySelector('.showcase-model-price');

  const setActive = (index) => {
    frames.forEach((f, i) => f.classList.toggle('is-active', i === index));
    const f = frames[index];
    if (!f) return;
    if (showcaseImg) {
      showcaseImg.style.opacity = 0;
      showcaseImg.style.transform = 'scale(.92)';
      setTimeout(() => {
        showcaseImg.src = f.dataset.img || showcaseImg.src;
        showcaseImg.alt = f.dataset.name || '';
        showcaseImg.style.opacity = 1;
        showcaseImg.style.transform = 'scale(1)';
      }, 220);
    }
    if (nameEl) nameEl.textContent = f.dataset.name || '';
    if (priceEl) priceEl.textContent = f.dataset.price || '';
  };

  const frameObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(frames.indexOf(entry.target));
    });
  }, { threshold: 0.6 });
  frames.forEach(f => frameObserver.observe(f));
  setActive(0);
}

// Filtros del catálogo (tarjetas nuevas/seminuevas, si existen)
const motoCards = document.querySelectorAll('.moto-card');

// Tabs de marca (Vento, Islo, Carabela, Bajaj, TVS, CF Moto, Zmoto, Ryder...)
const marcaTabs = document.querySelector('.marca-tabs');
if (marcaTabs) {
  const tabBtns = marcaTabs.querySelectorAll('.filtro-btn');
  const panels = document.querySelectorAll('.marca-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const marca = btn.dataset.marca;
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.marca === marca));
    });
  });
}

// Cualquier otro grupo de filtros simple (tarjetas con data-marca)
document.querySelectorAll('.filtros:not(.marca-tabs)').forEach(group => {
  const btns = group.querySelectorAll('.filtro-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const marca = btn.dataset.marca;
      motoCards.forEach(card => {
        card.style.display = (marca === 'todas' || card.dataset.marca === marca) ? '' : 'none';
      });
    });
  });
});

// Formulario de crédito
const form = document.getElementById('form-credito');
const confirm = document.getElementById('form-confirm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    confirm.style.display = 'block';
  });
}

// Formulario de inversión
const formInv = document.getElementById('form-inversion');
const confirmInv = document.getElementById('form-confirm-inv');

if (formInv) {
  formInv.addEventListener('submit', (e) => {
    e.preventDefault();
    formInv.style.display = 'none';
    confirmInv.style.display = 'block';
  });
}
