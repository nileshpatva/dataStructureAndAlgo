

function bubbleSort (arr) {
  let isSorted = false;
  for (let i = 0; i < arr.length; i++) {
    isSorted = true;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        isSorted = false;
      }
    }
    if (isSorted) return;
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(bubbleSort([5,4,3,2,1]));