function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) {
      break;
    }
  }

  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}

// Example 1
const example1Digits = [1, 2, 3];
const example1Output = plusOne(example1Digits);
console.log("Example 1:", example1Output);

// Example 2
const example2Digits = [4, 3, 2, 1];
const example2Output = plusOne(example2Digits);
console.log("Example 2:", example2Output);

// Example 3
const example3Digits = [9];
const example3Output = plusOne(example3Digits);
console.log("Example 3:", example3Output);
