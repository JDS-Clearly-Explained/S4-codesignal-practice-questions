// Description
// Write a function that converts a string to a floating point number.

// JavaScript: you can do the conversion with the parseFloat() function.
// Python: you can do this conversion with the float() function.
// Java: you can do this conversion with Float.parseFloat() or Float.valueOf().
// The string will contain a valid floating point number, positive or negative.

// Example
// Input:

// s == "12.345"
// Output:

// 12.345  (as a float)
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string s

// A string.

// Constraints

// Holds a valid floating point number.

// [output] float

// A float containing the value in the string.

function solution(s) {
  return parseFloat(s);
}
