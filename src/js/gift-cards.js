import  {gifts}  from "./gifts.js";


const DEFAULT_CATEGORY = 'all';
const TABS = document.querySelector('.tabs');


function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); 
		[array[i], array[j]] = [array[j], array[i]]; 
	}
	return array;
}

const shuffledGifts = shuffleArray(gifts);

class GiftCard {
    constructor(src, alt, category, name, parentSelector) {
        this.src = src;          
        this.alt = alt;          
        this.category = category;
        this.name = name;
        this.parent = document.querySelector(parentSelector);
    }

    renderGiftCard() {
        const giftCard = document.createElement('div');
        giftCard.classList.add('gift__card');
        giftCard.innerHTML = `
            <div class="gift__img">
                <img src="${this.src}" alt="${this.alt}" />
            </div>
            <div class="gift__content">
                <h4 class="gift-${this.category
									.toLowerCase()
									.replace(/ /g, '-')}">${this.category}</h4>
                <h3 class="gift__text">${this.name}</h3>
            </div>
        `;
        this.parent.append(giftCard);        
    }
}

function initializeMenu() {
    shuffledGifts.forEach((gift) => {
			const giftCard = new GiftCard(
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

initializeMenu()

function getGiftsByCategory(category) {
    const filteredGifts = shuffledGifts.filter(gift => gift.category === category);
    return filteredGifts;
}

function tabsHandler(e) {
    const target = e.target;
    const category = target.textContent;
    console.log('category', category);
    document.querySelector('.gift-cards__wrapper').innerHTML = '';
    const activeTab = TABS.querySelector('.tab__active');
    activeTab.classList.remove('tab__active');
    target.classList.add('tab__active');
    if (category === DEFAULT_CATEGORY) {
        initializeMenu();
    } else {
        const filteredGifts = getGiftsByCategory(category);
        console.log(filteredGifts)
        filteredGifts.forEach((gift) => {
            const giftCard = new GiftCard(
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




