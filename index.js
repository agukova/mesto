const closedPopup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupName = document.querySelector('.popup__name')
const popupOccupation = document.querySelector('.popup__occupation');
const closedNewMesto = document.querySelector('.add-card');


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

const cardsContainer = document.querySelector('.elements');
const cardPopupContainer = document.querySelector('.page');
const cardTemplate = document.querySelector('#card-template').content;


for (let i = 0; i < initialCards.length; i++) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__caption').textContent = initialCards[i].name;
    cardElement.querySelector('.element__picture').src = initialCards[i].link;
    cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');        
    })
    cardElement.querySelector('.element__delete').addEventListener('click', function() {
        document.querySelector('.elements__element').remove();
    }) 
    cardElement.querySelector('.element__picture').addEventListener('click', function() {
        document.querySelector('.card-popup__picture').src = initialCards[i].link;
        document.querySelector('.card-popup__name').textContent = initialCards[i].name;
        document.querySelector('.card-popup').classList.add('card-popup_opened');
    })

    cardsContainer.append(cardElement);
}

document.querySelector('.element__picture').addEventListener('click', function() {
    console.log('Hello!');
})

/* OPEN CARD FORM */
document.querySelector('.profile__button-add').addEventListener('click', function() {
    closedNewMesto.classList.add('add-card_opened');
});

/* OPEN PROFILE FORM */
document.querySelector('.profile__button-edit').addEventListener('click', function() {
    closedPopup.classList.add('popup_opened');
    popupName.setAttribute('placeholder', `${profileName.textContent}`);
    popupOccupation.setAttribute('placeholder', `${profileOccupation.textContent}`);
});

/* CLOSE FORMS */
function popupClose() {   
    closedPopup.classList.remove('popup_opened');
    closedNewMesto.classList.remove('add-card_opened');
    document.querySelector('.card-popup').classList.remove('card-popup_opened');
    
}
/* CHANGE PROFILE */
document.querySelector('.popup__submit').addEventListener('click', function(evt) {
    evt.preventDefault();
    profileName.textContent = `${popupName.value}`;
    profileOccupation.textContent = `${popupOccupation.value}`;
    popupClose();
});

/* ADD NEW CARD */
function addCard(nameValue, linkValue) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.element__caption').textContent = nameValue;
    cardElement.querySelector('.element__picture').src = linkValue;
    cardElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-button_active');        
    })
    cardElement.querySelector('.element__delete').addEventListener('click', function() {
        document.querySelector('.elements__element').remove();
    })
    cardElement.querySelector('.element__picture').addEventListener('click', function() {
        document.querySelector('.elements__element').classList.add('.elements__element_popup');
        document.querySelector('.element__picture').classList.add('.element__picture_popup');
    })
    cardElement.querySelector('.element__picture').addEventListener('click', function() {
        document.querySelector('.card-popup__picture').src = linkValue;
        document.querySelector('.card-popup__name').textContent = nameValue;
        document.querySelector('.card-popup').classList.add('card-popup_opened');
    })
    cardsContainer.prepend(cardElement);
}

document.querySelector('.add-card__submit').addEventListener('click', function(evt) {
    evt.preventDefault();
    const mestoName = document.querySelector('.add-card__name');
    const mestoLink = document.querySelector('.add-card__link');
    addCard(mestoName.value, mestoLink.value);
    popupClose();
})



