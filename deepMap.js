/**
 * Recursively applies a transformation function to all primitive values in a deeply nested data structure.
 * @param {any} data - The data to be mapped.
 * @param {Function} transform - The function to apply to each primitive value.
 * @returns {any} - The transformed data structure.
 */
function deepMap(data, transform) {
  if (Array.isArray(data)) {
    // If data is an array, map over each element
    return data.map(item => deepMap(item, transform));
  } else if (data !== null && typeof data === 'object') {
    // If data is an object, map over each key-value pair
    const result = {};
    for (const [key, value] of Object.entries(data)) {
      result[key] = deepMap(value, transform);
    }
    return result;
  } else {
    // Apply transformation to primitive values
    return transform(data);
  }
}

// Example usage
const data = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: 10001,
    coordinates: [40.7128, 74.0060]
  },
  hobbies: ['reading', 'traveling']
};

// Transformation function: e.g., convert all strings to uppercase
const transform = value => (typeof value === 'string' ? value.toUpperCase() : value);

const transformedData = deepMap(data, transform);

console.log(transformedData);
