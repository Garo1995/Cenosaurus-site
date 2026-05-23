



$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-mobile').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-mobile').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.menu-mobile').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


const dropdown = document.querySelector('.lang-dropdown');
const btn = document.querySelector('.lang-btn');
const btnText = btn.querySelector('span');
const items = document.querySelectorAll('.lang-menu a');

btn.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // берем текст выбранного языка
        const selectedLang = item.textContent;

        // вставляем в главный блок
        btnText.textContent = selectedLang;

        // закрываем меню
        dropdown.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});



let possibiltiesSlider = new Swiper(".possibilties-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".possibiltie-next",
        prevEl: ".possibiltie-prev",
    },
    breakpoints: {
        '767': {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.05,
            spaceBetween: 10,
            loop: true
        },
    },
});





let clientSlider = new Swiper(".client-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".client-button-next",
        prevEl: ".client-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '1020': {
            slidesPerView: 1.3,

            spaceBetween: 10,
        },
        '767': {
            slidesPerView: 1.3,

            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
            loop: true
        },
    },
});




let tariffsSlider = new Swiper(".tariffs-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2.9,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1.8,

            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
        },
    },
});






let advantagesSlider = new Swiper(".advantages-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 20,
            enabled: false,

        },
        '1020': {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: false,

        },
        '767': {
            slidesPerView: 2,
            spaceBetween: 10,
            enabled: false,

        },
        '570': {
            slidesPerView: 1.5,
            spaceBetween: 10,
            enabled: true,
        },
        '320': {
            slidesPerView: 1.08,
            slidesPerGroup: 1,
            spaceBetween: 10,
            enabled: true,
        },
    },
});



let klentsSlider = new Swiper(".our-klents-swiper", {
    slidesPerView: 9,
    spaceBetween: 70,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '1599': {
            slidesPerView: 9,
            autoplay: {
                delay: false,
            },
        },
        '1220': {
            slidesPerView: 8,
            loop: true,
            autoplay: {
                delay: 2000,
            },
        },
        '1020': {
            slidesPerView: 7,
            loop: true,
            autoplay: {
                delay: 2000,
            },
        },
        '767': {
            slidesPerView: 5,
            loop: true,
            autoplay: {
                delay: 2000,
            },
        },
        '570': {
            slidesPerView: 4,
            loop: true,
            autoplay: {
                delay: 2000,
            },
            centeredSlides: true,

        },
        '320': {
            slidesPerView: 2,
            loop: true,
            spaceBetween: 60,

            autoplay: {
                delay: 2000,
            },
            centeredSlides: true,

        },
    },
});










$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});














$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        let $this = $(this);
        let $next = $this.next();
        let $parentBox = $this.closest('.questions-box');

        $next.slideToggle();

        if (!e.data.multiple) {
            $el.find('.submenu-faq').not($next).slideUp();
            $el.find('.link').not($this).removeClass('open');
            $el.find('.questions-box').not($parentBox).removeClass('active-box');
        }

        if (!$this.hasClass('open')) {
            $this.addClass('open');
            $parentBox.addClass('active-box');
        } else {
            $this.removeClass('open');
            $parentBox.removeClass('active-box');
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});






$('.opend-cases').on('click', function () {
    $(this).addClass('see-more-none');
    $('.cases-wrap').addClass('cases-opened');
})









$('.articles-more').on('click', function () {
    $(this).addClass('see-more-none');
    $('.articles-wrap').addClass('articles-opened');
})












let teamSlider = new Swiper(".our-team-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2.7,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1.8,

            spaceBetween: 10,
        },

        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
        },
    },
});





let studiesSlider = new Swiper(".studies-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        '1599': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        '1399': {
            slidesPerView: 3.1,
            spaceBetween: 20,
        },
        '1199': {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        '1020': {
            slidesPerView: 2.3,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 1.06,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".studies-next",
        prevEl: ".studies-prev",
    },
});























