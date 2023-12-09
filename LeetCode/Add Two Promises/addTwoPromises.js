const addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2])
    .then((values) => values.reduce((acc, num) => acc + num, 0))
    .catch((error) => {
      throw new Error("Failed to add two numbers: " + error.message);
    });
};
const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

const resultPromise = addTwoPromises(promise1, promise2);

resultPromise
  .then((result) => console.log("Sum of two numbers:", result))
  .catch((error) => console.error(error.message));
