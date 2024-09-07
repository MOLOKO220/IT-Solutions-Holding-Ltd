// анимацияя при загрузки
const headSiteBar = document.querySelector('.services-head-section__SiteBar');
const headMainSection = document.querySelector('.services-head-section__main-wrapp');
const backImg = document.querySelector('.services-head-section'); //задниф фон имеджа
// кнопки в хейдере
const btnAccounting = document.querySelector('#btnAccounting');
const btnBusinessServices = document.querySelector('#btnBusinessServices');
const btnAdvisory = document.querySelector('#btnAdvisory');
const btnPayroll = document.querySelector('#btnPayroll');
const btnAuditAssurance = document.querySelector('#btnAuditAssurance');
const btnTaxServices = document.querySelector('#btnTaxServices');
const popupBtns = document.querySelectorAll('.popupBtn');//масив с кнопками
// массив с попапами 
const popuo = document.querySelectorAll('.services-third-section__item-wrapp');
const scrolYeck = document.querySelector('#scrolYeck'); //якарь для скрола

btnAccounting.addEventListener('click',showPopup);
btnBusinessServices.addEventListener('click',showPopup);
btnAdvisory.addEventListener('click',showPopup);
btnPayroll.addEventListener('click',showPopup);
btnAuditAssurance.addEventListener('click',showPopup);
btnTaxServices.addEventListener('click',showPopup);



// показать попаоп
function showPopup(){

    scrolYeck.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    this.classList.add('btn__activ');
    popupBtns.forEach((e)=>{
        if(e != this){
            e.classList.remove('btn__activ');
        }
    });
    popuo.forEach((e)=>{
        if(this.classList[1] == e.id){
            e.classList.remove('display__none')
        }
        else(
            e.classList.add('display__none')
        )
    });
}
// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        headSiteBar.classList.add('SiteBar-activ');
        headMainSection.classList.add('head-section__main');
        backImg.classList.add('head-back-actip');
    }, 200)
});


//btn__activ
