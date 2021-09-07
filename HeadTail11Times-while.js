const head = 1;
const tail = 0;
let headCount = 0;
let tailCount = 0;
let i = 0;
while(headCount < 11 && tailCount < 11){
    let randomNumber = Math.floor(Math.random() * 10) % 2;
    if(randomNumber == 1){
        headCount += +1;
    }
    else{
        tailCount += +1;
    }
}
if(headCount == 11){
    console.log('Head Wins !');
}
else{
    console.log('Tail Wins !');
}