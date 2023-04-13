// Description
// Write a function that performs a sequence of mathematical operations by reassigning the results into the same variable.

// Even though this could be a one-liner, only use a single additional variable for this, and do each step as an independent operation.

// Add 7 to the number.
// Divide the result by 2 (the result could be fractional).
// Multiply that result by 5.
// Return the result.

// Example
// Input:

// n == 5
// Computation:

// 5 + 7  == 12     Add 7 to get 12
// 12 / 2 == 6      Divide the 12 by 2 to get 6
// 6 * 5  == 30     Multiply the 6 by 5 to get 30
// Output:

// 30
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The source number for the computation.

// Constraints

// -103 < n < 103

// [output] float

// The result of the computation

function solution(n) {
  let result = n;
  result += 7;
  result /= 2;
  result *= 5;
  return result;
}
