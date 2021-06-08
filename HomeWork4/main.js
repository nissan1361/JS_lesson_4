// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, надо получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект

function numToObject(num) {
    if (num <= 999) {
        let ed = num % 10;
        let des = (num % 100 - ed) / 10;
        let sotn = Math.floor(num / 100)
        let numObj = {};
        numObj['единицы'] = ed;
        numObj['десятки'] = des;
        numObj['сотни'] = sotn;
        return numObj;
    } else {
        console.log('Не верно задано число (оно больше чем 999)');
        let numObj = {};
        return numObj;
    }

}

let obj1 = numToObject(245);
console.log(obj1);
let obj2 = numToObject(560);
console.log(obj2);
let obj3 = numToObject(55); // Без сотен
console.log(obj3);
let obj4 = numToObject(8); // Только единицы
console.log(obj4);
let obj5 = numToObject(12034); // Больше, чем 999
console.log(obj5);

// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// a) Реализуйте такие объекты.
// b) Перенести функционал подсчета корзины на объектно-ориентированную базу

console.log('***********************')
console.log('Задание 2: ')

// a)

let cart = {};

cart['Хлеб'] = 65;
cart['Молоко'] = 70;
cart['Картошка'] = 120;
cart['Колбаса'] = 450;
cart['Сок'] = 80;

console.log(cart);

// b)
let summCart = 0;
for (key in cart) {
    summCart += cart[key];
}
console.log('В корзине товаров на сумму: ');
console.log(summCart);