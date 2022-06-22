// How many stairs will Suzuki climb in 20 years? - 12/06/2022
// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e
function stairsIn20(s) {
  return s.flat().reduce((acc, cur) => acc + cur, 0) * 20;
}

// Beginner Series #4 Cockroach - 12/06/2022
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) {
  return Math.floor(s * 27.778);
}

// Cat years, Dog years - 12/06/2022
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
var humanYearsCatYearsDogYears = function (humanYears) {
  return humanYears === 1
    ? [humanYears, 15, 15]
    : humanYears === 2
    ? [humanYears, 24, 24]
    : humanYears >= 3
    ? [humanYears, 24 + 4 * (humanYears - 2), 24 + 5 * (humanYears - 2)]
    : [0, 0, 0];
};

// The Feast of Many Beasts - 12/06/2022
// https://www.codewars.com/kata/5aa736a455f906981800360d
function feast(beast, dish) {
  return (
    beast.split("")[0] === dish.split("")[0] &&
    beast.split("")[beast.length - 1] === dish.split("")[dish.length - 1]
  );
}

// Welcome to the City - 12/06/2022
// https://www.codewars.com/kata/5302d846be2a9189af0001e4
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// Grasshopper - Debug sayHello - 12/06/2022
function sayHello(name) {
  return `Hello, ${name}`;
}

// To square(root) or not to square(root) - 12/06/2022
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627
function squareOrSquareRoot(array) {
  return array.map((num) => {
    return Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2;
  });
}

// Convert a string to an array - 12/06/2022
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(" ");
}

// Square(n) Sum - 12/06/2022
// https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers) {
  return numbers.map((num) => num ** 2).reduce((acc, cur) => acc + cur, 0);
}

// Name Shuffler - 12/06/2022
// https://www.codewars.com/kata/559ac78160f0be07c200005a
function nameShuffler(str) {
  let [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}

// Filter out the geese - 22/06/2022
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter((bird) => !geese.includes(bird));
}

// Volume of a Cuboid - 22/06/2022
// https://www.codewars.com/kata/58261acb22be6e2ed800003a
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Is it even? - 22/06/2022
// https://www.codewars.com/kata/555a67db74814aa4ee0001b5
function testEven(n) {
  return n % 2 === 0;
}
