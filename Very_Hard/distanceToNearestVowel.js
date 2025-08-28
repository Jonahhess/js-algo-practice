/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

const vowels = ["a", "e", "i", "o", "u"];

function distanceToNearestVowel2(str) {
  const len = str.length;

  const distanceArr = [];
  let currentDistance = len;

  // forward pass
  for (let i = 0; i < len; i++) {
    const letter = str[i];
    if (vowels.includes(letter)) {
      currentDistance = 0;
    }
    distanceArr[i] = currentDistance;
    currentDistance++;
  }

  // backward pass
  currentDistance = len;

  for (let i = len - 1; i >= 0; i--) {
    const letter = str[i];
    if (vowels.includes(letter)) {
      currentDistance = 0;
    }
    distanceArr[i] = Math.min(distanceArr[i], currentDistance);
    currentDistance++;
  }

  return distanceArr;
}

function distanceToNearestVowel(str) {
  const splits = str.split(/([aeiou])/);
  const len = splits.length;
  const distanceArr = [];

  const firstSplitLen = splits[0].length;
  for (let i = 0; i < firstSplitLen; i++) {
    distanceArr.push(firstSplitLen - i);
  }

  for (let i = 1; i < len - 1; i++) {
    if (i % 2 === 1) {
      distanceArr.push(0);
    } else {
      const split = splits[i];
      const halfWay = Math.ceil(split.length / 2);

      for (let j = 1; j <= split.length; j++) {
        distanceArr.push(j <= halfWay ? j : split.length - j + 1);
      }
    }
  }

  const lastSplit = splits[len - 1];
  for (let i = 1; i <= lastSplit.length; i++) {
    distanceArr.push(i);
  }
  return distanceArr;
}

exports.solution = distanceToNearestVowel;
