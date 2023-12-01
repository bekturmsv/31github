const removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1));

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2));
