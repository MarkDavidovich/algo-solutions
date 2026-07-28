function longestSubstringKDistinct(str, k) {
  const count = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    // add the incoming character to the window
    count[str[right]] = (count[str[right]] ?? 0) + 1;

    // shrink from left while we have more than k distinct characters
    while (Object.keys(count).length > k) {
      count[str[left]]--;
      // remove the character entirely when its count hits 0
      if (count[str[left]] === 0) delete count[str[left]];
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}