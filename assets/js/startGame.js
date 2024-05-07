import { createIconsArray } from "./utils.js";
import { dublicateArray } from "./utils.js";
import { shuffle } from "./utils.js";
export const startGame = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;
    const gameSection = document.querySelector('.game-section_container');
    const gameTable = document.createElement('div');
    const cardsIcons = createIconsArray(difficult);
    const dublicateCardsIcons = dublicateArray(cardsIcons);
    shuffle(dublicateCardsIcons);
    console.log(dublicateCardsIcons);
}