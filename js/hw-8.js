"use strict";
let userAnswer, userAnswer2, currentDate, userArray;


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


    if (isNaN(+deadline) || deadline < 0) {
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
    }, deadline * 1000);
}

// const deadline = prompt(`Введите число секунд, на сколько вы хотите поставить таймер?`);
// timer(deadline);

/*---Задание 1---*/
console.log('---Задание 1---');
userArray = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(`Исходный массив:`);
userArray.forEach(element => {
    console.log(`Имя: ${element.name}, лет: ${element.age}`);
});
userArray.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    } else return 0;
});
console.log(`Отсортированный массив:`);
userArray.forEach(element => {
    console.log(`Имя: ${element.name}, лет: ${element.age}`);
});

/*---Задание 2---*/
console.log('---Задание 2---');

function isPositive(item) {
    return (item>0);
}
function isMale(item) {
    return (item.gender === 'male')
}
function filter(array, ruleFunction) {
    let newArray = [];
    for (let item of array) {
        if (ruleFunction(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

/*---Задание 3---*/
console.log('---Задание 3---');

const setTimer = (deadline, ticktime, data) => {

    
    if (isNaN(+deadline) || deadline < 0) {
        do {
            alert('Вы ввели некорректное значение, попробуйте еще раз');
            deadline = prompt(`Введите число секунд, на сколько вы хотите поставить таймер?`);
        } while (isNaN(+deadline) || deadline < 0);
    }

    const interval = setInterval(() => { 
        data = new Date();      
        console.log(data);
    }, ticktime*1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log(`${deadline} секунд прошло`);
    }, deadline * 1000);
} 
currentDate = new Date();
// setTimer(30, 3, currentDate);

/*---Задание 4---*/
// console.log('---Задание 4---');

// function delayForSecond(callback) {
//     let timerId = setTimeout(() => {
//         callback();
//     }, 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

/*---Задание 5---*/
console.log('---Задание 5---');

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb();}

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
// delayForSecond(sayHi('Глеб'))

//Меняем: 

function delayForSecond(cb,name) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(name); }

    }, 1000)
}
 delayForSecond(sayHi, 'Глеб');

 // или так если по формальному подходить
// delayForSecond();
// setTimeout(() => {
//     sayHi('Глеб')
// }, 1000)

//Можно еще так

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         cb('Глеб');
//     }, 1000)
// }
//  delayForSecond(sayHi);