const sortPeople = (names, heights) =>
  names
    .map((name, i) => ({ name, height: heights[i] }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);

const names = ["Alice", "Bob", "Charlie", "David"];
const heights = [170, 180, 165, 175];

const result = sortPeople(names, heights);
console.log(result);
