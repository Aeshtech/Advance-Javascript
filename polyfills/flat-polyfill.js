/* The flat() method concatenates sub-array elements. 
Syntax: array.flat(depth), where depth refers to a number of levels you need to flat or "Infinity" 
*/


//flat infinite nested arrays, we can improve it to provide depth also, and to make it available on Array.prototype 
const flatten = (arr) => {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
};
