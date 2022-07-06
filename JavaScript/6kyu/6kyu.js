// Equal Sides Of An Array - 05/06/2022
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
function findEvenIndex(arr) {
  let left = 0;
  let right = 0;
  const reducer = (acc, cur) => acc + cur;

  if (arr.length == 0) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      right = arr.slice(1).reduce(reducer, 0);
      if (right === i) {
        return i;
      }
    } else {
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i + 1).reduce(reducer, 0);
      if (left == right) {
        return i;
      }
    }
  }

  return -1;
}

// Are They the "same"? - 06/06/2022
// https://www.codewars.com/kata/550498447451fbbd7600041c
function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;

  return (
    array1.reduce((acc, cur) => acc + cur, 0) ===
    array2
      .sort((a, b) => a - b)
      .map((num) => Math.sqrt(num))
      .sort((a, b) => a - b)
      .reduce((acc, cur) => acc + cur, 0)
  );
}

// Duplicate Encoder - 06/06/2022
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word) {
  const charArr = word.toLowerCase().split("");

  const duplicateChars = charArr.filter(
    (char, i, arr) => arr.indexOf(char) !== i
  );

  const replacedChars = [];

  charArr.forEach((char) => {
    if (duplicateChars.includes(char)) {
      replacedChars.push(")");
    } else {
      replacedChars.push("(");
    }
  });

  return replacedChars.join("");
}

// Take a Ten Minutes Walk - 06/06/2022
// https://www.codewars.com/kata/54da539698b8a2ad76000228
function isValidWalk(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

// Find the odd int - 06/06/2022
// https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
  const map = A.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );

  const oddEntry = [];

  [...map.entries()].map((pair) => {
    if (pair[1] % 2 !== 0) {
      oddEntry.push(pair[0]);
    }
  });

  return oddEntry[0];

  // return A.find((item, index) => A.filter((el) => el == item).length % 2);
}

// Sort the odd - 06/06/2022
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  // Return a sorted array.
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}

// Break camelCase - 06/06/2022
// https://www.codewars.com/kata/5208f99aee097e6552000148
function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");
}

// Write Number in Expanded Form - 06/06/2022
// https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
  const expandedNum = num
    .toString()
    .split("")
    .reverse()
    .map((num, i) => num.padEnd(i + 1, 0))
    .reverse()
    .filter((num) => num * 1 !== 0)
    .join(" + ");

  return expandedNum;
}

// Find the unique number - 07/06/2022
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  let count = {
    a: 0,
    b: 0,
  };

  const uniqueNumbers = [...new Set(arr)];

  arr.forEach((num) => {
    if (num === uniqueNumbers[0]) {
      count.a += 1;
    } else {
      count.b += 1;
    }
  });

  if (count.a === 1) {
    return uniqueNumbers[0];
  } else {
    return uniqueNumbers[1];
  }
}

// Two Sum - 07/06/2022
// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let res = numbers[i] + numbers[j];
      if (res == target) return [i, j];
    }
  }
}

// Count characters in your string - 21/06/2022
// https://www.codewars.com/kata/52efefcbcdf57161d4000091
function count(string) {
  if (!string) {
    return {};
  } else {
    let count = {};
    string.split("").forEach((letter) => {
      count[letter] ? count[letter]++ : (count[letter] = 1);
    });
    return count;
  }
}

// Who likes it? - 06/07/2022
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
