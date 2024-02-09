var rotate = function (nums, k) {
  let y = k % (nums.length - 1);

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, y - 1);
  reverse(y, nums.length - 1);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
