const minOperations = (s) =>
  Math.min(
    ...[0, 1].map(
      (b) => s.split("").filter((c, i) => c !== ((i + b) % 2).toString()).length
    )
  );

const inputString = "0100";
const result = minOperations(inputString);
console.log(result);
