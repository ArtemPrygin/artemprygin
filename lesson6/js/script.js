let openBtn = document.getElementById('open-btn'),
	name = document.getElementsByClassName('name')[0],
	nameValue = document.getElementsByClassName('name-value')[0],
	budget = document.getElementsByClassName('budget')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goods = document.getElementsByClassName('goods')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	items = document.getElementsByClassName('items')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employers = document.getElementsByClassName('employers')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopen = document.getElementsByClassName('isopen')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	goodsItem = document.getElementsByClassName("goods-item"),
	goodsItemBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	hireEmployersBtn = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll(".hire-employers-item");

let money,
	price;

openBtn.addEventListener('click', () => {
	money = prompt("Ваш бюджет?", "");
	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Ваш бюджет?", "");
	}
	budgetValue.textContent = money;
	nameValue.textContent = prompt("Название вашего магазина?", "").toUpperCase();
});

goodsItemBtn.addEventListener('click', () => {
	
	for (let i=0; i<goodsItem.length; i++) {
		let a = goodsItem[i].value;

		if ((typeof(a)) === 'string' && (typeof(a)) !=null && a.length <50) {
			console.log("Все верно");
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		}
	}
});


chooseItem.addEventListener('change', () => {

	let items = chooseItem.value;

	if(isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {

	let time = timeValue.value;

	if (time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
			mainList.open = false;
			} else {
				console.log('В сутках только 24 часа!');
				mainList.open = false;
				};

	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

countBudgetBtn.addEventListener('click', () => {
	countBudgetValue.value = money / 30;
	discountValue.style.fontWeight = '700';
	if (countBudgetValue.value < 10 || countBudgetValue.value == '') {
		mainList.discount = false;
		discountValue.style.fontSize = '11px';
		discountValue.textContent = 'Для скидки бюджет должен быть больше 10'
	} else {
		mainList.discount = true;
		discountValue.style.backgroundColor = 'green';
		discountValue.style.fontSize = '13px';
		discountValue.textContent = 'Ваша скидка: ' + Math.round(countBudgetValue.value*.1) + ' у.е.'
	}
});

hireEmployersBtn.addEventListener('click', () => {

	for (let i=0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;
		employersValue.textContent += mainList.employers[i] + ', ';
	}
});



const mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []
};

console.log(mainList);