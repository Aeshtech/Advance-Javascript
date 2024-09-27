/*
Pass By Value: In Pass by value, function is called by directly passing the value of the variable as an argument.
So any changes made inside the function does not affect the original value.

In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the 
function is made to the copied value not to the original value . 
*/

function Passbyvalue(a, b) {
  let tmp;
  tmp = b;
  b = a;
  a = tmp;
  console.log(`Inside Pass by value
        function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value
        Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value
       Function -> a =${a} b = ${b}`);

/*
Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the
variable as an argument. So changing the value inside the function also change the original value. In JavaScript
array and Object follows pass by reference property.

In Pass by reference, parameters passed as an arguments does not create its own copy, it refers to the original 
value so changes made inside function affect the original value. 

let us take an example to understand better.

*/

function PassbyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(`Inside Pass By Reference
		Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20,
};
console.log(`Before calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj);

console.log(`After calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

/*
Note: In Pass by Reference, we are mutating the original value. when we pass an object as an arguments and 
update that object’s reference in the function’s context, that won’t affect the object value. 
But if we mutate the object internally, It will affect the object .

Example 1: Updating the object reference in the function.



function PassbyReference(obj) {
  // Changing the reference of the object
  obj = {
    a: 10,
    b: 20,
    c: "ASHISH",
  };
  console.log(`Inside Pass by
		Reference Function -> obj `);

  console.log(obj);
}

let obj = {
  a: 10,
  b: 20,
};
console.log(`Updating the object reference -> `);
console.log(`Before calling Pass By
		Reference Function -> obj`);
console.log(obj);

PassbyReference(obj);
console.log(`After calling Pass By
		Reference Function -> obj`);
console.log(obj);



Example 2 

function PassbyReference(obj) {

	// Mutating the original object
	obj.c = "ASHISH";
	console.log(`Inside Pass by
		Reference Function -> obj `);
	console.log(obj);
}

let obj = {
	a: 10,
	b: 20

}
console.log(`Mutating the original object -> `)
console.log(`Before calling Pass By
		Reference Function -> obj`);
console.log(obj);

PassbyReference(obj)
console.log(`After calling Pass By
		Reference Function -> obj`);
console.log(obj);


*/
