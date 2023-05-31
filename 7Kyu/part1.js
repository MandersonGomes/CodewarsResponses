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