// Description
// Return the larger of two numbers.

// If they're the same, return either one.

// Example
// Input:

// a == -2
// b == 20
// Output:

// 20
// Input:

// a == 3490
// b == 3490
// Output:

// 3490
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer a

// First number.

// Constraints

// -105 <= a <= 105

// [input] integer b

// Second number.

// Constraints

// -105 <= b <= 105

// [output] integer

// The largest of the two numbers.

function solution(a, b) {
  return a > b ? a : b;
}
