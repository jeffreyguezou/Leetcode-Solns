var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  if (s.length === 0) return true;
  while (j < t.length && i < s.length) {
    if (t[j] == s[i]) {
      i++;
    }
    j++;
    if (i === s.length) return true;
  }
  return false;
};
