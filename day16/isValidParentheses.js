function isValidParantheses(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(' || char === '[' || char === '{') {
      // opening bracket — push onto stack
      stack.push(char);
    } else {
      // closing bracket — check if it matches the top of the stack
      if (stack[stack.length - 1] !== pairs[char]) return false;
      stack.pop();
    }
  }

  // if stack is empty all brackets were matched
  return stack.length === 0;
}