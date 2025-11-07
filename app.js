import Card from "./Objects/Card.js";
import Deck from "./Objects/Deck.js";
import { VALUES } from "./Objects/Constants.js";

const values = [...VALUES];
const shuffleList = document.getElementById("shuffleList");
const shuffleBtn = document.getElementById("shuffle-btn");

const newCard = document.getElementById("genCard");
const generateBtn = document.getElementById("generate-btn");

const newDeck = document.getElementById("genDeck");
const newDeckBtn = document.getElementById("deck-btn");

function render() {
  shuffleList.textContent = values.join(", ");
}

function shuffle() {
  for (let i = values.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = values[i];
    values[i] = values[j];
    values[j] = k;
  }
  render();
}

function generateRandomCard() {
  const randomCard = Card.constructRandomCard();
  newCard.textContent = randomCard.toString();
}

function loadDeck() {
  const deck = new Deck();
  newDeck.textContent = deck.toString();
}

render();
shuffleBtn.addEventListener("click", shuffle);
generateBtn.addEventListener("click", generateRandomCard);
newDeckBtn.addEventListener("click", loadDeck);
