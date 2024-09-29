//Whenever we need effecient insertion, deletion of elements we use linkedlist
//since in array we need to shift the elements in deletion and insertion

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  head = null; //attribute to keep track of head of the ll

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  addAtPos(data, index) {
    if (index < 0) {
      throw new Error("Invalid Index: Index cannot be negative");
    }

    const newNode = new Node(data);

    //if inserting at head (index = 0)
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    let count = index - 1;

    while (curr.next !== null && count > 0) {
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

  deleteAtPos(index) {
    if (index < 0) {
      throw new Error("Invalid Index: Index cannot be negative");
    }

    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    let count = 0;
    while (curr.next !== null && count < index - 1) {
      curr = curr.next;
      count++;
    }
    if (curr !== null && curr.next !== null) {
      curr.next = curr.next.next;
    }
  }

  get(index) {
    if (index < 0) {
      console.log("Invalid Index: should be a positive integer");
      return null;
    }
    if (this.head === null) return null;
    let curr = this.head;
    while (index > 0) {
      if (curr.next === null) {
        console.log("Index out of bounds");
        return null;
      }
      curr = curr.next;
      index--;
    }
    return curr;
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
      arr.push({ data: curr.data, next: curr.next });
      curr = curr.next;
    }
    console.log(arr);
  }
}

const ll = new SinglyLinkedList();

try {
  ll.add("Hello");
  ll.add("World");
  ll.add(10);
  ll.add(20);
  ll.print();
  console.log({ size: ll.size() });

  console.log("After adding node at pos 0, 2 and at end of list :");
  ll.addAtPos("NewNode1", 0);
  ll.addAtPos("NewNode2", 2);
  ll.addAtPos("NewNode3", ll.size());
  ll.print();
  console.log({ size: ll.size() });

  console.log("After deleting nodes from pos 0, 1 and end of list :");
  ll.deleteAtPos(0);
  ll.deleteAtPos(1);
  ll.deleteAtPos(ll.size() - 1);
  ll.print();
  console.log({ size: ll.size() });

  const node = ll.get(1);
  console.log("Get index 1 ", { data: node.data });
} catch (error) {
  console.log(error.message);
}
