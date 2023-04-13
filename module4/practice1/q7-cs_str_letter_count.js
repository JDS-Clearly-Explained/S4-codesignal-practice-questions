// Description
// Count the number of occurrences of a letter in a string.

// Do not use any built-in count() style functions for this task.

// Example
// Input:

// s == "bacab"
// letter = "b"
// Output:

// 2
// Input:

// s == "abbb"
// letter == "a"
// Output:

// 1
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string s

// The input string.

// Constraints

// All lowercase, 2 <= s.length <= 100

// [input] char letter

// The letter to count.

// Constraints

// Lowercase a-z.

// [output] integer

// The count of the letter.

function solution(s, letter) {
  let count = 0;

  for (c of s) // Or use an indexed loop
    if (c == letter) count++;

  return count;
}
