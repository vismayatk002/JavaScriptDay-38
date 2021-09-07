function isPrime(number){
    let flag = 1
    let i = 2;
    let returnValue;
    if(number > 0){
        while(i < number){    
            if((number % i) == 0){
                flag = 0;
                break;
            }	
            i += +1;
        }
        if(flag == 1){
           returnValue = true;
        }
        else{
            returnValue = false;
        }
    }
    else{
        console.log(`Invalid`);
        returnValue = false;
    }
    return returnValue;
}
function isPalindrome(number){
    let reverse = 0;
    let reminder;
    let i = 0;
	while(number != 0){
        reminder = number % 10;
        reverse = (reverse * 10) + +reminder;
        number = Math. floor(number / 10);
        i += +1;
    }
    return reverse;
}

const prompt = require('prompt-sync')();
let number = prompt('Enter a Number  : ');
// console.log(`${number}`);
if(isPrime(number) == true){
    console.log(`Number is Prime`);
    let rev = isPalindrome(number);
    if(isPrime(rev) == true){
        console.log(`Palindrome is prime`);
    }
    else{
        console.log(`Palindrome is not prime`);
    }
}else{
    console.log(`Number is not prime`);
}
