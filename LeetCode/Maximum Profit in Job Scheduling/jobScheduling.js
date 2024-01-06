const jobScheduling = (startTime, endTime, profit) => {
  const jobs = [];
  const n = startTime.length;

  for (let i = 0; i < n; i++) {
    jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
  }

  jobs.sort((a, b) => a.end - b.end);

  const dp = new Array(n).fill(0);
  dp[0] = jobs[0].profit;

  for (let i = 1; i < n; i++) {
    let currentProfit = jobs[i].profit;
    let compatibleJobIndex = findLastCompatibleJob(jobs, i);

    if (compatibleJobIndex !== -1) {
      currentProfit += dp[compatibleJobIndex];
    }

    dp[i] = Math.max(currentProfit, dp[i - 1]);
  }

  return dp[n - 1];
};

const findLastCompatibleJob = (jobs, index) => {
  for (let i = index - 1; i >= 0; i--) {
    if (jobs[i].end <= jobs[index].start) {
      return i;
    }
  }
  return -1;
};

let startTime = [1, 2, 3, 4, 6],
  endTime = [3, 5, 10, 6, 9],
  profit = [20, 20, 100, 70, 60];

console.log(jobScheduling(startTime, endTime, profit));
