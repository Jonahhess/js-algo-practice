/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(string) {
  const chars = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let newString = "";
  for (const letter of string) {
    if (chars.includes(letter)) {
      newString += `-${letter}-`;
    } else {
      newString += letter;
    }
  }
  return newString;
}

exports.solution = dashed;
