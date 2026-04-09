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