function solution(s) {
  const last_index = s.length - 1;
  const next_to_last_index = last_index - 1;

  return s[next_to_last_index] == s[last_index];
}
