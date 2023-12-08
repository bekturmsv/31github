const addDigits = (num) => (num === 0 ? 0 : 1 + ((num - 1) % 9));

let num = 123;
let result = addDigits(num);
console.log(result);
