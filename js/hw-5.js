"use strict";
alert('Сейчас начнут выполняться задания');

/*---Определяем глобальные переменные---*/
let userNumber1, userNumber2;

/*---Задание 1---*/

function findMin(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

userNumber1 = Number(prompt('Введите первое число'));
userNumber2 = Number(prompt('Введите второе число'));
alert(`Меньшее число из введенных Вами - число ${findMin(userNumber1, userNumber2)}`);


/*---Задание 2---*/

userNumber1 = prompt('Введите любое число для проверки на четность');

const checkParity = function (a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

alert(checkParity(userNumber1));

/*---Задание 3---*/

userNumber1 = prompt('Введите любое число для возведения в квадрат');
console.log(findSquareNumber(userNumber1));
alert(`При возведении числа ${userNumber1} в квадрат получим ${findSquareNumber(userNumber1)}`);

function findSquareNumber(a) {
    return a ** 2;
}

/*---Задание 4---*/

const sayHello = () => {
    let userAge = prompt('Сколько Вам лет?');
    if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
    } else alert('Вы ввели неправильное значение');
}
sayHello();

/*---Задание 5---*/

userNumber1 = Number(prompt('Введите первое число из двух для нахождения их произведения'));
userNumber2 = Number(prompt('Введите второе число для нахождения их произведения'));

const multiplyNumber = (a,b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
}

alert(`Произведение чисел ${userNumber1} и ${userNumber2} равняется ${multiplyNumber(userNumber1, userNumber2) }`);

/*---Задание 6---*/

userNumber1 = Number(prompt('Введите число для возведения в куб'));

const cubeNumber = (a) => {
    if (isNaN(a)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${a} в кубе равняется ${a**3}`;
    }
}

alert(cubeNumber(userNumber1));

/*--- Проверка задания 6 ---*/

// for (let i=0; i<=10; i++) {
//     console.log(cubeNumber(i));
// }

/*---Задание 7---*/

const pi = 3.1415;

function getCircleArea() {
    return this.radius ** 2 * pi;
}

function getCirclePerimeter() {
    return this.radius * 2 * pi;
}

const circle1 = {
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

const circle2 = {
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

circle1.radius = Number(prompt('Введите радиус первого круга'));
circle2.radius = Number(prompt('Введите радиус второго круга'));

alert(`Площадь первого круга с радиусом ${circle1.radius} равна ${circle1.getArea().toFixed(2)}
        \nПериметр первого круга равен ${circle1.getPerimeter().toFixed(2)}
        \nПлощадь второго круга с радиусом ${circle2.radius} равна ${circle2.getArea().toFixed(2)}
        \nПериметр второго круга равен ${circle2.getPerimeter().toFixed(2)}`);

/*---Задание 8---*/


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
    alert ('Давайте сыграем в первую игру!');
    let monthNumber = Number(prompt('Введите порядковый номер месяца'));
    alert(findSeason(monthNumber));
}


/*---проверка 8 задание---*/
// for (let i=1; i<=12; i++) {
//     console.log(findSeason(i));
// }





