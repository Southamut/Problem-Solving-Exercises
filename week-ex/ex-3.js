const animalTournament = (animals) => {
  const powerMap = {
    grass: 0,
    leaves: 0,
    bug: 1,
    littleFish: 1,
    antelope: 2,
    bigFish: 2,
    chicken: 2,
    cow: 2,
    sheep: 2,
    giraffe: 2,
    bear: 3,
    lion: 3,
    fox: 3,
  };

  let result = [...animals];
  let i = 0;
  while (result.length > 1) {
    if (powerMap[result[i]] > powerMap[result[i - 1]] && i !== 0) {
      result.splice(i - 1, 1);
      i = 0;
    } else if (powerMap[result[i]] > powerMap[result[i + 1]]) {
      result.splice(i + 1, 1);
      i = 0;
    } else {
      i++;
    }
    console.log(result);
  }

  return "This is first method :" + result;
};

console.log(animalTournament(["bug", "fox", "chicken", "grass", "sheep"]));

//     Here is a list of zoo animals, and what they can eat

// antelope eats grass
// big-fish eats little-fish
// bug eats leaves
// bear eats big-fish
// bear eats bug
// bear eats chicken
// bear eats cow
// bear eats leaves
// bear eats sheep
// chicken eats bug
// cow eats grass
// fox eats chicken
// fox eats sheep
// giraffe eats leaves
// lion eats antelope
// lion eats cow
// panda eats leaves
// sheep eats grass

// ANs
const animalTournament2 = (animals) => {
  const eats = {
    antelope: ["grass"],
    "big-fish": ["little-fish"],
    bug: ["leaves"],
    bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    chicken: ["bug"],
    cow: ["grass"],
    fox: ["chicken", "sheep"],
    giraffe: ["leaves"],
    lion: ["antelope", "cow"],
    panda: ["leaves"],
    sheep: ["grass"],
  };

  let result = [...animals]; // เก็บประวัติการกิน

  let i = 0;
  while (i < result.length) {
    let attacker = eats[result[i]] || [];

    // 1. ลองกินทางซ้ายก่อน (i - 1)
    if (i > 0 && attacker.includes(result[i - 1])) {
      result.splice(i - 1, 1);
      i = 0; // Reset ไปเริ่มหาตัวซ้ายสุดใหม่ตามกฎ
      continue;
    }

    // 2. ถ้าซ้ายกินไม่ได้ ลองกินทางขวา (i + 1)
    if (i < result.length - 1 && attacker.includes(result[i + 1])) {
      result.splice(i + 1, 1);
      i = 0; // Reset ไปเริ่มหาตัวซ้ายสุดใหม่
      continue;
    }

    i++; // ถ้าตัวนี้กินใครไม่ได้เลย ขยับไปดูตัวถัดไป

    console.log(result);
  }

  return "This is second method :" + result;
};

// ทดสอบ

console.log(animalTournament2(["bug", "fox", "chicken", "grass", "sheep"]));
