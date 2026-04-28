
$(document).ready(() => {
    const photoGallery = new Swiper('.photo-gallery-slider', {
        navigation: {
            nextEl: '.gallery-next',
            prevEl: '.gallery-prev',
        },
        slidesPerView: 5
    });
    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
            Thumbs: {
                type: "classic"
            }
        }
    });
})