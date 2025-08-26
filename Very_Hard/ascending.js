/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function validateConsecutive(str, nextNumber) {
  const digitsNeeded = String(nextNumber).length;
  if (str.length < digitsNeeded) {
    return false;
  }

  if (str.length === digitsNeeded) {
    return Number.parseInt(str) === nextNumber;
  }

  const nextDigits = str.slice(0, digitsNeeded);
  const remainingDigits = str.slice(digitsNeeded);

  if (Number.parseInt(nextDigits) !== nextNumber) {
    return false;
  }

  return validateConsecutive(remainingDigits, nextNumber + 1);
}

function ascending(str) {
  const halfLength = Math.floor(str.length / 2);

  for (let i = 1; i <= halfLength; i++) {
    let currentNumber = Number.parseInt(str.slice(0, i));
    let remainingStr = str.slice(i);
    let nextNumber = currentNumber + 1;
    if (validateConsecutive(remainingStr, nextNumber)) {
      return true;
    }
  }
  return false;
}

exports.solution = ascending;
