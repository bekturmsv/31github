const addBinary = (a, b) => {
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digitA = i >= 0 ? parseInt(a[i]) : 0;
    let digitB = j >= 0 ? parseInt(b[j]) : 0;

    let sum = digitA + digitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

const a = "1011";
const b = "1101";
const sum = addBinary(a, b);
console.log(sum); // Output: "11000"
