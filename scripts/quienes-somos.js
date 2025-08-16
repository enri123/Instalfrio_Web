export function initSobreNosotros() {
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

    const angleStep = 360 / items.length;
    const radius = 120;

    items.forEach((item, index) => {
        const angle = angleStep * index - 90;
        const rad = angle * (Math.PI / 180);
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);
        item.style.transform = `translate(${x}px, ${y}px)`;
    });

    let current = 0;
    function update() {
        items.forEach(i => i.classList.remove('active'));
        items[current].classList.add('active');
        centerText.textContent = messages[current];
        current = (current + 1) % items.length;
    }

    update();
    setInterval(update, 2500);
}
