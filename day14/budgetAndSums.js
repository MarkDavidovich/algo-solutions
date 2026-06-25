// extracts a flat array of values for any property
const calculateSumHelper = (arr, propertyStr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // use the helper array of extracted values - no object digging
    sum += arr[i][propertyStr] || 0;
  }
  return sum;
};

const calculateAvgHelper = (arr, propertyStr) => {
  if (arr.length === 0) return 0;
  // reuse calculateSumHelper - no duplicate logic
  return calculateSumHelper(arr, propertyStr) / arr.length;
};

// all four functions now delegate to the helpers
function getBudgetsSum(arr) { return calculateSumHelper(arr, "budget"); }
function getBudgetsAvg(arr) { return calculateAvgHelper(arr, "budget"); }
function getAgesSum(arr)    { return calculateSumHelper(arr, "age"); }
function getAgesAvg(arr)    { return calculateAvgHelper(arr, "age"); }