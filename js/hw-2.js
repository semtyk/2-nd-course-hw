"use strict";
alert ('Сейчас начнутся выполняться задания');
/*---Задание 1---*/
let a = 10;
alert (a);
alert (a=20);
/*---Задание 2---*/
const iphoneBirthday = 2007;
alert (`Первый айфон был выпущен в ${iphoneBirthday} году`);
/*---Задание 3---*/
const nameCreatorJS = 'Брендан Эйх';
alert (`По информации из Википедии, автора языка JavaScript зовут ${nameCreatorJS}`);
/*---Задание 4---*/
let x=10, y=2;
alert(`Сумма: ${x}+${y}=${x+y}
      \n Разность: ${x}-${y}=${x-y}
      \n Произведение: ${x}x${y}=${x*y}
      \n Частное: ${x}/${y}=${x/y}`);
/*---Задание 5---*/
let result;
alert (`Результат возведения 2 в 5ую степень равен: ${result=2**5}`);
//alert (result=2**5);
/*---Задание 6---*/
let divident=9;
let divider=2;
alert(`Остаток от деления числа a=${divident} на число b=${divider} равен ${divident%divider}`);
/*---Задание 7---*/
let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
++num;
--num;
alert(num);
/*---Задание 8---*/
let age=prompt('Сколько вам лет?');
alert(`Вы сказали, что Вам ${age} лет`);
/*---Задание 9---*/
const user = {
  name: 'Sergey',
  age: 27,
  isAdmin: false
}
/****Задание 9.1****/
user['city of residence'] = 'Saint Petersburg';
/****Задание 9.2****/
user.age *=2;
/****Задание 9.3****/
delete user['city of residence'];
/****Задание 9.4****/
let info = prompt(`Какую информацию хотите узнать о пользователе?
\n Введите
\n name - имя
\n age - возраст
\n isAdmin - является ли пользователь администратором`);
alert(`Вы запросили ${info}.
  \n значение: ${user[info]}`);
/*---Задание 10---*/
user.name = prompt('Как Вас зовут?');
alert(`Привет, ${user.name}!`);
