// Cuando se cambia de pestaña se habilita o desabilita lo que se está mostrando, 
// como la reproducción de un video
document.addEventListener('visibilitychange', () => {
    // console.log(document.visibilityState);
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar función para reproducir el video');
    } else {
        // hidden
        console.log('El documental se ha pausado');
    }
});
