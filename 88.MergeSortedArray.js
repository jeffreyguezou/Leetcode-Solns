/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let lastElement = m + n - 1;
  let mIndex = m - 1;
  let nIndex = n - 1;

  while (mIndex >= 0 && nIndex >= 0) {
    if (nums1[mIndex] > nums2[nIndex]) {
      nums1[lastElement] = nums1[mIndex];
      lastElement--;
      mIndex--;
    } else {
      nums1[lastElement] = nums2[nIndex];
      lastElement--;
      nIndex--;
    }
  }
  while (nIndex >= 0) {
    nums1[lastElement] = nums2[nIndex];
    lastElement--;
    nIndex--;
  }

  console.log(nums1);
};
let nums1 = [0];
let m = 0;
let nums2 = [2];
let n = 1;
merge(nums1, m, nums2, n);
