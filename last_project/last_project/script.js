document.addEventListener("DOMContentLoaded", function (event) {
    class Person {
        constructor(name) {
            this.name = name;
            this.happiness = 0;
        };
        hasCat() {
            this.happiness += 1;
        };
        hasRest() {
            this.happiness += 1;
        };
        hasMoney() {
            this.happiness += 1;
        };

        request(c) {
            const APIkey = '33fce447ae967f36e874546c50b7c80b';
            const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + c.trim() + ',ru&appid=' + APIkey;
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

        isSunny(city) {
            let weatherData = this.request(city);
            let temp = parseInt(weatherData.main.temp - 270, 10);
            if (temp > 15) {
                this.happiness += 1
            };
        };
    }
    const form = document.forms[0];
    const personName = document.querySelector('.personName');
    const icon = document.querySelector('.icon');

    form.onsubmit = (e) => {
        e.preventDefault();
        const values = document.forms["man"];

        const town = values.city.value;
        const name = values.name.value;
        const cat = values.cat.value;
        const rest = values.rest.value;
        const money = values.money.value;

        const man = new Person(name);
        man.isSunny(town);

        if (cat === 'yes') {
            man.hasCat();
        };
        if (rest === 'yes') {
            man.hasRest();
        };
        if (money === 'yes') {
            man.hasMoney();
        }

        console.log(man.happiness);
        if (man.happiness > 3) {
            icon.innerHTML = '😀';
        } else if (man.happiness > 1) {
            icon.innerHTML = '😐';
        } else {
            icon.innerHTML = '😕';
        };

        personName.innerHTML = man.name;
    };
});