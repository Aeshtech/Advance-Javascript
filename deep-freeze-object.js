'use strict';

/* 
You can use Object.freeze() to prevent modification of the array structure (not the values inside), 
i.e this works well for primitive arrays/object literal, not for arrays of objects/object of objects (unless you deep-freeze them).
*/

const fixedArray = Object.freeze([0, 0, 0, 0, 0]);

fixedArray[0] = 10;      // ✅ Works – values can still be changed (unless they're objects)
fixedArray.push(6);      // ❌ TypeError in strict mode – can't change structure
fixedArray.length = 10;  // ❌ Ignored or throws


/* 🧪 Bonus: Deep-freeze for arrays of objects :-
If the array contains objects and you don’t want even the object contents to be modified, use a helper function: */

function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function(prop) {
    if (
      obj[prop] !== null &&
      typeof obj[prop] === 'object' &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop]);
    }
  });
  return obj;
}

const fixedArray2 = deepFreeze([{ name: "A" }, { name: "B" }]);
fixedArray2[0].name = "C"; // ❌ Won’t change in strict mode
