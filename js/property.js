const swiper = new Swiper('.sample-slider', {
    loop: true,                         //loop
    autoplay: {                         //autoplay
        delay: 5000,  
    },   
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

     // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 1024px
        1024: {
        slidesPerView: 3,
        spaceBetween: 40
        }},
        // when window width is >= 2560px
        // 2560: {
        // slidesPerView: 4,
        // spaceBetween: 50
        // }

  });

  
let addBtn = document.querySelector('.addbtn');
let minusBtn = document.querySelector('.minusbtn');
let countNum = document.querySelector('.count');
let defaultCount = 0;

addBtn.addEventListener('click', () => {
    defaultCount++;
    countNum.textContent = defaultCount;
});

minusBtn.addEventListener('click', () => {
    if(defaultCount > 0) {
        defaultCount--;
        countNum.textContent = defaultCount;
    }
})