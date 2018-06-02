function haveEnough(money, numberApples, numberBread, priceApple, priceBread){
    if (money - ((numberApples * priceApple) + (numberBread * priceBread)) >= 0) {
        return('Вам хватает денег на покупки');
    } else { return ('Вам не хватает денег')};
}
    const money = prompt('сколько у вас денег?');
    const numberApples = prompt('сколько вы купили яблок?');
    const numberBread = prompt('сколько вы купили батонов?');
    const priceApple = prompt('сколько стоит одно яблоко?');
    const priceBread = prompt('сколько стоит один батон?');

    haveEnough(money, numberApples, numberBread, priceApple, priceBread);