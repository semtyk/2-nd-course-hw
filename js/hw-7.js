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
let userArray = [1, 5, 4, 10, 0, 3];
console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

for (let i = 0; i < userArray.length; i++) {
    console.log(userArray[i]);
    if (userArray[i] === 10) {
        break;
    }
}

