/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(num1, op, num2) {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => {
    if (b === 0) {
      return "Can't divide by 0!";
    }
    return a / b;
  };
  const ops = new Map([
    ["+", add],
    ["-", sub],
    ["*", mult],
    ["/", div],
  ]);

  if (ops.has(op)) {
    return ops.get(op)(num1, num2);
  }
}

exports.solution = calculator;
