function flatten() {
  let flattenedArray =[]
  var input = [
    1, 2, 3,
    [4],
    [5, 6, [7], [8, [9, [10]]]],
    11, 12, 13,
    [14, [[[[[15, [16]]]]]]],
    17, 18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
  ];
const checkArray = function(passedVal){
  if(typeof(passedVal)=="object"){
    passedVal.map((elem)=>{
      checkArray(elem)
    })
  }
  else {
    flattenedArray.push(passedVal)
  }
}
checkArray(input)
  console.log(flattenedArray)
return flattenedArray

}

Array.prototype.flatten = flatten;
