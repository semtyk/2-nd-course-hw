"use strict";
let userAnswer, userAnswer2, currentDate;


alert('Сейчас начнут выполняться задания');


/*---Функция ввода и проверки числа из заданного диапазона---*/
const isNotValid = (value, maxValue, minValue) => isNaN(value) || value < minValue || value > maxValue;


const inputNumbers = (minDiap, maxDiap) => {
    let userNumber = Number(prompt(`Введите число от ${minDiap} до ${maxDiap}`));
    if (isNotValid(userNumber, maxDiap, minDiap)) {
        do {
            alert('Вы ввели некорректное значение, попробуйте еще раз');
            userNumber = Number(prompt(`Введите число от ${minDiap} до ${maxDiap}`));
        } while (isNotValid(userNumber, maxDiap, minDiap));
    }
    return userNumber;
}

/*---Блок функций для выполнения первой игры---*/


//Вспомогательные функции
const findSeason = (a) => {
    if (a === 1 || a === 2 || a === 12) {
        return 'Зима';
    } else if (a >= 3 && a <= 5) {
        return 'Весна';
    } else if (a >= 6 && a <= 8) {
        return 'Лето';
    } else {
        return 'Осень';
    }
}

//Вызываемая функция для запуска игры
const playFirstGame = () => {
    alert('Давайте сыграем в первую игру!');
    let monthNumber = inputNumbers(1, 12);
    alert(findSeason(monthNumber));
}


/*---проверка---*/
// for (let i=1; i<=12; i++) {
//     console.log(findSeason(i));
// }

/*---Блок функций для выполнения второй игры---*/

const toPlaySecondGame = (array) => {
    array = array.sort(() => Math.random() - 0.5);
    alert(`Запомните пожалуйста эти слова: \n${array.join(' ')}`);
    let userFirstWorld = String(prompt('Введите первое слово'));
    let userLastWorld = String(prompt('Введите последнее слово'));
    if (userFirstWorld.toLowerCase() === array[0].toLowerCase() && userLastWorld.toLowerCase() === array[array.length - 1].toLowerCase()) {
        alert('Поздравляем!!! Вы угадали.');
    } else if (userFirstWorld.toLowerCase() === array[0].toLowerCase() || userLastWorld.toLowerCase() === array[array.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы не угадали');
    }

}

//Вызываемая функция для запуска второй игры

const playSecondGame = () => {
    alert('Сейчас мы будем играть в загадки');
    userArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    toPlaySecondGame(userArray);
}


/*Практика*/ 

/*Таймер*/ 

const timer = (deadline) => {
    

    if (isNaN(+deadline) || deadline<0) {
        do {
            alert('Вы ввели некорректное значение, попробуйте еще раз');
            deadline = prompt(`Введите число секунд, на сколько вы хотите поставить таймер?`);
        } while (isNaN(+deadline) || deadline < 0);
    }

    let time = deadline;
    console.log(time);
    const interval = setInterval(() => {
        console.log(--time);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Время истекло');
    }, deadline*1000);
}

// const deadline = prompt(`Введите число секунд, на сколько вы хотите поставить таймер?`);
// timer(deadline);


