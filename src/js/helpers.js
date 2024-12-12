export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export class GiftCard {
	constructor(id, src, alt, category, name, parentSelector) {
		this.id = id;
		this.src = src;
		this.alt = alt;
		this.category = category;
		this.name = name;
		this.parent = document.querySelector(parentSelector);
	}

	renderGiftCard() {
		const giftCard = document.createElement('li');
		giftCard.classList.add('gift__card');
		giftCard.setAttribute('data-id', this.id);
		giftCard.innerHTML = `
            <div class="gift__img">
                <img src="${this.src}" alt="${this.name}" />
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
		id,
		src,
		alt,
		category,
		name,
		description,
		superpowers,
		parentSelector
	) {
		super(id, src, alt, category, name, parentSelector);
		this.description = description; // Добавляем описание
		this.superpowers = superpowers; // Добавляем суперспособности
	}

	renderGiftCardModal() {
		const giftCardModal = document.createElement('div');
		giftCardModal.classList.add('modal');
		giftCardModal.innerHTML = `
			<div class="gift__card modal">
				<span class="modal__close">
                        <img src="./src/images/modal-close.svg" alt="close">
                </span>
				<div class="gift__img">
					<img class="gift__img--img" src="${this.src}" alt="${this.alt}" />
				</div>
				<div class="gift__content--container">
					<div class="gift__content">
						<h4 class="gift-${this.category.toLowerCase().replace(/ /g, '-')}">${
			this.category
		}
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
			.map(([title, value]) => {
				const snowflakes = this.generateSnowflakes(
					parseInt(value.replace('+', ''))
				); // Убираем "+" и преобразуем в число
				return `
				<div class="superpowers__item">
					<div class="superpowers__item--title">${title}</div>
					<div class="superpowers__rating">
						<span>${value}</span>
						<div class="rating__snowflakes">
							${snowflakes}
						</div>
					</div>
				</div>
			`;
			})
			.join('');
	}

	generateSnowflakes(value) {
		const fullSnowflakes = Math.floor(value / 100); // Полные снежинки
		const totalSnowflakes = 5; // Общее количество снежинок
		const snowflakesArray = [];

		for (let i = 0; i < totalSnowflakes; i++) {
			// Полные снежинки (opacity: 1)
			if (i < fullSnowflakes) {
				snowflakesArray.push(`
				<svg  width="14" height="16" ">
					<use href="./src/images/icons-sprite/icons-sprite.svg#rating-snowflake"></use>
				</svg>
			`);
			}
			// Полупрозрачные снежинки (opacity: 0.3)
			else {
				snowflakesArray.push(`
				<svg class="icon-rating" width="14" height="16" >
					<use href="./src/images/icons-sprite/icons-sprite.svg#rating-snowflake"></use>
				</svg>
			`);
			}
		}

		return snowflakesArray.join('');
	}
}




