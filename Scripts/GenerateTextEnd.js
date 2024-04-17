const text1 = ["Tell me and I forget, teach me and I may remember, involve me and I learn!"];
const outputElement1 = document.getElementById("EndText");

function printTextLetterByLetterEnd(word, index = 0) {
    if (index < word.length) {
        outputElement1.textContent += word[index];
        index++;
        setTimeout(() => {
            printTextLetterByLetterEnd(word, index);
        }, 80); // Adjust the delay here (in milliseconds)
    } else {
        setTimeout(() => {
            outputElement1.textContent = ""; // Clear the text when finished
            printTextLetterByLetterEnd(word); // Restart the printing process
        }, 4000); // Adjust the delay before restart (in milliseconds)
    }
}

printTextLetterByLetterEnd(text1[0]);