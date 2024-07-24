// Intersection observer
document.addEventListener('DOMContentLoaded', () => {
    // Permite identificar un elemento visible en el viewport del navegador
    const observer = new IntersectionObserver((entries) => {
        // console.log(entries[0]);
        if (entries[0].isIntersecting) {
            console.log('Contenido encontrado');
        }
    });

    // Para el ejemplo se tomó la clase de un div
    observer.observe(document.querySelector('.premium'));
});

// Útil para cuando se quiere agregar lazy loading a las imagenes, como
// cuando las imagenes de hasta abajo no se vean hasta que se llegue a ese contenido
