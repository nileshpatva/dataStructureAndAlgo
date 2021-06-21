function mergeSort(arr) {
  if (arr.length < 2) return;
  // divide the array into half
  let middle = Math.floor(arr.length / 2);

  let left = [];
  for (let i = 0; i < middle; i++) {
    left[i] = arr[i];
  }

  let right = [];
  for (let i = middle; i < arr.length; i++) {
    right[i - middle] = arr[i];
  }

  // sort each half
  mergeSort(left);
  mergeSort(right);

  // merge the result
  merge(left, right, arr);
}

function merge(left, right, result) {
  let i = 0, j = 0, k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }
  while (i < left.length) {
    result[k++] = left[i++];
  }
  while (j < right.length) {
    result[k++] = right[j++];
  }
}

const arr = [6,5,4,3,2,1];
mergeSort(arr);
console.log(arr);