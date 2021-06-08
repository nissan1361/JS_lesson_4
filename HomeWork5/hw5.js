// Task 1

function buildChessField() {

    const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let field = document.querySelector('.cells');
    let cells = '<div class="chessrow">';
    for (let i = 0; i < letters.length; i++) {
        cells += '<div class="cell whiteCell">' + letters[i] + '</div>';
    }
    cells += '</div>';
    let cellStr = '';
    let colorClass = '';
    for (let i = 0; i < 8; i++) {
        cellStr = '';
        for (let j = 0; j < 8; j++) {
            colorClass = ((i + j) % 2 === 0) ? 'whiteCell' : 'blackCell';
            cellStr += '<div class = "cell ' + colorClass + '"></div>';
        }
        cells += '<div class="chessrow"> <div class = "cell whiteCell">' + (8 - i) + '</div>' + cellStr + '</div>';

    }
    field.innerHTML = cells;

}

document.addEventListener("DOMContentLoaded", buildChessField);

// Task 2

let cart = {}

cart['Хлеб'] = 65;
cart['Молоко'] = 70;
cart['Картошка'] = 120;
cart['Колбаса'] = 450;
cart['Сок'] = 80;

console.log(cart);

let summCart = 0;
for (key in cart) {
    summCart += cart[key];
}

if (summCart === 0) {
    console.log('Корзина пуста')
    document.getElementById("cart1").innerHTML = 'Корзина пуста';
} else {
    console.log('В корзине товаров на сумму: ');
    console.log(summCart);
    document.getElementById("cart1").innerHTML = 'В корзине ' + Object.keys(cart).length + ' товаров на сумму: ' + summCart;

}