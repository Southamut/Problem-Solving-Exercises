function reverseString(text) {
    textArray = text.split("");
    reverstText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverstText += text[i]
    }
    return reverstText
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"