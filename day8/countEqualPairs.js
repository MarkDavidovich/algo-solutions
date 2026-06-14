function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;

    if (sum < target) {
      // sum too small — move left pointer right to increase the sum
      left++;
    } else {
      // sum too large — move right pointer left to decrease the sum
      right--;
    }
  }

  return false;
}