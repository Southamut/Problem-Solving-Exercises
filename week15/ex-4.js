function findMode(arr) {
    let countObj = {};
    // count same num
    for (let i = 0; i < arr.length; i++) {
        if (countObj[arr[i]] === undefined) {
            countObj[arr[i]] = 1
            // console.log(countObj);
        } else {
            countObj[arr[i]] += 1
        }
    }
    // console.log(countObj)

    // compare max num
    let max = 0
    let result = null
    for (obj in countObj) {
        if (max < countObj[obj]) {
            max = countObj[obj]
        }
    }

    // if has same max
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        if (countObj[currentNum] === max) {
            return currentNum
        }
    }
    return result
};

//ทำไม่ทันเวลา T___T

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7