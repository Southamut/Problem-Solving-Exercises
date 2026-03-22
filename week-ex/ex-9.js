const calculate = (input) => {
  const operators = ["+", "-", "*", "$"];
  const tokens = [];
  let currentNum = "";

  //split
  for (let char of input) {
    if (operators.includes(char)) {
      if (currentNum === "") {
        return "400: Bad request";
      }
      tokens.push(currentNum); //get num before syntax
      tokens.push(char); //get syntax operation
      currentNum = "";
    } else if ((char >= "0" && char <= "9") || char === ".") {
      currentNum += char;
    } else {
      return "400: Bad request"; // when find other char
    }
    // console.log(tokens);
  }
  tokens.push(currentNum); // เก็บตัวเลขตัวสุดท้าย

  // do * $ first
  let step1 = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*" || tokens[i] === "$") {
      let prev = Number(step1.pop()); //index 0 will always pop out
      let next = Number(tokens[++i]); //nex index from $ *

      // divide by zero
      if (tokens[i] === "$" && next === 0) {
        return "400: Bad request";
      }

      let res = null;
      if (tokens[i] === "*") {
        res = prev * next;
      } else {
        res = prev / next;
      }
      step1.push(res);
    } else {
      step1.push(tokens[i]);
    }
  }

  // do + -
  let result = Number(step1[0]);
  for (let i = 1; i < step1.length; i += 2) {
    let operation = step1[i];
    let nextVal = parseFloat(step1[i + 1]);
    if (operation === "+") result += nextVal;
    if (operation === "-") result -= nextVal;
  }

  return result;
};

// ทดสอบ
console.log(calculate("1000$2.5$5+5-5+6$6")); // "81"
console.log(calculate("5+5+5+5")); // "20"
console.log(calculate("10-9p")); // "400: Bad request"
