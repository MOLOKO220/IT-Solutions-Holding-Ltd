// кнопка вызова бургера
const burgerBtn = document.querySelector('.burgerBtn');
const burgerClosebtn = document.querySelector('#burgerClosebtn') //кнопка закрытия бургера
const burgerWrapp = document.querySelector('.burger__wrapp'); //бургер меню

burgerClosebtn.addEventListener('click', closeBurger)
// показать бургер
burgerBtn.addEventListener('click', showBurger);
// вызов\закрытие бургера
function showBurger() {
    burgerWrapp.classList.add('burger-activ');
}
function closeBurger() {
    burgerWrapp.classList.remove('burger-activ');
}