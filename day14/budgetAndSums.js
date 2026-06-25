const calculateSumHelper = (arr, propertyStr) => {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][propertyStr] || 0;
  }
  return sum;
};

const calculateAvgHelper = (arr, propertyStr) => {
  if (arr.length === 0) return 0;
  return calculateSumHelper(arr, propertyStr) / arr.length;
};

function getBudgetsSum(arr) { return calculateSumHelper(arr, "budget"); }
function getBudgetsAvg(arr) { return calculateAvgHelper(arr, "budget"); }
function getAgesSum(arr)    { return calculateSumHelper(arr, "age"); }
function getAgesAvg(arr)    { return calculateAvgHelper(arr, "age"); }