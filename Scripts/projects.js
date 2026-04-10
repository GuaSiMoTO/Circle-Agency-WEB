
// creamos funcion asíncrona para llamar a la API y obtener datos

const URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

async function loadData() {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        // primero
        // Obtenemos el ID de la URL con URLSearchParams
        const params = new URLSearchParams(window.location.search);
        let queryId = params.get('id');
        

        if (!queryId) queryId = '1'; // Si no hay ID, por defecto el 1

    
        // El proyecto principal es el que coincida con el ID de la URL con find
        const mainProject = data.find(project => project.uuid === queryId);

        // Si no encuentra el proyecto, mostramos un mensaje de error
        if (!mainProject) {
            alert("Project not found");
            return;
        };

        // Los "Otros proyectos" son todos los demás (filtramos el que ya elegimos) con filter
        const otherProjects = data.filter(project => project.uuid !== queryId);

    
        // Aquí llamaríamos a las funciones de pintar el DOM
        // DOM para el proyecto principal
        renderMainProject(mainProject);
        
        // DOM para los otros proyectos
        renderOtherProjects(otherProjects);

    } catch (error) {
        console.error("Error cargando la API:", error);
    };
};

// Función para renderizar el proyecto principal en el DOM

function renderMainProject(project) {
    if (!project) return;
    
    // Seleccionamos los elementos en <section id="project">
    document.querySelector('#project .title').textContent = project.name;
    document.querySelector('#project .project-subtitle').textContent = project.description;
    document.querySelector('#project .project-date').textContent = project.completed_on;
    document.querySelector('#project .project-image img').src = project.image;
    document.querySelector('#project article').innerHTML = project.content;
};

// Función para renderizar los otros proyectos en el DOM en la sección de "Other Projects"
function renderOtherProjects(others) {
    const container = document.querySelector('#projects .project-contaier');
    container.innerHTML = ''; // Limpiamos el contenido estático que tenías

    // Tomamos solo los 3 primeros si quieres limitar la lista
    others.slice(0, 3).forEach(p => {
        container.innerHTML += `
            <article>
                <a href="projects.html?id=${p.uuid}">
                    <img src="${p.image}" alt="${p.name}">
                    <h4>${p.name}</h4>
                    <p>${p.description}</p>
                    <span class="learn-more">Learn more</span>
                </a>
            </article>
        `;
    });
};

// Ejecutamos la función para cargar los datos al abrir la página
loadData();