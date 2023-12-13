const generateParenthesis = (n) => {
  const result = [];
  const stack = [];
  stack.push({ str: "", open: 0, close: 0 });

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.str.length === 2 * n) {
      result.push(current.str);
    } else {
      if (current.open < n) {
        stack.push({
          str: current.str + "(",
          open: current.open + 1,
          close: current.close,
        });
      }

      if (current.close < current.open) {
        stack.push({
          str: current.str + ")",
          open: current.open,
          close: current.close + 1,
        });
      }
    }
  }

  return result;
};

const n = 3;
const combinations = generateParenthesis(n);
console.log(combinations);
