function countingSort(arr, max) {
  let counts = new Array(max + 1).fill(0);

  for (let it of arr) {
    counts[it]++;
  }
  let k = 0;
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0;  j < counts[i]; j++) {
      arr[k++] = i;
    }
  }
}
const arr = [5,3,4,6,7,1,2, 2,4,3,3,1];
countingSort(arr, 7);
console.log(arr);