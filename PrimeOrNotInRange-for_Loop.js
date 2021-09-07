const prompt = require('prompt-sync')();
let lower = prompt('Enter lower limit number : ');
let upper = prompt('Enter upper limit number : ');
for ( let i = lower; i < upper; i++ ){
    let flag = 1
    for(let j=2; j<i; j++) {
        
        if((i % j) == 0){
            flag = 0;
            break;
        }	
    }
    if(flag == 1){
        console.log( i );
    }
}
