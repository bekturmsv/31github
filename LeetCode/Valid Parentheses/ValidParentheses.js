let isValid = function (s) {
  const stack = [];
  const bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (bracketsMap[char]) {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();

      if (bracketsMap[lastOpenBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
