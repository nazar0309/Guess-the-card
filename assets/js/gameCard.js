






export const createGameCard = (defaultIcon, flippedIcon) => {
    const card = document.createElement('div'); 
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const FlippedCardI = document.createElement('i');

    notFlippedCardI.classList.add('fas', `fa-${flippedIcon}`);
    FlippedCardI.classList.add('fas', `fa-${defaultIcon}`);
    card.append(FlippedCardI, notFlippedCardI);
    return card;

}
