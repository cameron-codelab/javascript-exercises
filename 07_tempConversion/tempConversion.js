const convertToCelsius = function(temp) {

  let tempCelsius = Math.round(((temp - 32) * 5/9)*10)/10;

  return tempCelsius;

};

const convertToFahrenheit = function(temp) {

  let tempFah = Math.round(((temp * 9/5)+32)*10)/10;

  return tempFah;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
