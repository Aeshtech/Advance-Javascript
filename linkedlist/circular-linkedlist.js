/* Circular Linkedlist is identical to Singly Linkedlist for various operations but it also provide direct access to
   head node from the last node. In Circular Linkedlist the next pointer of last node must point to the first node.
*/

import { Node } from "./node.js";

class CircularLinkedList {
  head = null;

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      return this.head;
    }

    let curr = this.head;
    while (curr && curr.next !== this.head) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.next = this.head;
  }

  addAtPos(data, index) {
    if (index < 0) {
      throw new Error("Invalid Index: Index cannot be negative");
    }

    const newNode = new Node(data);

    //if inserting at head (index = 0)
    if (index === 0) {
      newNode.next = this.head;
      // Traverse to the last node to update its next pointer to the new head
      let curr = this.head;
      while (curr.next !== this.head) {
        curr = curr.next;
      }
      curr.next = newNode; // Last node should point to the new head
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    let count = index - 1;

    while (count > 0 && curr.next !== this.head) {
      curr = curr.next;
      count--;
    }

    if (count === 0) {
      newNode.next = curr.next;
      // curr.next is the node at which we have to add the newNode
      curr.next = newNode;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  print() {
    if (this.head === null) return console.log("Empty List");
    let curr = this.head;
    const arr = [];
    do {
      arr.push({ data: curr.data, next: curr.next });
      curr = curr.next;
    } while (curr !== this.head);

    console.log(arr);
  }
}

try {
  const cll = new CircularLinkedList();
  cll.add("Hello");
  cll.add("World");
  cll.add(10);
  cll.add(20);
  cll.print();
  console.log("Inserting elements at pos 0, 2 and at end of the list:");
  cll.addAtPos("NewNode1", 0);
  cll.addAtPos("NewNode2", 2);
  cll.addAtPos("NewNode3", 6);
  cll.print();
} catch (error) {
  console.log({ error });
}
7;
