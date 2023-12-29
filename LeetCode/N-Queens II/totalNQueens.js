const totalNQueens = (n) => {
  let board = new Array(n).fill(null);
  let solutions = 0;

  function backtrack(row) {
    if (row === n) {
      solutions++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(board, row, col)) {
        board[row] = col;
        backtrack(row + 1);
        board[row] = null;
      }
    }
  }

  function isValid(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i] === col || Math.abs(row - i) === Math.abs(col - board[i])) {
        return false;
      }
    }
    return true;
  }

  backtrack(0);
  return solutions;
};

const n = 4;
const solutions = totalNQueens(n);
console.log(`Number of distinct solutions for ${n}-queens: ${solutions}`);
