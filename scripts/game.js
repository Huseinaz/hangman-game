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

function isLetterInWord(s) {
    return selectedWord.indexOf(s) > -1;
}

function isWordComplete(s) {
    return displayWord === selectedWord;
}

function drawDashes() {
    displayWord = "_".repeat(selectedWord.length);
    displayDashes(displayWord)
}

function displayDashes(s) {
    const wordLength = s.length;
    const answerSection = document.getElementById("answer-section");
    answerSection.innerHTML = "";

    for (let i = 0; i < wordLength; i++) {
        answerSection.innerHTML += `<span>${s[i]}</span>`;
    }
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

function displayLetter(letter) {
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letter) {
            str = displayWord.split('');
            str[i] = letter;
            str = str.join('');
            displayWord = str;
        }
    }
}

function checkGameStatus() {
    if (isWordComplete()) {
        gameOver = true;
        alert("You Won!");
        restartGame();
    } else if (wrongTries == 6) {
        gameOver = true;
        alert("You Lost!");
        restartGame();
    }
}

function restartGame() {
    setTimeout(function () {
        location.reload();
    }, 1000);
}

document.addEventListener("keypress", function(event) {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey >= 'a' && pressedKey <= 'z') {
        eventHandler(pressedKey);
    }
});

function eventHandler(letter) {
    if (!gameOver) {
        const lowercaseLetter = letter.toLowerCase();
        const letterIndex = lowercaseLetter.charCodeAt(0) - 97;

        if (letterIndex >= 0 && letterIndex <= 25) {
            const letter = letters[letterIndex];
            letter.classList.add("pressed");

            if (!isLetterInWord(lowercaseLetter)) {
                draw();
            } else {
                displayLetter(lowercaseLetter);
                displayDashes(displayWord);
            }
            checkGameStatus();
        }
    }
}
