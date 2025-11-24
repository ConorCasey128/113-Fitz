import Card from "./Card.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.balance = 0;
  }
}
