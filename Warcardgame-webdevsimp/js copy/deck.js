 // create a global static variable which hold the values and we combine these together to create cards
 
 const SUITS = ["♠", "♣", "♥", "♦"]
 const VALUES = ["A", "2", "3", "4", "5","6","7","8","9","10","J","Q","K"] 
 // this will contain different variable. cards are being passed into the constructor as an empty array
 // but we want this to be flexible enough to deal with a pile of cards
 
 export default class Deck {     
   constructor(cards = freshDeck()) {
    this.cards = cards      
   }
   
  //(NOT:)this.cards.sort((a,b) => Math.random() - .5) - some cards in our deck may appear more in our deck more often instead of being truly random
  // encapsilate cards.length in a "getter" 
  
   get numberOfCards() {
    return this.cards.length
   }

    shuffle() {
      for (let i = this.numberOfCards -1; i> 0; i--) { // we don't actually need to flip the final card, all will eventually be flipped in the loop
        const newIndex = Math.floor(Math.random() * (i+1)) //take the current card you are on and flip it with an earlier card in the deck. multiply by index + 1. so if they are at index 30, random will pick somewhere between 0-30. to make sure it's an integer use math.floor
        const oldValue = this.cards[newIndex] // swap current card with new card
        this.cards[newIndex] = this.cards[i] 
        this.cards[i] = oldValue //oldValue is an intermediate value to store and swap index of cards
      } 
    }
  }

 
 class Card {
   constructor(suit, value) {
     this.suit = suit
     this.value = value
   }

   get color(){
    return this.suit === '♣' || this.suit === '♠' ? 'black'
   }

   function getHTML(){
     const cardDiv = document.createElement('div')
     cardDiv.innerText = this.suit
     cardDiv.classList.add("card")
   }
 }

 <div class="card red" data-value="9 ♥">
      ♥
      </div>

 // flat map takes all of your arrays and condenses them into one array with all the values flattened)
 // if i just used regular map, it would end up returning 4 seperate arrays of 13 each instead of 1 array of 52
 function freshDeck(){
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
 }




