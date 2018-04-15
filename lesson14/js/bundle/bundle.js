(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	// let tab = require('../parts/tab.js');
	let	ajax = require('../parts/ajax.js');
	let	slider = require('../parts/slider.js');
	let	calc = require('../parts/calc.js');
	let	modal = require('../parts/modal.js');
	let	scroll = require('../parts/scroll.js');
	let	timer = require('../parts/timer.js');

		tab();
		ajax();
		slider();
		calc();
		modal();
		scroll();
		timer();

});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function ajax() {


	  
	//FORM

	    let message = new Object();
	    message.loading = "Загрузка...";
	    message.success = 'Спасибо! Скоро мы с вами свяжемся!';
	    message.failure = 'Что-то пошло не так...';

	    let form = document.getElementsByClassName('main-form')[0],
	        input = form.getElementsByTagName('input'),
	        statusMessage = document.createElement('div'),
	        contactForm = document.getElementById('form'),
	        contactInput = contactForm.querySelectorAll('input');
	        statusMessage.classList.add('status');
	    



	    form.addEventListener('submit', function(event){

	    event.preventDefault();

	    form.appendChild(statusMessage);
	   

	    //AJAX

	    let request = new XMLHttpRequest();
	    request.open('POST', 'server.php');

	    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	    // подготовка данных к отправке
	    let formData = new FormData(form);
	    request.send(formData);

	    request.onreadystatechange = function(){
	        if(request.readyState < 4){
	            statusMessage.inerHTML = message.loading;
	        }
	        else if(request.readyState === 4){
	            if(request.status == 200 && request.status < 300){
	                statusMessage.innerHTML = message.success;
	                statusMessage.innerHTML = '<img src=\'img/ajax-loader.gif\'> ' + ' ' + message.success + ' '+ '<img src=\'img/ajax-loader.gif\'> ';
	                statusMessage.style.cssText=`\
	            text-align: center; \
	            margin-top: '20px'; \
	            display: flex; \
	            justify-content: space-around; \
	            align-items: center;\
	       
	      `;
	                statusMessage.style.textAlign = 'center';
	                statusMessage.style.marginTop = '50px';
	            }
	            else{
	                statusMessage.innerHTML = message.failure;
	            }
	        }
	    }

	    for(let i = 0; i < input.length; i++){
	        input[i].value = '';

	    }
	     close.addEventListener('click', function() {
	         statusMessage.innerHTML = '';
	     });
	});




	    // CONTACT FORM


	    contactForm.addEventListener('submit', function(event){

	    event.preventDefault();

	    contactForm.appendChild(statusMessage);
	   


	    //AJAX


	 let contactFormData;
	    for(let i = 0; i < contactInput.length; i++){
	        contactFormData += contactInput[i].value + ' ';
	        console.log(contactFormData);

	    }

	let json = JSON.stringify(contactFormData);
	console.log(json);

	    let request = new XMLHttpRequest();
	    request.open('POST', 'server.php');

	    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	    // подготовка данных к отправке
	    let formData = new FormData(contactForm);
	    request.send(json);

	    request.onreadystatechange = function(){
	        if(request.readyState < 4){
	            statusMessage.inerHTML = message.loading;
	        }
	        else if(request.readyState === 4){
	            if(request.status == 200 && request.status < 300){
	                statusMessage.innerHTML = message.success;
	                statusMessage.innerHTML = '<img src=\'img/ajax-loader2.gif\'> ' + ' ' + message.success + ' '+ '<img src=\'img/ajax-loader2.gif\'> ';
	                statusMessage.style.cssText=`\
	            text-align: center; \
	            margin-top: '20px'; \
	            display: flex; \
	            justify-content: space-around; \
	            align-items: center;\
	            color: #fff; \
	       
	      `;
	                statusMessage.style.textAlign = 'center';
	                statusMessage.style.marginTop = '50px';
	            }
	            else{
	                statusMessage.innerHTML = message.failure;
	            }
	        }
	    }


	    for(let i = 0; i < contactInput.length; i++){
	        contactInput[i].value = '';
	         setTimeout(function(){
	             statusMessage.innerHTML = '';
	           },2000);
	    }
	    

	    });
	}

	module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {

	// Calc

	    let people = document.getElementsByClassName('counter-block-input')[0],
	        days = document.getElementsByClassName('counter-block-input')[1],
	        select = document.getElementById('select'),
	        total = document.getElementById('total');


	    people.addEventListener('change', function() {

	        if (people.value == '' || days.value == '' || people.value < 0 || days.value < 0 || !Number.isInteger(+people.value) || !Number.isInteger(+days.value)) {
	            total.innerHTML = 0;

	        } else {
	            total.classList.add('blabla');
	            setTimeout(function() {
	              total.classList.remove('blabla');
	            }, 1000);
	            total.innerHTML = (+this.value + +days.value)* (+select.value * 10000);
	        }
	    });

	    days.addEventListener('change', function() {
	        if (people.value == '' || days.value == '' || people.value < 0 || days.value < 0 || !Number.isInteger(+people.value) || !Number.isInteger(+days.value)) {
	            total.innerHTML = 0;
	        } else {
	            total.classList.add('blabla');
	            setTimeout(function() {
	              total.classList.remove('blabla');
	            }, 1000);
	            total.innerHTML = (+this.value + +people.value)* (+select.value * 10000);
	        }
	    });

	    select.addEventListener('change', function() {
	        if (people.value == '' || days.value == '' || people.value < 0 || days.value < 0 || !Number.isInteger(+people.value) || !Number.isInteger(+days.value)) {
	            total.innerHTML = 0;
	        } else {
	            total.classList.add('blabla');
	            setTimeout(function() {
	              total.classList.remove('blabla');
	            }, 1000);
	            total.innerHTML = (+people.value + +days.value)* (+this.value * 10000);
	        }
	    });
	}

	module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {


	//MODAL
	     
	
	 let more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close'),
	    popup = document.querySelector('.popup'),
	    description = document.getElementsByClassName('description-btn'),
	    flag = 2;

	    // overlay.style.transform = "translate(-350%)";


	more.addEventListener('click', function() {
	    flag = 0;
	    console.log(flag)
	    overlay.style.display = 'block';
	    // overlay.style.transform = "translate(0%)";
	    overlay.classList.remove('scaleUp');
	    overlay.classList.remove('fadeOut');
	    overlay.classList.remove('scaleDown');
	    overlay.classList.add('fade');
	    // this.classList.add('more-splash');
	    // overlay.style.transition = 'all .5s';
	    // overlay.style.backgroundColor = 'rgba(0,0,0,.8)';
	    document.body.style.overflow = 'hidden';
	   




	});
	for (let i = 0; i < description.length; i++) {
	    description[i].addEventListener('click', function() {
	      
	        flag = 1;
	        console.log(flag)
	        document.body.style.overflow = 'hidden';
	        overlay.style.display = 'block';
	        overlay.classList.remove('fade');
	        overlay.classList.remove('fadeOut');
	        overlay.classList.remove('scaleDown');
	        overlay.classList.add('scaleUp');

	     
	        
	    });

	}



	close.addEventListener('click', function() {
	     document.body.style.overflow = '';
	     console.log(flag)
	    if(flag < 1){
	        overlay.classList.remove('fade');
	        overlay.classList.remove('scaleDown');
	        overlay.classList.remove('scaleUp');
	        overlay.classList.add('fadeOut');
	            setTimeout(function(){
	                overlay.style.display = 'none';
	       },2000);

	    }
	    else{
	            overlay.classList.remove('fade');
	            overlay.classList.remove('scaleDown');
	            overlay.classList.remove('scaleUp');
	            overlay.classList.add('scaleDown');
	            setTimeout(function(){
	                overlay.style.display = 'none';
	       },2000);
	    }
	     
	     
	       });
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll() {


	//SCROLL 

	let mainBlock = document.getElementsByClassName('main-block')[0],
	    menu = document.getElementsByTagName('nav')[0],
	    content = document.getElementsByClassName('content')[0];

	menu.addEventListener('click', (event) => {
	    event.preventDefault();

	    function animate(draw, duration) {
	        let start = performance.now();
	        duration = duration || 1000;
	        requestAnimationFrame(function animate(time) {
	            let timePassed = time - start;

	            if (timePassed > duration) {
	                timePassed = duration;
	            }
	            draw(timePassed);

	            if (timePassed < duration) {
	                requestAnimationFrame(animate);

	            }
	        });

	    };



	    let target = event.target.getAttribute('href'),
	        linkToScroll = document.querySelectorAll('[href^="#"]'),
	        idToScroll = document.querySelectorAll('*[id]'),
	        block = document.getElementById('about'),
	        str = target.slice(1);

	    for (let i = 0; i < idToScroll.length; i++) {
	        let idToScrollThis = idToScroll[i];
	        if (str === idToScrollThis.id) {
	            animate(function(timePassed) {
	                window.scrollBy(0, (idToScrollThis.getBoundingClientRect().top - 100) / 20);
	            }, 2000);
	        }
	    }
	});
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider() {
	


	// Slider

	let slideIndex = 1,
	    slides = document.getElementsByClassName('slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dots = document.getElementsByClassName('dot');

	    showSlides(slideIndex);

	    function showSlides (n) {
	        if (n>slides.length) {
	            slideIndex = 1;
	        };
	        if (n<1) {
	            slideIndex = slides.length;
	        };
	        for (let i=0; i<slides.length; i++) {
	            slides[i].style.display = 'none';
	        }
	        for (let i=0; i<dots.length; i++) {
	            dots[i].classList.remove('dot-active');
	        }
	        slides[slideIndex-1].style.display = 'block';
	        dots[slideIndex-1].classList.add('dot-active');
	    }

	    function plusSlides (n) {
	        showSlides(slideIndex += n);
	    }
	    
	    prev.addEventListener('click', function() {
	        plusSlides(-1)
	    });

	    next.addEventListener('click', function() {
	        plusSlides(1)
	    });

	    function currentSlide(n) {
	        showSlides(slideIndex = n)
	    }

	    dotsWrap.addEventListener('click', function(event) {
	        for (let i=0; i<dots.length+1; i++) {
	            if(event.target.classList.contains('dot') && event.target==dots[i-1]) {
	                currentSlide(i);
	            }
	        }
	    });
	    }

	module.exports = slider;
},{}],7:[function(require,module,exports){
function timer() {
	



	// TIMER

	let deadline = '2018-04-05';

	function getTimeRemaining(endtime) {
	    let t = Date.parse(endtime) - Date.parse(new Date()),
	        seconds = Math.floor((t / 1000) % 60),
	        minutes = Math.floor((t / 1000 / 60) % 60),
	        hours = Math.floor((t / (1000 * 60 * 60)));

	    return {
	        'total': t,
	        'hours': hours,
	        'minutes': minutes,
	        'seconds': seconds
	    }

	}


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
	    }
	    let timeInterval = setInterval(updateClock, 1000);

	    updateClock();

	}

	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
