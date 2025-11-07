import { SUITS, VALUES } from "./Constants.js";

export default class Card {
  constructor(suit, value) {
    if (!SUITS.includes(suit)) {
      throw new Error(`Invalid Suit ${suit}`);
    }
    if (!VALUES.includes(value)) {
      throw new Error(`Invalid Value ${value}`);
    }

    this.suit = suit;
    this.value = value;
  }

  static constructRandomCard() {
    const suit = SUITS[Math.floor(Math.random() * SUITS.length)];
    const value = VALUES[Math.floor(Math.random() * VALUES.length)];

    return new Card(suit, value);
  }

  toString() {
    const suitSymbols = {
      hearts: "♥",
      diamonds: "♦",
      clubs: "♣",
      spades: "♠",
    };
    return `${this.value} of ${this.suit} ${suitSymbols[this.suit]}`;
  }
}
