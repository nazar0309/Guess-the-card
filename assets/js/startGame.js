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
    const restartBtn = document.createElement('button');
    gameSection.innerHTML = '';
    restartBtn.textContent = 'Restart';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    shuffle(dublicateCardsIcons);
    dublicateCardsIcons.forEach((icon) => gameTable.appendChild(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');
  

       
}