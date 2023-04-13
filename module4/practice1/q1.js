// Description
// Compute the factorial of an integer n. This is commonly written as n!, which is read as "n factorial".

// You must use a loop to solve this problem. You cannot hard-code the answers.

// The factorial of a number is the product of every integer between 1 and n.

// Special case: the factorial of 0 is defined to be 1.

// Example
// Input:

// n == 3
// Output:

// 6   (because 1 * 2 * 3 == 6)
// Input:

// n == 5
// Output:

// 120  (because 1 * 2 * 3 * 4 * 5 == 120)
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// The amount to withdraw.

// Constraints

// 0 <= n <= 12

// [output] integer

// The factorial of n.

function solution(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//or

function solution(n) {
  if (n == 0) return 1;

  let product = 1;

  for (let i = 1; i <= n; i++) product *= i;

  return product;
}
