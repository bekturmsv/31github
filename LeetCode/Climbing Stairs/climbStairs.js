const climbStairs = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  const ways = new Array(n + 1);

  ways[0] = 1;
  ways[1] = 1;

  for (let i = 2; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n];
};

const steps = 4;
console.log(climbStairs(steps));

const steps2 = 5;
console.log(climbStairs(steps2));
