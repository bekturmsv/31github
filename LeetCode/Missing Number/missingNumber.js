const missingNumber = (nums) => {
  const n = nums.length;
  let result = n;

  for (let i = 0; i < n; i++) {
    result ^= i ^ nums[i];
  }

  return result;
};

const numsArray = [3, 0, 1];
const result = missingNumber(numsArray);
console.log(result);
