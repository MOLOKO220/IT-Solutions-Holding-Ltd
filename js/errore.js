// анимацияя при загрузки
const SectionMainWrapp = document.querySelector('.sex-section__main-wrapp');
const sectionForm = document.querySelector('.error_main-back');


// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        SectionMainWrapp.classList.add('opacity-active');
        sectionForm.classList.add('opacity-active');
    }, 200)
});