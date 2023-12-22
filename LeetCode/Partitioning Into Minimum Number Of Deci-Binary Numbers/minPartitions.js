const minPartitions = (n) => {
  let maxDigit = 0;
  for (let i = 0; i < n.length; i++) {
    const digit = Number(n[i]);
    if (digit > maxDigit) {
      maxDigit = digit;
    }
  }
  return maxDigit;
};

console.log(minPartitions("82734"));
console.log(minPartitions("32"));
