var budget, 
shop; 

var mainList = {}; 
mainList = { 
budget: budget, 
shop: shop, 
shopGoods: [], 
employers: {}, 
open: true, 
discount: false 
}; 
employers ={ 
name: [] 
}; 

function getBudget() { 
budget = prompt('Ваш бюджет?'); 
shop = prompt('Название вашего магазина'); 
for (var i = 0; i < 3; i++) { 
var ask = prompt("Какой тип товаров будем продавать?"); 
mainList.shopGoods[i] = ask; 
console.log(mainList.shopGoods); 
}; 
alert('Ваш бюджет ' + +budget / 30); 
}; 

// getBudget(); 

let price = 100; 
function getPrice() { 
if (mainList.discount == true) { 
alert(price*.8); 
} 
else { 
alert(price); 
} 
}; 

// getPrice(); 

function getEmployers() { 
for (j=0; j<4; j++) { 
var askName = prompt("Введите имя сотрудника",'Вася Батарейкин'); 
employers.name[j] = (j+1)+ ' - ' + askName; 
} 
}; 

getEmployers(); 

console.log(employers.name); 
