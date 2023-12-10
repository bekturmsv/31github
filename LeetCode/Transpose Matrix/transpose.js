function transposeMatrix(matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

const originalMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const transposedMatrix = transposeMatrix(originalMatrix);

console.log("Original Matrix:");
console.log(originalMatrix);

console.log("\nTransposed Matrix:");
console.log(transposedMatrix);
