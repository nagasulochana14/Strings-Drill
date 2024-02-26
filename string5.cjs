// ==== String Problem #5 ====
// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function convertArrayOfStringIntoString(array) {
  if (array.length === 0) {
    return ""; // return empty string if the array is empty
  } else {
    return array.join(" ") + "."; // join the array elements with a space and add a period at the end
  }
}
module.exports = convertArrayOfStringIntoString;
