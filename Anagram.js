/* function checkAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  } else {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    let string1 = arr1.toString();
    let string2 = arr2.toString();
    if (string1 === string2) {
      return true;
    }
    return false;
  }
}

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("test", "rest")); */

/* function checkAnagram(str1, str2) {
  if (str1.length === str2.length) {
    let string1 = str1.split("").sort().toString();
    let string2 = str2.split("").sort().toString();
    if (string1 === string2) {
      return true;
    }
  }

  return false;
}

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("test", "rest"));
 */

function validAnagram(str1, str2) {
  let freqcounter1 = {};
  let freqcounter2 = {};
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i in str1) {
    let char = str1[i];
    freqcounter1[char] = (freqcounter1[char] || 0) + 1;
  }
  for (let i in str2) {
    let char = str2[i];
    freqcounter2[char] = (freqcounter2[char] || 0) + 1;
  }

  for (let key in freqcounter1) {
    if (freqcounter1[key] !== freqcounter2[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("hjbcsdk", "sjcdhk"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("a", "ab"));
