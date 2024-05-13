

export const showResults = (difficult) => {
    const gameSection = document.querySelector('.game-section__container');
    gameSection.innerHTML = ''; // Clearing the content of .game-section__container
    const resultsDiv = document.createElement('div');
    resultsDiv.classList.add('results');
    resultsDiv.innerHTML = `
        <h2 class="results__title">Congratulations!</h2>
        <p class="results__text">You have completed the game with ${difficult} cards.</p>
        <button class="results__button">Play again</button>
    `;
    gameSection.appendChild(resultsDiv); // Appending resultsDiv to gameSection
}