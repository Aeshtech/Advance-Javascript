/*
Problem Statement: Asked in assessment 1st round of theHive.ai interview for Frontend Engineer Role

You are tasked with building a PromiseScheduler utility in JavaScript. This utility should
accept an array of asynchronous functions (which return promises) and execute them one by one in sequence.

Key Functionalities:

run() → starts or resumes from where left off.
pause() → halts execution after current function.
getState() → provides status and unexecuted indices.
resume() → resumes all pending tasks.
onCompleted() → Callback for final result list
*/

/**
 * PromiseScheduler
 *
 * Schedules and runs an array of async functions one-by-one.
 * Supports pausing, resuming, tracking state, and reporting results.
 */
class PromiseScheduler {
  constructor(functionsArray, options = {}) {
    this.functions = functionsArray; // Array of functions returning promises
    this.startIndex = options.startIndex || 0;
    this.callbacks = options.callbacks || {}; // Optional callbacks like onCompleted
    this.currentIndex = this.startIndex;
    this.status = "idle"; // Possible values: idle, in-progress, paused, completed
    this.results = []; // Stores results of resolved/rejected promises
    this.paused = false; // Flag to control pausing
  }

  //Begins execution of functions in sequence from currentIndex.  Automatically respects the pause flag.
  async run() {
    if (this.status === "in-progress") return; // Prevent double execution
    this.status = "in-progress";

    while (this.currentIndex < this.functions.length && !this.paused) {
      try {
        const result = await this.functions[this.currentIndex]();
        this.results[this.currentIndex] = result;
      } catch (err) {
        this.results[this.currentIndex] = err;
      }
      this.currentIndex++;
    }

    // Pause detected mid-execution
    if (this.paused) {
      this.status = "paused";
      return;
    }

    // Execution complete
    if (this.currentIndex === this.functions.length) {
      this.status = "completed";
      if (this.callbacks.onCompleted) {
        this.callbacks.onCompleted(this.results);
      }
    }
  }

  //Pauses the scheduler gracefully. Allows the currently running promise to finish before fully pausing.
  async pause() {
    this.paused = true;

    // Wait until the current running promise completes
    while (this.status === "in-progress") {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  //Resumes the execution from where it was paused.
  resume() {
    if (this.status === "paused") {
      this.paused = false;
      this.run();
    }
  }

  // Returns the current status and list of function indices that haven't been executed yet.
  getState() {
    return {
      status: this.status,
      unexecutedFunctionsIndices: this.functions
        .map((_, index) => index)
        .filter((index) => index >= this.currentIndex),
    };
  }
}
/*-----------------------------Completed PromiseScheduler Class--------------------------------*/

//utility function to create a promise that resolves after a given time
const delay = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });

// Simulated async tasks with identifiable logs
const asyncFunctionsWhichReturnPromises = [
  async () => {
    await delay(1000);
    return "✅ Task 1: Fetched user data";
  },
  async () => {
    await delay(1500);
    return "✅ Task 2: Processed analytics";
  },
  async () => {
    await delay(1200);
    return "✅ Task 3: Sent notification";
  },
  async () => {
    await delay(800);
    return "✅ Task 4: Synced settings";
  },
  async () => {
    await delay(1000);
    return "✅ Task 5: Cleaned cache";
  },
];

const options = {
  startIndex: 0,
  callbacks: {
    onCompleted: (results) => {
      console.log("🎉 All tasks completed. Results:");
      results.forEach((res, i) => console.log(`Task ${i + 1}:`, res));
    },
  },
};

const promiseSchedulerInstance = new PromiseScheduler(
  asyncFunctionsWhichReturnPromises,
  options
);

const executer = async () => {
  promiseSchedulerInstance.run();
  console.log("🚀 Started execution");

  await delay(2500);
  await promiseSchedulerInstance.pause();

  const state = promiseSchedulerInstance.getState();
  console.log("🛑 Paused with state:", state);

  // Resume after showing state
  promiseSchedulerInstance.resume();
};

executer();

/* Output:

🚀 Started execution
🛑 Paused with state: { status: 'paused', unexecutedFunctionsIndices: [ 3, 4 ] }
🎉 All tasks completed. Results:
Task 1: ✅ Task 1: Fetched user data
Task 2: ✅ Task 2: Processed analytics
Task 3: ✅ Task 3: Sent notification
Task 4: ✅ Task 4: Synced settings
Task 5: ✅ Task 5: Cleaned cache

*/
