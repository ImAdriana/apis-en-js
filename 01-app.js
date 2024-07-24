// Notification API
const notificarBtn = document.querySelector('#notificar');

// El usuario concede permisos para aceptar notificaciones
notificarBtn.addEventListener('click', () => {
    // API de notificaciones
    Notification.requestPermission() // Método que pregunta al usuario si quiere recibir notificaciones
        .then((resultado) => console.log('El resultado es ', resultado));
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    // Si se dan permisos, se arroja una nueva notificación
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Atender notificación', {
            // Incluir contenido
            icon: 'img/adri-logo.png',
            body: 'Mantente disciplinada con Okisvlog',
        });

        // Agregar redireccionamiento
        notificacion.onclick = function () {
            window.open('https://www.youtube.com/@okidesu2000');
        };
    }
});
