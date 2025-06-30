/* The Object.groupBy() method groups elements of an object according to string values returned from a callback function. It doesn't mutate the original object. 
Here we have defined polyfills of Object.groupBy() as this is introduced in ES2024 so for older browser thie feature may not available.
*/

//using ehanced for loop
function groupBy(arr, key){
  const obj = {};
  for(let item of arr){
    const groupKey = typeof key === "function" ? key(item) : item[key];
    if(!obj[groupKey]){
      obj[groupKey] = [];
    }
    obj[groupKey].push(item);
  }
  return obj;
}

//Using reduce
function groupBy(arr, key){
return arr.reduce((acc, item)=> {
  const groupKey = typeof key === "function" ? key(item) : item[key];
  (acc[groupKey] ||= []).push(item);
  return acc;
}, {});
}
