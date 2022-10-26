
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomInRange(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const secretNumber = randomInRange()

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


// function askRange(){
//     rl.question('Enter min value', (min) =>{
//         min =  Math.ceil(min)
//         rl.question('Enter max vaulue', (max) =>{
//             max =   Math.floor(max)
//             return Math.floor(Math.random() * (max - min +1) + min)
//         })
//         rl.close()
//     })
// }
