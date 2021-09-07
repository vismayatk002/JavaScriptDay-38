const prompt = require('prompt-sync')();
console.log(`1. Feet to Inch \n2. Feet to Meter \n3. Inch to Feet \n4. Meter to Feet`);
let operation = prompt('Select option : ');
console.log(`${operation}`);
let value = prompt('Enter value to convert : ');
console.log(`${value}`);
let result;
switch(operation){
    case "1" :
        result = value * 12;
		console.log('Value Feet to Inch : '+ value +'(ft) = ' + result + '(inch) ');
        break;
    case "2" :
        result = value * 0.3048;
        console.log('Value Feet to meter : '+ value +'(ft) = ' + result + '(meter) ');
        break;
    case "3" :
        result = value * 0.0833;
        console.log('Value Inch to Feet : '+ value +'(inch) = ' + result + '(ft) ');
        break;
    case "4" :
        result = value * 3.2808;
        console.log('Value meter to Feet : '+ value +'(meter) = ' + result + '(ft) ');
        break;
    default :
        console.log(`Invalid`);
}