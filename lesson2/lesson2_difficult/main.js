var arr = ['123', '234', '345', '456', '567', '618', '789']; 
for (var i = 0; i < arr.length; i++) { 
if (arr[i].startsWith('3') || arr[i].startsWith('7')) { 
console.log(arr[i]); 
} 
} 

function getWeekDay(date) {
    date = date || new Date();
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var day = date.getDay();

    return days[day];
}

var date = new Date();
alert('Привет, бро. Сейчас ты увидишь дни недели. И курсивом тебе покажется именно сегодяшний день'); 


var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
var j = 0;
while (j < 7) {
	if (week[j] == getWeekDay(date)) {
		document.write('<span style="font-style: italic">' + week[j] + '</span>' + '<br>');
	}
	else if (j==5 || j==6) {
		document.write('<span style="font-weight: 700">' + week[j] + '</span>' + '<br>');
	}
	else {
		document.write('<span>' + week[j] + '</span>' + '<br>');
	};
	j++;
};

