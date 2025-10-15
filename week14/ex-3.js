function findMax(nums) {
    let max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    return max
};

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2