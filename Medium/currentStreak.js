/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function isConsecutive(prev, cur) {
  const d1 = new Date(prev);
  const d2 = new Date(cur);

  return d1.getDate() + 1 === d2.getDate() || d2.getDate() ===
}

function indexInRange(index, min, max) {
  return index >= min && index <= max;
}

// date format: {date: "2025-05-21"}
function currentStreak(startDate, dateArray) {
  const startIndex = dateArray.find((d) => d.date === startDate);

  let counter = 0;
  for (let i = 1; i < dateArray.length; i++) {
    const prev = dateArray[i - 1].date;
    const cur = dateArray[i].date;

    if (isConsecutive(prev, cur)) {
      counter++;
    } else if (indexInRange(startIndex, i - counter, i)) {
      return counter;
    } else {
      counter = 0;
    }
  }

  return counter;
}

exports.solution = currentStreak;
