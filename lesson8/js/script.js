window.addEventListener('DOMContentLoaded', function() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i=a; i<tabContent.length;i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	};

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i=0;i<tab.length;i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});

	let deadline = '2018-04-08';
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000)%60),
			minutes = Math.floor((t/1000/60)%60),
			hours = Math.floor((t/(1000*60*60)));
			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds,
			};		
	};

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
				hours.innerHTML = '00';
		        minutes.innerHTML = '00';
			    seconds.innerHTML = '00';
				clearInterval(timeInterval);
			}
		};

		updateClock();
		let timeInterval = setInterval(updateClock, 1000);		
	};
	setClock('timer',deadline);

	function animate(draw, duration) {
	    let start = performance.now();
	    requestAnimationFrame(function animate(time) {
	        let timePassed = time - start;
	        if (timePassed > duration) {
	            timePassed = duration;
	        }
	        draw(timePassed);
	        if (timePassed < duration) {
	            requestAnimationFrame(animate);
	        }
	    })
	};
	
	let menu = document.getElementsByTagName('nav')[0];
	 menu.addEventListener('click', function(event) {
	    event.preventDefault();
	    animate(function(timePassed) {
	        let target = event.target;
	      if (target.tagName = 'li') {
	      	console.log(target.getAttribute('href').slice(1));
	        let section = document.getElementById(target.getAttribute('href').slice(1));
	          window.scrollBy(0, section.getBoundingClientRect().top / 20);
	          console.log(section.getBoundingClientRect().top)
	      }  
	    }, 1000)
	    
	 })

});






// let timerAnimation = setTimeout(myAnimation, 2000);
// function myAnimation() {
// 	let block = document.getElementsByClassName('main-block')[0],
// 		width = 1000,
// 		height = 450,
// 		timerWidth = setInterval(widthChange, 5),
// 		timerHeight = setInterval(heightChange, 8);

// 		function widthChange() {
// 			if(width == 750) {
// 				clearInterval(timerWidth)
// 			} else {
// 				width--;
// 				block.style.width = width + 'px';
// 			}
// 		};

// 		function heightChange() {
// 			if(height == 300) {
// 				clearInterval(timerHeight)
// 			} else {
// 				height--;
// 				block.style.minHeight = height + 'px';
// 			}
// 		};

// 	timerAnimation = setTimeout(myAnimation, 2000);
// };


// myAnimation()