const text = ["Technology is best when it brings people together!",
    "Are you 1 or 0?",
    "If you're not part of the steamroller, you're part of the road",
"It's not a faith in technology. It's faith in people!",
"Innovation is the outcome of a habit, not a random act.",
"Learn as if you were to live forever!",
];
const outputElement = document.getElementById("JSAnimatedFirstPage");

function printTextLetterByLetter(word, index = 0) {
    if (index < word.length) {
        outputElement.textContent += word[index];
        index++;
        setTimeout(() => {
            printTextLetterByLetter(word, index);
        }, 80); // Adjust the delay here (in milliseconds)
    }
}


function printRandomWordLetterByLetter() {
    const randomIndex = Math.floor(Math.random() * text.length);
    const randomWord = text[randomIndex];
    outputElement.textContent = "";
    printTextLetterByLetter(randomWord);
}


printRandomWordLetterByLetter();


setInterval(printRandomWordLetterByLetter, 8000);