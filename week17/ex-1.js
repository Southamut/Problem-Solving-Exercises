function findCommon(arr1, arr2) {
  let result = [];
  for (let num of arr1) {
    for (let n of arr2) {
      if (num === n) {
        result.push(num);
      }
    }
  }
  return result;
}

let result1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(result1); // [2, 3]

let result2 = findCommon([5, 6], [7, 8]);
console.log(result2); // []
