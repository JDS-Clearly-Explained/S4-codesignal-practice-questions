function solution(a) {
  for (let i = 0; i < a.length; i++) a[i] *= 2;

  return a;
}

function solution_b(a) {
  const result = [];

  for (let e of a) result.push(e * 2);

  return result;
}

function solution_c(a) {
  const result = [];

  for (let i = 0; i < a.length; i++) result.push(a[i] * 2);

  return result;
}
