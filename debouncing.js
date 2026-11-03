/* Debouncing postpones the execution of a function until a specific period of inactivity has elapsed. This is ideal for scenarios where a user is continuously providing input,
   and you only want the function to be triggered once the user has finished their action.
*/

function debounce(func, wait = 250) { // Default wait time of 250ms
  let timeout;
  return function (...args) {
    clearTimeout(timeout); // Clear any previous timeout
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/*
Visual Walkthrough
Imagine a user typing "cat" into a search bar:

Plaintext
User types 'c'   ---> Timer starts (250ms)
User types 'a'   ---> Previous timer cleared; new timer starts (250ms)
User types 't'   ---> Previous timer cleared; new timer starts (250ms)
... (user pauses) ...
Timer hits 250ms ---> func('cat') finally executes!
*/