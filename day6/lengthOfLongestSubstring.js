function lengthOfLongestSubstring(str) {
  if (str.length === 0) return 0;

  const seen = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    // if we've seen this char and it's inside our current window (by checking the value in the char key)
    if (seen[char] !== undefined && seen[char] >= left) {
      // shrink window — move left pointer past the previous occurrence
      left = seen[char] + 1;
    }
    // record the latest index of this character
    seen[char] = right;
    // update max length if current window is larger
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}