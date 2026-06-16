function countSubarrays(arr, target) {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    // expand window by adding the element on the right
    sum += arr[right];

    // shrink from the left whenever sum overshoots the target
    while (sum > target) {
      sum -= arr[left];
      left++;
    }

    // if sum matches, we found a valid subarray
    if (sum === target) count++;
  }

  return count;
}