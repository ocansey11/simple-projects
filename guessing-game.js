
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var secretNumber;
var numOfAttempts = 5;

function askGuess(number){
    number = parseInt(number)
    if(checkGuess(number)){
        console.log('You win')
        rl.close();
    }
    else{
        if(numOfAttempts === 0){
            console.log('You run out of Attempts. You lost')
            rl.close()
        }
        numOfAttempts--
        rl.question('Enter a guess', askGuess)
    }
}

function checkGuess(number){
    if(number > secretNumber){
        console.log('Too High!')
        return false
    }
    if(number < secretNumber){
        console.log('Too Low!')
        return false
    }
    if(number === secretNumber){
        console.log('Correct!')
        return true
    }
}

function randomInRange(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askRange(){
    rl.question('Enter a max value', (max) =>{
        rl.question('Enter min vaulue', (min) =>{
            min = Number(min)
            max = Number(max)
            secretNumber =  randomInRange(min, max)
            console.log("I'm thinking of a figure between " + min + ' and ' + max)
            rl.question('Enter a guess', askGuess)
        })
    })
}
rl.question('Start game', askRange)
