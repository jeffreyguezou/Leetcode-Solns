var productExceptSelf = function (nums) {
  let prefix = (num) => {
    let p = [];
    p[0] = 1;
    for (let i = 1; i < nums.length; i++) {
      p[i] = p[i - 1] * nums[i - 1];
    }
    console.log(p);
    return p;
  };

  let suffix = (num) => {
    let p = [];
    let len = num.length - 1;
    p[len] = 1;
    for (let j = len; j > 0; j--) {
      p[j - 1] = p[j] * num[j];
    }
    console.log(p);
    return p;
  };

  let prefixProd = prefix(nums);
  let suffixProd = suffix(nums);
  let returnArray = [];
  for (let i = 0; i < nums.length; i++) {
    returnArray[i] = prefixProd[i] * suffixProd[i];
  }

  return returnArray;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
//24,12,8,6
