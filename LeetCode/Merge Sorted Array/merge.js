const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergedIndex = m + n - 1;

  while (index1 >= 0 && index2 >= 0) {
    nums1[mergedIndex--] =
      nums1[index1] > nums2[index2] ? nums1[index1--] : nums2[index2--];
  }

  while (index2 >= 0) {
    nums1[mergedIndex--] = nums2[index2--];
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
