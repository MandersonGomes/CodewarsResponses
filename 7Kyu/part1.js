/**
 * 1) Highest and Lowest
 *
 * Description:
 * In this little assigment you are given a string of space separated
 * numbers, and have to return the highest and lowest number.
 *
 * Examples:
 * highAndLow("1 2 3 4 5");    // return "5 1"
 * highAndLow("1 2 -3 4 5");   // return "5 -3"
 * highAndLow("1 9 3 4 -5");   // return "9 -5"
 *
 * Notes:
 * All numbers are valid Int32, no need to validate them.
 * There will always be at least one number in the input string.
 * Output string must be two numbers separated by a single space,
 * and highest number is first.
 */

const highAndLow = (numbers) => {
  let higherNumber;
  let lowerNumber;
  const result = numbers.split(" ");
  const array = [];

  result.forEach((element) => {
    if (element === "-") {
      element = "-1";
    }
    array.push(+element);
  });

  higherNumber = array[0];
  lowerNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= higherNumber) {
      higherNumber = array[i];
    }
    if (array[i] <= lowerNumber) {
      lowerNumber = array[i];
    }
  }
};

/**
 * 2) Reverse words
 *
 * Description:
 * Complete the function that accepts a string parameter, and
 * reverses each word in the string. All spaces in the string
 * should be retained.
 *
 * Examples:
 * "This is an example!"  ==> "sihT si na !elpmaxe"
 * "double  spaces"       ==> "elbuod  secaps"
 */

const reverseWords = (str) => {
  const reverseString = str.split(" ").reverse().join(" ");
  let newString = "";

  for (let i = reverseString.length - 1; i >= 0; i--) {
    newString += reverseString[i];
  }

  return newString;
};

/**
 * 3) Beginner Series #3 Sum of Numbers
 *
 * Description:
 * Given to integers a and b, which can be positive or negative, find the sum
 * of all the integers between and including them and return it. If the two
 * numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples:
 * (1, 0) --> 1 (1 + 0 = 1)
 * (1, 2) --> 3 (1 + 2 = 3)
 * (0, 1) --> 1 (0 + 1 = 1)
 * (1, 1) --> 1 (1 since both are same)
 * (-1, 0) --> -1 (-1 + 0 = -1)
 * (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */

const getSum = (a, b) => {
  let sum = 0;
  let first = a;
  let second = b;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += first;
      first++;
    }
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      sum += second;
      second++;
    }
  }
  if (a == b) {
    sum = a;
  }

  return sum;
};
