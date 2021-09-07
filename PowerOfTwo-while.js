let power = 1;
const prompt = require('prompt-sync')();
let limit = prompt('Enter the limit : ');
console.log(`${limit}`);
let i = 0;
if( limit >= 0  && limit <= 31){
    while(i<= limit){
        console.log('2^' + i + ' = ' + power);
        if(power == 256){
            break;
        }
        power = (2 * power) ;
        i = i + +1;
    }
}
else{
    console.log(`Invalid`);
}