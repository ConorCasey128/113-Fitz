import Card from "./Objects/Card.js";
import { VALUES } from "./Objects/Constants.js";

const values = [...VALUES];
const demo = document.getElementById("demo");
const shuffleBtn = document.getElementById("shuffle-btn");

const newCard = document.getElementById("genCard");
const generateBtn = document.getElementById("generate-btn");

function render() {
  demo.textContent = values.join(", ");
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

render();
shuffleBtn.addEventListener("click", shuffle);
generateBtn.addEventListener("click", generateRandomCard);
