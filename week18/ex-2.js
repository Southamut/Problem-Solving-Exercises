// โจทย์: หาความยาวของ Substring ที่ยาวที่สุดที่ตัวอักษรในนั้นไม่ซ้ำกันเลย
// Input: "abcabcbb"
// Output: 3(มาจาก "abc")
// Key Point: โจทย์นี้วัดเรื่อง Sliding Window Technique  หากใช้ Loop ซ้อนกัน 2 ชั้น($O(n ^ 2)$) ผู้สัมภาษณ์อาจจะขอให้คุณ Optimize ให้เป็น $O(n)$

const substringCount = (text) => {
  //group string
  let maxSub = {};
  let group = 1;
  for (let char of text) {
    console.log(char);
    if (!maxSub[group]) {
      maxSub[group] = [char];
    } else if (maxSub[group] && !maxSub[group].includes(char)) {
      maxSub[group].push(char);
    } else {
      group += 1;
      maxSub[group] = [char];
    }
  }

  //find max string
  let maxGroup = null;
  let maxLength = -Infinity;
  for (let g in maxSub) {
    if (maxSub[g].length > maxLength) {
      maxLength = maxSub[g].length;
      maxGroup = g;
    }
  }
  let sortedMaxSub = [...maxSub[maxGroup]];

  return `The Longest Substring is ${maxLength} from ${sortedMaxSub.join("")}`;
};

console.log(substringCount("abcabcbb"));
