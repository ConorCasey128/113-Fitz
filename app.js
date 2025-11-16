import Card from "./Objects/Card.js";
import Deck from "./Objects/Deck.js";
import { VALUES } from "./Objects/Constants.js";

const values = [...VALUES];
const shuffleList = document.getElementById("shuffleList");
const shuffleBtn = document.getElementById("shuffle-btn");

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

render();
shuffleBtn.addEventListener("click", shuffle);
