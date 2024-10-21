const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function CustomPromise(executor) {
  var state = PENDING;
  var value = null;
  var handlers = [];
  var catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(error) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = error;
    catchers.forEach((c) => c(value));
  }

  this.then = function (successCallback) {
    if (state === FULFILLED) {
      successCallback(value);
    } else {
      handlers.push(successCallback);
    }
    return this;
  };

  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    } else {
      catchers.push(failureCallback); // Fix
    }
    return this;
  };
  executor(resolve, reject);
}

// Added:
const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(100), 2000);
});

promise
  .then((fulfilled) => console.log({ fulfilled }))
  .catch((rejectedVal) => console.log({ rejectedVal }));
