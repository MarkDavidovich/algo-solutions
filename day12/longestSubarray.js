function longestSubarray(arr, target) {
  let left = 0;
  let sum = 0;
  let maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    // expand window by adding the element on the right
    sum += arr[right];

    // shrink from the left until sum is back within target
    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    // window is now valid — check if it's the longest so far
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}