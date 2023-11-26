function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}

// Example 1
let t1 = Date.now();
sleep(1000).then(() => {
  console.log(Date.now() - t1);
});

// Example 2
let t2 = Date.now();
sleep(2000).then(() => {
  console.log(Date.now() - t2);
});
