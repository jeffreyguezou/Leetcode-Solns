function majorityElement(nums) {
  let newObj = {};
  let majElement = 0;
  let majVal = -Infinity;
  for (i = 0; i < nums.length; i++) {
    newObj[nums[i]] ? newObj[nums[i]]++ : (newObj[nums[i]] = 1);
  }

  for (let key in newObj) {
    if (newObj[key] > majVal) {
      majVal = newObj[key];
      majElement = key;
    }
  }
  return majElement;
}
console.log(majorityElement([1, 2, 3, 4, 5, 5]));
console.log(majorityElement([3, 2, 3]));
