let edit =  document.querySelector('.profile__button-edit');
let closedPopup = document.querySelector('.popup');
let close_ = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let popupName = document.querySelector('.popup__name')
let popupOccupation = document.querySelector('.popup__occupation');
let save = document.querySelector('.popup__submit');

function popupOpen() {
    closedPopup.classList.add('popup_opened');
    popupName.setAttribute('placeholder', `${profileName.innerHTML}`);
    popupOccupation.setAttribute('placeholder', `${profileOccupation.innerHTML}`);
}

edit.addEventListener('click', popupOpen);

function popupClose() {   
    closedPopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = `${popupName.value}`;
    profileOccupation.textContent = `${popupOccupation.value}`;
    popupClose();
}

save.addEventListener('click', formSubmitHandler);



