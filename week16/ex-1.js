function capitalizeWords(sentence) {
    let result = ""
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            result += sentence[i].toUpperCase();
        } else if (sentence[i] === " ") {
            result += ` ${sentence[i + 1].toUpperCase()}`
            i++
        } else {
            result += sentence[i]
        }
    }
    return result
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"