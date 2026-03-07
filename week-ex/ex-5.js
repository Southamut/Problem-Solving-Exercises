// Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.
// "@#@@*"    --> "#"
// "かか何"   --> "何"
// "🐐🦊🐐" --> "🦊"

const firstUniqueChar = (text) => {
  let group = {};
  for (char of text) {
    if (!group[char]) {
      group[char] = [char];
    } else {
      group[char].push(char);
    }
  }
  //   console.log(group);

  let result = "";
  for (g in group) {
    if (group[g].length === 1) {
      result = g;
      break;
    }
  }

  console.log(result);
  return result;
};

text1 = "@#@@*";
text2 = "かか何*";
text3 = "🐐🦊🐐";
firstUniqueChar(text1);
firstUniqueChar(text2);
firstUniqueChar(text3);
