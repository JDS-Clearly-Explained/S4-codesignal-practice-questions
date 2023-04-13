// Description
// Write a function that takes an amount to withdraw from an account, along with the current balance.

// If there isn't enough in the account to make the withdrawal, return -1. Otherwise return the remaining balance after the withdrawal.

// Example
// Input:

// amount == 100
// balance == 300
// Output:

// 200
// Input:

// amount == 50
// balance == 25
// Output:

// -1
// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer amount

// The amount to withdraw.

// Constraints

// 1 <= amount <= 107

// [input] integer balance

// Current balance.

// Constraints

// 0 <= balance <= 109

// [output] integer

// The remaining balance, or -1 if you don't have that much in your account.

function solution(amount, balance) {
  return amount > balance ? -1 : balance - amount;
}

// or

function solution(amount, balance) {
  if (amount > balance) return -1;

  balance -= amount;

  return balance;
}
