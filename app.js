const num1 = prompt("Enter the maximum Rage of the number to gussesing");

let num2 = prompt("Enter the Number to be guessed");

let guess = Math.floor(Math.random() * num1 + 1);
while (true) {
  if (num2 == guess) {
    console.log("Right!! You Guessed it!");
    break;
}

     else if(num2=='quit'){
        console.log('You quited')
        break;
     }
     else if(guess < num2 ){
        num2= prompt('You guess wrong. Hint: your number is too big');
     }
     else{
        num2=prompt('You guess wrong. Hint: your number is too small');
     }
}