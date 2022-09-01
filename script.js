import Deck from './deck.js'

const computerCardSlot = document.querySelector(".computer-card-slot") //reference to computer-card-slot card-slot in HTML class

startGame() {  //gets called right away
function startGame()
  const deck = new Deck()
  deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfcards/2) // the reason we have math.ciel is we want to divide an odd number (ie 51 cards. 26 would go to one deck, and 25 to another)
}

computerCardSlot.appendChild(deck.cards[0].getHTML()) //this grabs the first card in our deck, the color of the suit, and appends it to that div class area