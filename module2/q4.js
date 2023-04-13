// Description
// Write a function that computes the sum of all values between 1 and n, inclusive.

// There is a formula you can use to compute this:

// total = n * (n + 1) / 2
// Example
// Input:

// n == 5
// Computation by hand:

// 1 + 2 + 3 + 4 + 5 == 15
// Computation with the formula:

// 5 * (5 + 1) / 2 ==
// 5 * 6 / 2 ==
// 30 / 2 ==
// 15
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The source number for the computation.

// Constraints

// 1 <= n < 103

// [output] integer

// The sum of numbers between 1 and n

function sumUpTo(n) {
  return (n * (n + 1)) / 2;
}
