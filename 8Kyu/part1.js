/**
 * Description:
 * We need a function that can transform a string into a number.
 * What ways of achieving this do you know?
 * Note: Don't worry, all inputs will be strings, and every string is a
 * perfectly valid representation of an integral number.
 *
 *
 * Examples:
 * "1234" --> 1234
 * "605"  --> 605
 * "1405" --> 1405
 * "-7" --> -7
 */
const stringToNumber = (str) => {
  // put your code here

  return +str;
  //You can also transform a string into a number using the Number function:
  //return Number(str);
};

/**
 * 2) Find Maximum and Minimum Values of a List
 *
 * Description:
 * Your task is to make two functions that receive a list of integers as input,
 * and return the largest and lowest number in that list, respectively.
 *
 * Examples:
 * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
 * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
 * [42, 54, 65, 87, 0]             -> min = 0, max = 87
 * [5]                             -> min = 5, max = 5
 */
const min = (list) => {
  let number = list[0];

  list.forEach((num) => {
    if (num < number) {
      number = num;
    }
  });

  return number;
};

const max = (list) => {
  let number = list[0];

  list.forEach((num) => {
    if (num > number) {
      number = num;
    }
  });

  return number;
};

/**
 * 3) Double Char
 *
 * Description:
 * Given a string, you have to return a string in which each character
 * (case-sensitive) is repeated once.
 *
 * Examples:
 * "String"       -> "SSttrriinngg"
 * "Hello World"  -> "HHeelloo WWoorrlldd"
 * "1234!_"       -> "11223344!!__"
 */

const duplicate = (str) => {
  const arrayString = [];
  var duplicated = "";

  arrayString.push(...str);

  arrayString.forEach((element) => {
    var duplicatedParts = element.repeat(2);
    duplicated += duplicatedParts;
  });

  return duplicated;
};

/**
 * 4) Reversed Strings
 *
 * Description:
 * Complete the solution so that it reverses the string passed into it.
 *
 * Examples:
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 */

const solution = (str) => {
  const reverveArray = [];
  reverveArray.push(...str);

  return reverveArray.reverse().join("");
};
