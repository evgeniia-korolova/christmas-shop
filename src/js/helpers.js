export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export class GiftCard {
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
			<div class="gift__content--container">
				<div class="gift__content">
					<h4 class="gift-${this.category.toLowerCase().replace(/ /g, '-')}">${this.category}</h4>
					<h3 class="gift__text">${this.name}</h3>
				</div>
            </div>
        `;
		this.parent.append(giftCard);
	}
}

export class GiftCardModal extends GiftCard {
	constructor(
		src,
		alt,		
		category,
		name,
		description,
		superpowers,
		parentSelector
	) {
		super(src, alt, category, name, parentSelector);
		this.description = description; // Добавляем описание
		this.superpowers = superpowers; // Добавляем суперспособности
	}

	renderGiftCardModal() {
		const giftCardModal = document.createElement('div');
		giftCardModal.classList.add('modal');
		giftCardModal.innerHTML = `
			<div class="gift__card modal">
					<div class="gift__img">
						<img class="gift__img--img" src="${this.src}" alt="${this.alt}" />
					</div>
					<div class="gift__content--container">
						<div class="gift__content">
							<h4 class="gift-${this.category.toLowerCase().replace(/ /g, '-')}">${this.category}
							</h4>
							<h3 class="gift__text">${this.name}</h3>
							<p class="gift__description">
								${this.description}
							</p>
						</div>
						<div class="gift__superpowers superpowers">
							<h4 class="superpowers__text">Adds superpowers to:</h4>
							<div class="superpowers__container">						
								${this.renderSuperpowers()}	
							</div>
						</div>
					</div>
				</div>
		`;

		this.parent.append(giftCardModal);
	}

	renderSuperpowers() {
		return Object.entries(this.superpowers)
			.map(
				([title, value]) => `
				<div class="superpowers__item">
					<div class="superpowers__item--title">${title}</div>
					<div class="superpowers__rating">
						<span>${value}</span>
						<div class="rating__snowflakes">
							<svg class="icon-rating" width="14" height="16">
								<use href="./src/images/icons-sprite/icons-sprite.svg#rating-snowflake"></use>
							</svg>
						</div>
					</div>
				</div>
			`
			)
			.join(''); // Объединяем массив строк в одну строку
	}
}

