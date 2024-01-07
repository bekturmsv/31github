function numberOfArithmeticSlices(nums) {
  const n = nums.length;
  let count = 0;

  const dp = Array.from({ length: n }, () => ({}));

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const dp_i_j = dp[j][diff] || 0;
      count += dp_i_j;
      dp[i][diff] = (dp[i][diff] || 0) + dp_i_j + 1;
    }
  }

  return count;
}
const nums = [1, 2, 3, 4, 5];
const result = numberOfArithmeticSlices(nums);
console.log(result);
