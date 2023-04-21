"use strict";
alert ('Сейчас начнут выполняться задания');

/*---Вспомогательные функции---*/

const inputNumbers = (minDiap, maxDiap) => {
  let userNumber = Number(prompt(`Введите число от ${minDiap} до ${maxDiap}`));
  if (isNaN(userNumber) || userNumber < minDiap || userNumber > maxDiap) {
    do {
      alert('Вы ввели некорректное значение, попробуйте еще раз');
      userNumber = Number(prompt(`Введите число от ${minDiap} до ${maxDiap}`));
    } while (isNaN(userNumber) || userNumber < minDiap || userNumber > maxDiap);
  }
  return userNumber;
}



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

/*---Задание 2---*/

console.log('Задание 2');
console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

for (let i = 0; i < userArray.length; i++) {
  if (userArray[i] === 4) {
    console.log(`Позиция числа 4 в массиве [${userArray}] определяется номером ${i}`);
    break;
  }
}

/*---Задание 3---*/

console.log('Задание 3');
userArray = [1, 3, 5, 10, 20];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

console.log(userArray.join(' '));

/*---Задание 4---*/

console.log('Задание 4');
console.log('Создали многомерный массив:');

const userMultiArray = [];
for (let i = 0; i<3; i++) {
  userMultiArray[i] = [];
  for (let j = 0; j<3; j++) {
    userMultiArray[i][j] = 1;
  }
}
console.log(userMultiArray);

/*---Задание 5---*/

console.log('Задание 5');
userArray = [1, 1, 1];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

for (let i=0; i<3; i++) {
  userArray.push(2);
}
console.log(userArray);

/*---Задание 6---*/

console.log('Задание 6');
userArray = [9, 8, 7, 'a', 6, 5];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

userArray.sort().pop();
console.log(userArray);

/*---Задание 7---*/

console.log('Задание 7');
userArray = [9, 8, 7, 6, 5];
let userNumber = inputNumbers(1, 10);

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

if (userArray.includes(userNumber)) {
  console.log(`Введенное Вами число ${userNumber} СОДЕРЖИТСЯ в массиве [${userArray}]`);
} else {
  console.log(`Введенное Вами число ${userNumber} НЕ СОДЕРЖИТСЯ в массиве [${userArray}]`);
}

/*---Задание 8---*/

console.log('Задание 8');
userArray = 'abcdef';

console.log(`Исходная строка: ${userArray}`);
console.log('Результат:');

console.log(userArray.split('').reverse().join(''));

/*---Задание 9---*/

console.log('Задание 9');
userArray = [[1, 2, 3], [4, 5, 6]];

console.log('Исходный массив:');
console.log(userArray);
console.log('Результат:');

let newUserArray = [];
for (let array of userArray) {
  for (let item of array) {
    newUserArray.push(item);
  }
}
console.log(newUserArray);

/*---Задание 10---*/

console.log('Задание 10');
userArray = [5, 7, 1, 2, 4, 1, 1, 2, 3, 5, 8];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

for (let i = 0; i < userArray.length; i++) {
  if (i === userArray.length-1) {
    console.log(`Вы достигли последнего элемента массива с индексом ${i}, поэтому вот вам не сумма, а только текущий элемент ${userArray[i]}`);
  } else {
    console.log(`Сумма ${i}-го элемента массива со следующим равна ${userArray[i]+userArray[i+1]}`);
  }
}

/*---Задание 11---*/

console.log('Задание 11');
userArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

userArray = userArray.map(item => item**2);
console.log(userArray);

/*---Задание 12---*/
console.log('Задание 12');

const gelLengthWords = (arrayOfString) => {
  const resultArray = [];
  for (let item of arrayOfString) {
    resultArray.push(item.split('').length);
  }
  return resultArray;
}

userArray = ['Привет', 'Пока', 'Снег', '', 'Перпендикулярный', 'javascript'];
console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

userArray = gelLengthWords(userArray);
console.log(userArray);

/*---Задание 13---*/
console.log('Задание 13');

const getNegativeValue = (array) => {
  return array.filter(item => item < 0);
}

userArray = [1, -1, 22, -33.3, -5, 8, -13, 21, 34, -55, 89, 144, -233];

console.log(`Исходный массив: \n[${userArray}]`);
console.log('Результат:');

userArray = getNegativeValue(userArray);
console.log(userArray);

/*---Задание 14---*/
console.log('Задание 14');

for (let i = 0; i < 10; i++) {
  userArray[i] = (Math.random()*10).toFixed(0);
}
const resultArray = userArray.filter(item => item%2 === 0);
console.log(`Исходный массив: \n[${userArray}]`);
console.log(`Массив с четными значениями: \n[${resultArray}]`);

/*---Задание 15---*/
console.log('Задание 15');

for (let i = 0; i < 6; i++) {
  userArray[i] = Number((Math.random()*10).toFixed(2));
}

let result = userArray.reduce((sum, item) => sum+item);
console.log(`Исходный массив: \n[${userArray}]`);
console.log(`Среднее арефмитеческое всех элементов: \n${(result/userArray.length).toFixed(2)}`);


/*---Блок функций для выполнения первой игры---*/


//Вспомогательная функция
const findSeason = (a) => {
  if (isNaN(a) || a <= 0 || a >= 13) {
    do {
      alert('Вы ввели некорректное значение, попробуйте еще раз');
      a = Number(prompt('Введите порядковый номер месяца'));
    } while (isNaN(a) || a <= 0 || a >= 13);
  }

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
  let monthNumber = Number(prompt('Введите порядковый номер месяца'));
  alert(findSeason(monthNumber));
}


/*---проверка---*/
// for (let i=1; i<=12; i++) {
//     console.log(findSeason(i));
// }