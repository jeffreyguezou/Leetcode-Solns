class str {
  constructor(str) {
    this.str = str;
  }
  slice(a, b) {
    let returnVal = "";
    for (let i = a; i <= b; i++) {
      returnVal += this.str[i];
    }
    return returnVal;
  }
  split(char) {
    const result = [];

    // Initialize variables to keep track of the start and end indices
    let start = 0;
    let end = 0;

    // Iterate through the string
    while (end < this.str.length) {
      // Find the index of the separator in the string
      end = findSeparator(this.str, char, start);

      // Add the substring from start to end to the result array
      let substring = "";
      for (let i = start; i < end; i++) {
        substring += this.str[i];
      }
      result.push(substring);

      // Move the start index to the next character after the separator
      start = end + char.length;
    }

    return result;
  }

  // Helper function to find the index of the separator in the string
  static findSeparator(str, char, start) {
    let i = start;
    while (i < str.length) {
      let match = true;
      for (let j = 0; j < char.length; j++) {
        if (str[i + j] !== char[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
      i++;
    }
    return str.length;
  }
}

let str1 = new str("JfeffreyJeffreyJeffrey");
let sliced = str1.slice(2, 4);

let spt = str1.split("ff");
console.log(spt);
