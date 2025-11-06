const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

document.getElementById("demo").innerHTML = values.join(", ");

function shuffle() {
  for (let i = values.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = values[i];
    values[i] = values[j];
    values[j] = k;
  }
  document.getElementById("demo").innerHTML = values.join(", ");
}
