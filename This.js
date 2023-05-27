/* 
Topic:// "this" Keyword in Javascript 

"this" is a special keyword in Javascript which behave different in different situations.

1. "this" in the Global Context

When you are outside of any function or object, the "this" keyword refers to the global object.
In a browser environment,the global object is usually the "window" object.
Lets take an example to make it clear. 
*/

console.log(this);
//output: the global object (window in the browser)

/* 
2. "this" in Object Method Context

When "this" is inside method of an object, it refers to the object itself, Think of it as the object speaking about itself.
This allows us to access the other properties and methods within the same object.

Example:
*/

const person = {
  name: "Ashish",
  intro: function () {
    console.log("Hello my name is " + this.name);
  },
};

person.intro();

/*
3. "this" in Function Context

The behavior of "this keyword can be bit tricky when used inside regular functions. Its value depends on how the function is called.

a) If the function is called directly (as a standalone function), "this" refers to the global object (window inside browser).
b) If the function is called as a method of an object, "this" refers to the object itself.
c) If the function is called using "new" keyword to create an instance of a constructor function,
   then "this" refers to the newly created object.

Lets have examples for above three points
*/

//a) standalone function
function sayHello() {
  console.log("Hello " + this.name);
}

sayHello();
// output: Hello undefined (refer to the global object)

//b) Function as a method of an object.

const person2 = {
  name: "Ashih Sharma",
  greet: sayHello,
};

person2.greet();
//output: Hello, Ashish Sharma

//c) Constructor function context
function person3(name) {
  this.name = name;
}

const myobj = new person3("Javascript");
console.log(myobj.name);
//output: Javascript

/* 
4. "this" in Event Handlers

In Javascript, when an event is triggered, "this" often refers to the DOM element that triggered the event.
It allows you to interact with or access properties of that particular element. Let's have a quick look:
*/

//to run this example create a button inside dom then click on it
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button is clicked!");
  console.log(this); //output: the button element
});

/*
5. "this" in Arrow function

Arrow functions have a different behavior compared to regular functions when it comes to the "this" keyword.

They do not have their own "this" context but instead they inherit it from the surrounding function.
In simple terms, "this" inside an arrow function refers to the value of "this" in the parent scope.

Let's see examples:-
*/

const person4 = {
  name: "Ashish Sharma",
  greet: () => console.log("Hello my name is " + this.name),
};

person4.greet();
//output: Hello my name is undefined

//to make "this" inside person4 refer to the name property we have to either replace arrow function with regular function,
//or we should wrap arrow function inside regular function so that it can access cont5ext of its parent function.

const person5 = {
  name: "Ashish Sharma",
  introduce: function () {
    const greet = () => console.log("Hello my name is " + this.name);
    greet();
  },
};

person5.introduce();
