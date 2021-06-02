let cart = {}

// cart['Хлеб'] = 65;
// cart['Молоко'] = 70;
// cart['Картошка'] = 120;
// cart['Колбаса'] = 450;
// cart['Сок'] = 80;

let summCart = 0;
for (key in cart) {
    summCart += cart[key];
}


let good = [];
let good_count = 0;

function reply_click(clicked_id) {
    alert(clicked_id);
    good.push(clicked_id);
    if (clicked_id === "milk_btn") {
        summCart += 80;
        cart['Молоко'] = 80;
        good_count++;
    } else if (clicked_id === "bread_btn") {
        summCart += 50;
        cart['Хлеб'] = 50;
        good_count++;
    } else if (clicked_id === "meat_btn") {
        summCart += 125;
        cart['Мясо'] = 125;
        good_count++;
    } else if (clicked_id === "beer_btn") {
        summCart += 75;
        cart['Пиво'] = 75;
        good_count++;
    } else if (clicked_id === "apples_btn") {
        summCart += 42;
        cart['Яблоко'] = 42;
        good_count++;
    } else if (clicked_id === "tea_btn") {
        summCart += 75;
        cart['Чай'] = 75;
        good_count++;
    }

    console.log(cart);
    console.log(good);

    if (summCart === 0) {
        console.log('Корзина пуста')
        document.getElementById("cart_output").innerHTML = 'Корзина пуста';
    } else {
        console.log('В корзине товаров на сумму: ');
        console.log(summCart);
        document.getElementById("cart_output").innerHTML = 'В корзине ' + good_count + ' товаров на сумму: ' + summCart;

    }
}