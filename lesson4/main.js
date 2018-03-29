var budget, 
	shop,
	price = 100; 

var mainList = {}; 
mainList = { 
budget: budget, 
shop: shop, 
shopGoods: [], 
employers: {}, 
open: true, 
discount: false,
shopItems: [], 
getBudget: function getBudget() { 
	budget = prompt('Ваш бюджет?',''); 
	shop = prompt('Название вашего магазина',''); 
	for (var i = 0; i < 3; i++) { 
	var ask = prompt("Какой тип товаров будем продавать?",''); 
	mainList.shopGoods[i] = ask; 
	console.log(mainList.shopGoods); 
	}; 
	alert('Ваш бюджет ' + +budget / 30); 
	},
getPrice: function getPrice() { 
	if (mainList.discount == true) { 
	alert(price*.8); 
	} 
	else { 
	alert(price); 
	} 
	}, 
getEmployers: function getEmployers() { 
	for (j=0; j<4; j++) { 
	var askName = prompt("Введите имя сотрудника",'Вася Батарейкин'); 
	employers.name[j] = (j+1)+ ' - ' + askName; 
	}
	},
chooseShopItems: function chooseShopItems() {
	let items = prompt("Перечислите через запятую товары", "");
	while (typeof(items)==="object" || items == "" || !isNaN(items) || items.indexOf(",") ==-1) {
		items = prompt("Вы глупый что ли? Через запятую товары!", "");
	}
	mainList.shopItems = items.split(',');
	mainList.shopItems.push(prompt("Добавь еще один товар, быстро", ""));
	mainList.shopItems.sort();
	document.write("У нас вы можете купить: " + '<br>');
		mainList.shopItems.forEach(function(item, i) {
			document.write(+(i + 1) + ". " + item + '<br>');
			});
	},
}; 

employers ={ 
name: [] 
}; 


console.log(mainList);
console.log('Наш магазин включает в себя: ');
for(let key in mainList){
	console.log(key);
}