console.log('you are at '+window.location);

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log( byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');

console.log(firstBySelector);

const quest = prompt('что хотите написать ?');

byId.innerHTML = quest;
firstBySelector.innerHTML = '<h2>Hello! I am first </h2>';

