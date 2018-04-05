let money,
		name,
		time,
		price;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {
		name: []
	},
	open: false,
	discount: false,
	shopItems: [],

	//Функция по вводу бюджета
	start: function start() {
		money = prompt('Ваш бюджет?', '');

		while(isNaN(money) || money == '' || money == null){
			money = prompt('Ваш бюджет?', '');
		}

		name = prompt('Название вашего магазина', '').toUpperCase();
		time = 23;
	},
	/* Функция по скидкам */
	discountUser: function discountUser() {
		while (mainList.discount == true){
			price = Math.round(price/80) * 100;
		}
	},
	/* Функция по вводу продавцов */
	employee: function employee() {
		for (let i = 0; i < 4; i++) {
			let askName = prompt('Введите имя продавца', '');
			mainList.employers.name[i] = ( i + 1 ) + ' - ' + askName;
		}
	},
	/* Функция по выбору товаров */
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 3; i++) {
			let a = prompt('Какой тип товаров будем продавать?', '');
			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			}
		}
	},
	/* Функция по времени работы магазина */
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.workTime = true;
			} else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
				}
	},
	chooseShopItems: function chooseShopItems () {
		let items = prompt('Перечислите через запятую ваши товары.', '');

			while (!isNaN(items) || items.indexOf(',') == -1) { // indexOf пока нет запятой, повторять вопрос 
				items = prompt('Перечислите через запятую ваши товары.', '');
			}

		mainList.shopItems = items.split(',');

		mainList.shopItems.push(prompt('Подождите еще ', '')); 

		mainList.shopItems.sort();

		mainList.shopItems.forEach(function(item , i, arr) {
			i = ++i;
			document.write( i + ' У нас вы можите приобрести: ' + item + '<br>'); 
		})

		for ( var key in mainList.shopItems ) {
			console.log('У нас в магазине вы можите приобрести: ' + mainList.shopItems);
		}
	},


};



console.log(mainList);