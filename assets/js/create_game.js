import { shuffle } from './game_array.js';
import { duplicateArray } from './game_array.js';
import { createImagesArray } from './game_array.js';
import { createGameCard } from './game_array.js';
import { createGameMenu } from './script.js';
import { showResults } from './results.js';
import { createTimer } from './game_array.js';



// Define the startGame function
export const startGame = (difficult) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');
    const cardsImages = createImagesArray(difficult);
    const duplicatedCardsImages = duplicateArray(cardsImages);
    const buttonsdiv = document.createElement('div');
    const restartBtn = document.createElement('button');
    const timer = createTimer();

    timer.innerHTML = '0 seconds';
    gameSection.innerHTML = '';
    restartBtn.textContent = 'Restart game';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    buttonsdiv.classList.add('buttons-div');
    buttonsdiv.append(timer, restartBtn);

    shuffle(duplicatedCardsImages);

    duplicatedCardsImages.forEach(image => gameTable.append(createGameCard(image)));

    gameSection.append(gameTable, buttonsdiv);

    const cards = document.querySelectorAll('.game-card');

    let confettiInterval;

    restartBtn.addEventListener('click', () => {
        createGameMenu();
        clearInterval(confettiInterval);
    });

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
                confettiInterval = showResults(difficult, timer.innerHTML);
            }
        }
    }));
}


