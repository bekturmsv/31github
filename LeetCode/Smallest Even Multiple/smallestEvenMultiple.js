const smallestEvenMultiple = (n) => {
  let result = 2;
  while (result % n) result += 2;
  return result;
};

const n = 7;
console.log(
  `The smallest multiple of both 2 and ${n} is: ${smallestEvenMultiple(n)}`
);
