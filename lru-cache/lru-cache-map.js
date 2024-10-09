class LRUCacheMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    const value = this.cache.get(key);
    if (!value) return null;
    this.cache.delete(key); //remove the key to keep update key pos in the lru map
    this.cache.set(key, value); // Set it again to make it the most recently used
    return value;
  }

  set(key, value) {
    //if key already exist remove it first to update the pos
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If the cache exceeds its capacity, remove the least recently used (first) entry
    if (this.cache.size >= this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
    this.cache.set(key, value); //add the new key value pair
  }

  print() {
    const mapAsString = Array.from(this.cache.entries())
      .map(([key, value]) => `${key} : ${value}`)
      .join(", ");
    console.log(`{${mapAsString}}`);
  }
}

const cache = new LRUCacheMap(3); // Set a cache capacity of 3

cache.set(1, "A");
cache.print();
cache.set(2, "B");
cache.print();
cache.set(3, "C");
cache.print();
console.log("Get key 1 = ", cache.get(1)); // Output: 'A' (moves 1 to the most recently used position)
cache.print();
cache.set(4, "D"); // Removes key 2 (least recently used)
cache.print();
console.log("Get key 2 = ", cache.get(2)); // Output: -1 (key 2 was removed)
cache.print();
console.log("Get key 3 = ", cache.get(3)); // Output: 'C'
cache.print();
