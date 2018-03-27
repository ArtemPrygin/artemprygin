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



alert('Ваш бюджет ' + +budget / 30);
