const Stack = require('./stack'); // Import your Stack class

// Initialize two stacks for back and forward history
const backStack = new Stack();
const forwardStack = new Stack();

// Current page
let currentPage = null;

// Function to navigate to a new page
function navigateTo(url) {
  // Push the current page onto the back stack
  if (currentPage !== null) {
    backStack.push(currentPage);
  }

  // Load the new page (e.g., display it in the browser)
  loadPage(url);

  // Update the current page
  currentPage = url;

  // Clear the forward stack
  forwardStack.size = 0;
}

// Function to navigate back
function navigateBack() {
  if (!backStack.isEmpty()) {
    // Push the current page onto the forward stack
    forwardStack.push(currentPage);

    // Pop the previous page from the back stack
    const previousPage = backStack.pop();

    // Load the previous page
    loadPage(previousPage);

    // Update the current page
    currentPage = previousPage;
  }
}

// Function to navigate forward
function navigateForward() {
  if (!forwardStack.isEmpty()) {
    // Push the current page onto the back stack
    backStack.push(currentPage);

    // Pop the next page from the forward stack
    const nextPage = forwardStack.pop();

    // Load the next page
    loadPage(nextPage);

    // Update the current page
    currentPage = nextPage;
  }
}

// Function to load a webpage (you need to implement this)
function loadPage(url) {
  // Implement how you display the webpage content
  console.log(`Loading page: ${url}`);
}


