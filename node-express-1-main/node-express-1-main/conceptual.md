### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

callback functions, promises, async/await, event listeners

- What is a Promise?

a javascript object that is used for managing asynchronous operations

- What are the differences between an async function and a regular function?

a regular function executes synchronously, async functions are asynchronous in execution

- What is the difference between Node.js and Express.js?

node is a runtime environment and express is web application framework

- What is the error-first callback pattern?

a way of handling asynchronous operations in javascript that consists of a callback function that is passed as an argument to an asynchronous function

- What is middleware?

software components or functions that sit between the application's request and response handling, providing a way to process and modify incoming requests or outgoing responses

- What does the `next` function do?

pass control from one middleware function to the next middleware function in the middleware stack

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

sequential api call, repetition, lack of error handling
