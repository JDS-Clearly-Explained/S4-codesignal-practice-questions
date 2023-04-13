// Description
// Normally, dividing by zero is a bad thing that will cause programs to crash. Write a safer division function
// that returns the division of two numbers (the numerator divided by the denominator) unless the denominator is 0, in which case it should return 0 instead of crashing.

// Example
// Input:

// numerator = 1
// denominator = 2
// Output:

// 0.5
// Input:

// numerator = 12
// denominator = 0
// Output:

// 0
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer numerator

// A number.

// Constraints

// -102 <= numerator <= 102

// [input] integer denominator

// A number.

// Constraints

// -102 <= denominator <= 102

// [output] float

// The result of numerator / denominator or 0 if denominator is 0.

function solution(numerator, denominator) {
  return denominator ? numerator / denominator : 0;
}
