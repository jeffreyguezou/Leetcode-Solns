var containsNearbyDuplicate = function (nums, k) {
  let i = 0;
  let j = 1;
  while (j < nums.length && i < nums.length) {
    if (nums[i] === nums[j]) {
      console.log(Math.abs(i - j));
      if (Math.abs(i - j) <= k) return true;
    }
    j++;
    if (j === nums.length - 1) {
      i++;
      j = i + 1;
      console.log(i, j);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
