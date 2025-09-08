/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

function sameSet(set1, set2) {
  return !set1.symmetricDifference(set2).size;
}

function sudokuValidator(sudokuBoard, boxSize = 3) {
  const length = boxSize * boxSize;
  const elements = new Set(Array.from({ length }, (_, i) => 1 + i));

  for (let i = 0; i < length; i++) {
    if (
      !sameSet(new Set(sudokuBoard[i]), elements) ||
      !sameSet(new Set(sudokuBoard.map((row) => row[i])), elements)
    ) {
      return false;
    }
  }

  for (let row = 0; row < length; row = row + boxSize) {
    for (let col = 0; col < length; col = col + boxSize) {
      if (
        !sameSet(
          new Set(
            sudokuBoard
              .filter((_, index) => index >= row && index < row + boxSize)
              .map((row) =>
                row.filter((_, index) => index >= col && index < col + boxSize)
              )
              .flat()
          ),
          elements
        )
      ) {
        return false;
      }
    }
  }
  return true;
}

exports.solution = sudokuValidator;
