// Description
// Return the largest of six numbers.

// Do not use any built-in maximum value function to solve this!

// There could be ties for largest.

// Hint:

// It's possible to do this without the AND operator--think of how you solve this problem as a human looking at a list of numbers of a piece of paper. Do you look at the first and compare to the rest, then look at the second and compare to the rest, then look at the third and compare to the rest? And so on for all the numbers?

// Or is your algorithm simpler than that?

// Example
// Input:

// a == -2
// b == 20
// c == 10
// d == 15
// e == 99
// f == -30
// Output:

// 99
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

// Third number.

// Constraints

// -105 <= c <= 105

// [input] integer d

// Fourth number.

// Constraints

// -105 <= d <= 105

// [input] integer e

// Fifth number.

// Constraints

// -105 <= e <= 105

// [input] integer f

// Sixth number.

// Constraints

// -105 <= f <= 105

// [output] integer

// The largest of the numbers.

function solution(a, b, c, d, e, f) {
  return a > b
    ? a > c
      ? a > d
        ? a > e
          ? a > f
            ? a
            : f
          : e > f
          ? e
          : f
        : d > e
        ? d > f
          ? d
          : f
        : e > f
        ? e
        : f
      : c > d
      ? c > e
        ? c > f
          ? c
          : f
        : e > f
        ? e
        : f
      : d > e
      ? d > f
        ? d
        : f
      : e > f
      ? e
      : f
    : b > c
    ? b > d
      ? b > e
        ? b > f
          ? b
          : f
        : e > f
        ? e
        : f
      : d > e
      ? d > f
        ? d
        : f
      : e > f
      ? e
      : f
    : c > d
    ? c > e
      ? c > f
        ? c
        : f
      : e > f
      ? e
      : f
    : d > e
    ? d > f
      ? d
      : f
    : e > f
    ? e
    : f;
}

//or

function solution(a, b, c, d, e, f) {
  return Math.max(a, b, c, d, e, f);
}

//or

function solution(a, b, c, d, e, f) {
  let max_val = a;

  if (b > max_val) max_val = b;

  if (c > max_val) max_val = c;

  if (d > max_val) max_val = d;

  if (e > max_val) max_val = e;

  if (f > max_val) max_val = f;

  return max_val;
}
