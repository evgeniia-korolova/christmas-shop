import  {gifts}  from "./gifts.js";

console.log('gifts', gifts);

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
                <h4 class="gift-${this.category.toLowerCase()}">${this.category}</h4>
                <h3 class="gift__text">${this.name}</h3>
            </div>
        `;
        this.parent.append(giftCard);        
    }
}

shuffledGifts.forEach((gift) => {
	
	const giftCard = new GiftCard(
		gift.img,
		gift.name,
		gift.category,
		gift.name,
		'.gift-cards__wrapper'
	);
	
	giftCard.renderGiftCard();
});


