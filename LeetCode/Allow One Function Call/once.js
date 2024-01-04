const once = (fn) => {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn.apply(this, args);
      hasBeenCalled = true;
      return result;
    } else {
      console.warn("Function can only be called once.");
      return undefined;
    }
  };
};

function myFunction() {
  console.log("Original function called");
  return "Result of original function";
}

const onceFunction = once(myFunction);

console.log(onceFunction());
console.log(onceFunction());
