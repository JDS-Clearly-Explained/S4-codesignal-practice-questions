// Description
// This function will run a set of tests on three numbers. If the test passes, the function will return the string "OK". Otherwise it returns "NOK".

// The test passes if:

// a is greater than b AND
// b is less than or equal to c AND
// One of more of the following is true:
// a * 3 is greater than c OR
// c is less than or equal to a
// Example
// Input:

// a == 728
// b == 627
// c == 4
// Output:

// "NOK"
// Input:

// a == 130
// b == -91
// c == 215
// Output:

// "OK"
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer a

// First number.

// Constraints

// -103 <= a <= 103

// [input] integer b

// Second number.

// Constraints

// -103 <= b <= 103

// [input] integer c

// Third number.

// Constraints

// -103 <= c <= 103

// [output] string

// "OK" if the test passes, else "NOK".

function solution(a, b, c) {
  return a > b && b <= c && (a * 3 > c || c <= a) ? "OK" : "NOK";
}

//or

function solution(a, b, c) {
  if (a > b && b <= c && (a * 3 > c || c <= a)) return "OK";

  return "NOK";
}
