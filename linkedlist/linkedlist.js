//Whenever we need effecient insertion, deletion of elements we use linkedlist
//since in array we need to shift the elements in deletion and insertion

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
    return this.head;
  }

  get(index) {
    if (this.head === null) return null;
    if (index < 0) {
      throw new Error("Invalid Index, should be +ve index");
    }
    let curr = this.head;
    while (index > 0) {
      if (curr.next === null) {
        throw new Error("Index out of bound");
      }
      curr = curr.next;
      index--;
    }
    if (index === 0) return curr.data;
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

const ll = new LinkedList();
ll.add("Hello");
ll.add("World");
ll.add(10);
ll.add(20);
ll.print();

try {
  const data = ll.get(2);
  console.log({ data });
} catch (error) {
  console.log(error.message);
}
