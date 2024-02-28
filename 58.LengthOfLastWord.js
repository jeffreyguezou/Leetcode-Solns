var lengthOfLastWord = function (s) {
  let subString = "";
  let ssLength;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != " ") {
      subString += s[i];
    }
    if (subString != "" && s[i] == " ") {
      return subString.length;
    }
  }
  return subString.length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("today is a nice day"));
console.log(lengthOfLastWord("a"));
