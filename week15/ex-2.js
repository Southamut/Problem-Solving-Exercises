function sumEvenNumbers(numbers) {
    const result = numbers.filter((num) => num % 2 === 0).reduce((cur, acc) => cur + acc)
    return result
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28