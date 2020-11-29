let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let closeButton = popupContainer.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let formInputName = document.querySelector('.popup__item_name');
let formInputJob = document.querySelector('.popup__item_job');
let formSaveButton = document.querySelector('.popup__save-button');

function togglePopup(event) {
    popup.classList.toggle('popup_opened');
}

function fillForm() {
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
popup.addEventListener('submit', formChange);
editButton.addEventListener('click', fillForm);








