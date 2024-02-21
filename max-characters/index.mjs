// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const cutWhitespaceChar = str.replace(/\s/g, "");
  let charCount = {};
  let maxChar = "";
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
};

const test1 = getMaxCharacters("abcccccccd");
const test2 = getMaxCharacters("apple 1231111");

console.log(test1);
console.log(test2);
