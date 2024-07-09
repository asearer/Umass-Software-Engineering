// Define a Node class for circular linked list.
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define a CircularLinkedList class.
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Append a new node with a given value to the end of the circular linked list.
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.tail.next = this.head; // Make the list circular
    }
  
    // Remove a specified node from the circular linked list.
    remove(node) {
      if (!this.head) {
        return;
      }
  
      if (node === this.head) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = this.head.next;
          this.tail.next = this.head;
        }
      } else {
        let current = this.head;
        while (current.next !== this.head && current.next !== node) {
          current = current.next;
        }
        if (current.next === node) {
          current.next = node.next;
          if (node === this.tail) {
            this.tail = current;
          }
        }
      }
    }
  
    // Get the head of the circular linked list.
    getHead() {
      return this.head;
    }
  }
  
  // Function to find the Josephus problem solution using a circular linked list.
  function findJosephus(numPeople, skip) {
    const circle = new CircularLinkedList();
    for (let i = 1; i <= numPeople; i++) {
      circle.append(i);
    }
  
    let current = circle.getHead();
    while (circle.head !== circle.tail) {
      for (let i = 1; i < skip; i++) {
        current = current.next;
      }
  
      const next = current.next;
      circle.remove(current);
      current = next;
    }
  
    return current.value;
  }
  
  
  
  
  
  