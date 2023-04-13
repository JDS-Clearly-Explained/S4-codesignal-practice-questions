// Description
// Write a function that converts a floating point number to a string with a specific number of digits past the decimal place.

// JavaScript

// You can do this with the .toFixed() method. This will make a new string with the given number of decimal places, rounded if necessary.

// let x = 12.3456;
// let y = x.toFixed(2);  // y is now "12.34"
// Python

// You can do this with a format string. This will make a new string with the given number of decimal places, rounded if necessary.

// x = 12.3456
// y = f"{x:.2f}"     # y is now "12.34"

// a = 4
// b = 3.14159265358979
// c = f"{b:.{a}f}"   # c is now "3.1415"
// Java

// You can use String.format() with %f and a specified number of decimal places:

// double d = 12.3456;
// String s = String.format("%.2f", d);

// int places = 4;
// String t = String.format("%." + places + "f", d);
// Example
// Input:

// s == "12.345"
// places = 2
// Output:

// "12.34"  (as a string)
// Input:

// s == "12.3"
// places = 4
// Output:

// "12.3000"  (as a string)
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] float f

// A floating point number.

// Constraints

// -105 <= f <= 105

// [input] integer places

// The number of decimal places

// Constraints

// 0 <= places <= 10

// [output] string

// The string value of the float to the given number of decimal places.

function solution(f, places) {
  return f.toFixed(places);
}
