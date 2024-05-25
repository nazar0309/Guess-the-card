// Create a function that shuffles the array
export const shuffle = (array) => {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
//Create a function that duplicates the array
export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

// Create an array of images for cards
export const createImagesArray = (initialCount) => {
    const cardsImages = ['assets/images/cards_capitan-america.jpg', 'assets/images/cards_deadpool.jpg', 'assets/images/cards_hulk.jpg', 'assets/images/cards_iron-man.jpg', 'assets/images/cards_spider-man.jpg', 'assets/images/cards_thor.jpg', 'assets/images/cards_wolverine.jpg', 'assets/images/cards_doctor-strange.jpg'];

    switch (initialCount) {
        case 10:
            return cardsImages.slice(0, 5);
        case 12:
            return cardsImages.slice(0, 6);
        case 14:
            return cardsImages.slice(0, 7);
        case 16:
            return cardsImages;
        default:
            break;
    }
}

// Define game card creation function
export const createGameCard = (flippedImg) => {
    const card = document.createElement('div'); 
    card.classList.add('game-card');

    const notFlippedCard = document.createElement('img');
    const flippedCard = document.createElement('img');

    notFlippedCard.src = 'assets/images/card_back.jpg';
    flippedCard.src = flippedImg;
    
    card.append(flippedCard, notFlippedCard);
    return card;
}


export const createTimer = () => { 
    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.innerHTML = '00:00';

    let seconds = 0;

    const updateTimer = () => {
        seconds++;
        
        const formattedSeconds = String(seconds);
        timer.innerHTML = `${formattedSeconds}`;
    };

    setInterval(updateTimer, 1000);

    return timer;
}
