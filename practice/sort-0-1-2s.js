
function sort(nums) {

  let low = 0;
  let mid = 0;
  let hi = nums.length - 1;

  while (mid <= hi) {
    switch (nums[mid]) {
      case 0:
        {
          let temp = nums[mid];
          nums[mid] = nums[low];
          nums[low] = temp;
          low++; mid++;
          break;
        }
      case 1:
        mid++;
        break;
      case 2:
        {
          let temp = nums[mid];
          nums[mid] = nums[hi];
          nums[hi] = temp;
          hi--;
          break;
        }
    }
  }
  return nums;
}

console.log(sort([1, 1, 0, 1, 0, 0, 0, 2, 1, 1, 1, 2, 2, 2, 0, 0, 1, 2]));