/*
https://www.telerik.com/blogs/four-ways-to-create-a-function-in-javascript

A function as a statement
A function as an expression
A function as an arrow function
A function created using the Function constructor


function Add(num1,num2){
    let sum = num1+ num2; 
    return sum; 
}

let res = Add(7,8);
console.log(res); // 15




let add = function a(num1,num2){
    let sum = num1+ num2; 
    return sum;
}

let res = add(8,9);
console.log(res);



A function expression can be created without a name, whereas a function statement must have a name
A function expression is not hoisted on the top of the execution context, whereas a function statement
is hoisted at the top of the execution context



var add = (num1, num2)=> num1+num2; 
let res = add(5,2);
console.log(res);



Parameters should be passed in a small bracket
If there is only one parameter, then the bracket is optional
If there is no parameter, then it must have a small empty bracket
If there is only a single expression in the function body, then using parentheses is optional
If there is only a single expression in the function body, then using the return statement is optional


It supports the rest parameters
It supports the default parameters
It does not have arguments object
It does not have its own this object
It cannot be used as a constructor

// Using Function Constructor

var add = Function('num1','num2','return num1+num2');
let res = add (7,8);
console.log(res); // 15

*/
