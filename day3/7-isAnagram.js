function isAnagram(a, b) {
  // if lengths differ they can't be anagrams — early exit
  if (a.length !== b.length) return false;

  const count = {};
  // first pass — increment count for each char in string a
  for (let i = 0; i < a.length; i++) {
    count[a[i]] = (count[a[i]] ?? 0) + 1;
  }
  // second pass — decrement count for each char in string b
  for (let i = 0; i < b.length; i++) {
    // if char doesn't exist in a, or count hits below 0 — not an anagram
    if (count[b[i]] === undefined || count[b[i]] === 0) return false;
    count[b[i]]--;
  }
  return true;
}