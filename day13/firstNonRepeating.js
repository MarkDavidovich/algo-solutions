function firstNonRepeating(str) {
  const count = {};

  // first pass — count occurrences of every character
  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] ?? 0) + 1;
  }

  // second pass — return the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) return str[i];
  }

  return null;
}
