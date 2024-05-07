export const createGameCard = (defaultIcon, flippedIcon) => {
    const card = document.createElement('div'); 
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const FlippedCardI = document.createElement('i');
    card.append(FlippedCardI, notFlippedCardI);
    return card;

}
