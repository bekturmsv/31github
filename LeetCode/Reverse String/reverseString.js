const reverseString = (s) => {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
let inputArray = ["h", "e", "l", "l", "o"];
reverseString(inputArray);

console.log(inputArray);
