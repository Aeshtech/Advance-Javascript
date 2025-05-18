2; /* =======================Callback and Higher Order Functions===================== 

Callback Function : Callback functions are simply those function which pass as an argument into another function.

It is something like behind the scene player which process their job after a certain web event happened (such as onclick)
or after a time consuming operation such as an API requests, reading files or executing database queries. 

For example: We want to do a time consuming operation such as API request that return us the required data after some 
time and we also want to process the returned data further. So Let's see if we do it without any callback what will happen!

function fetchDataFromAPI() {
  // Simulating an asynchronous API call

  setTimeout(function () {
    const data = { name: "John", age: 30 };
    return data;
  }, 3000);
}

const data = fetchDataFromAPI();
console.log("Data returned:", data);   //undefined
console.log("Age multiplied by 2:", data.age * 2);   //Uncaught TypeError: Cannot read properties of undefined

So what's the problem with above code let's debug, As you can see that fetchDataFromAPI is time consuming operation so it will not gonna
return the required data immediately and neither console.log are not waiting for the actual data thats why we are getting undefined data
and unable to process it further.

So what's the solution of above problem is to use "Callback" which we will pass into time consuming operation and it will only execute after
the time consuming operation finishes....wallah interesting na and it also give us the ability to execute further task based on the return data by
the time consuming operation.

Lets' see the same above problem solution using callback: 
*/

function fetchDataFromAPI(callback) {
  // Simulating an asynchronous API call
  setTimeout(function () {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 3000);
}

function processData(data) {
  console.log("Data returned:", data);
  console.log("Age multiplied by 2:", data.age * 2);
}

fetchDataFromAPI(processData);
console.log("Fetching data...");

/*
Higher-Order Functions : Higher order function are those functions which accepts function as parameters and/or return a function.

Some Input => HOF => A function   OR    A function => HOF => Some output


We will understand the use-case of both callback and HOF functions in daily life programming. First we will implement the solution of problem
without callback & HOF then implement same in callback and HOF and will compare which is better and why.
*/

// So, Let's say we have radius of various circles and and we want to execute the Area of each circle
const radius = [2.5, 3.4, 6.7, 7.8, 8.9, 9.0];

function area(radius) {
  const output = [];
  let area;
  radius?.forEach((radius) => {
    area = (Math.PI * radius * radius).toFixed(2);
    output.push(area);
  });
  return output;
}

console.log("Area = ", area(radius));
//output: Area = [ '19.63', '36.32', '141.03', '191.13', '248.85', '254.47' ]

//now let's say we also have to calculate the circumference of circle
function circumference(radius) {
  const output = [];
  let circumference;
  radius?.forEach((radius) => {
    circumference = (2 * Math.PI * radius).toFixed(2);
    output.push(circumference);
  });
  return output;
}

console.log("circumference = ", circumference(radius));
//output: circumference = ['15.71', '21.36', '42.10', '49.01', '55.92', '56.55']

//now let's say we also want diameter of each circle
function diameter() {
  const output = [];
  let diameter;
  radius?.forEach((radius) => {
    diameter = (2 * radius).toFixed(2);
    output.push(diameter);
  });
  return output;
}

console.log("Diameter = ", diameter(radius));

/* 
Stop Stop Stop, Are you seeing the problem here that we repeating our functions 90% as only 10% code is
is different in terms of logic(formula here) in calculations. So as we repeating 90% of our code in
each function that's why we'r not using the DRY principle of programming.


So we have to optimize the above problem of calculating the area, circumference and diameter using 
Callback and Higher Order Function (HOF).

Now let's see how we can solve above problem in more efficient manner by following DRY principle.
*/

//our 90% function was same and the only differentiating component is "logic" so we'll make the logic
//in different small function which will pass as a callback in the main function that is HOF.

function area2(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

function circumference2(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

function diameter2(radius) {
  return (2 * radius).toFixed(2);
}

//main function (HOF) accepts callback i.e logic which will use inside for calculation
function calculation(callback, radius) {
  const output = [];
  radius?.forEach((num) => {
    const result = callback(num);
    output.push(result);
  });
  return output;
}

console.log("Optimized area = ", calculation(area2, radius));
console.log("Optimized circumference", calculation(circumference2, radius));
console.log("Optimized diameter ", calculation(diameter2, radius));

/*
Applications of Callbacks : 

Callbacks are a powerful and essential concept in JavaScript for several reasons:

1. Asynchronous Operations: JavaScript is primarily single-threaded, meaning it can only execute one task at a time. When dealing with time-consuming operations like making API requests, reading files, or executing database queries, callbacks allow you to initiate the operation and continue executing other tasks without waiting for the result. Once the operation is complete, the callback function is invoked, allowing you to handle the result or perform additional actions.

2. Event Handling: In web development, user interactions and system events (e.g., button clicks, mouse movements, keyboard input) trigger events that need to be handled. Callbacks allow you to define how your code should respond to these events. By attaching a callback function to an event, you can specify the actions to be taken when the event occurs.

3. Modular and Reusable Code: Callbacks promote modularity and code reusability. By passing functions as arguments, you can separate concerns and write generic functions that can be customized with different callbacks for different scenarios. This allows you to reuse code and create flexible architectures. For example, you could have a function that performs a specific task and accepts a callback function to handle the result or provide additional logic.

4. Control Flow: Callbacks enable you to control the flow of your code by executing specific logic once an operation is complete. For example, you may have error handling logic where you pass an error callback function to handle errors that occur during an asynchronous operation. This allows you to gracefully handle and recover from errors.


*/
