import { createIconsArray } from "./utils.js";
import { dublicateArray } from "./utils.js";
import { shuffle } from "./utils.js";
import { createGameCard } from "./gameCard.js";


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
    restartBtn.addEventListener('click', () => startGame(difficult));
    shuffle(dublicateCardsIcons);
    dublicateCardsIcons.forEach((icon) => gameTable.appendChild(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');

    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('successfully')) 
            card.classList.add('flip');

        }));
}