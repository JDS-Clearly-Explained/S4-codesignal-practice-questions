function solution(x) {
  let result = x;

  while (result % 7 != 0) {
    x++;
    result *= x;
  }

  return result;
}
