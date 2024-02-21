// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g);
  return cleanStr === cleanStr.split("").reverse().join("");
};
const check1 = palindrome("abba");
const check2 = palindrome("abcdefg");

console.log(check1);
console.log(check2);
