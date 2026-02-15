// 1. Longest Consecutive Sequenceหาความยาวของลำดับตัวเลขที่เรียงต่อกันยาวที่สุดใน Array(โดยไม่จำเป็นต้องเรียงกันมาตั้งแต่แรก)
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4(มาจาก[1, 2, 3, 4])
// Hint: ใช้ Set เพื่อให้เช็คค่าได้ใน $O(1)$

const longestConsective = (nums) => {
  //copy and sort data
  const backupNums = [...nums];
  const sortedNums = backupNums.sort((a, b) => a - b);
  //   console.log(sortedNums);
  //   console.log(nums);

  //colect consecutive
  let result = {};
  let group = 1;
  for (let i = 0; i < sortedNums.length; i++) {
    if (!result[group]) {
      result[group] = [sortedNums[i]];
    } else if (sortedNums[i + 1] - sortedNums[i] === 1 && result[group]) {
      result[group].push(sortedNums[i]);
    } else if (sortedNums[i] - sortedNums[i - 1] === 1 && result[group]) {
      result[group].push(sortedNums[i]);
    } else {
      group += 1;
      result[group] = [sortedNums[i]];
    }
  }

  //sort length
  let maxGroupLength = -Infinity;
  let displayResultIndex;
  for (let g in result) {
    if (result[g].length > maxGroupLength) {
      maxGroupLength = result[g].length;
      displayResultIndex = result[g];
    }
  }

  console.log(
    `Longest Consecutive Sequence is ${displayResultIndex.length} from ${displayResultIndex}`,
  );
};

longestConsective([100, 4, 200, 1, 3, 2]);
