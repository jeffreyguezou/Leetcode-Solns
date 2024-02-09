var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;
  let mini = 2;
  while (j < nums.length) {
    let countRep = 1;
    while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
      countRep = countRep + 1;
      j++;
    }
    for (let k = 0; k < Math.min(mini, countRep); k++) {
      nums[i] = nums[j];
      i = i + 1;
    }

    j = j + 1;
  }

  return i;
};
console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 4, 5, 5, 6]));
