let editButton = document.querySelector('.profile__edit-button');

let popupOn = document.querySelector('.popup');
let popupContainer = popupOn.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formInputName = document.querySelector('.popup__item_name');
let formInputJob = document.querySelector('.popup__item_job');
let formButton = document.querySelector('.popup__save-button');

function togglePopup(event) {
    popupOn.classList.toggle('popup_opened');
}

function fillForm(event) {
    formInputName.value = profileName.textContent;
    formInputJob.value = profileJob.textContent;
}

function formChange(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileJob.textContent = formInputJob.value;
    togglePopup();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
formButton.addEventListener('click', formChange);
editButton.addEventListener('click', fillForm);








