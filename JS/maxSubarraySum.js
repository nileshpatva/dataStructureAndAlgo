/**
 * arr => array of integers
 * num => number of elements in sub array
 * 
 * 
 */
function maxSubarraySum(arr, num) {
  let maxSum = 0;

  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  let currSum = maxSum;
  for(let i = num;  i < arr.length; i++) {
    currSum = currSum - arr[i-num] + arr[i];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,2,4,4,1,3,2,4,5,5,2,2,4,7,1,1,2,3],2))