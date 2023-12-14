const convertTemperature = (celsius) => [celsius + 273.15, celsius * 1.8 + 32];

const celsiusTemperature = 25.75;
const result = convertTemperature(celsiusTemperature);
console.log(result);
