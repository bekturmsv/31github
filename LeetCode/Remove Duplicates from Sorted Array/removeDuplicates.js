const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};

let nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
let result = removeDuplicates(nums);

console.log("Modified Array:", nums.slice(0, result));
console.log("Number of Unique Elements:", result);
