/**
 * Given an array of size n. for every i from 0 to n-1 output max of a[0], a[1],...,a[i]
 */
function prefixMax(arr) {
  let maxArr = [];
  let currMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currMax = Math.max(currMax, arr[i]);
    maxArr.push(currMax);
  }
  return maxArr;
}
console.log(prefixMax([5, 2, 3, 4, 6, 7, 8, 10]));

function subArraySums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      console.log(sum);
    }
  }
}
subArraySums([1, 2, 3]);

/**
 * 
Input: arr[] = {3, 4, 5}
Output: 3
Explanation:The longest subarray forming an AP is {3, 4, 5} with common difference 1.
Input: {10, 7, 4, 6, 8, 10, 11}
Output: 4
Explanation:The longest possible subarray forming an AP is {4, 6, 8, 10} with common difference(= 2).
 */

/**
 * Previous common difference (pd)
 * Curr arithmetic subarray length (curr)
 * max subarray length (ans)
 */

function maxArithmeticSubarrayLength(arr) {
  let ans = 2;
  let curr = 2;
  let pd = arr[1] - arr[0];
  let j = 2;
  while (j < arr.length) {
    let currDiff = arr[j] - arr[j - 1];
    if (pd === currDiff)
      curr++;
    else {
      pd = currDiff;
      curr = 2;
    }
    ans = Math.max(ans, curr);
    j++;
  }
  return ans;
}

console.log(`maxArithmeticSubarrayLength`, maxArithmeticSubarrayLength([2, 2, 2, 2, 5, 4, 5, 3, 1, -1, -3, -5]))


function firstRepeatingEl(arr) {
  let map = new Map();
  let minIdx = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      minIdx = Math.min(map.get(arr[i]), minIdx);
    } else {
      map.set(arr[i], i);
    }
  }
  return minIdx === Infinity ? -1 : minIdx;
}

console.log(`firstRepeatingEl`, firstRepeatingEl([2, 1, 3, 4, 5, 6]))

/**
 * Given an unsorted array A of size N of non-negative integers,
 * find a continous subarray which adds to a given number S.
 */

function subarrayWithGivenSum(arr, s) {
  // brute force
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      if (currSum === s) return [i, j];
    }
  }
  return [-1, -1];
  // two pointer
  // let start = 0, end = 0;
  // let currSum = 0;
  // while (start < arr.length && end < arr.length) {
  //   currSum += arr[end];
  //   if (currSum === s) return [start, end];
  //   if (currSum + arr[end] > s) start++;
  //   else if (currSum + arr[end] < s) end++;
  // }
  // while (start < arr.length) {
  //   currSum -= arr[start]
  //   if (currSum === s) return [start, end];
  //   start++;
  // }
}

console.log(subarrayWithGivenSum([1, 2, 3, 4, 5], 12));

function smallestPositiveMissingIntegar(arr) {
  let present = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) present[arr[i]] = true;
  }

  for (let i = 0; i < present.length; i++) {
    if (!present[i]) return i;
  }
}
console.log(smallestPositiveMissingIntegar([0, -9, 1, 3, -4, 5]));

function getAllPossibleSubArrays(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let temp = [];
      for (let k = i; k <= j; k++)
        temp.push(arr[k]);
      res.push(temp);
    }
  }
  return res;
}
console.log(getAllPossibleSubArrays([1, 2, 3, 4]))

function maxSubArraySum(arr) {
  // brute force
  // let maxSum = -Infinity;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i; j < arr.length; j++) {
  //     let sum = 0;
  //     for (let k = i; k <= j; k++)
  //       sum += arr[k];
  //     maxSum = Math.max(maxSum, sum);
  //   }
  // }
  // return maxSum;

  /* cummulative sum approach */
  // let prefixSum = [0];

  // for (let i = 1; i <= arr.length; i++) {
  //   prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
  // }

  // let max = -Infinity;
  // for (let i = 1; i <= arr.length; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < i; j++) {
  //     sum = prefixSum[i] - prefixSum[j];
  //     max = Math.max(max, sum);
  //   }
  // }
  // return max;


  /** Kadane's Algo */
  let curSum = 0;
  let max = -Infinity;
  for (let it of arr) {
    curSum += it;
    if (curSum < 0) {
      curSum = 0;
    } else {
      max = Math.max(max, curSum);
    }
  }
  return max;
}
console.log(maxSubArraySum([1, 2, 3, 4]));

function Kadane(arr) {
  /** Kadane's Algo */
  let curSum = 0;
  let max = -Infinity;
  for (let it of arr) {
    curSum += it;
    if (curSum < 0) {
      curSum = 0;
    } else {
      max = Math.max(max, curSum);
    }
  }
  return max;
}

function maxCircularSubarraySum(arr) {
  let nonWrapSum = Kadane(arr);
  let wrapSum;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    arr[i] = -arr[i];
  }
  wrapSum = total - (-Kadane(arr));
  return Math.max(wrapSum, nonWrapSum);
}

console.log(maxCircularSubarraySum([4, -4, 6, -6, 10, -11, 12]));


function pairSum(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while(start < end) {
    if (arr[start] + arr[end] === k) return true;
    else if(arr[start] + arr[end] > k) end--;
    else if(arr[start] + arr[end] < k) start++;
  }

  return false;
}
console.log(pairSum([1,2,3,4,5], 10))