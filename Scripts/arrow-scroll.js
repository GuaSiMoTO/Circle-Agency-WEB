// Botón arrow "Volver al inicio"
// Seleccionamos el botón por su ID
const btnBackToTop = document.getElementById("btn-back-to-top");

// Función para mostrar/ocultar el botón según el scroll y según el tamaño de la pantalla
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Si el usuario baja más de 400px desde el tope, aparece el botón
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnBackToTop.style.display = "flex"; // Cambiamos de none a flex para mostrar el botón
    } else {
        btnBackToTop.style.display = "none";
    };
};

// Función para que al hacer clic en el arrow suba suavemente
btnBackToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0, // manda al tope de la página
        behavior: "smooth" // Esto hace que el deslizamiento hacia arriba sea fluido
    });
});
