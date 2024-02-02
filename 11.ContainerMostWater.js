var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let vol = 0;
  let maxVol = 0;
  while (i < j) {
    if (height[i] < height[j]) vol = height[i] * (j - i);
    else vol = height[j] * (j - i);
    if (vol > maxVol) maxVol = vol;
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxVol;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
