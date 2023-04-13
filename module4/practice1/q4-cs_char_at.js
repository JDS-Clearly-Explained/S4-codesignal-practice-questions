// Description
// Return the character at index n in a string s.

// If the index is out of range of the length of the string, return the string "none". Otherwise, return the character at that index.

// Java hint: you can convert a character to a string with Character.toString().

// Example
// Input:

// s == "abcdef"
// n == 2
// Output:

// "c"
// Input:

// s == "hi there!"
// n == 37
// Output:

// "none"
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string s

// The input string.

// [input] integer n

// The index in the string from which to retrieve a character.

// [output] string

// The character at that index, or the string "none" if the index is out of range.

function solution(s, n) {
  if (s.length == 0 || n < 0 || n >= s.length) return "none";

  return s[n];
}
