function split(str, limiter) {
  let i = 0;

  let subString = "";
  let tempString = "";
  let result = [];

  if (limiter.length === 0) {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }

  while (i < str.length) {
    if (str[i] === limiter[0]) {
      for (let j = 0; j < limiter.length; j++) {
        if (str[i + j] !== limiter[j]) {
          break;
        } else tempString += str[i + j];
      }
      if (tempString === limiter) {
        result.push(subString);
        subString = "";
        tempString = "";
        i = i + limiter.length;
      } else {
        tempString = "";
      }
    }
    subString += str[i];
    i++;
    if (i === str.length && subString) {
      result.push(subString);
    }
  }

  return result;
}

console.log(split("JeffreyfRajffguefzffou", "ff"));
console.log(split("abcdcgefcd", "c"));
console.log(split("Jeffrey Raj Guezou", ""));
console.log(split("Jeffrey Raj Guezou", " "));
console.log(split("JeffreyfRajffguefzffou", "fr"));
console.log(split("jeffreyraj", "xyz"));
