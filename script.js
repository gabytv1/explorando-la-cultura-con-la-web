//Lógica del formulario interactivo o interacciones

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("encuesta-form");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que se recargue la página
            
            const nombre = document.getElementById("nombre").value;
            alert(`¡Muchas gracias ${nombre || "visitante"}! Tus respuestas han sido registradas con éxito para el estudio de la Biblioteca de las Artes.`);
            
            form.reset(); // Limpia el formulario
        });
    }
});