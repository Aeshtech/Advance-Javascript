class LRUCacheArray {
  // this.capacity =
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  add(data) {
    const indexOfItem = this.cache.indexOf(data);
    //if the item already exist remove it first to update it position
    if (indexOfItem !== -1) {
      this.cache.splice(indexOfItem, 1);
    }

    //remove least used item if cache size greater than equal to capacity
    if (this.cache.length >= this.capacity) {
      this.cache.pop();
    }
    this.cache.unshift(data);
  }

  get(index) {
    const element = this.cache.at(index);
    //if item exist remove it first to update it position
    if (element) {
      this.cache.splice(index, 1);
      this.cache.unshift(element);
    }
    return element;
  }

  print() {
    console.log(this.cache);
  }
}

try {
  const cache = new LRUCacheArray(3);
  cache.add("A");
  cache.print();
  cache.add("B");
  cache.print();
  cache.add("C");
  cache.print();
  console.log("Get at index 1: ", cache.get(1));
  cache.print();
  console.log("Get at index 2: ", cache.get(2));
  cache.print();
  cache.add("D");
  cache.print();
} catch (err) {
  console.log("Error ", err);
}
