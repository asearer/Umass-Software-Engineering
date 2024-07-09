function calc(expression) {
    // Split the expression into tokens and reverse the array.
    const tokens = expression.split(' ').reverse();
    const stack = []; // Initialize a stack to store numbers and intermediate results.
  
    while (tokens.length > 0) {
      const token = tokens.pop(); // Get the next token from the reversed tokens.
  
      if (/\d/.test(token)) {
        // If the token is a number, push it onto the stack.
        stack.push(parseFloat(token));
      } else {
        // If the token is an operator (+, -, *, or /), pop the top two values from the stack.
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        if (token === '+') {
          // For addition, push the result back onto the stack.
          stack.push(operand1 + operand2);
        } else if (token === '-') {
          // For subtraction, push the result back onto the stack.
          stack.push(operand1 - operand2);
        } else if (token === '*') {
          // For multiplication, push the result back onto the stack.
          stack.push(operand1 * operand2);
        } else if (token === '/') {
          // For division, check for division by zero, and then push the result back onto the stack.
          if (operand2 === 0) {
            throw new Error("Division by zero");
          }
          stack.push(operand1 / operand2);
        } else {
          // If the token is an invalid operator, throw an error.
          throw new Error("Invalid operator: " + token);
        }
      }
    }
  
    // At the end of processing, the stack should contain the final result.
    if (stack.length !== 1) {
      throw new Error("Invalid expression");
    }
  
    return stack[0];
  }
  
  
  
  
  
  
  