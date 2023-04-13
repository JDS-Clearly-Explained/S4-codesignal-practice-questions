// Description
// Return true if a string is all lowercase.

// Java and Javascript: there's no built-in for this. We have to compare the string to a lowercase version of itself created with .toLowerCase().

// Python: you can use the built-in .islower() to determine this.

// One difference is that this technique on JavaScript will report punctuation as lowercase, but the Python version will not.

// Example
// Input:

// s == "goats"
// Output:

// true
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] string s

// The input string.

// Constraints

// Will only contain upper and lowercase letters.

// [output] boolean

// True if the string is all lowercase.

function solution(s) {
  return s.toLowerCase();
}
