// Description
// Return the larger of three numbers.

// If they're all the same, return any one.

// Example
// Input:

// a == -2
// b == 20
// c == 10
// Output:

// 20
// Input:

// a == 3490
// b == 3490
// c == 3490
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

// [input] integer c

// First number.

// Constraints

// -105 <= c <= 105

// [output] integer

// The largest of the three numbers.

function solution(a, b, c) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

//or

function solution(a, b, c) {
  return Math.max(a, b, c);
}

//or

function solution(a, b, c) {
  if (a === b && b === c) {
    return a;
  }

  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
