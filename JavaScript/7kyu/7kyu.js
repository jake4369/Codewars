// Sort array by string length - 13/06/2022
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Reverse words - 13/06/2022
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// Even numbers in an array - 13/06/2022
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c
function evenNumbers(array, number) {
  return array.filter((num) => num % 2 === 0).slice(-number);
}

// Sum of a sequence = 14/06/2022
// https://www.codewars.com/kata/586f6741c66d18c22800010a
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

// Is this a triangle? - 21/06/2022
// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

// Count the divisors of a number - 28/06/2022
// https://www.codewars.com/kata/542c0f198e077084c0000c2e
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}
getDivisorsCnt(11);
