// Description
// Write a function that computes the sum of all values between n and m, inclusive.

// There is a formula you can use to compute the sum from 1 to n:

// total = n * (n + 1) / 2
// But we've misplaced the formula for the sum from n to m!

// Think outside the box... is there some way to use that formula, n, and m to get the answer? You don't have to come up with a new formula; there's a way to use the existing one to solve it.

// Example
// Input:

// n == 5
// m == 9
// Computation by hand:

// 5 + 6 + 7 + 8 + 9 == 35
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The starting number to sum

// Constraints

// 1 <= n <= m <= 103

// [input] integer m

// The final number to sum

// Constraints

// 1 <= n <= m <= 103

// [output] integer

// The sum of numbers between 1 and n

function solution(n, m) {
  return (m * (m + 1)) / 2 - (n * (n - 1)) / 2;
}
