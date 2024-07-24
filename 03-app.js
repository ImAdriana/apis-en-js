// Ejecutar pantalla completa

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', abrirPantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function abrirPantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}

// ******************************************************************
// Ejemplo de pantalla completa de un elemento en específico
// Lado del HTML
/* <video controls id="ampliarElemento">
    <source src="messi.webm"></source>
    <source src="messi.mp4"></source>
</video> */

// const elemento = document.querySelector('#ampliarElemento');
// if (elemento.requestFullscreen) {
//     elemento.requestFullscreen();
// }
