const head = 1;
const tail = 0;
let randomNumber = Math.floor(Math.random() * 10) % 2;
if(randomNumber == 1){
    console.log("Head");
}
else{
    console.log("Tail");
}