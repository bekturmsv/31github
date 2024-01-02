const findMatrix = (nums) => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (const num of nums) {
    let added = false;

    for (const row of result) {
      if (!row.includes(num)) {
        row.push(num);
        added = true;
        break;
      }
    }

    if (!added) {
      result.push([num]);
    }
  }

  return result;
};

const nums = [4, 3, 1, 4, 2, 3, 1];
const resultArray = findMatrix(nums);
console.log(resultArray);
