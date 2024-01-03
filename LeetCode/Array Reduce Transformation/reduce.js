const reduce = (nums, fn, init) => {
  if (nums.length === 0) {
    return init;
  }

  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
};
const nums = [1, 2, 3, 4, 5];
const reducerFn = (accumulator, currentValue) => accumulator + currentValue;
const initialValue = 0;

const finalResult = reduce(nums, reducerFn, initialValue);

console.log(finalResult);
