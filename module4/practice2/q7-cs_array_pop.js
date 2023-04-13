function solution(a) {
  const beginning = a.shift();
  const end = a.pop();

  return [a, [beginning, end]];
}
