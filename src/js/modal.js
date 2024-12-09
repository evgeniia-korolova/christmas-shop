import { GiftCardModal } from "./helpers.js";
import { gifts } from "./gifts.js";

export function openModal() {
    const giftCards = new GiftCardModal(
        gifts[1].img,
        gifts[1].name,
        gifts[1].category,
        gifts[1].name,
        gifts[1].description,
        gifts[1].superpowers,
        '.modal__overlay'
    );

    giftCards.renderGiftCardModal();
}



