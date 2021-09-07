const prompt = require('prompt-sync')();
const year = prompt('Enter Year : ');
console.log(`${year}`);
let yearLength = year.toString().length;
console.log(yearLength);
if(yearLength == 4) {
    if((year%4 == 0) && (0 != year % 100) || (0 == year % 400)) {
        console.log(`Lear Year`);
    }
    else{
        console.log(`Not a Lear Year`);
    }
}