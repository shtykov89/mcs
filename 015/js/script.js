console.log('you are at ' + window.location);
const APIkey = '33fce447ae967f36e874546c50b7c80b';
let city = 'Москва';

const temp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const form = document.forms[0];

function request(city) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.trim() + ',ru&appid=' + APIkey;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    let data = {};
    if (xhr.status != 200) {
        console.log(xhr.status + ' ' + xhr.statusText);
    } else {
        data = JSON.parse(xhr.responseText);
    };
    return data;
};

form.onsubmit = (e) => {
    e.preventDefault();
    city = document.querySelector('[name=location]').value;
    const data = request(city);
    temp.innerHTML = ' ' + parseInt(data.main.temp - 270, 10);
    wind.innerHTML = ' ' + data.wind.speed + 'м/с';
};






