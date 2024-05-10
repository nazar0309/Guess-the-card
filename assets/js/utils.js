 export const shuffle = (array) => {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }




export const dublicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);




export const createIconsArray = (initialCount) => {
    const cardsIcons = ['assets/images/cards_capitan-america.jpg', 'assets/images/cards_deadpool.jpg', 'assets/images/cards_hulk.jpg', 'assets/images/cards_iron-man.jpg', 'assets/images/cards_spider-man.jpg', 'assets/images/cards_thor.jpg', 'assets/images/cards_wolverine.jpg', 'assets/images/cards_doctor-strange.jpg'];
    
    switch(initialCount) {
        case 10:
            return cardsIcons.slice(0, 5);
        case 12:
            return cardsIcons.slice(0, 6);
        case 14:
            return cardsIcons.slice(0, 7);
        case 16:
            return cardsIcons;
        default:
           break;
    }
}


