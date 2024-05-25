import {shuffle} from './game_array.js';
import {duplicateArray} from './game_array.js';
import {createImagesArray} from './game_array.js';
import {createGameCard} from './game_array.js';
import {createGameMenu} from './script.js';
import {showResults} from './results.js';
import {createTimer} from './game_array.js';







// Define the startGame function
export const startGame = (difficult, time) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');
    const cardsImages = createImagesArray(difficult);
    const duplicatedCardsImages = duplicateArray(cardsImages);
    const restartBtn = document.createElement('button');
    const timer = createTimer();

    timer.innerHTML = '00:00';
    gameSection.innerHTML = '';
    restartBtn.textContent = 'Restart game';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');

    shuffle(duplicatedCardsImages);

    duplicatedCardsImages.forEach(image => gameTable.append(createGameCard(image)));

    gameSection.append(gameTable, restartBtn, timer);

    const cards = document.querySelectorAll('.game-card');

    restartBtn.addEventListener('click', createGameMenu);


    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable && !card.classList.contains('successfully')) {
            card.classList.add('flip');

            if (firstCard === null) {
                firstCard = index;
            } else {
                if (index !== firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            if (firstCard !== null && secondCard !== null && firstCard !== secondCard) {
                if (
                    cards[firstCard].firstElementChild.src ===
                    cards[secondCard].firstElementChild.src
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully');
                        cards[secondCard].classList.add('successfully');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                } else {
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip');
                        cards[secondCard].classList.remove('flip');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }

            if (Array.from(cards).every(card => card.className.includes('flip'))) {
                
                showResults(difficult, timer.innerHTML);
            }
        }
    }));
} 


