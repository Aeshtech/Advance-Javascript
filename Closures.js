/* ============================= Closures ==================================== 


In JavaScript, a closure is a combination of a function and the environment in which it was created.
It allows a function to retain access to variables from its outer (enclosing) scope, even if the 
outer function has finished executing. Closures are a powerful feature that enables advanced
functionality and is commonly used in JavaScript programming.

Here's an example to illustrate closures:
*/

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2

/*
In this example, we have a function called `createCounter` that defines a local variable `count` and
an inner function `increment`. The `createCounter` function returns the `increment` function,
forming a closure.

When we invoke `createCounter`, it creates a new instance of the `increment` function and assigns it
to the `counter` variable. The important thing to note here is that the `increment` function still
has access to the `count` variable, even though `createCounter` has finished executing.

When we call `counter()`, the `increment` function increments the `count` variable by 1 and logs
its value to the console. Subsequent calls to `counter()` increment and log the updated value of
`count` each time. This is possible because the `increment` function forms a closure that
retains access to the `count` variable.

Now we can call increment function with the help of counter variable any time and it will update
the count variable even when `createCounter` function execution context is poped out from the call stack.

Closures are beneficial in scenarios where you want to maintain private data or create functions
that encapsulate certain behavior while still having access to variables from their enclosing scopes.
They are widely used in JavaScript for various purposes, including creating private variables,
implementing data hiding, and managing asynchronous operations.
*/

/* 
Let's have a look onto a interesting problem, so below here are two identical loops with a little difference
of variable declaration with `var` and `let`
*/

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
//output: 5 5 5 5 5

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
//ouput: 0 1 2 3 4

/* 
In JavaScript, the behavior of above two loops is different because of how variable scoping works with
var and let declarations. First of all we have to undertand that each setTimeout callback forms thier
clouser in each iteration for both loops.

In the first loop, which is using `var` to declare the variable `i` and due to its non block scope nature 
it relies in global scope even within the loop and as js executes fast so loop has already been executed before
even a first setTimout callback execution. So on last iteration of loop `i` updated to 5 and when first
setTimout callback execution start it access the current value of `i` from it closure, which contains 5 now and 
so on remaining setTimout callback also access from the same scope that's why we have output 5 5 5 5 5
after a delay of 1 second.

But in case of second loop whose iterator is declared using `let` which is block scope variable so that's why
it create its own block level scope in each iteration of loop and when the setTimeout
callbacks are executed, they access the i variable from their respective block scopes clouser, which retains 
the value it had at the time the callback was scheduled. As a result, each console.log statement in the
callbacks will print a different value of i, ranging from 0 to 4.
*/
