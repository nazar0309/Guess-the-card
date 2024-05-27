import { createGameMenu } from './script.js';

export const showResults = (difficulty, elapsedSeconds) => {
    // Trigger the confetti animation
    const confettiInterval = setInterval(() => {
        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        confetti({
            angle: randomInRange(55, 125),
            spread: randomInRange(50, 70),
            particleCount: randomInRange(50, 100),
            origin: { y: 0.6 }
        });
    }, 1000 / 3);

    const gameSection = document.querySelector('.game-section__container');
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart game';
    restartButton.classList.add('restart-btn2');
    restartButton.addEventListener('click', () => {
        createGameMenu();
        clearInterval(confettiInterval);
    });

    gameSection.innerHTML = ''; // Clear the content of .game-section__container

    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results');
    resultsDiv.innerHTML = `
        <h2 class="results__title">Congratulations!</h2>
        <p class="results__text">You have completed the game with ${difficulty} cards.</p>
        <p class="results__text">Your time was: ${elapsedSeconds}</p>
    `;

    resultsDiv.appendChild(restartButton);
    gameSection.appendChild(resultsDiv); // Append resultsDiv to gameSection

    return confettiInterval;
}

