/* Throttling guarantees that a function is invoked at most once within a predefined time interval, regardless of how many times the event fires. 
   This is useful for events that occur frequently, such as scrolling or resizing, where you only need to respond after a certain interval to maintain performance.
*/

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => console.log("Scrolled"), 500);
window.addEventListener("scroll", handleScroll);

