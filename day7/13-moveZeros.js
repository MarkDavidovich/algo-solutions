function moveZeros(arr) {
  // insertPos tracks where the next non-zero should be written
  let insertPos = 0;

  // first pass — overwrite from the front with non-zero elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  // second pass — fill the rest with zeros
  for (let i = insertPos; i < arr.length; i++) {
    arr[i] = 0;
  }
}