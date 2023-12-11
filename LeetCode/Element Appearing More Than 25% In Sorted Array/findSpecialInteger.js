const findSpecialInteger = (arr) => {
  const quarterLength = Math.floor(arr.length / 4);
  for (let i = 0; i < arr.length - quarterLength; i++) {
    if (arr[i] === arr[i + quarterLength]) {
      return arr[i];
    }
  }
  return -1;
};

const sortedArray = [1, 2, 2, 6, 6, 6, 6, 7, 10];
const result = findSpecialInteger(sortedArray);

if (result !== -1) {
  console.log(
    `The integer that occurs more than 25% of the time is: ${result}`
  );
} else {
  console.log("No such integer found.");
}
