
function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    console.log('do-before', slow, fast);
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while(slow !== fast);

  console.log('after-do-while', slow, fast);

  fast = nums[0];
  while(slow !== fast) {
    console.log('while-before', slow, fast);
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

console.log(findDuplicate([1,3,4,2,2]));