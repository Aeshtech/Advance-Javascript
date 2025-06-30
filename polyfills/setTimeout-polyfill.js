/* Video : https://www.youtube.com/watch?v=j1-fbe5F5uE */

function createSetTimeout() {
  let timerId = 0
  let timerMap = {}

  function mySetTimeout(cb, time, ...args) {
    var id = timerId++
    timerMap[id] = true
    let start = Date.now()

    function triggerCallback() {
      if (!timerMap[id]) return
      if (Date.now() > start + time) {
        cb.apply(this, args)
      } else {
        requestIdleCallback(triggerCallback)
      }
    }
    requestIdleCallback(triggerCallback)
    return id
  }

  function myClearTimeout(id) {
    delete timerMap[id]
  }
  return {
    mySetTimeout,
    myClearTimeout,
  }
}
const { mySetTimeout, myClearTimeout } = createSetTimeout()
let timer = mySetTimeout(
  (...args) => {
    console.log("this is setTimeout.....", ...args)
  },
  1000,
  "Rajat",
  "Singh",
)
