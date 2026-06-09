function intersection(arr1, arr2) {
  const seen = {};
  const result = [];

  // first pass — store all elements of arr1 in an object
  for (let i = 0; i < arr1.length; i++) {
    seen[arr1[i]] = true;
  }

  // second pass — check each element of arr2 against the object
  for (let i = 0; i < arr2.length; i++) {
    if (seen[arr2[i]] === true) {
      result.push(arr2[i]);
      // mark as false to avoid pushing duplicates
      seen[arr2[i]] = false;
    }
  }
  
  return result;
}