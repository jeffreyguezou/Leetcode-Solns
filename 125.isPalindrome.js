var isPalindrome = function (s) {
  let ls = s.toLowerCase();

  let cs = ls.replace(/[^0-9A-Z]+/gi, "");

  let p1 = 0;
  let p2 = cs.length - 1;

  while (p1 <= p2) {
    if (cs[p1] !== cs[p2]) {
      return false;
    } else {
      p1++;
      p2--;
    }
  }
  return true;
};
console.log(isPalindrome("Race a car"));
