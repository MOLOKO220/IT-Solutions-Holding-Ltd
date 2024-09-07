function showAccounting(){
    localStorage.clear();
    localStorage.setItem('popup', 'Accounting');
    window.location.href = 'services.html';
}
function showBusiness(){
    localStorage.clear();
    localStorage.setItem('popup', 'Business');
    window.location.href = 'services.html';
}
function showAdvisory(){
    localStorage.clear();
    localStorage.setItem('popup', 'Advisory');
    window.location.href = 'services.html';
}
function showPayroll(){
    localStorage.clear();
    localStorage.setItem('popup', 'Payroll');
    window.location.href = 'services.html';
}
function showAudit(){
    localStorage.clear();
    localStorage.setItem('popup', 'Audit');
    window.location.href = 'services.html';
}
function showTax(){
    localStorage.clear();
    localStorage.setItem('popup', 'Tax');
    window.location.href = 'services.html';
}
// попапы
const accounting = document.querySelector('#accounting');
const businessServices = document.querySelector('#businessServices');
const payroll = document.querySelector('#payroll');
const advisory = document.querySelector('#advisory');
const auditAndAssurance = document.querySelector('#auditAndAssurance');
const taxServices = document.querySelector('#taxServices');
// кнопки попапов
// const btnAccounting = document.querySelector('#btnAccounting');
// const btnBusinessServices = document.querySelector('#btnBusinessServices');
// const btnAdvisory = document.querySelector('#btnAdvisory');
// const btnPayroll = document.querySelector('#btnPayroll');
// const btnAuditAssurance = document.querySelector('#btnAuditAssurance');
// const btnTaxServices = document.querySelector('#btnTaxServices');

window.addEventListener('load',(e)=>{
    const popup = localStorage.getItem('popup');
    if(popup == 'Accounting'){
        accounting.classList.remove('display__none');
        btnAccounting.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else if(popup == 'Business'){
        businessServices.classList.remove('display__none');
        accounting.classList.add('display__none');
        btnBusinessServices.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else if(popup == 'Advisory'){
        advisory.classList.remove('display__none');
        accounting.classList.add('display__none');
        btnAdvisory.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else if(popup == 'Payroll'){
        payroll.classList.remove('display__none');
        accounting.classList.add('display__none');
        btnPayroll.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else if(popup == 'Audit'){
        auditAndAssurance.classList.remove('display__none');
        accounting.classList.add('display__none');
        btnAuditAssurance.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else if(popup == 'Tax'){
        taxServices.classList.remove('display__none');
        accounting.classList.add('display__none');
        btnTaxServices.classList.add('btn__activ');
        scrolYeck.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    localStorage.clear();
});