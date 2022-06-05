const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream,',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake,',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza,',
        img: './images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream,',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake,',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza,',
        img: './images/pizza.png'
    }
]

let cardsChosen = []

cardArray.sort(()=> 0.5 - Math.random())
let cardsChosenID = []
let cardWon = []
const gridDisplay=document.querySelector('#grid');
const resultDisplay = document.getElementById('result')


const createBoard = () =>{
   
    for(let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','./images/blank.png')
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card)
    }
       
}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenID[0]
    const optionTwoId = cardsChosenID[1]
    if(optionOneId===optionTwoId){
        alert("You have clicked the same image!")
    }
    if(cardsChosen[0]===cardsChosen[1]){
        alert("you found a match")
        cards[optionOneId].setAttribute('src', './images/white.png');
        cards[optionTwoId].setAttribute('src', './images/white.png');
        cards[cardsChosenID[0]].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', './images/blank.png');
        cards[optionTwoId].setAttribute('src', './images/blank.png');
        alert("sorry try again")
    }
    cardsChosenID = []
    cardsChosen = []
    if(cardWon.length === cardArray.length /2){
        resultDisplay.innerHTML = 'Congratulations'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenID.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}


createBoard()


