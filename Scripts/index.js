// Menu hamburguesa para móvil
// Seleccionamos los elementos
const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

// Evento para abrir el menú
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Evento para cerrar el menú con la X
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Opcional: Cerrar el menú si haces clic fuera de él (en la parte oscura)
window.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
});

// Botón "Volver al inicio"
// Seleccionamos el botón por su ID
const btnBackToTop = document.getElementById("btn-back-to-top");

// Función para mostrar/ocultar el botón según el scroll
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Si el usuario baja más de 400px desde el tope, aparece el botón
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnBackToTop.style.display = "flex"; // Cambiamos de none a flex para mostrar el botón
    } else {
        btnBackToTop.style.display = "none";
    }
}

// Función para que al hacer clic suba suavemente
btnBackToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0, // manda al tope de la página
        behavior: "smooth" // Esto hace que el deslizamiento hacia arriba sea fluido
    });
});