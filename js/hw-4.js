"use strict";
alert ('Сейчас начнут выполняться задания');

/*---Задание 1---*/
for (let i = 0; i < 2; i++) {
  console.log('Привет');
}

/*---Задание 2---*/
for (let i = 1; i < 6; i++) {
  console.log(i);
}

/*---Задание 3---*/
for (let i = 7; i < 23; i++) {
  console.log(i);
}

/*---Задание 4---*/
const obj={
  'Коля':'200',
  'Вася':'300',
  'Петя':'400',
}
for (let item in obj) {
  console.log(`${item} - зарплата ${obj[item]}`);
}

/*---Задание 5---*/
let n=1000, num = 0, result=n;
while (result>=50) {
  result /= 2;
  num++;
}
console.log(`Деля число n=${n} на два ${num} раз, получим число n=${result}`);

/*---Задание 6---*/
let firstFriDay = Number(prompt('Введите дату первой пятницы - число от 1 до 7'));
if (firstFriDay<1 || firstFriDay>7) {
  do {
    alert('Вы ввели некорректное значение, попробуйте еще раз');
    firstFriDay = Number(prompt('Введите дату первой пятницы - число от 1 до 7'));
  } while (firstFriDay<1 || firstFriDay>7);
}

for (let i = 1; i < 32; i++) {
  if (i ===  firstFriDay) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
    firstFriDay += 7;
  } else continue;
}
