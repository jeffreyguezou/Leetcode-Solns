function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let i = 0;
  let j = n - 1;
  let pair = 0;
  while (i < n) {
    if ((ar[i] + ar[j]) % k === 0) {
      pair = pair + 1;
    }
    j--;
    if (j === i) {
      j = n - 1;
      i++;
    }
    if (j === i && j === n - 1) {
      break;
    }
  }
  console.log(pair);
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
