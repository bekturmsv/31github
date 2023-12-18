const maxProductDifference = (nums) => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};
const nums = [4, 2, 5, 9, 7, 4, 8];
const result = maxProductDifference(nums);
console.log(result);
