// steal this

function how_many_digits(n) {
  const str_num = String(n);

  return str_num.length;
}

function solution(n, width) {
  const starting_digits = how_many_digits(n);

  if (starting_digits >= width) return String(n);

  let leading_zeros = "";
  const needed_zeros = width - starting_digits;

  for (let i = 0; i < needed_zeros; i++) leading_zeros += "0";

  return leading_zeros + n;
}
