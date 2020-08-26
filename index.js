const closedPopup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupName = document.querySelector('.popup__name')
const popupOccupation = document.querySelector('.popup__occupation');
const closedNewMesto = document.querySelector('.popup_add-card');

const cardsContainer = document.querySelector('.elements');
const cardPopupContainer = document.querySelector('.page');
const cardTemplate = document.querySelector('#card-template').content;


/* CLOSE FORMS */
function popupClose() {   
    closedPopup.classList.remove('popup_opened');
    closedNewMesto.classList.remove('popup_opened');
    document.querySelector('.card-popup').classList.remove('card-popup_opened');
    
}
/* OPEN any Popup Form*/
function popupOpen(classPopup,buttonOpen,){
    classPopup.classList.add(buttonOpen);
}

/* OPEN CARD FORM */ 


document.querySelector('.profile__button-add').addEventListener('click', function() {
     popupOpen(closedNewMesto,'popup_opened');
     document.querySelector('.popup__close_add-card').addEventListener('click', popupClose);
}) 


/* OPEN PROFILE FORM */
document.querySelector('.profile__button-edit').addEventListener('click', function() {
    popupOpen(closedPopup,'popup_opened');
    popupName.value = profileName.textContent;
    popupOccupation.value = profileOccupation.textContent;
    document.querySelector('.popup__close').addEventListener('click', popupClose);
});


/* CHANGE PROFILE */
document.querySelector('.popup__submit').addEventListener('click', function(evt) {
    evt.preventDefault();
    profileName.textContent = `${popupName.value}`;
    profileOccupation.textContent = `${popupOccupation.value}`;
    popupClose();
});

/* RENDER CARDS */
function renderCard (nameValue, linkValue) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__caption').textContent = nameValue;
    const elementPicture  = cardElement.querySelector('.element__picture');
    elementPicture.src = linkValue;
    cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');        
    })
    cardElement.querySelector('.element__delete').addEventListener('click', function() {
        document.querySelector('.elements__element').remove();
    })
    elementPicture.addEventListener('click', function() {
        document.querySelector('.card-popup__picture').src = linkValue;
        document.querySelector('.card-popup__name').textContent = nameValue;
        document.querySelector('.card-popup').classList.add('card-popup_opened');
        document.querySelector('.card-popup__close').addEventListener('click', popupClose);
    })
    return cardElement;
}

/* ADD NEW CARD */
function addCard(nameValue, linkValue) {
        cardsContainer.prepend(renderCard(nameValue, linkValue));
}

document.querySelector('.popup__submit_add-card').addEventListener('click', function(evt) {
    evt.preventDefault();
    const mestoName = document.querySelector('.popup__name_mesto');
    const mestoLink = document.querySelector('.popup__link');
    addCard(mestoName.value, mestoLink.value);
    popupClose();
})

/* INITIAL CARDS */

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

initialCards.forEach(function (item) {
    
    addCard(item.name,item.link);
})



