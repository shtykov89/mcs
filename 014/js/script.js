console.log('you are at ' + window.location);

const coins = document.querySelectorAll('.coin');
const prises = document.querySelectorAll('.price');
const box = document.querySelectorAll('.block');

let crypto = [
  {
    name: 'Bitcoin',
    price: 1388.37,
    color: '#D0021C'
  },
  {
    name: 'Ethereum',
    price: 716,
    color: '#4990E2'
  },
  {
    name: 'Litecoin',
    price: 140,
    color: '#4FE3C1'
  }
]

const MAX_WIDTH = 1500;

crypto.forEach(function (element, index) {
  const width = element.price / (MAX_WIDTH / 100);
  coins[index].innerHTML = element.name;
  prises[index].innerHTML = element.price;
  box[index].style.width = width + '%';
  box[index].style.backgroundColor = element.color;
});