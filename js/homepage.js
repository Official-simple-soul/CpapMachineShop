//validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
//end validation

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

const swiper1 = new Swiper('.swiperFirst', {
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
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 900px
        900: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: '1000',

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 900px
        700: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
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