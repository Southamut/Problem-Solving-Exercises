function findLongestWord(text) {
  const textArr = text.split(" ");
//   console.log(textArr);
  let result = "";
  let max = -Infinity
  for (let i = 0; i < textArr.length; i++) {
    // console.log(textArr[i].length)
    if(textArr[i].length > max){
        // console.log(`${textArr[i].length} > ${max}`)
        max = textArr[i].length
        result = textArr[i]
    }
  }
  return result
}

let result1 = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2 = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"
