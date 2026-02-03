const plusOne = (str) => {
  const filterNum = str.split("").filter((num) => {
    if (typeof Number(num) === "number" && !Number.isNaN(Number(num))) {
      return num;
    }
  });
  if (filterNum.length === 0) {
    return str + 1;
  } else {
    const newValue = Number(filterNum.join("")) + 1;
    const preficString = str.slice(0, str.length - filterNum.length);
    return preficString + newValue;
  }
};

console.log(plusOne("foo"));
console.log(plusOne("foo23"));
console.log(plusOne("foo099"));

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
