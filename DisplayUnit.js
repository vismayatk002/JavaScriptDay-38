const prompt = require('prompt-sync')();
const number = prompt('Enter Number for display unit : ');
console.log(`${number}`);
let count = number.toString().length;
if(count == 1){
    console.log(`Unit`);
}
else if(count == 2){
    console.log(`Ten`);
}
else if(count == 3){
    console.log(`Hundred`);
}
else if(count == 4){
    console.log(`Thousand`);
}
else if(count == 5){
    console.log(`Ten Thousand`);
}
else{
    console.log(`Invalid`);
}
