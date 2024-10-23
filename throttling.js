/* Throttling guarantees that a function is invoked at most once within a predefined time interval, regardless of how many times the event fires. 
   This is useful for events that occur frequently, such as scrolling or resizing, where you only need to respond after a certain interval to maintain performance.
*/

function throttle(func, wait = 250) {
  let isWaiting = false;
  return function executedFunction(...args) {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, wait);
    }
  };
}
