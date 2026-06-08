function longestWord(str) {
  const words = str.split(" ");
  // assume the first word is the longest
  let longest = words[0];
  
  for (let i = 1; i < words.length; i++) {
    // only update if strictly longer, so first word wins on a tie
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

