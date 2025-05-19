//Problem Statement: We have input data object, create a functionality that return the output in required format;

//input data
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

//output should be like:
// { a: 1, 'b.c': 2, 'b.d.e': 3 }


function flatten(obj, prefix = "") {
  let result = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nested = flatten(obj[key], prefix ? `${prefix}.${key}` : key);
      result = { ...result, ...nested };
    } else {
      result[prefix ? `${prefix}.${key}` : key] = obj[key];
    }
  }

  return result;
}

const flattenedObject = flatten(nestedObject);
console.log(flattenedObject); // { a: 1, 'b.c': 2, 'b.d.e': 3 }
