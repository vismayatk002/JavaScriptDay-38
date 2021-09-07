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
    console.log( reverse );
    return reverse;
}

const prompt = require('prompt-sync')();
let number = prompt('Enter a Number  : ');
console.log(`${number}`);
let rev = isPalindrome(number);
if(number == rev){
    console.log(`Palindrome`);
}
else{
    console.log(`Not a Palindrome`);
}