






export const createGameCard = (flippedIcon) => {
    const card = document.createElement('div'); 
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('img');
    const FlippedCardI = document.createElement('img');

    notFlippedCardI.src = 'assets/images/card_back.jpg';
    FlippedCardI.src = flippedIcon;
    
    card.append(FlippedCardI, notFlippedCardI);
    return card;

}
