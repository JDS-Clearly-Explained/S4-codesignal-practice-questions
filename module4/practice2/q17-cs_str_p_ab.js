function str_n_c(n, c) {
  let result = "";

  for (let i = 0; i < n; i++) result += c;

  return result;
}

function str_nm_ab(n, m) {
  return str_n_c(n, "A") + str_n_c(m, "B");
}

function solution(p, n, m) {
  let result = "";

  for (let i = 0; i < p; i++) result += str_nm_ab(n, m);

  return result;
}
