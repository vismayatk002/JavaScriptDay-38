let min,max;
for(let i=1; i<6; i++){
    let number = Math.floor(Math.random() * 1000) % 900;
    if(i == 1){
        min = number;
        max = number;
    }
    if(number > max){
        max = number;
    }
    else if(number < min){
        min = number;
    }
}
console.log("Maximum Number : " + max);
console.log("Minimum Number : " + min);