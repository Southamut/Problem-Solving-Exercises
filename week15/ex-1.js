function countVowels(text) {
    // const result = text.toLowerCase().split("")
    //     .filter((char) => {
    //         char === "a" ||
    //             char === "e" ||
    //             char === "i" ||
    //             char === "o" ||
    //             char === "u"
    //     })
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === "a" ||
            text[i].toLowerCase() === "e" ||
            text[i].toLowerCase() === "i" ||
            text[i].toLowerCase() === "o" ||
            text[i].toLowerCase() === "u") {
            count += 1
        }
    }

    return count
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2