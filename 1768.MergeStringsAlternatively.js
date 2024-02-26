var mergeAlternately = function (word1, word2) {
  let i = 1;
  let j = 1;
  let k = 2;
  let merged = word1[0] + word2[0];

  while (i < word1.length && j < word2.length) {
    if (Math.floor(merged.length / 2) === merged.length / 2) {
      merged += word1[i];
      i++;
    } else {
      merged += word2[j];
      j++;
    }
  }
  while (j < word2.length) {
    merged += word2[j];
    j++;
  }
  while (i < word1.length) {
    merged += word1[i];
    i++;
  }
  return merged;
};

console.log(mergeAlternately("abcdefghi", "pqrst"));
