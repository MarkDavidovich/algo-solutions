function countAboveAverage(arr) {
  let sum = 0;
  // first pass — add up all elements
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // calculate average once, outside any loop
  const avg = sum / arr.length;

  let count = 0;
  // second pass — count elements that exceed the average
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > avg) count++;
  }
  return count;
}