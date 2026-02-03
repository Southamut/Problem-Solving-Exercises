// For the given set S its powerset is the set of all possible subsets of S.

// Given an array of integers nums, your task is to return the powerset of its elements.

// For nums = [1, 2], the output should be [[], [2], [1], [1, 2]].

const powerSetconvert = (nums) => {
  let result = [[]];

  for (let element of nums) {
    let length = result.length;
    for (let i = 0; i < length; i++) {
      //   console.log(element);
      //   console.log(result[i]);
      result.push([...result[i], element]);
    }
  }
  return result;
};

console.log(powerSetconvert([1, 2]));
