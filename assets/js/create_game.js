import { shuffle } from './game_array.js';
import { duplicateArray } from './game_array.js';
import { createImagesArray } from './game_array.js';
import { createGameCard } from './game_array.js';
import { createGameMenu } from './script.js';
import { showResults } from './results.js';
import { createTimer } from './game_array.js';



// Define the startGame function
export const startGame = (difficult) => {
    // Initialize variables to track the first and second selected cards, and a flag to control if cards are clickable
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    // Select the game section container and create a new game table element
    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');

    // Generate an array of images based on the difficulty level, duplicate and shuffle them
    const cardsImages = createImagesArray(difficult);
    const duplicatedCardsImages = duplicateArray(cardsImages);
    shuffle(duplicatedCardsImages);

    // Create the buttons div, restart button, and timer elements
    const buttonsdiv = document.createElement('div');
    const restartBtn = document.createElement('button');
    const timer = createTimer();
    
    // Initialize the timer and set the initial HTML for the game section
    timer.innerHTML = '0 seconds';
    gameSection.innerHTML = '';
    restartBtn.textContent = 'Restart game';
    gameTable.classList.add('game-table');
    restartBtn.classList.add('restart-btn');
    buttonsdiv.classList.add('buttons-div');
    buttonsdiv.append(timer, restartBtn);

    // Append the shuffled card images to the game table
    duplicatedCardsImages.forEach(image => gameTable.append(createGameCard(image)));

    // Add the game table and buttons div to the game section
    gameSection.append(gameTable, buttonsdiv);

    // Select all game cards
    const cards = document.querySelectorAll('.game-card');
    let confettiInterval;

    // Add an event listener to the restart button to reset the game
    restartBtn.addEventListener('click', () => {
        createGameMenu();
        clearInterval(confettiInterval);
    });

    // Add an event listener to each card for the click event
    cards.forEach((card, index) => card.addEventListener('click', () => {
        // Check if cards are clickable and the clicked card is not already matched
        if (clickable && !card.classList.contains('successfully')) {
            // Flip the card to reveal its image
            card.classList.add('flip');

            // If no card is selected, set the first card to the current index
            if (firstCard === null) {
                firstCard = index;
            } else {
                // If a card is already selected, set the second card to the current index and make cards not clickable
                if (index !== firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            // If both cards are selected and they are not the same card
            if (firstCard !== null && secondCard !== null && firstCard !== secondCard) {
                // Check if the images of both cards match
                if (cards[firstCard].firstElementChild.src === cards[secondCard].firstElementChild.src) {
                    // If they match, mark both cards as successfully matched after a short delay
                    setTimeout(() => {
                        cards[firstCard].classList.add('successfully');
                        cards[secondCard].classList.add('successfully');

                        // Reset selected cards and make cards clickable again
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                } else {
                    // If they do not match, flip both cards back after a short delay
                    setTimeout(() => {
                        cards[firstCard].classList.remove('flip');
                        cards[secondCard].classList.remove('flip');

                        // Reset selected cards and make cards clickable again
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }

            // If all cards are flipped, show the results and start the confetti animation
            if (Array.from(cards).every(card => card.className.includes('flip'))) {
                confettiInterval = showResults(difficult, timer.innerHTML);
            }
        }
    }));
};


