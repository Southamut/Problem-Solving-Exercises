function isPalindrome(word) {

    let reverstText = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverstText += word[i]
    }

    if (word === reverstText) {
        return true
    } else {
        return false
    }
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
