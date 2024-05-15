function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function celsiusToFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celsiusToFarenheit,
};
