import Card from "./Card.js";
import { SUITS, VALUES } from "./Constants.js";

export default class Deck {
  constructor() {
    this.cards = this.#buildOrderedDeck();
  }

  reset() {
    this.cards = this.#buildOrderedDeck();
    return this;
  }

  shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = cards[i];
      cards[i] = cards[j];
      cards[j] = k;
    }
  }

  toString() {
    return this.cards.map((card) => card.toString()).join(", ");
  }

  toStringGrouped() {}

  #buildOrderedDeck() {
    const deck = [];

    for (const suit of SUITS) {
      for (const value of VALUES) {
        deck.push(new Card(suit, value));
      }
    }
    return deck;
  }
}
