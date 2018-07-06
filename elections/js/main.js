window.addEventListener('DOMContentLoaded', function() {

	// Переход в карточку 
	let popupBtn = document.getElementsByClassName('popup-btn')[0],
		popup = document.getElementsByClassName('popup')[0],
		overlay = document.getElementsByClassName('overlay')[0],
		custom = document.querySelector('.custom');

	popupBtn.addEventListener('click', function(){
		popup.style.display = 'none';
		custom.style.display = 'flex';
	});


	// Все, что нужно для слайдеров в карточке


	let nextSkin = document.getElementsByClassName('next')[0],
		prevSkin = document.getElementsByClassName('prev')[0],
		skin = document.getElementById('person-skin'),
		skinColor = document.getElementsByClassName('skin-color'),
		buttonMale = document.getElementsByClassName('male')[0],
		buttonFemale = document.getElementsByClassName('female')[0],

		hairStyle = document.getElementsByClassName('hair-style'),
		hair = document.getElementById('person-hair'),
		nextHair = document.getElementsByClassName('next')[1],
		prevHair = document.getElementsByClassName('prev')[1],

		male = document.getElementById('male'),
		female = document.getElementById('female'),

		flagSex = 0,
		flagClothes = 1,
		flagHair = 1,
		flagSkin = 1,

		clothes = document.getElementById('person-clothes'),
		clothesStyle = document.getElementsByClassName('clothes-style'),
		nextClothes = document.getElementsByClassName('next')[2],
		prevClothes = document.getElementsByClassName('prev')[2];

		setMale();

		male.onclick = setMale;
		female.onclick = setFemale;

		// Мужской слайдер

		function setMale() {

			flagSex = 1;
			
			hair.style.background = 'url(./img/hair/construct/hair-1.png) center no-repeat';
			hair.style.backgroundSize = 'cover';

			skin.style.background = 'url(./img/skin/skin-1.png) center no-repeat';
			skin.style.backgroundSize = 'cover';

			clothes.style.background = 'url(./img/clothes/construct/clothes-1.png) center no-repeat';
			clothes.style.backgroundSize = 'cover';

			for (let i=0; i<skinColor.length; i++) {
					skinColor[i].classList.remove('ok');
					skinColor[i].classList.add('hide');
				};
				skinColor[0].classList.remove('hide');
				skinColor[0].classList.add('ok');

				nextSkin.onclick = function() {
					if (skinColor[0].classList.contains('ok')) {
						flagSkin = 2;
						skinColor[0].classList.remove('ok');
						skinColor[0].classList.add('hide');
						skinColor[1].classList.remove('hide');
						skinColor[1].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-2.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					} else if (skinColor[1].classList.contains('ok')) {
						flagSkin = 3;
						skinColor[1].classList.remove('ok');
						skinColor[1].classList.add('hide');
						skinColor[2].classList.remove('hide');
						skinColor[2].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-3.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					} else if (skinColor[2].classList.contains('ok'))  {
						flagSkin = 1;
						skinColor[2].classList.remove('ok');
						skinColor[2].classList.add('hide');
						skinColor[0].classList.remove('hide');
						skinColor[0].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-1.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					}
				};

				prevSkin.onclick = function() {
					if (skinColor[0].classList.contains('ok')) {
						flagSkin = 3;
						skinColor[0].classList.remove('ok');
						skinColor[0].classList.add('hide');
						skinColor[2].classList.remove('hide');
						skinColor[2].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-3.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					} else if (skinColor[2].classList.contains('ok')) {
						flagSkin = 2;
						skinColor[2].classList.remove('ok');
						skinColor[2].classList.add('hide');
						skinColor[1].classList.remove('hide');
						skinColor[1].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-2.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					} else if (skinColor[1].classList.contains('ok'))  {
						flagSkin = 1;
						skinColor[1].classList.remove('ok');
						skinColor[1].classList.add('hide');
						skinColor[0].classList.remove('hide');
						skinColor[0].classList.add('ok');
						skin.style.background = 'url(img/skin/skin-1.png) center no-repeat';
						skin.style.backgroundSize = 'cover';
					}
				};

				for (let i=0; i<hairStyle.length; i++) {
				hairStyle[i].classList.remove('ok');
				hairStyle[i].classList.add('hide');
				};
				hairStyle[0].classList.remove('hide');
				hairStyle[0].classList.add('ok');

				nextHair.onclick = function() {
					if (hairStyle[0].classList.contains('ok')) {
						flagHair = 2;
						hairStyle[0].classList.remove('ok');
						hairStyle[0].classList.add('hide');
						hairStyle[1].classList.remove('hide');
						hairStyle[1].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-2.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[1].classList.contains('ok')) {
						flagHair = 3;
						hairStyle[1].classList.remove('ok');
						hairStyle[1].classList.add('hide');
						hairStyle[2].classList.remove('hide');
						hairStyle[2].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-3.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[2].classList.contains('ok'))  {
						flagHair = 1;
						hairStyle[2].classList.remove('ok');
						hairStyle[2].classList.add('hide');
						hairStyle[0].classList.remove('hide');
						hairStyle[0].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-1.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					}
				};

				prevHair.onclick = function() {
					if (hairStyle[0].classList.contains('ok')) {
						flagHair = 3;
						hairStyle[0].classList.remove('ok');
						hairStyle[0].classList.add('hide');
						hairStyle[2].classList.remove('hide');
						hairStyle[2].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-3.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[2].classList.contains('ok')) {
						flagHair = 2;
						hairStyle[2].classList.remove('ok');
						hairStyle[2].classList.add('hide');
						hairStyle[1].classList.remove('hide');
						hairStyle[1].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-2.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[1].classList.contains('ok'))  {
						flagHair = 1;
						hairStyle[1].classList.remove('ok');
						hairStyle[1].classList.add('hide');
						hairStyle[0].classList.remove('hide');
						hairStyle[0].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-1.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					}
				};

				for (let i=0; i<clothesStyle.length; i++) {
				clothesStyle[i].classList.remove('ok');
				clothesStyle[i].classList.add('hide');
				};
				clothesStyle[0].classList.remove('hide');
				clothesStyle[0].classList.add('ok');

				nextClothes.onclick = function() {
					if (clothesStyle[0].classList.contains('ok')) {
						flagClothes = 2;
						clothesStyle[0].classList.remove('ok');
						clothesStyle[0].classList.add('hide');
						clothesStyle[1].classList.remove('hide');
						clothesStyle[1].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-2.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					} else if (clothesStyle[1].classList.contains('ok')) {
						flagClothes = 3;
						clothesStyle[1].classList.remove('ok');
						clothesStyle[1].classList.add('hide');
						clothesStyle[2].classList.remove('hide');
						clothesStyle[2].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-3.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					} else if (clothesStyle[2].classList.contains('ok'))  {
						flagClothes = 1;
						clothesStyle[2].classList.remove('ok');
						clothesStyle[2].classList.add('hide');
						clothesStyle[0].classList.remove('hide');
						clothesStyle[0].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-1.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					}
				};

				prevClothes.onclick = function() {
					if (clothesStyle[0].classList.contains('ok')) {
						flagClothes = 3;
						clothesStyle[0].classList.remove('ok');
						clothesStyle[0].classList.add('hide');
						clothesStyle[2].classList.remove('hide');
						clothesStyle[2].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-3.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					} else if (clothesStyle[2].classList.contains('ok')) {
						flagClothes = 2;
						clothesStyle[2].classList.remove('ok');
						clothesStyle[2].classList.add('hide');
						clothesStyle[1].classList.remove('hide');
						clothesStyle[1].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-2.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					} else if (clothesStyle[1].classList.contains('ok'))  {
						flagClothes = 1;
						clothesStyle[1].classList.remove('ok');
						clothesStyle[1].classList.add('hide');
						clothesStyle[0].classList.remove('hide');
						clothesStyle[0].classList.add('ok');
						clothes.style.background = 'url(img/clothes/construct/clothes-1.png) center no-repeat';
						clothes.style.backgroundSize = 'cover';
					}
				};
		};

		// Женский слайдер
			
		function setFemale() {

			flagSex = 2;
			flagSkin = 4;
			flagClothes = 4;
			flagHair = 4;

			hair.style.background = 'url(./img/hair/construct/hair-4.png) center no-repeat';
			hair.style.backgroundSize = 'cover';

			skin.style.background = 'url(./img/skin/skin-4.png) center no-repeat';
			skin.style.backgroundSize = 'cover';

			clothes.style.background = 'url(./img/clothes/construct/clothes-4.png) center no-repeat';
			clothes.style.backgroundSize = 'cover';

			for (let i=0; i<skinColor.length; i++) {
				skinColor[i].classList.remove('ok');
				skinColor[i].classList.add('hide');
				};
				skinColor[0].classList.remove('hide');
				skinColor[0].classList.add('ok');


			nextSkin.onclick = function() {
				if (skinColor[0].classList.contains('ok')) {
					flagSkin = 5;
					skinColor[0].classList.remove('ok');
					skinColor[0].classList.add('hide');
					skinColor[1].classList.remove('hide');
					skinColor[1].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-5.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				} else if (skinColor[1].classList.contains('ok')) {
					flagSkin = 6;
					skinColor[1].classList.remove('ok');
					skinColor[1].classList.add('hide');
					skinColor[2].classList.remove('hide');
					skinColor[2].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-6.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				} else if (skinColor[2].classList.contains('ok'))  {
					flagSkin = 4;
					skinColor[2].classList.remove('ok');
					skinColor[2].classList.add('hide');
					skinColor[0].classList.remove('hide');
					skinColor[0].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-4.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				}
			};

			prevSkin.onclick = function() {
				if (skinColor[0].classList.contains('ok')) {
					flagSkin = 6;
					skinColor[0].classList.remove('ok');
					skinColor[0].classList.add('hide');
					skinColor[2].classList.remove('hide');
					skinColor[2].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-6.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				} else if (skinColor[2].classList.contains('ok')) {
					flagSkin = 5;
					skinColor[2].classList.remove('ok');
					skinColor[2].classList.add('hide');
					skinColor[1].classList.remove('hide');
					skinColor[1].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-5.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				} else if (skinColor[1].classList.contains('ok'))  {
					flagSkin = 4;
					skinColor[1].classList.remove('ok');
					skinColor[1].classList.add('hide');
					skinColor[0].classList.remove('hide');
					skinColor[0].classList.add('ok');
					skin.style.background = 'url(img/skin/skin-4.png) center no-repeat';
					skin.style.backgroundSize = 'cover';
				}
			};

			for (let i=0; i<hairStyle.length; i++) {
				hairStyle[i].classList.remove('ok');
				hairStyle[i].classList.add('hide');
				};
				hairStyle[3].classList.remove('hide');
				hairStyle[3].classList.add('ok');

			nextHair.onclick = function() {
					if (hairStyle[3].classList.contains('ok')) {
						flagHair = 5;
						hairStyle[3].classList.remove('ok');
						hairStyle[3].classList.add('hide');
						hairStyle[4].classList.remove('hide');
						hairStyle[4].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-5.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[4].classList.contains('ok')) {
						flagHair = 6;
						hairStyle[4].classList.remove('ok');
						hairStyle[4].classList.add('hide');
						hairStyle[5].classList.remove('hide');
						hairStyle[5].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-6.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					} else if (hairStyle[5].classList.contains('ok'))  {
						flagHair = 4;
						hairStyle[5].classList.remove('ok');
						hairStyle[5].classList.add('hide');
						hairStyle[3].classList.remove('hide');
						hairStyle[3].classList.add('ok');
						hair.style.background = 'url(img/hair/construct/hair-4.png) center no-repeat';
						hair.style.backgroundSize = 'cover';
					}
			};

			prevHair.onclick = function() {
				if (hairStyle[3].classList.contains('ok')) {
					flagHair = 6;
					hairStyle[3].classList.remove('ok');
					hairStyle[3].classList.add('hide');
					hairStyle[5].classList.remove('hide');
					hairStyle[5].classList.add('ok');
					hair.style.background = 'url(img/hair/construct/hair-6.png) center no-repeat';
					hair.style.backgroundSize = 'cover';
				} else if (hairStyle[5].classList.contains('ok')) {
					flagHair = 5;
					hairStyle[5].classList.remove('ok');
					hairStyle[5].classList.add('hide');
					hairStyle[4].classList.remove('hide');
					hairStyle[4].classList.add('ok');
					hair.style.background = 'url(img/hair/construct/hair-5.png) center no-repeat';
					hair.style.backgroundSize = 'cover';
				} else if (hairStyle[4].classList.contains('ok'))  {
					flagHair = 4;
					hairStyle[4].classList.remove('ok');
					hairStyle[4].classList.add('hide');
					hairStyle[3].classList.remove('hide');
					hairStyle[3].classList.add('ok');
					hair.style.background = 'url(img/hair/construct/hair-4.png) center no-repeat';
					hair.style.backgroundSize = 'cover';
				}
			};

			for (let i=0; i<clothesStyle.length; i++) {
				clothesStyle[i].classList.remove('ok');
				clothesStyle[i].classList.add('hide');
				};
				clothesStyle[3].classList.remove('hide');
				clothesStyle[3].classList.add('ok');

			nextClothes.onclick = function() {
				if (clothesStyle[3].classList.contains('ok')) {
					flagClothes = 5;
					clothesStyle[3].classList.remove('ok');
					clothesStyle[3].classList.add('hide');
					clothesStyle[4].classList.remove('hide');
					clothesStyle[4].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-5.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				} else if (clothesStyle[4].classList.contains('ok')) {
					flagClothes = 6;
					clothesStyle[4].classList.remove('ok');
					clothesStyle[4].classList.add('hide');
					clothesStyle[5].classList.remove('hide');
					clothesStyle[5].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-6.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				} else if (clothesStyle[5].classList.contains('ok'))  {
					flagClothes = 4;
					clothesStyle[5].classList.remove('ok');
					clothesStyle[5].classList.add('hide');
					clothesStyle[3].classList.remove('hide');
					clothesStyle[3].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-4.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				}
			};

			prevClothes.onclick = function() {
				if (clothesStyle[3].classList.contains('ok')) {
					flagClothes = 6;
					clothesStyle[3].classList.remove('ok');
					clothesStyle[3].classList.add('hide');
					clothesStyle[5].classList.remove('hide');
					clothesStyle[5].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-6.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				} else if (clothesStyle[5].classList.contains('ok')) {
					flagClothes = 5;
					clothesStyle[5].classList.remove('ok');
					clothesStyle[5].classList.add('hide');
					clothesStyle[4].classList.remove('hide');
					clothesStyle[4].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-5.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				} else if (clothesStyle[4].classList.contains('ok'))  {
					flagClothes = 4;
					clothesStyle[4].classList.remove('ok');
					clothesStyle[4].classList.add('hide');
					clothesStyle[3].classList.remove('hide');
					clothesStyle[3].classList.add('ok');
					clothes.style.background = 'url(img/clothes/construct/clothes-4.png) center no-repeat';
					clothes.style.backgroundSize = 'cover';
				}
			};
		}


		//Формирование карточки на сайте

		let submit = document.getElementById('ready'),
			mainCards = document.querySelector('.main-cards'),
			mainCardItem = document.getElementsByClassName('main-cards-item'),

			newCard = document.createElement('div'),
			name = document.createElement('div'),
			age = document.createElement('div'),
			spanBio = document.createElement('span'),
			bio = document.createElement('div'),
			sex = document.createElement('div'),
			spanSex = document.createElement('span'),
			spanPolit = document.createElement('span'),
			views = document.createElement('div'),
			candidateBlock = document.createElement('div'),
			candidatePhoto = document.createElement('div'),
			result = document.createElement('div'),
			resultCount = document.createElement('div'),
			progress = document.createElement('div'),
			progressBar = document.createElement('div'),

			inputName = document.getElementById('name'),
			inputAge = document.getElementById('age'),
			select = document.getElementById('select'),
			inputBio = document.getElementById('bio');

			newCard.classList.add('main-cards-item');
			candidateBlock.classList.add('candidate-block');
			candidatePhoto.classList.add('photo');
			candidatePhoto.classList.add('photo-3');
			result.classList.add('result');
			resultCount.classList.add('result-count');
			progress.classList.add('progress');
			progressBar.classList.add('progress-bar');
			progressBar.classList.add('progress-bar-3');
			name.classList.add('name');
			age.classList.add('age');
			sex.classList.add('sex');
			views.classList.add('views');
			bio.classList.add('bio');
			bio.style.wordWrap = 'break-word';

		let progressBarOne = document.getElementsByClassName('progress-bar-1')[0],
			progressBarTwo = document.getElementsByClassName('progress-bar-2')[0],
			resultCountOne = document.getElementsByClassName('result-count')[0],
			resultCountTwo = document.getElementsByClassName('result-count')[1];

			progressBarOne.style.height = "0px";
			progressBarTwo.style.height = "0px";
			resultCountOne.innerHTML = '0%';
			resultCountTwo.innerHTML = '0%';


			newCard.appendChild(candidateBlock);
			candidateBlock.appendChild(candidatePhoto);
			candidateBlock.appendChild(result);
			result.appendChild(resultCount);
			resultCount.innerHTML = '0%';
			result.appendChild(progress);
			progress.appendChild(progressBar);
			newCard.appendChild(name);
			newCard.appendChild(age);
			newCard.appendChild(spanSex);
			newCard.appendChild(sex);
			newCard.appendChild(spanPolit);
			newCard.appendChild(views);
			newCard.appendChild(spanBio);
			newCard.appendChild(bio);


		submit.addEventListener('click', function(){

			for (let i=0; i<mainCardItem.length; i++) {
				mainCardItem[i].classList.remove('main-cards-item-active');
			};

			if ((+inputAge.value < 35) || (+inputAge.value > 70)) {
				alert('Кандидату должно быть не менее 35 и не более 70 лет');
			} else if (inputName.value.length < 10) {
				alert('Введите имя, фамилию и отчество через пробел');
			} else if (inputBio.value.length < 50 || inputBio.value.length > 250) {
				alert('Биография должна состоять не менее, чем из 50 символов, и не более, чем из 250 символов');
			}
			else {
				overlay.style.display = 'none';
				custom.style.display = 'none';

				progressBarOne.style.height = "0px";
				progressBarTwo.style.height = "0px";
				progressBar.style.height = "0px";
				resultCountOne.innerHTML = '0%';
				resultCountTwo.innerHTML = '0%';
				resultCount.innerHTML = '0%';

				mainCards.insertBefore(newCard, mainCardItem[1]);

				candidatePhoto.style.background = 'url(./img/clothes/construct/clothes-'+flagClothes+'.png) center no-repeat, url(./img/clothes/construct/shoes.png) center no-repeat, url(img/hair/construct/hair-'+flagHair+'.png) center no-repeat, url(img/skin/skin-'+flagSkin+'.png) center no-repeat';
				candidatePhoto.style.backgroundSize = 'cover';

				name.innerHTML = inputName.value;
				
				if (inputAge.value%10 == 1) {
					age.innerHTML = `${inputAge.value} год`;
				} else if (inputAge.value%10 == 2 ||inputAge.value%10 == 3 || inputAge.value%10 == 4) {
					age.innerHTML = `${inputAge.value} года`;
				} else {
					age.innerHTML = `${inputAge.value} лет`;
				};

				spanSex.innerHTML = 'Пол:';

				if (flagSex == 1) {
					sex.innerHTML = male.value;
				} else if (flagSex == 2) {
					sex.innerHTML = female.value;
				};

				spanPolit.innerHTML = 'Полит. взгляды:';
				views.innerHTML = select.value;

				spanBio.innerHTML = 'Биография';
				bio.innerHTML = inputBio.value;


			}			
		});






		// Голосование


		let vote = document.getElementById('voting');

		vote.addEventListener('click', function() {

			for (let i=0; i<mainCardItem.length; i++) {
				mainCardItem[i].classList.remove('main-cards-item-active');
			};

			function startHonestVotingOne(min, max)
			{
			  return Math.floor(Math.random() * (max - min) + min);
			};		

			let one = startHonestVotingOne(100,1);
			progressBarOne.style.height = `${one}%`;
			resultCountOne.innerHTML = `${one}%`;

			function startHonestVotingTwo(min, max)
			{
			  return Math.floor(Math.random() * (max - min) + min);
			};	

			let two = startHonestVotingTwo((100-one),1);
			progressBarTwo.style.height = `${two}%`;
			resultCountTwo.innerHTML = `${two}%`;

			let three = (100-(one+two));
			progressBar.style.height = `${three}%`;
			resultCount.innerHTML = `${three}%`;

			if (one>two && one>three) {
				mainCardItem[0].classList.add('main-cards-item-active');
			} else if (two>one && two>three) {
				mainCardItem[2].classList.add('main-cards-item-active');
			} else {
				mainCardItem[1].classList.add('main-cards-item-active');
			}

		});

		let crime = document.getElementById('crime');

		crime.addEventListener('click', function() {

			for (let i=0; i<mainCardItem.length; i++) {
				mainCardItem[i].classList.remove('main-cards-item-active');
			};

			function startCrimeVotingOne(min, max)
			{
			  return Math.floor(Math.random() * (max - min) + min);
			};		

			let one = startCrimeVotingOne(75,1);
			progressBarOne.style.height = `${one}%`;
			resultCountOne.innerHTML = `${one}%`;

			function startCrimeVotingTwo(min, max)
			{
			  return Math.floor(Math.random() * (max - min) + min);
			};	

			let two = startCrimeVotingTwo((75-one),1);
			progressBarTwo.style.height = `${two}%`;
			resultCountTwo.innerHTML = `${two}%`;

			let three = (100-(one+two));
			progressBar.style.height = `${three}%`;
			resultCount.innerHTML = `${three}%`;

			if (one>two && one>three) {
				mainCardItem[0].classList.add('main-cards-item-active');
			} else if (two>one && two>three) {
				mainCardItem[2].classList.add('main-cards-item-active');
			} else {
				mainCardItem[1].classList.add('main-cards-item-active');
			}
		});

		
		// Сброс карточки

		let reset = document.getElementById('reset');

		reset.onclick = resetCard;

		function resetCard () {
			progressBarOne.style.height = "0px";
			progressBarTwo.style.height = "0px";
			progressBar.style.height = "0px";
			resultCountOne.innerHTML = '0%';
			resultCountTwo.innerHTML = '0%';
			resultCount.innerHTML = '0%';

			flagSkin = 1;
			flagClothes = 1;
			flagHair = 1;

			for (let i=0; i<mainCardItem.length; i++) {
				mainCardItem[i].classList.remove('main-cards-item-active');
			};
			male.checked = true;
			female.checked = false;
			overlay.style.display = 'block';
			custom.style.display = 'flex';
			inputAge.value = '';
			inputBio.value = '';
			inputName.value = '';
			select.value = 'Либеральные';
			setMale();
		}

});