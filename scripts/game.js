const letters = document.querySelectorAll('.letter');

let displayWord = "";
let wrongTries = 0;
let gameOver = false;

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

function checkLetter(s) {
    return getRandomWord.indexOf(s) > -1
}

function checkWord(s) {
    return displayWord == getRandomWord;
}

function displayDashes(s) {
    const wordLength = s.length;
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = "";

    for (let i = 0; i < wordLength; i++) {
        answerSection.innerHTML += `<span>${s[i]}</span>`;
    }
}

function drawDashes() {
    displayWord = "_".repeat(selectedWord.length);
    displayDashes(displayWord)
}

drawDashes();

function draw() {
    wrongTries++;
    switch (wrongTries) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftHand();
            break;
        case 4:
            rightHand();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            wrongTries = 6;
            break;
    }
}
