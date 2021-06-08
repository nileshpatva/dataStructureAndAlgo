
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (arr[j] > curr && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort(arr) {
  let counter = 0; // to keep track of each itiration

  while (counter < arr.length - 1) {
    for (let i = 0; i < arr.length - counter; i++) {
      // find if next element is smaller than the current
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]; // then swap eachother
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    counter++; // increment the counter
  }
  return arr;
}

console.log(insertionSort([2, 3, 1, 12, 2, 4, 2, 123, 44, 23]))
console.log(selectionSort([2, 3, 1, 12, 2, 4, 2, 123, 44, 23]))
console.log(bubbleSort([2, 3, 1, 12, 2, 4, 2, 123, 44, 23]))


