export function loadNavbarFooter() {
    fetch("navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            const filename = window.location.pathname.split("/").pop().replace('.html', '');
            const pagesToSelect = ["contacto", "index", "proyectos", "lineas-trabajos", "quienes-somos"];
            if (pagesToSelect.includes(filename)) {
                seleccionar(filename);
            }
        })
        .catch((error) => console.error("Error cargando el navbar:", error));

    fetch("footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch((error) => console.error("Error cargando el footer:", error));
}

function seleccionar(filename) {
    const current = document.getElementById(filename);
    if (current) current.classList.add("active");
}
