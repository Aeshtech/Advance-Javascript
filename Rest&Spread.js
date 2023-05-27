/* ========================================Rest & Spread operator ====================================*/

/* 
The arguments object is a special object that is available within all non-arrow functions. It is an array-like object that contains the arguments that were passed to the function. The arguments object has a length property that indicates the number of arguments that were passed to the function. The arguments object also has a property for each argument that was passed to the function. The property name is the name of the argument, and the property value is the value of the argument.

There are a few problems with the arguments object. First, the arguments object is not a true array. This means that you cannot use the array methods on the arguments object. Second, the arguments object is not enumerable. This means that you cannot use the for...in loop to iterate over the arguments object. Third, the arguments object is not writable. This means that you cannot change the values of the arguments object.

Because of these problems, it is generally recommended to avoid using the arguments object. Instead, you should use named parameters or default parameters. Named parameters allow you to specify the names of the arguments that you are passing to a function. Default parameters allow you to specify default values for the arguments that are not passed to a function.

*/

function sum() {
  let sum = 0;
  //arguments is js object which holds all the arguments in an array
  for (let i in arguments) {
    sum += arguments[i];
  }
  console.log(`Hi ${name}`);
  console.log(`sum is ${sum}`); // template literal syntax of back-ticks.
}

sum(1, 2, 3, 4, 5);
/* 
Output:
Hi 
sum is 15
*/

sum("Ashish", 3, 5, 6, 10); // now this will simply concat these numbers along with string "Ashish" which we dont want.

/*For fixing above issue js introduced a new concept called rest operator in ES6. rest operator is nothing but passing a function's last parameter with prefix of three dots i.e, "...param" . Now this will catch all the other arguments specified by us and push these into an array.
 */

function sumRest(name, ...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(`Hi ${name}`);
  console.log(`sum is ${sum}`); // this syntax `any string ${}` inside backticks along with ${} is known as Template literal concept of ES6.
}

sumRest("Ashish", 3, 5, 6, 10);

/* 
In JavaScript, the `arguments` object is a special object available within the scope of a function. It contains an array-like list of the arguments passed to the function when it is invoked. It allows you to access and manipulate the arguments dynamically, even if the function was defined without specifying any formal parameters.

Here are some important points to know about the `arguments` object:

1. Structure: The `arguments` object resembles an array, but it is not a true array. It behaves like an array in that it has a length property and can be accessed using numeric indices, but it does not have array methods like `forEach()` or `map()`.

2. Dynamic nature: The `arguments` object is dynamically updated as arguments are passed to the function. If you modify the `arguments` object, it may affect the original values passed to the function.

3. Accessing arguments: You can access individual arguments using numeric indices starting from 0. For example, `arguments[0]` refers to the first argument, `arguments[1]` refers to the second argument, and so on.

4. Length property: The `arguments` object has a `length` property that indicates the number of arguments passed to the function.

5. Arguments vs. rest parameters: Since the introduction of ECMAScript 2015 (ES6), you can also use rest parameters (`...args`) to capture a variable number of arguments as an actual array. Rest parameters provide a more convenient and standard way to work with function arguments, and they are usually preferred over using the `arguments` object.

Here's an example to illustrate the usage of the `arguments` object:

```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

In this example, the `sum()` function calculates the sum of all the arguments passed to it using the `arguments` object.

*/
