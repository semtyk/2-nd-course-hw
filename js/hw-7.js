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


/*---Задание 1---*/

console.log('Задание 1');
let userStr = 'js';
console.log(`Исходная строка: \n${userStr}`);
console.log(`Результат: \n${userStr.toUpperCase()}`);

/*---Задание 2---*/

//---Функция поиска строки в массиве, которая начинается с ключевого слова (строки)
const searchStrStartKeyWord = (array, key) => {
    key = key.toLowerCase();
    array = array.filter(item => item.toLowerCase().startsWith(`${key}`));
    array = array.map(item => item.toLowerCase());    //Если надо возвращать в нижнем регистре, если в исходном, то функцию убираем
    return array;
}

//---Выполнение задания
console.log('Задание 2');
userStr = String(prompt('Введите массив строк, разделяя их запятой и пробелом после нее'));
let userArray = userStr.split(', ');

console.log(`Исходный массив: \n[${userArray}]`);
let keyWord = prompt('Введите ключевую строку для поиска');
console.log(`Ключевое слово для поиска: \n[${keyWord}]`);

console.log(`Результат: \n[${searchStrStartKeyWord(userArray, keyWord)}]`);

/*---Задание 3---*/

console.log('Задание 3');
const value = 32.58884;
console.log(`Округлим ${value} до меньшего целого: ${Math.floor(value)}`);
console.log(`Округлим ${value} до большего целого: ${Math.ceil(value)}`);
console.log(`Округлим ${value} до ближайшего целого: ${Math.round(value)}`);

/*---Задание 4---*/
console.log('Задание 4');
userArray = [52, 53, 49, 77, 21, 32];
console.log(`Исходный массив: \n[${userArray}]`);

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

console.log(`Максимальный элемент в данном массиве: ${getMaxOfArray(userArray)}`);
console.log(getMaxOfArray(userArray));

/*---Задание 5---*/
console.log('Задание 5');
console.log('число наугад от 1 до 10:');

const getRandomNumber = (value1, value2) => {
    const minValue = Math.max(value1, value2);
    const maxValue = Math.min(value1, value2);
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

console.log(getRandomNumber(1,10));

/*-смотрим распределение-*/

// userAnswer = Number(prompt('Введите требуемый обьем выборки'));
// console.log(`В результате такого распределения получим выборку из ${userAnswer} элементов:`);
// console.log(viewRasp(userAnswer)); //тогда описание функции viewRasp поместить выше

/*---Задание 6---*/


const viewRasp = (sizeOfArray) => {
    const arrayOfView = [];
    for (let i = 0; i < Math.floor(sizeOfArray / 2); i++) {
        arrayOfView[i] = Math.round(Math.random() * sizeOfArray);
    }
    return arrayOfView;
}

console.log('Задание 6');
userAnswer = inputNumbers(0,100);
console.log(`В результате выполнения подпрограммы получим массив из ${Math.floor(userAnswer / 2)} случайных чисел от 0 до ${userAnswer}:`);
console.log(viewRasp(userAnswer));

/*---Задание 7---*/


console.log('Задание 7');
userAnswer = inputNumbers(0, 1000);
userAnswer2 = inputNumbers(0, 1000);
console.log(`В результате выполнения подпрограммы получим случайное число от ${Math.min(userAnswer, userAnswer2)} до ${Math.max(userAnswer, userAnswer2) }:`);
console.log(getRandomNumber(userAnswer, userAnswer2)); //вызываем функцию, созданную еще в 5ом задании

/*---Задание 8---*/

console.log(`Задание 8`);
currentDate = new Date();
console.log(`Текущая дата: \n${currentDate}`);

/*---Задание 9---*/
console.log(`Задание 9`);
currentDate.setDate(currentDate.getDate() + 73);
console.log(`Через 73 дня будет: \n${currentDate}`);

/*---Задание 10---*/

const formatDate = (dateObject) => {

    const outDate = 'Дата: ' + dateObject.getDate() + ' ' +
        dateObject.toLocaleDateString('ru-RU', { month: 'long' }) + ' ' +
        dateObject.getFullYear() + ' - это ' + dateObject.toLocaleDateString('ru-RU', { weekday: 'long' }) + '.' +
        '\nВремя: ' + dateObject.getHours()+':'+dateObject.getMinutes()+':'+dateObject.getSeconds();
    return outDate;
}

console.log(`Задание 10`);
currentDate = new Date();
console.log(formatDate(currentDate));

/*---Задание 11---*/
// console.log('Задание 11');
// playSecondGame();









