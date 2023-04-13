// Description
// From the year you were born until now is a certain number of years. What year was it that many years before your birth year?

// For example, if a person was born in 2000 and it is now 2021, their "flip year" would be 1979. (Because they are 21 years old, and there are 21 years between 1979 and 2000.)

// Example
// Input:

// birth_year = 2000
// current_year = 2021
// Output:

// 1979
// Input:

// birth_year = 1932
// current_year = 1999
// Output:

// 1865
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer birth_year

// The year the person was born

// Constraints

// 1 <= birth_year <= current_year <= 3000

// [input] integer current_year

// The current year

// Constraints

// 1 <= birth_year <= current_year <= 3000

// [output] integer

// The flipyear--this could potentially be less than 1

function solution(birth_year, current_year) {
  return birth_year - (current_year - birth_year);
}
