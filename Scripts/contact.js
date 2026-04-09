function sendForm(event) {
    // Evitamos que el formulario se envíe de forma tradicional y recargue la página
    event.preventDefault();

    // Obtenemos los datos del formulario
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Creamos una variable para saber si todo está correcto
    let isValid = true;

    // Mapeamos cada campo con su respectivo ID de error
    // El "key" es el 'name' del input y el "value" es el ID del <p> de error
    const fields = {
        name: 'errorContactName',
        email: 'errorContactEmail',
        phone: 'errorContactPhone',
        message: 'errorContactMessage'
    };

    // Iteramos sobre los campos para validar
    for (const [fieldName, errorId] of Object.entries(fields)) {
        const errorElement = document.getElementById(errorId);
        
        // Si el campo está vacío (quitando espacios en blanco con trim), mostramos el error
        if (data[fieldName].trim() === "") {
            errorElement.hidden = false; // Mostramos el error
            // Agregamos una clase de error al input 
            form.querySelector(`[name="${fieldName}"]`).classList.add('input-error');
            isValid = false;
        } else {
            errorElement.hidden = true;  // Ocultamos el error si ya escribió algo
            // Quitamos la clase de error si el campo es válido
            form.querySelector(`[name="${fieldName}"]`).classList.remove('input-error');

        };
    };

    // 4. Si todo es válido, procedemos
    if (isValid) {
        console.log("¡Formulario listo para enviar!", data);
        
        // Mostramos el mensaje de éxito general
        document.getElementById('successContact').hidden = false;

        // Mostrar tu modal de éxito
        document.querySelector('.contact-modal').style.display = 'flex';
        
        // Limpiar el formulario tras el envío
        form.reset();
    };
};

// Lógica para cerrar el modal al hacer clic en la X
document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.contact-modal').style.display = 'none';
});

