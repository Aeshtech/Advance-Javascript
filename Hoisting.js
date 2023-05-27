/* ========================================= Hoisting ============================================

Hoisting in Javascript is the interesting and very important concept, it allows us to access the values of the variables and invocation of functions even before 
their declaration. Javascript hoisted all the variables and functions at the top before its execution.

 Variables like var, let, const are hoisted and defined with special value called "undefined" before even declaration of variables. But "let" and "const" behave
  some differently then "var" variables. Because let and const have their own scope and they can only be initialize after the javascript find their declaration.
*/

getName();
console.log(x);
console.log(getName);

var x = 3;

function getName() {
  console.log("Hello Javascript.");
}
