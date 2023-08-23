/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  do {
    if (num % 2 === 0) {
      num = num / 2;
      steps += 1;
    } else {
      num -= 1;
      steps += 1;
    }
  } while (num > 0);
  return steps;
};
