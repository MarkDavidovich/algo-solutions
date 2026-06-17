function maxVowels(str, k) {
  const vowels = "aeiou";
  let count = 0;

  // count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (vowels.includes(str[i])) count++;
  }

  let maxCount = count;

  // slide the window forward one step at a time
  for (let i = k; i < str.length; i++) {
    // add the new character entering on the right
    if (vowels.includes(str[i])) count++;
    // remove the character leaving on the left
    if (vowels.includes(str[i - k])) count--;
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}