// анимацияя при загрузки
const headSiteBar = document.querySelector('.head-section__SiteBar');
const headMainSection = document.querySelector('.head-section__main-wrapp');
const backImg = document.querySelector('.head-section'); //задниф фон имеджа

//кнопки перевода на попап
const AccountingBtn = document.querySelector('#AccountingBtn');
const BusinessBtn = document.querySelector('#BusinessBtn');
const AdvisoryBtn = document.querySelector('#AdvisoryBtn');
const PayrollBtn = document.querySelector('#PayrollBtn');
const AuditBtn = document.querySelector('#AuditBtn');
const TaxBtn = document.querySelector('#TaxBtn');

AccountingBtn.addEventListener('click',showAccounting);
BusinessBtn.addEventListener('click',showBusiness);
AdvisoryBtn.addEventListener('click',showAdvisory);
PayrollBtn.addEventListener('click',showPayroll);
AuditBtn.addEventListener('click',showAudit);
TaxBtn.addEventListener('click',showTax);

// анимации при  загрузки
window.addEventListener('load', (e) => {
    setTimeout((e) => {
        headSiteBar.classList.add('SiteBar-activ');
        headMainSection.classList.add('head-section__main');
        backImg.classList.add('head-back-actip');
    }, 200)
});
