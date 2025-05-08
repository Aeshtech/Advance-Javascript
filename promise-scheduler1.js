/*
A promise scheduler in JavaScript manages the execution of promises, particularly when there's a need to control concurrency or the order of execution.
It ensures that promises are resolved in a specific manner, preventing resource overload or maintaining a desired sequence of operations.

This PromiseScheduler class allows you to control the number of promises running concurrently. The enqueue method adds a promise-returning function to a queue,
and the run method executes promises from the queue up to the concurrency limit. When a promise completes, it checks the queue for more promises to run.
*/


class PromiseScheduler {
    constructor(concurrencyLimit = 1) {
        this.concurrencyLimit = concurrencyLimit;
        this.runningPromises = 0;
        this.queue = [];
    }

    enqueue(promiseCreator) {
        return new Promise((resolve, reject) => {
            this.queue.push({ promiseCreator, resolve, reject });
            this.run();
        });
    }

    run() {
        while (this.runningPromises < this.concurrencyLimit && this.queue.length > 0) {
            const { promiseCreator, resolve, reject } = this.queue.shift();
            this.runningPromises++;

            promiseCreator()
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    this.runningPromises--;
                    this.run();
                });
        }
    }
}

// Example usage:
const scheduler = new PromiseScheduler(2); // Allow 2 concurrent promises

const task = (id, delay) => () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Task ${id} completed`);
            resolve(`Result of task ${id}`);
        }, delay);
    });
};

scheduler.enqueue(task(1, 1000)).then(result => console.log(result));
scheduler.enqueue(task(2, 500)).then(result => console.log(result));
scheduler.enqueue(task(3, 1500)).then(result => console.log(result));
scheduler.enqueue(task(4, 800)).then(result => console.log(result));


/*
Output: 

"Task 2 completed"
"Result of task 2"
"Task 1 completed"
"Result of task 1"
"Task 4 completed"
"Result of task 4"
"Task 3 completed"
"Result of task 3"
*/
