// Description
// Compute the product of all numbers from a to b, inclusive.

// Example
// Input:

// a == 2
// b == 7
// Output:

// 5040  (because 2 * 3 * 4 * 5 * 6 * 7 == 5040)
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer a

// The lower number.

// Constraints

// -12 <= a < b <= 12

// [input] integer b

// The upper number.

// Constraints

// -12 <= a < b <= 12

// [output] integer

// The product of all numbers from a to b.

function solution(a, b) {
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }
  return result;
}
