/* ====================== How JavaScript Works ? ======================== */

/* Javascript has concept called Execution Context. Execution context is the stage where javascript firstly goes throughs the code once and hoisted all the declared variables and functions i.e let, var, const.   Javascript creates global execution context before running execution of the program which includes two main components.

1.)   Memory Allocation Phase
2.)  Code Execution Phase

In memory allocation phase js will allocate the memory to all variables and functions. In depth, before even execution of program js allocates memory by a special keyword
known as "undefined" which works as a placeholder for the variable before actual value assignment. And for functions js assigns memory before execution
as whole copy of the actual function.


In Code execution phase , js starts execution of the program line by line and assigns the actual value of the variables to their identifiers. It uses memory allocation phase in the computation of the program.


In Javascript functions are like mini programs, whenever we invoke a function js creates a seprate execution context for the particular function which lies inside the global execution context.  And this execution context have their own two phases like GEC. After completly execution of the function this execution context deletes automatically.

*/

// ==========================================Function to understand Execution context==========================

var n = 3;
function square(num) {
  var ans = num * num;
  return ans;
}

var sq1 = square(n);
var sq2 = square(5);
console.log(sq1);
console.log(sq2);
