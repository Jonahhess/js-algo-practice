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

function checkRow(sudokuBoard, row, boxLength) {
  return new Set(sudokuBoard[row]).size === boxLength;
}

function checkColumn(sudokuBoard, col, boxLength) {
  return new Set(sudokuBoard.map((row) => row[col])).size === boxLength;
}

function checkBox(sudokuBoard, row, col, boxSize) {
  return (
    new Set(
      sudokuBoard
        .filter((_, index) => index >= row && index < row + boxSize)
        .map((row) =>
          row.filter((_, index) => index >= col && index < col + boxSize)
        )
        .flat()
    ).size === 9
  );
}

function sudokuValidator(sudokuBoard, boxSize = 3) {
  const boxLength = boxSize * boxSize;
  for (let i = 0; i < boxLength; i++) {
    if (
      !checkRow(sudokuBoard, i, boxLength) ||
      !checkColumn(sudokuBoard, i, boxLength)
    ) {
      return false;
    }
  }

  for (let row = 0; row < boxLength; row = row + boxSize) {
    for (let col = 0; col < boxLength; col = col + boxSize) {
      if (!checkBox(sudokuBoard, row, col, boxSize)) {
        return false;
      }
    }
  }
  return true;
}

exports.solution = sudokuValidator;
