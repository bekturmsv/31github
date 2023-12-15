const destCity = (paths) => {
  const cities = new Set(paths.flatMap((path) => path));
  paths.forEach(([from, to]) => cities.delete(from));
  return cities.values().next().value;
};

const paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];
const destination = destCity(paths);
console.log(destination);
