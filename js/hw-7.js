"use strict";
alert('Сейчас начнут выполняться задания');


/*---Вспомогательные функции---*/
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


//Вспомогательная функция
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
console.log('Задание ');
userStr = String(prompt('Введите массив строк, разделяя их запятой и пробелом после нее'));
let userArray = userStr.split(', ');

console.log(`Исходный массив: \n[${userArray}]`);
let keyWord = prompt('Введите ключевую строку для поиска');
console.log(`Ключевое слово для поиска: \n[${keyWord}]`);

console.log(`Результат: \n[${searchStrStartKeyWord(userArray, keyWord)}]`);


