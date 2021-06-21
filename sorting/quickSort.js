function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
}
function quickSort(arr, start, end) {
  if (start >= end) return; // base case
  // partitioning of array
  let boundry = partition(arr, start, end);
  // sort left
  quickSort(arr, start, boundry - 1);
  // sort right
  quickSort(arr, boundry + 1, end);
}
function partition(arr, start, end) {
  let pivot = arr[end]; let boundry = start - 1;
  for (let i = start; i <= end; i++) {
    if (arr[i] <= pivot) {
      boundry++;
      swap(arr, i, boundry);
    }
  }
  return boundry;
}
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
const arr = [4,3,6,7,2,8,9,11,1,0];
sort(arr);
console.log(arr);