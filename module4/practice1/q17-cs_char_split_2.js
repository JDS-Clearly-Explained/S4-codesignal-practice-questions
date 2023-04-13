function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) result += "*" + s[i];

  return result + "*";
}

function solution_alternate(s) {
  result = "";

  for (c of s) result += `*${c}`;

  return result + "*";
}