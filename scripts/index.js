const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const closeButtonEdit = document.querySelector('.popup__close-button-edit');
const closeButtonAdd = document.querySelector('.popup__close-button-add');
const closeButtonImage = document.querySelector('.popup__close-button-image');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const formInputPlace = document.querySelector('.popup__item_place');
const formInputLink = document.querySelector('.popup__item_link');

const formInputName = document.querySelector('.popup__item_name');
const formInputJob = document.querySelector('.popup__item_job');
const formSaveButton = document.querySelector('.popup__save-button');

const imagePopup = document.querySelector('.popup__image');
const captionPopup = document.querySelector('.popup__caption');
const popupImage = document.querySelector('.popup_type_image');

const listContainerElement = document.querySelector('.element__list');
const templateElement = document.querySelector('.template');

const editForm = document.querySelector('.class-add-form');

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
        imagePopup.setAttribute("src", eventTarget.getAttribute("src"));
        imagePopup.setAttribute("alt", item.name)
        captionPopup.textContent = item.name;
        openPopup(popupImage);
    })
    newItemImage.src = item.link;
    const newItemDeleteButton = newItem.querySelector('.element__delete-button');
    newItemDeleteButton.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        eventTarget.closest(".element__item").remove();
    })
    const newItemParagraph = newItem.querySelector('.element__paragraph');
    newItemParagraph.textContent = item.name;
    const newItemLikeButton = newItem.querySelector('.element__like-button');
    newItemLikeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');
    })
    return newItem;

}

function fillEditForm() {
    formInputName.value = profileName.textContent;
    formInputJob.value = profileJob.textContent;
}

function handleProfileSubmit(event) {
    event.preventDefault();
    profileName.textContent = formInputName.value;
    profileJob.textContent = formInputJob.value;
    closePopup(popupEdit);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const newItemFromAdd = composeItems({name:formInputPlace.value, link:formInputLink.value});
    listContainerElement.prepend(newItemFromAdd);
    closePopup(popupAdd); 
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

function resetForm(editForm) {
    editForm.reset();
}

editButton.addEventListener('click', function() {
    openPopup(popupEdit); 
    fillEditForm(popupEdit);
});

addButton.addEventListener('click', function () {
    resetForm(editForm);
    openPopup(popupAdd); 
});

closeButtonEdit.addEventListener('click', function () {
    closePopup(popupEdit); 
});

closeButtonAdd.addEventListener('click', function () {
    closePopup(popupAdd); 
});

closeButtonImage.addEventListener('click', function () {
    closePopup(popupImage); 
});

popupEdit.addEventListener('submit', handleProfileSubmit);
popupAdd.addEventListener('submit', handleCardFormSubmit);