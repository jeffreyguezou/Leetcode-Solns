var minSubArrayLen = function (target, nums) {
  let contSum = 0;
  let startIndex = 0;
  let sumFound = false;
  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    contSum = contSum + nums[i];
    while (contSum >= target) {
      sumFound = true;
      minLength = Math.min(minLength, i - startIndex + 1);

      contSum = contSum - nums[startIndex];
      startIndex = startIndex + 1;
    }
  }
  if (sumFound) return minLength;
  else return 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
