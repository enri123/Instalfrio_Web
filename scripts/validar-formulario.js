export function initValidarFormulario() {
    const form = document.getElementById("formContacto");
    const respuesta = document.getElementById("respuesta");

    if (!form) return;

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        respuesta.innerHTML = ""; 

        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const tema = document.getElementById("tema").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const validTelefono = /^\d{9}$/;

        if (!validEmail.test(email)) {
            respuesta.innerHTML = `<div class="alert alert-danger">❗ Introduzca un email válido</div>`;
            return;
        }

        if (!validTelefono.test(telefono)) {
            respuesta.innerHTML = `<div class="alert alert-danger">❗ Introduzca un teléfono válido (9 dígitos)</div>`;
            return;
        }

        // Mostrar mensaje de carga
        respuesta.innerHTML = `
            <div class="alert alert-info">
                Enviando mensaje, por favor espera...
            </div>
        `;

        // Datos que van al template (como en tu Angular)
        const templateParams = {
            from_name: nombre,
            reply_to: email,
            telefono: telefono,
            subject: tema,
            message: mensaje
        };

        console.log(mensaje)

        try {
            const result = await emailjs.send(
                "service_p7sanii",
                "template_1j2v4wb",
                templateParams,
                "5Ptt9TvHbJRAYMZr_"
            );

            if (result.status === 200) {
                respuesta.innerHTML = `
                    <div class="alert alert-success">
                        ✔️ ¡Mensaje enviado correctamente! Te responderemos lo antes posible.
                    </div>
                `;
                form.reset();
            } else {
                respuesta.innerHTML = `
                    <div class="alert alert-danger">
                        ❗ No se pudo enviar el mensaje. Inténtalo de nuevo.
                    </div>
                `;
            }

        } catch (error) {
            console.error("Error EmailJS:", error);
            respuesta.innerHTML = `
                <div class="alert alert-danger">
                    ❗ Error al enviar el mensaje. Inténtalo más tarde.
                </div>
            `;
        }
    });
}
