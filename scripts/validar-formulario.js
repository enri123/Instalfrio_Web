export function initValidarFormulario() {
    const form = document.getElementById("formContacto");
    const respuesta = document.getElementById("respuesta");

    if (!form) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Siempre evitar recarga

        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const validTelefono = /^\d{9}$/;

        if (!validEmail.test(email)) {
            respuesta.innerHTML = `<div class="alert alert-danger">Introduzca un email válido</div>`;
            return;
        }
        if (!validTelefono.test(telefono)) {
            respuesta.innerHTML = `<div class="alert alert-danger">Introduzca un teléfono válido</div>`;
            return;
        }

        try {
            const formData = new FormData(form);
            const res = await fetch("enviarEmail.php", {
                method: "POST",
                body: formData
            });
            const data = await res.json();

            if (data.status === "success") {
                respuesta.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
                form.reset();
            } else {
                respuesta.innerHTML = `<div class="alert alert-danger">${data.message}</div>`;
            }
        } catch (error) {
            respuesta.innerHTML = `<div class="alert alert-danger">Error de conexión.</div>`;
        }
    });
}
