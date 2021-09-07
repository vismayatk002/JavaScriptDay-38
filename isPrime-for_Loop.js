const prompt = require('prompt-sync')();
let number = prompt('Enter a number : ');
console.log(`${number}`);
let flag = 1
if(number > 0){
    for(let i=2; i<(number/2); i++) {
        
        if((number % i) == 0){
            console.log(`Not a Prime number`);
            flag = 0;
            break;
        }	
    }
    if(flag == 1){
        console.log(`Prime number`);
    }
}
else{
    console.log(`Invalid`);
}