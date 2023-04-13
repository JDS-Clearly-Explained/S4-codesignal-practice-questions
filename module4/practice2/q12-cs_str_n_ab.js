function str_n_c(n, c) {
  let result = "";

  for (let i = 0; i < n; i++) result += c;

  return result;
}

function solution(n, m) {
  return str_n_c(n, "A") + str_n_c(m, "B");
}
