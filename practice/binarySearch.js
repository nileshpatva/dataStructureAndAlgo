function binarySearch(arr, item) {
  let lo = 0;
  let hi = arr.length - 1;

  let point = Math.floor((lo + hi)/2);

  while (lo <= hi) {
    if (arr[point] === item) return point;
    if (arr[point] < item) lo = point + 1;
    else hi = point - 1;
    point = Math.floor((lo + hi)/2);
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,10], 5));
console.log(binarySearch(['Abb', 'Bbb', 'Bcc', 'Ccc', 'Cdd'], 'Bcc'));