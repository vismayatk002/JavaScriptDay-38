let power = 1;
		
const prompt = require('prompt-sync')();
let limit = prompt('Enter the limit : ');
console.log(`${limit}`);
if( limit >= 0  && limit <= 31){

    for(let i= 0; i<= limit; i++){
        console.log('2^' + i + ' = ' + power);
        power = (2 * power) ;
    }
}
else{
    console.log(`Invalid`);
}