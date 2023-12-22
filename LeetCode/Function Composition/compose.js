const compose = (functions) => {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return function (x) {
    return functions.reduceRight(function (result, fn) {
      return fn(result);
    }, x);
  };
};

const f1 = (x) => x + 1;
const f2 = (x) => x * 2;
const f3 = (x) => x - 3;

const composedFunction = compose([f1, f2, f3]);

console.log(composedFunction(5));
