function updateClock() {
    const now = new Date();

    // Obtener horas y determinar AM/PM
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convertir a formato de 12 horas
    hours = hours % 12;
    hours = hours ? hours : 12; // La hora '0' debe ser '12'

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Construir la cadena de tiempo
    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    // Actualizar el contenido del elemento del reloj
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar a la función una vez al inicio para que no haya un retraso de 1 segundo
updateClock();

// --- LÓGICA DEL CARRUSEL ---
let slideIndex = 1;
showSlides(slideIndex);

let carouselInterval;

const startCarousel = () => {
    carouselInterval = setInterval(() => {
        plusSlides(1);
    }, 3000);
};

const stopCarousel = () => {
    clearInterval(carouselInterval);
};

const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
}

// Controles de Siguiente/Anterior
startCarousel(); // Iniciar el carrusel
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (slides.length === 0) return; // Salir si no hay slides
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}