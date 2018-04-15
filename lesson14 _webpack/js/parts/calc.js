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