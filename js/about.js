// слайдер
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
    });
});


// тело первай страницы
const headerBody = document.querySelector('.about-first-section-wrapp');
const headerImg = document.querySelector('.header-img');

// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        headerBody.classList.add('head-section__main');
    }, 200)
    setTimeout((e)=>{
        headerImg.classList.remove('header-img');
    }, 300)
});