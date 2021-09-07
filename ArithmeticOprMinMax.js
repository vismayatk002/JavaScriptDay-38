const prompt = require('prompt-sync')();
const number1 = prompt('Enter First Number : ');
console.log(`${number1}`);
const number2 = prompt('Enter Second Number : ');
console.log(`${number2}`);
const number3 = prompt('Enter Third Number : ');
console.log(`${number3}`);
let min,max;

let result1 = +number1 + (number2 * number3);
let result2 = (number1 % number2) + +number3;
let result3 = +number3 + (number1 / number2);
let result4 = (number1 * number2) + +number3;
if(result1 < result2 && result1 < result3 && result1 < result4){
    min = result1;
}
else if(result2 < result1 && result2 < result3 && result2 < result4){
    min = result2;
}
else if(result3 < result1 && result3 < result2 && result3 < result4){
    min = result3;
}
else{
    min = result4;
}

console.log(`Minimum of Results : ` + min);

if(result1 > result2 && result1 > result3 && result1 > result4){
    max = result1;
}
else if(result2 > result1 && result2 > result3 && result2 > result4){
    max = result2;
}
else if(result3 > result1 && result3 > result2 && result3 > result4){
    max = result3;
}
else{
    max = result4;
}

console.log(`Maximum of Results : ` + max);