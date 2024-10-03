class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class DoublyNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export { Node, DoublyNode };
