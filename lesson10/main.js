class options {
    constructor(height, width, bg, fontSize, textAlign, margin, color) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.margin = margin;
        this.color = color;
    }
    newBox(info) {
    	let wrap = document.getElementsByClassName('wrapper')[0];
    	wrap.style.cssText = `
    	display: flex; \
    	flex-wrap: wrap; \
    	`
        let box = document.createElement('div');
        box.style.cssText = `
        height: ${this.height};
		width: ${this.width};
		background-color: ${this.bg};
		text-align: ${this.textAlign}; 
		font-size: ${this.fontSize};
		margin: ${this.margin};
		color: ${this.color};

        `
        box.textContent = info;
        wrap.appendChild(box);
    }
}


let btn = document.getElementsByTagName('button')[0];	
btn.addEventListener('click', function () {
let heightPrompt = prompt('Давайте создадим новый див. Высоту какую делаем?');
while (Number.isNaN(Number(heightPrompt)) == true) {
	heightPrompt = parseInt(prompt('Вы тупенький? Давайте создадим новый див. Высоту какую делаем?'));
}
let widthPrompt = prompt('Ширину какую делаем?');
while (Number.isNaN(Number(widthPrompt)) == true) {
	widthPrompt = parseInt(prompt('Вы тупенький? Ширину какую делаем?'));
}
let bgPrompt = prompt('А фон какого цвета');
while (Number.isNaN(Number(bgPrompt)) == false) {
	bgPrompt = parseInt(prompt('Вы тупенький? Фон какого цвета?'));
}
let fontSizePrompt = prompt('Размер шрифта быстренько обозначьте');
while (Number.isNaN(Number(fontSizePrompt)) == true) {
	fontSizePrompt = parseInt(prompt('Вы тупенький? Какой размер шрифта?'));
}
let textAlignPrompt = prompt('Выравнивание текста какое?');
while (Number.isNaN(Number(textAlignPrompt)) == false) {
	textAlignPrompt = parseInt(prompt('Вы тупенький? Выравнивание текста какое?'));
}
let marginPrompt = prompt('Маржин определите');
while (Number.isNaN(Number(marginPrompt)) == true) {
	marginPrompt = parseInt(prompt('Вы тупенький? Маржин определите'));
}
let colorPrompt = prompt('А текст какого цвета?');
while (Number.isNaN(Number(colorPrompt)) == false) {
	colorPrompt = parseInt(prompt('Вы тупенький? Текст какого цвета делаем?'));
}

let magic = new options(`${heightPrompt}px`, `${widthPrompt}px`, `${bgPrompt}`, `${fontSizePrompt}px`, `${textAlignPrompt}`, `${marginPrompt}px`, `${colorPrompt}`);
magic.newBox(prompt('Напишите что-нибудь хорошее', 'Ваня Петриченко рулит'));
});

