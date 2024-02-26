// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].
// Support IPV4 addresses only. If there are other characters detected, return an empty array.

function splitIPAddress(ipAddress) {
  // Split the IP address string into its components
  const parts = ipAddress.split(".");

  // Check if the parts array length is not equal to 4
  // This ensures that we have exactly 4 components in the IP address
  if (parts.length !== 4) {
    // If the length is not 4, return an empty array
    return [];
  }

  // Map each part to a numeric value using parseInt function
  const numericParts = parts.map((part) => parseInt(part, 10));

  // Check if any part is NaN (Not a Number)
  // If any part is NaN, it means there are non-numeric characters in the IP address
  if (numericParts.some(isNaN)) {
    // Return an empty array if any part is NaN
    return [];
  }
  return numericParts;
}
module.exports = splitIPAddress;
