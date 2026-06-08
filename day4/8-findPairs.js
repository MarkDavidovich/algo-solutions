function findPairs(arr, target) {
  const seen = {};
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    // calculate what number we'd need to complete the pair
    const complement = target - arr[i];
    // if we've seen the complement before, we have a pair
    if (seen[complement] === true) {
      pairs.push([complement, arr[i]]);
      // mark complement as used to avoid duplicate pairs
      seen[complement] = false;
    } else {
      // haven't found a pair yet, record this number for later
      seen[arr[i]] = true;
    }
  }
  return pairs;
}