import Deck from './deck.js'

const computerCardSlot = document.querySelector(".computer-card-slot") //reference to computer-card-slot card-slot in HTML class
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector('.computer-deck')
const playerDeckElement = document.querySelector('.player-deck')
const text = document.querySelector('text')



let playerDeck, computerDeck  //variables to be accessed anywhere

startGame()   //gets called right away
function startGame() {
 const deck = new Deck()
 deck.shuffle()

  const deckMidpoint = Math.ceil(deck.cards.length / 2)// the reason we have math.ciel is we want to divide an odd number (ie 51 cards. 26 would go to one deck, and 25 to another)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint)) // first 26 cards
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.cards.length)) // last 26 cards - remember the variable to cover .length here
  
  cleanBeforeRound()  // this clears up the page before every round and calls to the written function below
}


function cleanBeforeRound() {
   computerCardSlot.innerHTML =''
   playerCardSlot.innerHTML =''
   text.innerText = ''

   updateDeckCount()
}

function updateDeckCount(){
    computerDeckElement.innter
}