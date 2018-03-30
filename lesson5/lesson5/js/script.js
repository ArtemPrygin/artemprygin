// let box = document.getElementById('title'),
// 	btn = document.getElementsByTagName('ul'),
// 	menuItem = document.getElementsByClassName('menu-item'),
// 	menuItem = document.querySelectorAll('.menu-item'),
// 	menuItemOne = document.querySelector('.menu-item'),
// 	menu = document.querySelectorAll('.menu'),
// 	nav = document.querySelectorAll('nav'),
// 	header = document.getElementsByTagName('header'),
// 	column = document.querySelectorAll('.column');

// for( var i=0; i<menuItem.length; i++) {
//  menuItem[i].style.backgroundColor="yellow";
// };
// menuItemOne.style.fontSize = '20px';

// let div = document.createElement('div');
// let text = document.createTextNode("Тут был я");

// div.classList.add("abc");
// div.style.height = '100px';
// div.style.backgroundColor = 'white';

// document.body.appendChild(div);
// document.body.insertBefore(div, column[0]); 
// document.body.removeChild(column[0]);
// btn[0].insertBefore(div, menuItemOne);

let menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu-item'),
	pointThree = menu.removeChild(menuItem[1]),
	pointFive = document.createElement('li'),
	title = document.querySelector('#title'),
	column = document.querySelectorAll('.column'),
	adv = document.querySelectorAll('.adv'),
	opinion = document.querySelector('#prompt');

pointFive.classList.add('menu-item');
pointFive.innerHTML = "Пятый пункт";
menu.insertBefore(pointThree, menuItem[3]);
menu.appendChild(pointFive);
title.innerHTML = 'Мы продаем только подлинную технику Apple';

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
adv[0].remove();

opinion.innerHTML = prompt('Че пацаны, айфон?');