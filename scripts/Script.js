fetch("frontend/Navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    const filename = window.location.pathname.split("/").pop().replace('.html', '');
    if(filename == "Contacto" || filename == "Index" || filename == "Proyectos" || filename == "LineasTrabajos" || filename == "SobreNosotros"){
      seleccionar(filename)
    }
  })
  .catch((error) => console.error("Error cargando el navbar:", error));

fetch("frontend/Footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error cargando el footer:", error));

function seleccionar(filename) {
  const current = document.getElementById(filename);
  if (current) current.classList.add("active");
}

function lineasTrabajo() {
  window.addEventListener('scroll', function () {
    const primerlineasTrabajoDerecha = document.getElementById('primerlineasTrabajoDerecha');
    const primerlineasTrabajoIzquierda = document.getElementById('primerlineasTrabajoIzquierda');
    const segundolineasTrabajoDerecha = document.getElementById('segundolineasTrabajoDerecha');
    const segundolineasTrabajoIzquierda = document.getElementById('segundolineasTrabajoIzquierda');
    const tercerlineasTrabajoDerecha = document.getElementById('tercerlineasTrabajoDerecha');
    const tercerlineasTrabajoIzquierda = document.getElementById('tercerlineasTrabajoIzquierda');

    if (window.scrollY > 300) {
      primerlineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      primerlineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }

    if (window.scrollY > 1100) {
      segundolineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      segundolineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }

    if (window.scrollY > 1800) {
      tercerlineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      tercerlineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }
  });
}

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');

  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.remove('top-20');
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.add('top-0');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'shadow');
    navbar.classList.remove('top-0');
    navbar.classList.add('top-20');
  }

  if (window.location.pathname.includes("LineasTrabajos.html")) {
    const primerlineasTrabajoDerecha = document.getElementById('primerlineasTrabajoDerecha');
    const primerlineasTrabajoIzquierda = document.getElementById('primerlineasTrabajoIzquierda');
    const segundolineasTrabajoDerecha = document.getElementById('segundolineasTrabajoDerecha');
    const segundolineasTrabajoIzquierda = document.getElementById('segundolineasTrabajoIzquierda');
    const tercerlineasTrabajoDerecha = document.getElementById('tercerlineasTrabajoDerecha');
    const tercerlineasTrabajoIzquierda = document.getElementById('tercerlineasTrabajoIzquierda');

    if (window.scrollY > 300) {
      primerlineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      primerlineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }

    if (window.scrollY > 1100) {
      segundolineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      segundolineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }

    if (window.scrollY > 1800) {
      tercerlineasTrabajoDerecha.classList.add('lineasTrabajoDerecha');
      tercerlineasTrabajoIzquierda.classList.add('lineasTrabajoIzquierda');
    }
  }


});
if (window.location.pathname.includes("SobreNosotros.html")) {

  const items = document.querySelectorAll('.circle-item');
  const centerText = document.querySelector('.center-text');

  const messages = [
    "24HORAS / 365DÍAS",
    "SOPORTE ININTERRUMPIDO",
    "ATENCIÓN PERSONALIZADA",
    "SERVICIO GARANTIZADO",
    "TIEMPOS DE RESPUESTA RÁPIDOS",
    "EXPERIENCIA PROFESIONAL",
    "SOLUCIONES EFECTIVAS",
    "DISPONIBLES SIEMPRE"
  ];

  let angleStep = 360 / items.length;
  let radius = 120;

  items.forEach((item, index) => {
    const angle = angleStep * index - 90; // rotar desde arriba (top)
    const rad = angle * (Math.PI / 180);
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    item.style.transform = `translate(${x}px, ${y}px)`; // eliminar -50%, ya hecho en CSS
  });


  let current = 0;
  function update() {
    items.forEach(i => i.classList.remove('active'));
    items[current].classList.add('active');
    centerText.textContent = messages[current];
    current = (current + 1) % items.length;
  }

  setInterval(update, 5000);
  update();
}
