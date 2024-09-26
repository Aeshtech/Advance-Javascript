class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;     // Maximum capacity of the cache
    this.cache = new Map();       // Map to store the cache data (key-value pairs)
  }

  // Get the value from the cache for a given key
  get(key) {
    if (!this.cache.has(key)) {
      return -1;  // If the key is not in the cache, return -1 (indicating a miss)
    }
    // If the key exists, we need to move it to the "most recently used" position
    const value = this.cache.get(key);
    this.cache.delete(key);        // Remove the key
    this.cache.set(key, value);    // Set it again to make it the most recently used
    return value;
  }

  // Add a new key-value pair to the cache
  put(key, value) {
    // If the key already exists, delete it first to update its position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If the cache exceeds its capacity, remove the least recently used (first) entry
    if (this.cache.size >= this.capacity) {
      const leastUsedKey = this.cache.keys().next().value;  // Get the first key
      this.cache.delete(leastUsedKey);                      // Remove the least used key
    }
    // Add the new key-value pair to the cache
    this.cache.set(key, value);
  }
  
  print(){
  const mapAsString = Array.from(this.cache.entries())
  .map(([key, value]) => `${key}: ${value}`)
  .join(', ');
  console.log(`{ ${mapAsString} }`);
  }
}

// Example usage:
const cache = new LRUCache(3);  // Set a cache capacity of 3

cache.put(1, 'A');
cache.print();
cache.put(2, 'B');
cache.print();
cache.put(3, 'C');
cache.print();
console.log(cache.get(1));  // Output: 'A' (moves 1 to the most recently used position)
cache.print();
cache.put(4, 'D');          // Removes key 2 (least recently used)
cache.print();
console.log(cache.get(2));  // Output: -1 (key 2 was removed)
cache.print();
console.log(cache.get(3));  // Output: 'C'
cache.print();
