// анимацияя при загрузки
const headSiteBar = document.querySelector('.services-head-section__SiteBar');
const headMainSection = document.querySelector('.services-head-section__main-wrapp');
const backImg = document.querySelector('.sectors-head-section'); //задниф фон имеджа

// кнопки в хейдере
const btnArtandMediaAccounting = document.querySelector('#btnArtandMediaAccounting');
const btnAccountingInEducation = document.querySelector('#btnAccountingInEducation');
const btnAccountingInFinancial = document.querySelector('#btnAccountingInFinancial');
const btnRuralAccounting = document.querySelector('#btnRuralAccounting');
const btnTechnologicalAccounting = document.querySelector('#btnTechnologicalAccounting');
const btnRetailAndWholesale = document.querySelector('#btnRetailAndWholesale');
// массив с попапами 
const popuo = document.querySelectorAll('.services-second__itrm');
const scrolYeck = document.querySelector('#scrolYeck'); //якарь для скрола
// масив с кнопками попап
const servicesPopupBtns = document.querySelectorAll('.servicesPopupBtn');

btnArtandMediaAccounting.addEventListener('click',showPopup);
btnAccountingInEducation.addEventListener('click',showPopup);
btnAccountingInFinancial.addEventListener('click',showPopup);
btnRuralAccounting.addEventListener('click',showPopup);
btnTechnologicalAccounting.addEventListener('click',showPopup);
btnRetailAndWholesale.addEventListener('click',showPopup);

// показать попаоп
function showPopup(){
    scrolYeck.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    this.classList.add('btn__activ');
    servicesPopupBtns.forEach((e)=>{
        if(e != this){
            e.classList.remove('btn__activ');
        }
    });
    popuo.forEach((e)=>{
        if(this.classList[1] == e.classList[2]){
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
