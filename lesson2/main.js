var budget = prompt('Ваш бюджет?'),
	shop = prompt('Название вашего магазина');

var	mainList = {};
mainList = {
	budget: budget,
	shop: shop,
	shopGoods: [],
	employers: {},
	open: true
}

for (var i = 0; i < 3; i++) {
var ask = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[i] = ask;
console.log(mainList.shopGoods);
};

// var i = 0;
// do {
// 	var ask = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[i] = ask;
// 	console.log(mainList.shopGoods);
// 	i++;
// }
// while (i < 3);

// var i = 0
// while (i < 3) {
// 	var ask = prompt("Какой тип товаров будем продавать?");
// 	mainList.shopGoods[i] = ask;
// 	console.log(mainList.shopGoods);
// 	i++;
// }

alert('Ваш бюджет ' + +budget / 30);
