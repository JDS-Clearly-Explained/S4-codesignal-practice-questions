// Description
// This function will analyze its input and return a string based on it.

// If the input is 0, return "none".
// If the input is 1, return "one".
// If the input is 2, return "two".
// If the input is anything else, return "some".
// Example
// Input:

// n == 12
// Output:

// "some"
// Input:

// n == 1
// Output:

// "one"
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The source number for the computation.

// Constraints

// -100 <= n <= 100

// [output] string

// "none", "one", "two", or "some" depending on input.

function solution(n) {
  return n === 0 ? "none" : n === 1 ? "one" : n === 2 ? "two" : "some";
}
