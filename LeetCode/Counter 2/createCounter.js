function createCounter(init) {
  let currentValue = init;

  return {
    increment: () => ++currentValue,
    decrement: () => --currentValue,
    reset: () => (currentValue = init),
  };
}

// Example 1:
const counter1 = createCounter(5);
const output1 = [counter1.increment(), counter1.reset(), counter1.decrement()];

// Example 2:
const counter2 = createCounter(0);
const output2 = [
  counter2.increment(),
  counter2.increment(),
  counter2.decrement(),
  counter2.reset(),
  counter2.reset(),
];

console.log("Example 1 Output:", output1); // Output: [6, 5, 4]
console.log("Example 2 Output:", output2); // Output: [1, 2, 1, 0, 0]
