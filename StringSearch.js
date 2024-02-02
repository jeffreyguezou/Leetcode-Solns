function StringSearch(large, small) {
  let equalCount = 0;

  for (let i = 0; i < large.length; i++) {
    for (let j = 0; j < small.length; j++) {
      if (large[i + j] != small[j]) {
        break;
      }
      if (small.length - 1 === j) {
        equalCount++;
      }
    }
  }
  return equalCount;
}

console.log(StringSearch("wowomgzomg", "omg"));
