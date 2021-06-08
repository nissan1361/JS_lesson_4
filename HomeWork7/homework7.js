let cart = {}


let summCart = 0;
for (key in cart) {
    summCart += cart[key];
}


let good = [];
let good_count = 0;

function reply_click(clicked_id) {
    // alert(clicked_id);
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


    if (clicked_id === "erace_btn") {
        cart = [];
        good = [];
        summCart = 0;
        good_count = 0;

    }


    console.log(cart);
    console.log(good);

    if (summCart === 0) {
        console.log('Корзина пуста')
        document.getElementById("cart_output").innerHTML = 'Корзина пуста';
        showCart();
    } else {
        console.log('В корзине товаров на сумму: ');
        console.log(summCart);
        document.getElementById("cart_output").innerHTML = 'В корзине ' + good_count + ' товаров на сумму: ' + summCart;

        showCart();
    }
}

function showCart() {
    keys = Object.keys(cart);
    let elem = document.getElementById("cartArr");
    elem.innerHTML = "";
    let garray = [];
    for (let i = 0; i < keys.length; i++) {
        garray.push(keys[i]);
        elem.innerHTML = garray;
    }
}
let element1 = document.getElementById("hid1");
let element2 = document.getElementById("hid2");
let element3 = document.getElementById("hid3");

element1.hidden = false;
element2.hidden = true;
element3.hidden = true;

function menu(menu_id) {
    if (menu_id === "b1") {
        element1.hidden = false;
        element2.hidden = true;
        element3.hidden = true;
    } else if (menu_id === "b2" || menu_id === "next1") {
        element1.hidden = true;
        element2.hidden = false;
        element3.hidden = true;
    } else if (menu_id === "b3" || menu_id === "next2") {
        element1.hidden = true;
        element2.hidden = true;
        element3.hidden = false;
    }
}