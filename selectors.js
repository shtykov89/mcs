const page = document.querySelector('.page');
let question = prompt('Какой будет фон у страницы?');
let text = prompt('Какой будет цвет текста на странице?')
const name = document.querySelector('.name');
let vopros = prompt('Как зовут человека, который вас вдохновляет?')
const image = document.querySelector('img');
let quest = prompt('Введите адрес картинки');
let bio = document.querySelector('.shortBio');
let biografia = prompt('Введите текст страницы');


page.style.backgroundColor = question;
page.style.color = text;
name.innerHTML = vopros;
image.setAttribute('src', quest);
bio.innerHTML = biografia;
bio.className += ' animated';