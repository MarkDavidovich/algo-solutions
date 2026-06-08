function mostFrequent(arr) {
  const count = {};
  // first pass - build a frequency map of every element
  for (let i = 0; i < arr.length; i++) {
    // if the element hasn't been seen yet, start at 0, then add 1
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }

  let maxCount = 0;
  let result = arr[0];
  // second pass - iterate the original array (not the object)
  // so we respect the order elements appear in for tie-breaking
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]] > maxCount) {
      maxCount = count[arr[i]];
      result = arr[i];
    }
  }
  return result;
}