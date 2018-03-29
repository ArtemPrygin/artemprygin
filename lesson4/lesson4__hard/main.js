var arrMain = []; 
var i = prompt('Сколько массивов создать?','Введите число'); 
while(isNaN(i) || (typeof(i)==='object') || i=="") { 
i = prompt('Сколько массивов создать?','Введите нормальное целое число! Что непонятного??'); 

}; 

function summArr() { 
for (j=0; j<i; j++) { 
arrMain[j] = []; 
for (var k=0;k<5;k++){ 
arrMain[j][k] = Math.floor(Math.random() * (1000 - 1)); 
}; 
var summ = 0; 
for(k=0;k<5;k++){ 
summ = summ + parseInt(arrMain[j][k]); 
}; 
console.log(summ); 
} 
} 

summArr(); 
console.log(arrMain);