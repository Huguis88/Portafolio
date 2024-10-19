// Función que aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 100) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
    }
}

// Función para activar el modo oscuro
const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.toggle('dark');
    });

    const btnEnviar = document.querySelector('.btn-enviar');
    btnEnviar.classList.toggle('dark');

    const progressBars = document.querySelectorAll('.barra .progreso');
    progressBars.forEach(bar => {
        bar.classList.toggle('dark');
    });
};

// Event listener para el botón de modo oscuro
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
