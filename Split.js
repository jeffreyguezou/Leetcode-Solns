function split(str, limiter) {
  let i = 0;

  let subString = "";
  let result = [];

  while (i < str.length) {
    if (limiter.length === 0) {
      result.push(str[i]);
    } else {
      if (str[i] != limiter[0]) {
        subString += str[i];
      } else {
        for (let j = 0; j < limiter.length; j++) {
          if (str[i + j] != limiter[j]) {
            subString += str[i];
            break;
          }

          if (j === limiter.length - 1) {
            result.push(subString);
            subString = "";
          }
        }
      }
      if (subString && i === str.length - 1) result.push(subString);
    }
    i++;
  }
  return result;
}

console.log(split("JeffreyfRajffguefzffou", "ff"));
console.log(split("abcdcgefcd", "c"));
console.log(split("Jeffrey Raj Guezou", ""));
console.log(split("Jeffrey Raj Guezou", " "));
