const countCharacters = (words, chars) => {
  const isGoodWord = (word, chars) =>
    [...word].every(
      (char) => chars.includes(char) && chars.splice(chars.indexOf(char), 1)
    );

  return words.reduce(
    (sum, word) => (isGoodWord(word, [...chars]) ? sum + word.length : sum),
    0
  );
};

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach")); // Output: 6
