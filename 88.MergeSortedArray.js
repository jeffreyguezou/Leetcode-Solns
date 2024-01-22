/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.slice(0, -n);
};
let nums1 = [1, 2, 3, 0, 0, 0];
let m = nums1.length;
let nums2 = [2, 5, 6];
let n = nums2.length;
merge(nums1, m, nums2, n);

