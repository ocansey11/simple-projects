
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = 4;

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
// console.log(checkGuess(4))


function askGuess(number){
    number = parseInt(number)
    if(checkGuess(number)){
        console.log('You win')
        rl.close();
    }
    else{
        rl.question('Enter a guess', askGuess)

    }

}

rl.question('Enter a guess', askGuess)
