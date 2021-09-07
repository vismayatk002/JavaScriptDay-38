const prompt = require('prompt-sync')();
let number = prompt('Enter Harmonic value : ');
console.log(`${number}`);

let result = 0;
if(number != 0) {
    
    for(let i= 1; i<= number; i++) {
    
        result +=  +(1/i);
    }
    console.log(`Sum of Harmonic value : ` + result);
}
else {
    console.log(`Invalid Input`);
}