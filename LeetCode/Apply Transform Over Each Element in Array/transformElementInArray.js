let transformElementInArray = function (arr, fn) {
  const resultArray = [];
  arr.forEach((element, index) => resultArray.push(fn(element, index)));
  return resultArray;
};

// Example 1:
const arr1 = [1, 2, 3];
const plusOne = function plusone(n) {
  return n + 1;
};
const newArray1 = transformElementInArray(arr1, plusOne);
console.log(newArray1); // Output: [2, 3, 4]

// Example 2:
const arr2 = [1, 2, 3];
const plusI = function plusI(n, i) {
  return n + i;
};
const newArray2 = transformElementInArray(arr2, plusI);
console.log(newArray2); // Output: [1, 3, 5]

// Example 3:
const arr3 = [10, 20, 30];
const constant = function constant() {
  return 42;
};
const newArray3 = transformElementInArray(arr3, constant);
console.log(newArray3); // Output: [42, 42, 42]
