function todegF(value) {
    result = (value * (9 / 5)) + +32;
    return result;
}
function todegC(value) {
    result = (value - 32) + +(9 / 5);
    return result;
}
const prompt = require('prompt-sync')();
console.log(`1.degC to degF 2.degC to degF`);
let option = prompt('Choose an  option : ');
let value;
switch(option){
    case "1" :
        value = prompt('Enter value in degC :');
        result = todegF(value);
		console.log(value + 'in degF :'  + result);
        if(value > 32  &&  value < 212){
            console.log(result + 'is within the Freezing and Boiling point');
        }
        break;
    case "1" :
        value = prompt('Enter value in degF :');
        result = todegC(value);
        console.log(value + 'in degF :'  + result);
        if(value > 32  &&  value < 212){
            console.log(result + 'is within the Freezing and Boiling point');
        }
        break;
}
