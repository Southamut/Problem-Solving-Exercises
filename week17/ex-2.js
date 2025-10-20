function removeDuplicates(arr) {
  let stackObj = {};
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (stackObj[arr[i]] === undefined) {
      stackObj[arr[i]] = arr[i];
    }
  }
  for (let num in stackObj){
    result.push(Number(num))
  }
  return result;
}

let result1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(result1); // [1, 2, 3]

let result2 = removeDuplicates([5, 5, 5, 5]);
console.log(result2); // [5]
