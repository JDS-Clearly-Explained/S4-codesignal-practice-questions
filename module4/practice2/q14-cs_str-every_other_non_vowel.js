function vowel(c) {
  return c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
}

function solution(s) {
  let result = "";

  for (let i = 0; i < s.length; i += 2) if (!vowel(s[i])) result += s[i];

  return result;
}
