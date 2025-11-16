import Card from "./Objects/Card.js";
import Deck from "./Objects/Deck.js";
import { VALUES } from "./Objects/Constants.js";

const values = [...VALUES];
const shuffleList = document.getElementById("shuffleList");
const shuffleBtn = document.getElementById("shuffle-btn");
const cardContainer = document.getElementById("card-container");

function render() {
  shuffleList.textContent = values.join(", ");

  // Creating dummy card object to test new props
  const card1 = new Card("spades", "9");
  const code = card1.getCode();

  renderCardImage(card1);

  console.log(code);
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

function getCardImagePath(card) {
  const code = card.getCode();
  return `Images/Deck/poker-super1/${code}.svg`;
}

function renderCardImage(card) {
  cardContainer.innerHTML = "";

  const img = document.createElement("img");

  img.src = getCardImagePath(card);

  img.classList.add("card-image");

  cardContainer.appendChild(img);
}

render();
shuffleBtn.addEventListener("click", shuffle);
