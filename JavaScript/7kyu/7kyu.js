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

// Highest and Lowest - 28/06/2022
// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
  const arr = numbers.split(" ").sort((a, b) => a - b);
  return [arr[arr.length - 1], arr[0]].join(" ");
}

// Mumbling - 28/06/2022
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  return s
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
}

// Scrabble Score - 07/07//2022
// https://www.codewars.com/kata/558fa34727c2d274c10000ae
function scrabbleScore(str) {
  const upperStr = str.toUpperCase();
  const dic = {
    " ": 0,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };

  let score = 0;

  for (let i = 0; i < str.length; i++) {
    dic[upperStr.charAt(i)] === undefined
      ? (score += 0)
      : (score += dic[upperStr.charAt(i)]);
  }

  console.log(score);
}

scrabbleScore("st re et");

// console.log("st re et".split(" ").join("").toUpperCase().trim());
// console.log("st re et".split(" ").forEach((el) => console.log(el)));
