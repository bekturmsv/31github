const maxProduct = (nums) => {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

const nums = [3, 4, 5, 2];
const result = maxProduct(nums);
console.log(result);
