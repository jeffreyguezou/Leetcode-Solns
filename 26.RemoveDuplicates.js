var removeDuplicates = function (nums) {
  let i = 1;
  let j = 2;
  let unique = 1;

  while (j < nums.length) {
    if (nums[j] != nums[j - 1]) {
      nums[i] = nums[j];
      unique++;
      i++;
    }
    j++;
  }
  return nums;
};

console.log(removeDuplicates([1, 1, 2]));
