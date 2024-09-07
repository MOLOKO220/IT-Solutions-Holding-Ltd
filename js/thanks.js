// анимацияя при загрузки
const SectionMainWrapp = document.querySelector('.sex-section__main-wrapp');


// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        SectionMainWrapp.classList.add('opacity-active');
    }, 200)
});