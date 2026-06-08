function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) count++;
  }
  return count;
}