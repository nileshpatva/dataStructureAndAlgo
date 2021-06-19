
function uniqueWithPointers(arr) {
  let first = 0, second = 1;

  while(second < arr.length) {
    if(arr[first] !== arr[second]) {
      arr[++first] = arr[second];
    } else {
      second++;
    }
  }

  return first+1;
}

console.log(uniqueWithPointers([1,1,1,2,2,3,4,5,5,5,6,6,6,10]));