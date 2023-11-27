let expect = function (val) {
  return {
    toBe: function (val2) {
      return val === val2
        ? true
        : (() => {
            throw new Error("Not Equal");
          })();
    },
    notToBe: function (val2) {
      return val !== val2
        ? true
        : (() => {
            throw new Error("Equal");
          })();
    },
  };
};

try {
  const result1 = expect(5).toBe(5);
  console.log(result1);
} catch (error) {
  console.log({ error: error.message });
}

try {
  const result2 = expect(5).toBe(null);
  console.log(result2);
} catch (error) {
  console.log({ error: error.message });
}

try {
  const result3 = expect(5).notToBe(null);
  console.log(result3);
} catch (error) {
  console.log({ error: error.message });
}
