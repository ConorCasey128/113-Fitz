import Card from "./Objects/Card.js";

export const exampleHands = [
  {
    name: "Royal Flush",
    cards: [
      { value: "Ace", suit: "spades" },
      { value: "King", suit: "spades" },
      { value: "Queen", suit: "spades" },
      { value: "Jack", suit: "spades" },
      { value: "10", suit: "spades" },
    ],
    description: "Ace, King, Queen, Jack and 10.",
    phrase: "It doesn't get better than this.",
  },
  {
    name: "Straight Flush",
    cards: [
      { value: "9", suit: "hearts" },
      { value: "8", suit: "hearts" },
      { value: "7", suit: "hearts" },
      { value: "6", suit: "hearts" },
      { value: "5", suit: "hearts" },
    ],
    description: "Five cards in a row, all the same suit.",
    phrase: "A straight but just better.",
  },
  {
    name: "Four of a Kind",
    cards: [
      { value: "Queen", suit: "clubs" },
      { value: "Queen", suit: "diamonds" },
      { value: "Queen", suit: "hearts" },
      { value: "Queen", suit: "spades" },
      { value: "9", suit: "spades" },
    ],
    description: "Four cards of the same value.",
    phrase: "If you have this, bet big.",
  },
  {
    name: "Full House",
    cards: [
      { value: "10", suit: "hearts" },
      { value: "10", suit: "spades" },
      { value: "10", suit: "diamonds" },
      { value: "7", suit: "clubs" },
      { value: "7", suit: "hearts" },
    ],
    description: "Three of one value and a pair of another.",
    phrase: "Strong, and very hard to beat.",
  },
  {
    name: "Flush",
    cards: [
      { value: "King", suit: "diamonds" },
      { value: "Jack", suit: "diamonds" },
      { value: "9", suit: "diamonds" },
      { value: "6", suit: "diamonds" },
      { value: "3", suit: "diamonds" },
    ],
    description: "Five cards all in the same suit.",
    phrase: "They don’t need to be in order - just matching suits.",
  },
  {
    name: "Straight",
    cards: [
      { value: "8", suit: "clubs" },
      { value: "7", suit: "spades" },
      { value: "6", suit: "hearts" },
      { value: "5", suit: "diamonds" },
      { value: "4", suit: "clubs" },
    ],
    description: "Five cards in numerical order, any suits.",
    phrase: "Clean, simple, surprisingly strong.",
  },
  {
    name: "Three of a Kind",
    cards: [
      { value: "5", suit: "hearts" },
      { value: "5", suit: "diamonds" },
      { value: "5", suit: "clubs" },
      { value: "Queen", suit: "spades" },
      { value: "8", suit: "diamonds" },
    ],
    description: "Three cards of the same value.",
    phrase: "Reliable mid-tier strength.",
  },
  {
    name: "Two Pair",
    cards: [
      { value: "Jack", suit: "clubs" },
      { value: "Jack", suit: "diamonds" },
      { value: "4", suit: "spades" },
      { value: "4", suit: "clubs" },
      { value: "9", suit: "hearts" },
    ],
    description: "Two different pairs and one extra card.",
    phrase: "One of the most common winning hands.",
  },
  {
    name: "One Pair",
    cards: [
      { value: "Ace", suit: "hearts" },
      { value: "Ace", suit: "diamonds" },
      { value: "7", suit: "clubs" },
      { value: "3", suit: "spades" },
      { value: "2", suit: "hearts" },
    ],
    description: "Two cards of the same value.",
    phrase: "Basic, but enough to win small pots.",
  },
  {
    name: "High Card",
    cards: [
      { value: "Ace", suit: "clubs" },
      { value: "Jack", suit: "hearts" },
      { value: "8", suit: "spades" },
      { value: "5", suit: "diamonds" },
      { value: "3", suit: "clubs" },
    ],
    description: "No pairs, no straight, no flush - just your highest card.",
    phrase: "The absolute baseline.",
  },
];

let currentHandIndex = 0;

function getCardImagePath(card) {
  const cardObj = new Card(card.suit, card.value);
  const code = cardObj.getCode();
  return `Images/Deck/poker-super1/${code}.svg`;
}
function renderCardImage(card, container) {
  const img = document.createElement("img");
  img.src = getCardImagePath(card);
  img.classList.add("card-image");
  img.style.width = "100px";
  img.style.height = "130px";
  container.appendChild(img);
}

function showHand(index) {
  const currentHand = exampleHands[index];

  document.getElementById("handTitleName").textContent =
    `#${index + 1} - ${currentHand.name}`;

  document.getElementById("handDescription").textContent =
    currentHand.description;

  document.getElementById("handPhrase").textContent = currentHand.phrase;

  const handContainer = document.getElementById("cardContainer");
  handContainer.innerHTML = " ";

  currentHand.cards.forEach((card) => {
    renderCardImage(card, handContainer);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentHandIndex = (currentHandIndex + 1) % exampleHands.length;
  showHand(currentHandIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentHandIndex =
    (currentHandIndex - 1 + exampleHands.length) % exampleHands.length;
  showHand(currentHandIndex);
});

showHand(0);

