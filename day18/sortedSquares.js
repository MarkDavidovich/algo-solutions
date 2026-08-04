function sortedSquares(arr) {
  const result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let insertPos = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      // left square is bigger — place it at the back
      result[insertPos] = leftSquare;
      left++;
    } else {
      // right square is bigger or equal — place it at the back
      result[insertPos] = rightSquare;
      right--;
    }
    insertPos--;
  }

  return result;
}