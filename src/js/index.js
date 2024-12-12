import  handleSlider  from "./slider.js";
import toggleBurger from "./burger.js";
import setTimer from "./timer.js";
import { randomCards, initializeMenu } from "./gift-cards.js";
import { handleModal } from './modal.js';


handleSlider();
toggleBurger();
setTimer();
initializeMenu(randomCards, '.gifts__cards');
handleModal('.gifts__cards');
