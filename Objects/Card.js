import {
  SUITS,
  VALUES,
  VALUE_RANKS,
  VALUE_CODES,
  SUIT_CODES,
} from "./Constants.js";

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
    this.rank = VALUE_RANKS[value];
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

    return `${this.value} of ${suitSymbols[this.suit]}`;
  }

  getCode() {
    return VALUE_CODES[this.value] + SUIT_CODES[this.suit];
  }

  
}
