// Seleccionar elementos del DOM
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const btnScrollTop = document.querySelector('#btn-scroll-top');

// Agregar evento de scroll para animaciones
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Animar header
  if (scrollPosition > 100) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }

  // Mostrar botón de scroll top
  if (scrollPosition > 500) {
    btnScrollTop.classList.add('show');
  } else {
    btnScrollTop.classList.remove('show');
  }

  // Animar secciones
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});

// Agregar evento de click para botón de scroll top
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Agregar evento de click para navegación
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});