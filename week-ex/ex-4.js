// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

const diceGame = (diceScore) => {
  const duplicatedScore = [...diceScore];
  const sortedScore = duplicatedScore.sort();
  console.log(sortedScore);

  //divide score group
  let groupScore = {};
  for (let i = 0; i < diceScore.length; i++) {
    if (!groupScore[sortedScore[i]]) {
      groupScore[sortedScore[i]] = [sortedScore[i]];
    } else {
      groupScore[sortedScore[i]].push(sortedScore[i]);
    }
  }
  console.log(groupScore);

  //find total score
  let totalScore = 0;
  for (g in groupScore) {
    // console.log(groupScore[g]);
    //triple case
    if (groupScore[g].length >= 3) {
      let n = Math.floor(groupScore[g].length / 3);
      let a = null;
      let leftn = groupScore[g].length % 3;
      let lefta = null;
      //   console.log(n);
      //   console.log(`this is left over n ${leftn}`);
      switch (Number(g)) {
        case 1:
          a = 1000;
          break;
        case 2:
          a = 200;
          break;
        case 3:
          a = 300;
          break;
        case 4:
          a = 400;
          break;
        case 5:
          a = 500;
          break;
        case 6:
          a = 600;
          break;
      }

      switch (Number(g)) {
        case 1:
          lefta = 100;
          break;
        case 5:
          lefta = 50;
          break;
      }

      totalScore += a * n;
      totalScore += lefta * leftn;
    } else {
      let n = groupScore[g].length;
      let a = null;
      switch (Number(g)) {
        case 1:
          a = 100;
          break;
        case 5:
          a = 50;
          break;
      }
      totalScore += a * n;
      //   console.log(n);
    }
  }
  console.log(totalScore);
  return totalScore;
};

diceGame([5, 1, 3, 4, 1]);
diceGame([1, 1, 1, 1, 3]);
diceGame([2, 4, 4, 5, 4]);
