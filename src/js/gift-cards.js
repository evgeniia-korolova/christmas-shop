import  {gifts}  from "./gifts.js";
import { shuffleArray, GiftCard } from "./helpers.js";

const TABS = document.querySelector('.tabs');

const shuffledGifts = shuffleArray(gifts);



export function initializeMenu() {
    shuffledGifts.forEach((gift) => {
			const giftCard = new GiftCard(
                gift.id,
				gift.img,
				gift.name,
				gift.category,
				gift.name,
				'.gift-cards__wrapper'
			);

			giftCard.renderGiftCard();
            TABS.children[0].classList.add('tab__active');
		});

}

// initializeMenu()

function getGiftsByCategory(category) {
    const filteredGifts = shuffledGifts.filter(gift => gift.category === category);
    return filteredGifts;
}

function tabsHandler(e) {
    const target = e.target;
    const category = target.textContent;  
    const DEFAULT_CATEGORY = 'All';  
    document.querySelector('.gift-cards__wrapper').innerHTML = '';
    const activeTab = TABS.querySelector('.tab__active');
    activeTab.classList.remove('tab__active');
    target.classList.add('tab__active');
    if (category === DEFAULT_CATEGORY) {
        initializeMenu();
    } else {
        const filteredGifts = getGiftsByCategory(category);
        
        filteredGifts.forEach((gift) => {
            const giftCard = new GiftCard(
                gift.id,
                gift.img,
                gift.name,
                gift.category,
                gift.name,
                '.gift-cards__wrapper'
            );

            giftCard.renderGiftCard();
        });
    }
}

TABS.addEventListener('click', tabsHandler);




