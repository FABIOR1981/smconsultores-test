document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carouselContainer');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const item = e.target.closest('.carousel-item');

        // CASO 1: Hiciste clic en una imagen
        if (item) {
            if (item.classList.contains('zoomed')) {
                // Si ya está ampliada, ciérrala
                item.classList.remove('zoomed');
                container.classList.remove('no-scroll');
            } else {
                // Primero cierra cualquier otra que esté abierta
                document.querySelectorAll('.carousel-item').forEach(i => i.classList.remove('zoomed'));
                // Amplía la actual
                item.classList.add('zoomed');
                container.classList.add('no-scroll');
            }
        } 
        // CASO 2: Hiciste clic en el "fondo oscuro" (fuera de cualquier imagen)
        else {
            const activeZoom = document.querySelector('.carousel-item.zoomed');
            if (activeZoom) {
                activeZoom.classList.remove('zoomed');
                container.classList.remove('no-scroll');
            }
        }
    });
});