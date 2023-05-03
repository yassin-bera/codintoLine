const headerIcon = document.querySelector('.header__icon');
const popup = document.querySelector('.popup__container');
const closePopup = document.querySelector('.cancel');
headerIcon.addEventListener('click', () => {
    popup.classList.add('active__popup');
})
closePopup.addEventListener('click', () => {
    popup.classList.remove('active__popup');
})