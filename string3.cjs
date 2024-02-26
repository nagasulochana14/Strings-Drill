// ==== String Problem #3 ====
// Given a string in the format of "20/1/2021", print the month in which the date is present in.

function stringFormatDate(str) {
  // Split the date string into its components and convert to  number
  const [day, month, year] = str.split("/").map(Number);

  // date creates a new Date object uing provided year,month and day
  const date = new Date(year, month - 1, day);

  // toLOcaleString is converts the date object into string format
  const monthName = date.toLocaleString("en-us", { month: "long" }); // long is month in long format
  return monthName;
}
module.exports = stringFormatDate;
