
const swiper1 = new Swiper('#featuredPost', {
    // Optional parameters
    direction: 'horizontal',
    speed: '2000',

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        // when window width is >= 900px
        768: {
            slidesPerView: 1.7,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 40
        }
    }
});