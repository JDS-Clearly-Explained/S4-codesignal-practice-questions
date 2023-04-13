function solution(n) {
  if (n == 0) return 1;

  let count = 0;

  while (n > 0) {
    count++;
    n = parseInt(n / 10); // chop off a digit
  }

  return count;
}
