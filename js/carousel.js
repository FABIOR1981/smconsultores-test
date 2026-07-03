document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carouselContainer');
    if (!container) return;

    let overlay = document.getElementById('carouselOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'carouselOverlay';
        overlay.className = 'carousel-overlay';
        document.body.appendChild(overlay);
    }

    const closeZoom = () => {
        document.querySelectorAll('.carousel-item.zoomed').forEach((item) => {
            item.classList.remove('zoomed');
        });

        container.classList.remove('no-scroll');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    const openZoom = (item) => {
        document.querySelectorAll('.carousel-item').forEach((carouselItem) => {
            carouselItem.classList.remove('zoomed');
        });

        item.classList.add('zoomed');
        container.classList.add('no-scroll');
        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    container.addEventListener('click', (e) => {
        const item = e.target.closest('.carousel-item');

        if (!item) {
            closeZoom();
            return;
        }

        if (item.classList.contains('zoomed')) {
            closeZoom();
        } else {
            openZoom(item);
        }
    });

    overlay.addEventListener('click', closeZoom);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeZoom();
        }
    });
});