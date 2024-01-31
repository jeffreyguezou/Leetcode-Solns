var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = "created";
    } else return true;
  }
  return false;
};
console.log(containsDuplicate([2, 14, 18, 22, 22]));
