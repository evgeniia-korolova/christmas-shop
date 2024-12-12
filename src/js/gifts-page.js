import { initializeMenu, shuffledGifts, initializeTabs, handleCategories } from "./gift-cards.js";
import { handleModal } from "./modal.js";
import toggleBurger from './burger.js';
import { handleButtonUp } from "./button-up.js";

initializeMenu(shuffledGifts, '.gift-cards__wrapper');
initializeTabs();
handleModal('.gift-cards__wrapper');
toggleBurger();
handleButtonUp();
handleCategories();