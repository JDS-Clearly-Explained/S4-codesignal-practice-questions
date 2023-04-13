function solution(a, x) {
  const middle_index = parseInt(a.length / 2);

  a.splice(middle_index, 0, x);

  return a;
}
