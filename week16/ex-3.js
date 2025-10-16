function groupAndCalculate(numbers) {
    let result = {}
    //for even
    let multiplyEven = numbers.filter((num) => num % 2 === 0 && num !== 0)
    if (multiplyEven.length === 0) {
        result.even = 1
    } else {
        result.even = multiplyEven.reduce((cur, acc) => cur * acc)
    }

    //for odd
    const sumOdd = numbers.filter((num) => num % 2 !== 0)
    if (sumOdd.length === 0) {
        result.odd = 0
    } else {
        result.odd = sumOdd.reduce((cur, acc) => cur + acc)
    }

    // for zero
    const countZero = numbers.filter((num) => num === 0).length
    result.zero = countZero
    // console.log(multiplyEven)
    // console.log(sumOdd)
    // console.log(countZero)
    return result
};

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(result1); // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(result2); // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6]);
console.log(result3); // { even: 48, odd: 0, zero: 0 }