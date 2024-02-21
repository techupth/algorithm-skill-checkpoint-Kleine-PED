// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  const uniqueArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueArr.includes(numbers[i])) {
      uniqueArr.push(numbers[i]);
    }
  }

  const sortArr = uniqueArr.sort((a, b) => b - a);
  return sortArr.slice(0, 2);
};

const result1 = getTop2MaxNumbers([10, 40, 20, 2, 9, 19]);
const result2 = getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]);
const result3 = getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]);

console.log(result1);
console.log(result2);
console.log(result3);
