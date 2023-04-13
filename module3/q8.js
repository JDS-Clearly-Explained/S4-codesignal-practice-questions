// Description
// Write a function that converts a floating point number to an integer.

// JavaScript: you can do the conversion with the parseInt() function.
// Python: you can do this conversion with the int() function.
// Java: you can do this conversion by casting to integer with (int).
// The digits past the decimal point will be dropped.

// Example
// Input:

// f == 12.345
// Output:

// 12
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] float f

// A floating point number.

// Constraints

// The string will be no more than 5 characters and will contain a valid positive or negative integer.

// [output] integer

// The integer value of the float.

function solution(f) {
  return parseInt(f);
}
