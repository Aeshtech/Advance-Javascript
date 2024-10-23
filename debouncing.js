/* Debouncing postpones the execution of a function until a specific period of inactivity has elapsed. This is ideal for scenarios where a user is continuously providing input,
   and you only want the function to be triggered once the user has finished their action.
*/

function debounce(func, wait = 250) { // Default wait time of 250ms
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout); // Clear any previous timeout
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}


