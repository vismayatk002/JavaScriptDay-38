const prompt = require('prompt-sync')();
let number = prompt('Enter number : ');
let fact=1
for( i = 2; i <= number; i++ ){
    fact = fact * i;
}
console.log('Factorial of ' + number + ' : ' + fact );