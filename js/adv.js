
$(document).ready(() => {
    const photoGallery = new Swiper('.photo-gallery-slider', {
        navigation: {
            nextEl: '.gallery-next',
            prevEl: '.gallery-prev',
        },
        slidesPerView: 5
    });
    const menuSlider1 = new Swiper('.menu-slider-1', {
        navigation: {
            nextEl: '.ms1-next',
            prevEl: '.ms1-prev',
        },
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 1.6
            }
        }
    });
    const menuSlider2 = new Swiper('.menu-slider-2', {
        navigation: {
            nextEl: '.ms2-next',
            prevEl: '.ms2-prev',
        },
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 1.7
            }
        }
    });
    $(".faq-list-item .row").click(function () {
        $(this).toggleClass("active").next().slideToggle()
    })
})