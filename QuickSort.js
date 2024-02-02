function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  let j = arr.length;
  let midPt = Math.floor((i + j) / 2);
  while (arr[midPt] !== val && i <= j) {
    if (arr[midPt] > val) {
      j = midPt - 1;
    } else {
      i = midPt + 1;
    }
    midPt = Math.floor((i + j) / 2);
  }
  if (arr[midPt] == val) console.log(midPt + 1);
  else console.log(-1);
}

binarySearch([1, 2, 3, 5], 8);
