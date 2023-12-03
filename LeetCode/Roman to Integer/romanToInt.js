const romanToInt = (s) => {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i + 1]];

    if (next > current) {
      result += next - current;
      i += 1;
    } else {
      result += current;
    }
  }

  return result;
};
// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
