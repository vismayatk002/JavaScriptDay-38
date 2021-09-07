const prompt = require('prompt-sync')();
const month = prompt('Enter Month : ');
console.log(`${month}`);
const date = prompt('Enter Date : ');
console.log(`${date}`);

if((month < 6)  &&  (month > 3)  &&  (date < 20)){
    console.log("True");
}
else{
    console.log("False");
}