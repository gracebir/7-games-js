const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeleft = document.querySelector('#time-left');
const score = document.querySelector("#score");
let currentTime = 60
let result = 0;
let hitPosition
let timeId = null;
function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown', ()=>{
        if(square.id == hitPosition){
            result++
            score.textContent = result;
            hitPosition = null
        }
    })
})

function moveMole(){
    
    timeId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
    currentTime--;
    timeleft.textContent = currentTime;
    if(currentTime === 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert("GAME OVER, your score is "+result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)