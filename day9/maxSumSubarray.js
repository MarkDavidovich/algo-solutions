function maxSumSubarray(arr, k) {
  // calculate the sum of the first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // slide the window forward one step at a time
  for (let i = k; i < arr.length; i++) {
    // add the new element entering the window,
    // subtract the element leaving the window
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}