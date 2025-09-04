/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/

function fillSpot(matrix, x, y, count) {
  if (matrix[x][y] !== 0) {
    throw new Error(`out of bounds / attempted to refill index at ${x}-${y}`);
  }
  matrix[x][y] = count;
}

function fillLayer(matrix, left, run, startingNumber) {
  let count = startingNumber;

  // top row

  // right column

  // bottom row

  // left column
}

function matrix(num) {
  const matrix = [new Array(num).fill(new Array(num).fill(0))];
  const layers = Math.floor(num / 2);

  for (let i = 0; i < layers; i++) {
    fillLayer(matrix, i, num - i, 1);
  }
}

exports.solution = matrix;
