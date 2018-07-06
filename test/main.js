let img = document.getElementsByTagName('img'),
	prev = document.createElement('button'),
	next = document.createElement('button'),
	prevnext = document.getElementsByClassName('prevnext')[0],
    currentSlide = 1,
	man = document.getElementsByTagName('button')[0],
	woman = document.getElementsByTagName('button')[1];
	
	prevnext.appendChild(prev);
	prevnext.appendChild(next);
    prev.innerHTML = 'Назад';
    next.innerHTML = 'Вперед';


    function nextSlide (a) {
        if (a>img.length) {
            currentSlide = 1;
            console.log(2)
        };
        if (a<1) {
            currentSlide = img.length;
        }
        for (let i=0; i<img.length; i++) {
            img[i].style.display = 'none';
        }
        img[currentSlide-1].style.display = 'block';
    }

    nextSlide(currentSlide);

    function plusSlides (a) {
        nextSlide(currentSlide += a);
    };

    prev.addEventListener('click', function() {
            plusSlides(-1)
        });

    next.addEventListener('click', function() {
            plusSlides(1)
        });

let main = document.getElementsByClassName('main')[0],
    boss = document.getElementsByClassName('boss')[0],
    div2 = main.cloneNode(true);

boss.appendChild(div2);