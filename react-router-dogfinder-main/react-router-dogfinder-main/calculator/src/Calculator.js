// src/components/Calculator.js

import React from 'react';

const Calculator = ({ operation, num1, num2 }) => {
  let result;

  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = 'Invalid operation';
  }

  return (
    <div>
      <h2>Result:</h2>
      <p>{result}</p>
    </div>
  );
};

export default Calculator;
