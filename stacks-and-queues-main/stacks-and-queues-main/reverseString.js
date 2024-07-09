// Function to reverse a string character by character.
function reverseString(input) {
    // Initialize an empty string to store the reversed string.
    let reversed = '';
  
    // Loop through the input string from the end to the beginning.
    for (let i = input.length - 1; i >= 0; i--) {
      // Concatenate each character from the input string in reverse order.
      reversed += input.charAt(i);
    }
  
    // Return the reversed string.
    return reversed;
  }
  
  
  
  
  