// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

// X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
// X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
// X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
// X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
// X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
// The returning output is the sum of the final transformation (here 9).

const minSum = (array) => {
  //check min array
  let calArray = [...array];
  let result = null;
  let [maxPosition, minTemp, maxTemp] = findMinMax(calArray);
  while (maxTemp !== minTemp) {
    calArray[maxPosition] = maxTemp - minTemp;
    [maxPosition, minTemp, maxTemp] = findMinMax(calArray);
    console.log(calArray);
  }
  result = calArray.reduce((acc, curr) => acc + curr);
  console.log(`The result is ${result}`);
  return result;
};

const findMinMax = (array) => {
  let minTemp = Infinity;
  let maxTemp = -Infinity;
  let maxPosition = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxTemp) {
      maxTemp = array[i];
      maxPosition = i;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minTemp) {
      minTemp = array[i];
    }
  }
  console.log(`Loop`);
  console.log(maxTemp);
  console.log(maxPosition);
  console.log(minTemp);
  return [maxPosition, minTemp, maxTemp];
};

X = [6, 9, 21];
minSum(X);
Y = [6, 9, 12, 18, 24];
minSum(Y);
