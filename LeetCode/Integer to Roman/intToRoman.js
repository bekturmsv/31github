const intToRoman = (num) => {
  const romanNumerals = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const value = romanNumerals[i][0];
    const symbol = romanNumerals[i][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
};

const num = 27;
const romanNumeral = intToRoman(num);
console.log(`${num} in Roman numerals is: ${romanNumeral}`);
