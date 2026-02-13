// โจทย์: ให้ Array ของ String มาชุดหนึ่ง จงจัดกลุ่มคำที่เป็น "Anagram" กัน (Anagram คือคำที่มีตัวอักษรเหมือนกันเป๊ะ แค่สลับที่กัน)
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["ate","eat","tea"], ["nat","tan"], ["bat"]]

const anagram = (array) => {
  //sort input
  const sortTextArray = array.map((text) => text.split("").sort().join(""));
  console.log(sortTextArray);
  let group = {};
  for (let i in sortTextArray) {
    // console.log(i);
    if (!group[sortTextArray[i]]) {
      //create container
      group[sortTextArray[i]] = [array[i]];
    } else {
      //add same value in container
      group[sortTextArray[i]].push(array[i]);
    }
  }
  //create result
  const result = [];
  for (let key in group) {
    result.push(group[key]);
  }
  return result;
};

console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
