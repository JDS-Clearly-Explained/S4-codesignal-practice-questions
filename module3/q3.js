// Description
// Write a function that converts an integer to a floating point number.

// JavaScript: you can do the conversion with the parseFloat() function.
// Python: you can do this conversion with the float() function.
// Java: this conversion is implicit--you can just return the int and it will be converted to float. If you want to be explicit, you can cast the value with (double).
// Example
// Input:

// i == 12
// Output:

// 12.0  (as a float)
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer i

// An integer.

// Constraints

// -105 <= i <= 105

// [output] float

// A float containing the integer value.

function solution(i) {
  return parseFloat(i);
}
