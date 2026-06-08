function reverseWords(str) {
  const words = str.split(" ");
  const reversed = [];
  // iterate from the last word to the first
  for (let i = words.length - 1; i >= 0; i--) {
    // push each word into the new array in reverse order
    reversed.push(words[i]);
  }
  // join all words back into a single string with spaces
  return reversed.join(" ");
}