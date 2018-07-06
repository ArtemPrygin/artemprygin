let btn = document.getElementsByClassName('sad-cat__btn')[0],
	sadCat = document.getElementsByClassName('sad-cat')[0],
	trueOne = document.getElementById('1'),
	trueTwo = document.getElementById('6'),
	trueThree = document.getElementById('12'),
	submitOne = document.getElementsByClassName('submit')[0],
	submitTwo = document.getElementsByClassName('submit')[1],
	submitThree = document.getElementsByClassName('submit')[2],
	prison = document.querySelector('.cat-prison'),
	overlay = document.querySelector('.overlay'),
	qOne = document.getElementsByClassName('quest-one'),
	qTwo = document.getElementsByClassName('quest-two'),
	qThree = document.getElementsByClassName('quest-three'),

	happy = document.getElementsByClassName('cat-happy')[0],
	modalOne = document.querySelector('.modal-one'),
	modalTwo = document.querySelector('.modal-two'),
	modalThree = document.querySelector('.modal-three');

btn.addEventListener('click', function(){
	sadCat.style.display = 'none';
	overlay.style.display = 'block';
});

submitOne.addEventListener('click', function() {
	for (let i=0; i<qOne.length; i++) {
	if (qOne[i].checked ===false) {
		console.log('nothing is checked');
	} else if (trueOne.checked === true) {
		modalOne.style.display = 'none';
		modalTwo.style.display = 'block';

	} else {
		prison.style.display = 'block';
		overlay.style.display = 'none';
	}
}
});

submitTwo.addEventListener('click', function() {
	for (let i=0; i<qTwo.length; i++) {
	if (qTwo[i].checked ===false) {
		console.log('nothing is checked');
	} else if (trueTwo.checked === true) {
		modalTwo.style.display = 'none';
		modalThree.style.display = 'block';

	} else {
		prison.style.display = 'block';
		overlay.style.display = 'none';
	}
}
});

submitThree.addEventListener('click', function() {
	for (let i=0; i<qThree.length; i++) {
	if (qThree[i].checked ===false) {
		console.log('nothing is checked');
	} else if (trueThree.checked === true) {
		overlay.style.display = 'none';
		happy.style.display = 'block';
	} else {
		prison.style.display = 'block';
		overlay.style.display = 'none';
	}
}
});