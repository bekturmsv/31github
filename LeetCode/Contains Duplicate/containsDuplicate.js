const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }

  return false;
};
const nums1 = [1, 2, 3, 4, 5];
console.log(containsDuplicate(nums1));

const nums2 = [1, 2, 3, 1];
console.log(containsDuplicate(nums2));
