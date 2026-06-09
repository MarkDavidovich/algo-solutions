function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  // insertPos tracks where the next unique element should be written
  let insertPos = 1;
  
  for (let i = 1; i < arr.length; i++) {
    // if current element differs from previous, it's unique
    if (arr[i] !== arr[i - 1]) {
      // overwrite at insertPos instead of creating a new array
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  return insertPos;
}