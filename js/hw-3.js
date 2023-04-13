"use strict";
alert ('Сейчас начнут выполняться задания');
/*---Задание 1---*/

let password = 'admin';
let userPassword = String(prompt('Введите пароль \nПароль по умолчанию - admin'));
(password === userPassword) ? (alert('Пароль введен верно')):(alert('Пароль введен неправильно'));

/*---Задание 2---*/

let c = prompt('Введите любое число больше 0 и меньше 10');
(c > 0 && c<10) ? (console.log('Верно')):(console.log('Неверно'));

/*---Задание 3---*/

let d = prompt('Введите любое число больше 100');
let e = prompt('Введите число больше 100, если еще не ввели');
(d>100 || e>100) ? (console.log('Верно')):(console.log('Неверно'));

/*---Задание 4---*/

let a = '2', b='3';
alert(Number(a)+Number(b));

/*---Задание 5---*/

let monthNumber = Number(prompt('Введите порядковый номер месяца'));
switch (monthNumber) {
  case 1:
  case 2:
  case 12: console.log('Это зимний месяц');
          break;
  case 3:
  case 4:
  case 5: console.log('Это весенний месяц');
                  break;
  case 6:
  case 7:
  case 8: console.log('Это летний месяц');
          break;
  case 9:
  case 10:
  case 11: console.log('Это осенний месяц');
           break;
  default:
  console.log('Введено неверное значение');
}



/*---Задание 7---*/
let checkingNumber = prompt('Пожалуйста, введите любое число');
if (isNaN(checkingNumber)) {
  alert('Вы ввели не число');
} else if (checkingNumber%2 == 0) {
  alert('Число четное');
} else alert('Число нечетное');

/*---Задание 8---*/
let clientOS = Number(prompt('Введите тип ОС. 1 для Android, 0 для iOS'));

switch (clientOS) {
  case 1:
    console.log('Установите версию приложения для Android по ссылке');
    break;
  case 0:
    console.log('Установите версию приложения для iOS по ссылке');
    break;
  default:
}

/*---Задание 9---*/

let clientDeviceYear = Number(prompt('Введите год выпуска телефона'));
if (clientDeviceYear < 2015) {
  switch (clientOS) {
    case 1:
      console.log('Установите облегченную версию приложения для Android по ссылке');
      break;
    case 0:
      console.log('Установите облегченную версию приложения для iOS по ссылке');
      break;
    default:
  }
}
  else {
    switch (clientOS) {
      case 1:
        console.log('Установите версию приложения для Android по ссылке');
        break;
      case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
      default:
    }
  }
