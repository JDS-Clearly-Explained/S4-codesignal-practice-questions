function solution(s) {
  let max_letter = "!";

  for (c of s) if (c > max_letter) max_letter = c;

  return max_letter;
}

function solution_alternate(s) {
  let max_letter = null;

  for (c of s) if (max_letter === null || c > max_letter) max_letter = c;

  return max_letter;
}
