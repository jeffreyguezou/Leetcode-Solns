function breakingRecords(scores) {
  // Write your code here
  let min = 0;
  let max = 0;
  let minCount = 0;
  let maxCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      min = scores[i];
      max = scores[i];
    } else {
      if (scores[i] > max) {
        max = scores[i];
        maxCount = maxCount + 1;
        console.log(maxCount);
      }
      if (scores[i] < min) {
        min = scores[i];
        minCount = minCount + 1;
        console.log(minCount);
      }
    }
  }
  console.log(minCount, maxCount);
}
breakingRecords[(10, 5, 20, 20, 4, 5, 2, 25, 1)];
