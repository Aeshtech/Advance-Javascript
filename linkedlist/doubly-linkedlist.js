/* Doubly linkedlist is a advance version of singly-linkedlist as it provide traversal to back&forth i.e in doubly linkedlist
   we can traverse two way. In DLL except head & last node, each node contains prev and next node references in order to
   provide two way traversal and due to two references on each node it needs more memory than singly-linkedlist.
*/

import { DoublyNode } from "./node.js";

class DoublyLinkedList {
  head = null;

  add(data) {
    const newNode = new DoublyNode(data);

    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev = curr;
    return this.head;
  }

  addAtPos(data, index) {
    if (index < 0) {
      throw new Error("Invalid Index: Index cannot be negative");
    }

    const newNode = new DoublyNode(data);
    if (index === 0) {
      newNode.next = this.head;
      //if head not is not null than update its prev pointer
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    let count = index - 1;
    while (count > 0 && curr.next !== null) {
      curr = curr.next;
      count--;
    }

    if (count === 0) {
      newNode.next = curr.next;
      curr.next = newNode;
      newNode.prev = curr;
    } else {
      throw new Error("Index out of bounds");
    }
    return this.head;
  }

  size() {
    if (this.head === null) return 0;
    let curr = this.head;
    let count = 0;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  print() {
    if (this.head === null) return console.log("Empty List");
    let curr = this.head;
    const arr = [];
    while (curr !== null) {
      arr.push({ data: curr.data, next: curr.next, prev: curr.prev });
      curr = curr.next;
    }
    console.log(arr);
  }
}

try {
  const cll = new DoublyLinkedList();
  cll.add("Hello");
  cll.add("World");
  cll.add(10);
  cll.add(20);
  cll.print();
  console.log("Inserting elements at pos 0, 2 and at end of the list:");
  cll.addAtPos("NewNode1", 0);
  cll.addAtPos("NewNode2", 2);
  cll.addAtPos("NewNode3", cll.size());
  cll.print();
} catch (error) {
  console.log({ error });
}
