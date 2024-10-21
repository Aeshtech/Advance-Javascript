/* ====================================Hoisting and Temporal Dead Zone (TDZ)========================================

Hoisting in Javascript is the interesting and very important concept, it allows us to access the values of the 
variables and invocation of functions even before their declaration. Javascript hoisted all the variables and functions
at the top before its execution.

Variables like var, let, const are hoisted and defined with special value called "undefined" before even declaration of
variables. But "let" and "const" behave some differently then "var" variables. Because let and const have their own 
scope and they can only be initialize after the javascript find their declaration.
*/

getName();
console.log(x);
console.log(getName);

var x = 3;

function getName() {
  console.log("Hello Javascript.");
}

//================================For let and const ==============================

console.log(hello); // ReferenceError: Cannot access 'hello' before initialization
let hello = "World";

/*
The error Uncaught ReferenceError: Cannot access 'hello' before initialization occurs because variables declared with 
let and const are not accessible before their initialization due to a concept called the Temporal Dead Zone (TDZ).

Explanation :-

let and const: Variables declared using let or const are hoisted (moved to the top of their scope during compilation),
but they are not initialized until their actual declaration is encountered in the code. Until the point where they are
initialized, they are in the TDZ and cannot be accessed, which results in the ReferenceError if you try to use them before
the declaration.


Temporal Dead Zone (TDZ):

The TDZ is the phase between the start of the scope and the point where the variable is declared. In this phase, 
accessing the variable leads to a ReferenceError.

*/
