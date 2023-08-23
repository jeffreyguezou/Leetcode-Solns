/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let wealth = 0;
  let maxwealth = 0;
  for (i = 0; i < accounts.length; i++) {
    wealth = 0;
    for (j = 0; j < accounts[i].length; j++) {
      wealth = wealth + accounts[i][j];
    }
    if (wealth > maxwealth) maxwealth = wealth;
  }
  return maxwealth;
};
