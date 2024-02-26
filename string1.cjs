// ==== String Problem #1 ====
// There are numbers that are stored in the format "$100.45", "$1,002.22", "-$123", and so on. Write a function to convert the given strings into their equivalent numeric format without any precision loss - 100.45, 1002.22, -123 and so on. There could be typing mistakes in the string so if the number is invalid, return 0.

function convertStringIntoNumber(data) {
  // replace method is replace the any values to empty string
  const replaced = data.replace(/[^\d.-]/g, "");

  // parseFloat is used to parse a string and return a floating point number
  const str = parseFloat(replaced);

  // isNaN is converts the string into number format
  return isNaN(str) ? 0 : str;
}
module.exports = convertStringIntoNumber;
