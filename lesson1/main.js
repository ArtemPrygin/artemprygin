// var budget = prompt('Ваш бюджет?'),
// 	shop = prompt('Название вашего магазина');

// var	mainList = {};
// mainList = {
// 	budget: budget,
// 	shop: shop,
// 	shopGoods: [],
// 	employers: {},
// 	open: true
// }

// for (var i = 0; i < 3; i++) {
// var ask = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[i] = ask;
// console.log(mainList.shopGoods);
// };

// alert('Ваш бюджет ' + +budget / 30);

// var num = 33721;
// var digits = num.toString().split('');
// var multiply = digits[0]*digits[1]*digits[2]*digits[3]*digits[4];
// console.log(multiply);
// alert(Math.pow(multiply, 3));


var num = 33721;
var arr = [];

// var multi = function(num){
// 	var res = 1;
// 	while(num){
// 		res *= num%10;
// 		num = Math.floor(num/10);
// 	}

// 	return res;
// };


// alert(multi(33721));


var multi = function(num){
	var res = 1;

	for(var i = 0; i < num.toString().length; i++){
		arr.push(+num.toString()[i]);
		res *= arr[i];
		
	};
	return res;
};

var pow = multi(33721) ** 3;
console.log(multi(33721));
console.log(pow);
