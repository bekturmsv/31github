const sortColors = (nums) =>
  nums.sort((a, b) => {
    return a - b;
  });

let arr1 = [2, 0, 2, 1, 1, 0];
let arr2 = [2, 0, 1];
console.log(sortColors(arr1));
console.log(sortColors(arr2));
