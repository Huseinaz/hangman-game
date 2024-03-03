const letters = document.querySelectorAll('.letter');

const words = [
    "red",
    "tree",
    "apple",
    "boy",
    "girl"
];

const selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

function handleClick() {
    eventHandler(this.textContent);
}

letters.forEach(function (letter) {
    letter.addEventListener("click", handleClick);
})
