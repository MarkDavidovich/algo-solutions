function productExceptSelf(arr) {
  const result = new Array(arr.length).fill(1);

  // left pass: result[i] = product of everything to the LEFT of i
  let left = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = left;  // nothing to the left of i=0, so it stays 1
    left *= arr[i];    // update left product for next element
  }

  // right pass: multiply result[i] by product of everything to the RIGHT of i
  let right = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= right; // combine left product (already stored) with right product
    right *= arr[i];    // update right product for next element
  }

  return result;
}