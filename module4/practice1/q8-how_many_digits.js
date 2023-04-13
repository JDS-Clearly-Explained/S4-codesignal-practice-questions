// Description
// Given a number, return the number of digits.

// Hint:

// JavaScript: you can convert a number to a string with the String() function.
// Python: you can convert a number to a string with the str() function.
// Java: you can convert a number to a string with the String.valueOf() function.
// Example
// Input:

// n == 3490
// Output:

// 4
// Input:

// n == 0
// Output:

// 1
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The input number/

// Constraints

// 0 <= n <= 109

// [output] integer

// The number of digits in the input integer

function solution(n) {
  const str_num = String(n);

  return str_num.length;
}
