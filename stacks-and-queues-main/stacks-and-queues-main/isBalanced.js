function isBalanced(str) {
    const stack = [];
    const bracketPairs = { ')': '(', ']': '[', '}': '{' };
  
    for (let char of str) {
      if (char === '(' || char === '[' || char === '{') {
        // If it's an opening bracket, push it onto the stack
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        // If it's a closing bracket, check if it matches the top of the stack
        const lastBracket = stack.pop();
  
        if (lastBracket !== bracketPairs[char]) {
          return false; // Mismatched closing bracket
        }
      }
    }
  
    // After processing the string, the stack should be empty if it's balanced
    return stack.length === 0;
  }
  
  
  