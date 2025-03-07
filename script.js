// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {
    // Validación del formulario de contacto
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos antes de enviar el formulario.");
        } else {
            alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");
            this.reset(); // Reiniciar formulario
        }
    });

    // Mostrar mensaje al seleccionar un curso
    document.getElementById("curso-seleccion").addEventListener("change", function () {
        let cursoSeleccionado = this.options[this.selectedIndex].text;
        alert("Has seleccionado: " + cursoSeleccionado);
    });
});
