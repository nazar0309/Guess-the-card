import { startGame } from "./create_game.js";


// Define the createGameMenu function
export const createGameMenu = () => {
    const title = document.createElement('h2');
    const gameSection = document.querySelector('.game-section__container');
    gameSection.innerHTML = '';
    title.textContent = 'Choose your difficulty';
    title.classList.add('game-menu_title');
    document.querySelector('.confetti').innerHTML = '';
    
    // Create buttons for different difficulty levels
    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');
        button.classList.add('game-menu_button');
        button.textContent = `${difficult} cards`;
        button.addEventListener('click', () => startGame(difficult));
        return button;
    };
    
    // Append title and buttons to gameSection
    gameSection.appendChild(title);
    gameSection.appendChild(createDifficultButton(10));
    gameSection.appendChild(createDifficultButton(12));
    gameSection.appendChild(createDifficultButton(14));
    gameSection.appendChild(createDifficultButton(16));
};


// Run the game menu creation function initially
createGameMenu();