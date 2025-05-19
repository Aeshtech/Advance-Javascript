function isDeepEqual(obj1, obj2) {
  // Check for reference equality or both are null/undefined
  if (obj1 === obj2) return true;

  // If either is null or undefined, return false
  if (obj1 == null || obj2 == null) return false;

  // If their types are different, return false
  if (typeof obj1 !== typeof obj2) return false;

  // If both are objects, perform a deep comparison
  if (typeof obj1 === 'object' || typeof obj2 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // If the number of keys is different, they are not equal
    if (keys1.length !== keys2.length) return false;

    // Check recursively for each key
    for (let key of keys1) {
      if (!isDeepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
  }

  // For primitive types, return strict equality
  return obj1 === obj2;
}

// Test cases
let value = { a: 1 };
let other = { a: 1 };
console.log(isDeepEqual(value, other)); // true

value = { a: { b: { c: { d: 2 } } } };
other = { a: { b: { c: { d: 2 } } } };
console.log(isDeepEqual(value, other)); // true

value = { a: 2 };
other = { a: 3 };
console.log(isDeepEqual(value, other)); // false

console.log(isDeepEqual()); // true

value = { a: 1 };
other = null;
console.log(isDeepEqual(value, other)); // false

value = { a: 1 };
other = undefined;
console.log(isDeepEqual(value, other)); // false

value = { a: 1 };
console.log(isDeepEqual(value)); // false
