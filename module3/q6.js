// Description
// Write a function that returns true if a number is between 2 and 7, exclusive. (That is, between 3 and 6, inclusive.)

// Example
// Input:

// n == 3
// Output:

// true
// Input:

// n == 1
// Output:

// false
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// A number to test.

// Constraints

// -100 <= n <= 100

// [output] boolean

// True if the number is between 2 and 7, exclusive.

function solution(n) {
  return n > 2 && n < 7;
}
