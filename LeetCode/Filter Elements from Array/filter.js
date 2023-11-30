const customFilter = (arr, fn) => {
  return arr.filter((item, index) => fn(item, index));
};

// Example 1
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) {
  return n > 10;
};
const result1 = customFilter(arr1, fn1);
console.log(result1); // Output: [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) {
  return i === 0;
};
const result2 = customFilter(arr2, fn2);
console.log(result2); // Output: [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const fn3 = function plusOne(n) {
  return n + 1;
};
const result3 = customFilter(arr3, fn3);
console.log(result3); // Output: [-2, 0, 1, 2]
