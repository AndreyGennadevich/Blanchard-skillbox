window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-one').addEventListener('click', function() {
        document.querySelector('#testscroll').classList.toggle('tab-content-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-two').addEventListener('click', function() {
        document.querySelector('#testscroll1').classList.toggle('tab-content-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-three').addEventListener('click', function() {
        document.querySelector('#testscroll2').classList.toggle('tab-content-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-four').addEventListener('click', function() {
        document.querySelector('#testscroll3').classList.toggle('tab-content-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn-five').addEventListener('click', function() {
        document.querySelector('#testscroll4').classList.toggle('tab-content-active')
    })
});

new SimpleBar(document.getElementById('testscroll'), {
    scrollbarMinSize: 25,
    scrollbarMaxSize: 30,
    forceVisible: true,
});

new SimpleBar(document.getElementById('testscroll1'), {
    scrollbarMinSize: 25,
    scrollbarMaxSize: 30,
    forceVisible: true,
});

new SimpleBar(document.getElementById('testscroll2'), {
    scrollbarMinSize: 25,
    scrollbarMaxSize: 30,
    forceVisible: true,
});

new SimpleBar(document.getElementById('testscroll3'), {
    scrollbarMinSize: 25,
    scrollbarMaxSize: 30,
    forceVisible: true,
});

new SimpleBar(document.getElementById('testscroll4'), {
    scrollbarMinSize: 25,
    scrollbarMaxSize: 30,
    forceVisible: true,
});


const element = document.querySelector('#selectCustom')
        const choices = new Choices(element, {
            placeholder: true,
            searchEnabled : false ,
            shouldSort: false,
            itemSelectText: '',
            renderSelectedChoices: 'always',
        });

const swiper = new Swiper('.swiper-container', {
    
    loop: true,
    autoplay: {
    delay: 8000,
    disableOnInteraction: false,        
    },
    speed: 800,
});

var swiper1 = new Swiper('.swiper-container1', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 52,
    slidesPerGroup: 1,
    breakpoints: { 321: { slidesPerColumn: 2, slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 34 },
                    1025: { slidesPerColumn: 2, slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 48 },
                    1921: { slidesPerColumn: 2, slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 50}
                    },
    slidesPerColumnFill: 'row',
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$( function() {
    $( "#accordion" ).accordion({
        icons: false,
        heightStyle: 'content',
        collapsible: true
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#french').addEventListener('click', function() {

        document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
            tabContent.classList.remove('language-active')
        })

        document.querySelector('#french').classList.add('language-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#german').addEventListener('click', function() {
        
        document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
            tabContent.classList.remove('language-active')
        })

        document.querySelector('#german').classList.add('language-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#italy').addEventListener('click', function() {
        
        document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
            tabContent.classList.remove('language-active')
        })

        document.querySelector('#italy').classList.add('language-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#russian').addEventListener('click', function() {
        
        document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
            tabContent.classList.remove('language-active')
        })

        document.querySelector('#russian').classList.add('language-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#belgium').addEventListener('click', function() {
        
        document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
            tabContent.classList.remove('language-active')
        })

        document.querySelector('#belgium').classList.add('language-active')
    })
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.language-selection__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click',function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.catalog__bottom-container').forEach(function(tabContent) {
                tabContent.classList.remove('language-select')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('language-select')
        })
    })
});

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.language-selection__btn').forEach(function(tabsBtn) {
//         tabsBtn.addEventListener('click',function(event) {
//             const path = event.currentTarget.dataset.path

//             document.querySelectorAll('.language-selection__btn').forEach(function(tabContent) {
//                 tabContent.classList.remove('language-active')
//             })
//             document.querySelector(`[data-target="${path}"]`).classList.add('language-active')
//         })
//     })
// });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab__link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click',function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.catalog__left').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__left-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-active')
        })
    })
});


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#events__btn').addEventListener('click', function() {
        document.querySelector('.card-hidden').classList.toggle('card-visible')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#events__btn').addEventListener('click', function() {
        document.querySelector('.events__card:nth-child(3)').classList.toggle('card-hidden768')
    })
});

var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    slidesPerColumn: 4,
    slidesPerGroup: 8,
    spaceBetween: 30,
    watchOverflow: true,
    slidesPerColumnFill: 'row',
    breakpoints: { 321: { spaceBetween: 35, slidesPerColumn: 1, slidesPerView: 2, slidesPerGroup: 2 },
                    769: { spaceBetween: 51 },
                    1025: { slidesPerColumn: 1, slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 46, },
                    
                    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper3 = new Swiper('.swiper-container3', {
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 33,
    slidesPerGroup: 1,
    breakpoints: {  321: { slidesPerColumn: 1, slidesPerView: 2, slidesPerGroup: 2 },
                    769: { slidesPerColumn: 1, slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 50 },
                    1025: { slidesPerColumn: 1, slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 50},
                },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.759972, 37.639553],
                zoom: 14.23,
                controls: []
            });

            myMap.controls.add('zoomControl', {
                size: 'small',
                float: 'none',
                position: {
                    bottom: '370px',
                    right: '1.3%'
                }
            });

            myMap.controls.add('geolocationControl', {
                float: 'none',
                position: {
                    bottom: '315px',
                    right: '1.3%'
                }
            });

            var myPlacemark1 = new ymaps.Placemark([55.758463, 37.601079], {}, {
                iconLayout: 'default#image',
                iconImageClipRect: [[0,0], [20, 20]],
                iconImageHref: '/image/1920/Ellipse 12.svg',
                iconImageSize: [22, 22],
                iconImageOffset: [0, 0]
            });

            myMap.geoObjects.add(myPlacemark1);

        };

        var selector = document.querySelector("input[type='tel']");
        var im = new Inputmask("+7 (999)-999-99-99");

        im.mask(selector);

        new JustValidate('.form', {
            rules: {
                name: {
                    required: true,
                    minLength: 2,
                    maxLength: 30
                },
                tel: {
                    required: true,
                    function: (name, value) => {
                        const phone = selector.inputmask.unmaskedvalue()
                        return Number(phone) && phone.length === 10                      
                    },
                },
            },

            messages: {
                name: {
                    required: 'Как вас зовут?',
                    minLength: 'Как вас зовут?',
                    maxLength: 'Как вас зовут?'
                },
                tel: {
                    required: 'Укажите ваш телефон',
                    function: 'Укажите ваш телефон'
                },

            },

            focusWrongField: true,
            submitHandler: function (form, values, ajax) {
                console.log(values)
            },
            invalidFormCallback: function (errors) {
                console.log(errors);
            },

});

$(document).ready(function(){
    $("#btn-subscribe").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(".header__link").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__search').addEventListener('click', function() {
        console.log('#header__search')
        document.querySelector('#header__search').classList.add('search-is-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search__btn-close').addEventListener('click', function() {
        console.log('#header__search')
        document.querySelector('#header__search').classList.remove('search-is-active')
    })
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        console.log('#header__burger')
        document.querySelector('#header__nav').classList.toggle('nav-is-active')
    })

    document.querySelector('#header__burger-close').addEventListener('click', function() {
        console.log('#header__burger-close')
        document.querySelector('#header__nav').classList.toggle('nav-is-active')
    })
});

var swiper4 = new Swiper('.swiper-container4', {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
    },
});

const element1 = document.querySelector('#selectCustom1')
        const choices1 = new Choices(element, {
            placeholder: true,
            searchEnabled : false ,
            shouldSort: false,
            itemSelectText: '',
            renderSelectedChoices: 'always',
        });
