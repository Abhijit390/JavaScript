// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

//'prompt' takes string value from user and if user wants number then just put sign infront of prompt '+prompt'

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}