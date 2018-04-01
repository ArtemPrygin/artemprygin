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
		}
	});
});

let timerAnimation = setTimeout(myAnimation, 2000);
function myAnimation() {
	let block = document.getElementsByClassName('main-block')[0],
		width = 1000,
		height = 450,
		timerWidth = setInterval(widthChange, 5),
		timerHeight = setInterval(heightChange, 8);

		function widthChange() {
			if(width == 750) {
				clearInterval(timerWidth)
			} else {
				width--;
				block.style.width = width + 'px';
			}
		};

		function heightChange() {
			if(height == 300) {
				clearInterval(timerHeight)
			} else {
				height--;
				block.style.minHeight = height + 'px';
			}
		};

	timerAnimation = setTimeout(myAnimation, 2000);
};


myAnimation()