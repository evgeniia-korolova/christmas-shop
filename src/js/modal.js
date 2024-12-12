import { GiftCardModal } from "./helpers.js";
import { gifts } from "./gifts.js";

export function handleModal(parentSelector) {

const overlay = document.querySelector('.modal__overlay');
const menu = document.querySelector(parentSelector);

overlay.addEventListener('click', closeCardHandler);

function toggleCardHandler() {
    document.body.classList.toggle('no-scroll');
    overlay.classList.toggle('modal__hidden');
}

function closeCardHandler(e) {
    if(e.target.classList.contains('modal__overlay') 
        || e.target.closest('.modal__close')) {
        toggleCardHandler();
    }
}

function openCardHandler(e) {
    const id = e.target.closest('li').dataset.id;   
   
    const gift = gifts.find((gift) => gift.id === id);
		if (!gift) {
			console.error(`Gift with id ${itemId} not found.`);
			return;
		}

    overlay.innerHTML = '';
    
    const giftCards = new GiftCardModal(
        gift.id,
        gift.img,
        gift.name,
        gift.category,
        gift.name,
        gift.description,
        gift.superpowers,
        '.modal__overlay'
    );

    giftCards.renderGiftCardModal();

    toggleCardHandler();  
    
}

menu.addEventListener('click', openCardHandler);
}