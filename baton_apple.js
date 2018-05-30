let money = prompt('сколько у вас денег?');
let numberApples = prompt('сколько вы купили яблок?');
let numberBread = prompt('сколько вы купили батонов?');
let priceApple = prompt('сколько стоит одно яблоко?');
let priceBread = prompt('сколько стоит один батон?');
money - ((numberApples * priceApple) + (numberBread * priceBread));
if (money - ((numberApples * priceApple) + (numberBread * priceBread)) >= 0) {
    document.write('true');
} else { document.write('false'); };