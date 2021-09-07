const prompt = require('prompt-sync')();
const number = prompt('Enter Number for display unit : ');
console.log(`${number}`);
let count = number.toString().length;
switch(count){
    case 1:
        console.log(`Unit`);
        break;
    case 2:
        console.log(`Ten`);
        break;  
    case 3:
        console.log(`Hundred`);
        break;
    case 4:
        console.log(`Thousand`);
        break; 
    case 5:
        console.log(`Ten Thousand`);
        break;
    default:
        console.log(`Invalid`);
} 