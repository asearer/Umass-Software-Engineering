function isBalanced(str) {
    const bracketPairs = { ')': '(', ']': '[', '}': '{' };
  
    function checkBalance(index, openBrackets) {
      if (index >= str.length) {
        return openBrackets.length === 0;
      }
  
      const char = str.charAt(index);
  
      if (char === '(' || char === '[' || char === '{') {
        openBrackets.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        if (openBrackets.length === 0 || openBrackets.pop() !== bracketPairs[char]) {
          return false; // Mismatched closing bracket
        }
      }
  
      return checkBalance(index + 1, openBrackets);
    }
  
    return checkBalance(0, []);
  }
  