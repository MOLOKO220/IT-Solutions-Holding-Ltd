// анимацияя при загрузки
const SectionMainWrapp = document.querySelector('.sex-section__main-wrapp');
const sectionForm = document.querySelector('.sex-section__form');


// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        SectionMainWrapp.classList.add('opacity-active');
        sectionForm.classList.add('transform_active');
    }, 200)
});