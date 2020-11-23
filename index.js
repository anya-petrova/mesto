let editButton = document.querySelector('.profile__edit_button');

let popupOn = document.querySelector('.popup');
let popupContainer = popupOn.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-button');

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function togglePopup(event) {
    popupOn.classList.toggle('popup_opened');
}

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formInputName = document.querySelector('.popup__item-name');
let formInputJob = document.querySelector('.popup__item-job');
let formButton = document.querySelector('.popup__save-button');

formButton.addEventListener('click', formChange);

editButton.addEventListener('click', fillForm);

function fillForm(event) {
    formInputName.value = profileName.textContent;
    formInputJob.value = profileJob.textContent;
}

function formChange(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileJob.textContent = formInputJob.value;
}








