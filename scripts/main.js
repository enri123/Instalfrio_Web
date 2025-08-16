import { initNavbarScroll } from './navbar-scroll.js';

initNavbarScroll();

const path = window.location.pathname;

if (path.includes("lineas-trabajos.html")) {
  import('./lineas-trabajo.js').then(m => m.initLineasTrabajo());
}

if (path.includes("quienes-somos.html")) {
  import('./quienes-somos.js').then(m => m.initSobreNosotros());
}

if (["proyectos.html", "quienes-somos.html", "index.html", "contacto.html"].some(p => path.includes(p))) {
  import('./reveal-on-scroll.js').then(m => m.initReveal());
}
if (["quienes-somos.html","contacto.html"].some(p => path.includes(p))) {
  import('./validar-formulario.js').then(m => m.initValidarFormulario());
}

