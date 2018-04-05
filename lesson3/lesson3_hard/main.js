var str = "урок-3-был слишком легким"; 
str = str[0].toUpperCase() + str.slice(1); 
str = str.slice(0,11) + str.slice(19); 
str = str.replace(/-/g," "); 
str = str.slice(0, 10) + 'o' + str.slice(10, 15) + 'o'; 
console.log(str); 
var arr = [20, 33, 1, 'Человек', 2, 3], 
summ = 0; 
for (let i=0;i < arr.length;i++) {
if (!isNaN(arr[i]) && arr[i] !== '' && arr[i] !== null) { 
var j = (arr[i])**3; 
summ += j; 
} 
}

console.log(Math.sqrt(summ));
