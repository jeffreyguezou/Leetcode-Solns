var reverseWords = function (s) {
  let subString = "";
  let wordArray = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      subString += s[i];
    }
    if (subString != "" && s[i] == " ") {
      wordArray.push(subString);
      subString = "";
    }
    if (subString != "" && i === s.length - 1) {
      wordArray.push(subString);
      subString = "";
    }
  }
  const reverseArray = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  };
  let reversedArray = reverseArray(wordArray);
  return reversedArray.join(" ");
};

console.log(reverseWords("the sky is blue"));
