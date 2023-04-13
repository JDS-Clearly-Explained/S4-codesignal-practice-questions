// Description
// Write a function that converts a string to an integer.

// JavaScript: you can do the conversion with the parseInt() function.
// Python: you can do this conversion with the int() function.
// Java: you can do this conversion with the Integer.parseInt() function.
// The number in the string could be negative, but the built-in conversion function should handle this.

// Example
// Input:

// s == "12"
// Output:

// 12
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string s

// A string containing an integer.

// Constraints

// The string will be no more than 5 characters and will contain a valid positive or negative integer.

// [output] integer

// The integer value of the string

function solution(s) {
  return parseInt(s);
}
