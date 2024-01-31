/**
 * @param {number[]} nums
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = 1;
  for (j; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    } else i++;
  }
};
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));
