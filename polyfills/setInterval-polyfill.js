function createSetInterval() {
  let timerId = 0;
  let timersMap = {};

  function mySetInterval(cb, time, ...args) {
    timerId++;    
    function triggerCallBack() {
      timersMap[timerId] = setTimeout(() => {
        cb.apply(this,args);
        if (timersMap[timerId]) triggerCallBack()
      }, time);
    }
    triggerCallBack()
    return timerId;
  }

  function myClearInterval(id) {
    clearTimeout(timersMap[id])
    delete timersMap[id];
  }

  return {
    mySetInterval,
    myClearInterval
  }
}

const { mySetInterval, myClearInterval } = createSetInterval();

let timer = mySetInterval((...props) => console.log("this is set interval", props), 3000, "satish", "shriwas");

setTimeout(() => {
  myClearInterval(timer);
}, 7000)
