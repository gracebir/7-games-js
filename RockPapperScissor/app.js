const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let result 
possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoise()
    getResult()
}))

const generateComputerChoise = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        computerChoice = 'rock'
    } else if(randomNumber === 1){
        computerChoice = 'scissors'
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () =>{
    if(computerChoice === userChoice){
        result = 'its a draw!'
    }
    else if(computerChoice==='rock' && userChoice ==='paper'){
        result = 'you win!'
    }else if(computerChoice==='paper' && userChoice ==='rock'){
        result = 'you lose!'
    }else if(computerChoice==='paper' && userChoice ==='scissors'){
        result = 'you win!'
    }else if(computerChoice==='scissors' && userChoice ==='rock'){
        result = 'you win!'
    }
    else if(computerChoice==='scissors' && userChoice ==='paper'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}