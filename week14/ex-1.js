function isEvenNumber(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

let result1 = isEvenNumber(4);
console.log(result1); // true

let result2 = isEvenNumber(7);
console.log(result2); // false