import Deck from "./Objects/Deck.js";

const shuffleList = document.getElementById("shuffleList");
const shuffleBtn = document.getElementById("shuffle-btn");

const displayDeck = new Deck();

function render() {
  shuffleList.textContent = displayDeck.toString();
}

function shuffle() {
  displayDeck.shuffle();
  render();
}

render();
shuffleBtn.addEventListener("click", shuffle);
