const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

let popupEdit = document.querySelector('.popup__edit');
let popupAdd = document.querySelector('.popup__add');
let popupContainer = document.querySelectorAll('.popup__container');
let closeButtonEdit = document.querySelector('.popup__close-button-edit');
let closeButtonAdd = document.querySelector('.popup__close-button-add');
let closeButtonImage = document.querySelector('.popup__close-button-image');

let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

const formInputPlace = document.querySelector('.popup__item_place');
const formInputLink = document.querySelector('.popup__item_link');

let formInputName = document.querySelector('.popup__item_name');
let formInputJob = document.querySelector('.popup__item_job');
let formSaveButton = document.querySelector('.popup__save-button');

let imagePopup = document.querySelector('.popup__image');
let captionPopup = document.querySelector('.popup__caption');
let popupWithImage = document.querySelector('.popup__with-image');


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

const listContainerElement = document.querySelector('.element__list');
const templateElement = document.querySelector('.template');

function renderList() {
    const listItems = initialCards.map(composeItems);
    listContainerElement.append(...listItems);
}

renderList();

function composeItems(item) {
    const newItem = templateElement.content.cloneNode(true);
    const newItemImage = newItem.querySelector('.element__image');
    newItemImage.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        //по аналогии с заполнением форм
        //src делаем пустым, потом заполняем через присвоение значения
        imagePopup.setAttribute("src", eventTarget.getAttribute("src"));
        imagePopup.setAttribute("alt", item.name)
        //подпись под фоткой заполняем через item.name text content)
        captionPopup.textContent = item.name;
        console.log(captionPopup)
        togglePopupForm();
    })
    newItemImage.src = item.link;
    const newItemDeleteButton = newItem.querySelector('.element__delete-button');
    newItemDeleteButton.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.parentNode.remove();
    })
    const newItemParagraph = newItem.querySelector('.element__paragraph');
    newItemParagraph.textContent = item.name;
    const newItemLikeButton = newItem.querySelector('.element__like-button');
    newItemLikeButton.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('element__like-button_active');
    })
    return newItem;

}

function toggleEditForm(evt) {
    popupEdit.classList.toggle('popup_opened');
}

function toggleAddForm(evt) {
    popupAdd.classList.toggle('popup_opened');
}

function togglePopupForm(evt) {
    popupWithImage.classList.toggle('popup_opened');
}

function fillEditForm() {
    formInputName.value = profileName.textContent;
    formInputJob.value = profileJob.textContent;
}

function formEditChange(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileJob.textContent = formInputJob.value;
    toggleEditForm();
}

function addNewItem(evt) {
    evt.preventDefault();
    const newItemFromAdd = composeItems({name:formInputPlace.value, link:formInputLink.value});
    listContainerElement.prepend(newItemFromAdd);
    toggleAddForm();
}

editButton.addEventListener('click', toggleEditForm);
closeButtonEdit.addEventListener('click', toggleEditForm);
editButton.addEventListener('click', fillEditForm);
popupEdit.addEventListener('submit', formEditChange);


addButton.addEventListener('click', toggleAddForm);
closeButtonAdd.addEventListener('click', toggleAddForm);
popupAdd.addEventListener('submit', addNewItem);

closeButtonImage.addEventListener('click', togglePopupForm);


	





