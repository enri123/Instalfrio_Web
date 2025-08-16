export function initLineasTrabajo() {
    window.addEventListener('scroll', () => {
        const elements = [
            { derecha: 'primerlineasTrabajoDerecha', izquierda: 'primerlineasTrabajoIzquierda', scrollY: 600 },
            { derecha: 'segundolineasTrabajoDerecha', izquierda: 'segundolineasTrabajoIzquierda', scrollY: 1400 },
            { derecha: 'tercerlineasTrabajoDerecha', izquierda: 'tercerlineasTrabajoIzquierda', scrollY: 2300 }
        ];

        elements.forEach(({ derecha, izquierda, scrollY }) => {
            if (window.scrollY > scrollY) {
                document.getElementById(derecha)?.classList.add('lineasTrabajoDerecha');
                document.getElementById(izquierda)?.classList.add('lineasTrabajoIzquierda');
            }
        });
    });
}
