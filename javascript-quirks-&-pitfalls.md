### Here is a comprehensive breakdown of the most notorious and educational JavaScript quirks, grouped by the core language mechanics they reveal.

---

# 🧠 Group 1: The Magic of Type Coercion (+, -, and Comparisons)

JavaScript dynamically changes types behind the scenes (implicit coercion), leading to legendary logical absurdities.
These quirks show how JavaScript automatically forces types to change when you mix strings, numbers, objects, and booleans.

- **`==` vs `===`**  
  The loose equality operator (`==`) performs hidden type conversion before comparing, while strict equality (`===`) checks both value and type.

- **`[] + {}` ➡️ `"[object Object]"`**  
  The empty array becomes an empty string `""`. The object becomes `"[object Object]"`. They concatenate.

- **`{} + []` ➡️ `0`**  
  When a line starts with `{}`, JavaScript treats it as an empty code block (which does nothing). It then evaluates `+[]`, which is the unary plus operator converting an empty array into a number (`0`).

- **`true + true` ➡️ `2`**  
  The binary `+` operator coerces the booleans to numbers. `true` becomes `1`, so `1 + 1 = 2`.

- **`1 + "2"` ➡️ `"12"`**  
  The `+` operator prioritizes string concatenation if one operand is a string.

- **`1 - "2"` ➡️ `-1`**  
  The `-` operator has no meaning for strings, so JavaScript coerces `"2"` into the number `2` and performs subtraction.

- **`"2" - "1"` ➡️ `1`**  
  Both strings are coerced into numbers for subtraction.

- **`"2" + "1" - "1"` ➡️ `20`**  
  Evaluated left-to-right. `"2" + "1"` equals `"21"`. Then `"21" - "1"` forces a numeric subtraction, resulting in `20`.

- **`"2" - "1" + "1"` ➡️ `"11"`**  
  `"2" - "1"` evaluates to the number `1`. Then, `1 + "1"` hits the string concatenation rule, giving `"11"`.

- **`[] == ![]` ➡️ `true`**  
  The `!` operator has high priority, so `![]` becomes `false`. Now we have `[] == false`. JavaScript coerces both sides to numbers: `[]` becomes `0` and `false` becomes `0`. `0 == 0` is `true`.

- **`"" == 0` ➡️ `true`**  
  The loose equality operator (`==`) coerces the empty string to a number, which is `0`.

- **`"" == []` ➡️ `true`**  
  `[]` converts to its primitive string form, which is `""`.

- **`0 == []` ➡️ `true`**  
  `[]` becomes `""`, which then becomes the number `0`.

- **`"" == {}` ➡️ `false`**  
  `{}` converts to the string `"[object Object]"`, which does not equal `""`.

- **`0 == {}` ➡️ `false`**  
  `{}` becomes `"[object Object]"`, which becomes `NaN` when forced into a number. `0 == NaN` is `false`.

- **`true == "true"` ➡️ `false`**  
  `==` converts both to numbers. `true` becomes `1`. `"true"` becomes `NaN`. `1 == NaN` is `false`.

- **`false == "false"` ➡️ `false`**  
  `false` becomes `0`. `"false"` becomes `NaN`.

- **`"0" == false` ➡️ `true`**  
  Both convert to numbers: `0 == 0`.

- **`"\t\r\n" == 0` ➡️ `true`**  
  Whitespace strings are stripped and coerced to `0` during a loose comparison.

- **`[] + 1` ➡️ `"1"`**  
  `[]` becomes `""`, and `"" + 1` is `"1"`.

- **`[1, 2] + [3, 4]` ➡️ `"1,23,4"`**  
  Both arrays turn into strings (`"1,2"` and `"3,4"`) and stitch together.

---

# 🕳️ Group 2: The Weird World of NaN, null, and undefined

These examples showcase how JavaScript handles empty data types and the bizarre rules surrounding "Not-a-Number."

- **`typeof NaN` ➡️ `"number"`**  
  `NaN` stands for "Not a Number", but in the IEEE 754 floating-point standard, it is technically a numeric data type used to represent an undefined or unrepresentable value.

- **`NaN === NaN` ➡️ `false`**  
  `NaN` is the only value in JavaScript that is not equal to itself. You must use `Number.isNaN()` to check for it.

- **`typeof null` ➡️ `"object"`**  
  This is a famous bug from the first version of JavaScript. Values were stored in 32-bit units, with a type tag in the first 3-bits. The tag `000` meant "object", and `null` was represented as the machine null pointer (all zeros), making JavaScript misidentify it as an object.

- **`null == undefined` ➡️ `true`**  
  The language explicitly defines them as loosely equal to represent the absence of a value.

- **`null === undefined` ➡️ `false`**  
  They are strictly different types (`null` is an object/null type, `undefined` is its own type).

- **`null > 0` ➡️ `false`**  
  `null` is coerced to `0` for numeric comparison. `0 > 0` is `false`.

- **`null == 0` ➡️ `false`**  
  The language specifications for `==` state that `null` only equals `null` or `undefined`. It does not coerce to `0` here.

- **`null >= 0` ➡️ `true`**  
  Because `null > 0` is `false`, and `null == 0` is `false`, you'd expect `>=` to be `false`. However, `>=` actually evaluates "is less than" and negates it. Since `null < 0` is `false`, the negation makes `null >= 0` `true`.

- **`undefined + 1` ➡️ `NaN`**  
  Unlike `null` (which becomes `0`), `undefined` converts to `NaN` when forced into math.

- **`null + 1` ➡️ `1`**  
  `null` is coerced to `0`, so `0 + 1 = 1`.

---

# 🍌 Group 3: Text Gymnastics (String Quirks)

JavaScript allows you to build strings or execute phrases using unexpected math operators.

- **`"b" + "a" + + "a" + "a"` ➡️ `"baNaNa"`**  
  The space and extra plus `+ "a"` acts as a unary plus, trying to convert `"a"` to a number. It fails and results in `NaN`. This turns the string into `"b" + "a" + NaN + "a"`, lowercase-converted to banana!

- **`parseInt(0.0000005)` ➡️ `5`**  
  `parseInt` first converts its input to a string. `0.0000005.toString()` outputs `"5e-7"`. `parseInt` parses characters until it hits a non-number, so it stops at `"5"`.

- **`parseInt(null, 24)` ➡️ `23`**  
  `null` becomes the string `"null"`. In base 24, the letter `"n"` represents the number 23. It stops at `"u"` because `"u"` is invalid in base 24.

- **`parseInt("Infinity", 19)` ➡️ `18`**  
  `"Infinity"` parsed in base 19 interprets the letter `"I"` as 18 and stops at `"n"`.

- **`"5" - - "3"` ➡️ `8`**  
  The double negative acts as math: `"5" - (-3)` becomes `5 + 3 = 8`.

- **`"foo" ++` ➡️ `SyntaxError`**  
  The increment operator requires a mutable variable reference, not a raw primitive value.

---

# 📦 Group 4: Array Anomalies

Arrays are objects, which means they pass by reference and can hold hidden properties.

- **`[1, 2, 3] == [1, 2, 3]` ➡️ `false`**  
  Objects and arrays are compared by their memory reference, not their contents. These are two distinct arrays in memory.

- **`let a = []; a[10] = "x"; a.length;` ➡️ `11`**  
  JavaScript creates an array with "empty slots" (holes) up to index 10.

- **`[,,,].length` ➡️ `3`**  
  Trailing commas are ignored by JavaScript syntax parsers, so this creates an array with 3 empty slots, not 4.

- **`[,,,].map(x => 1)` ➡️ `[empty × 3]`**  
  Array built-in methods like `.map()`, `.forEach()`, and `.filter()` skip empty slots entirely.

- **`Array(3)` vs `[3]`**  
  `Array(3)` creates an empty array with a length of 3. `[3]` creates an array with one element: the number 3.

- **`let a =; a.foo = "bar"; console.log(a.length);` ➡️ `2`**  
  Because arrays are objects, you can assign arbitrary properties to them. These don't affect the `.length` index tracking.

---

# 🔢 Group 5: Number Oddities & Floating Points

Because JavaScript uses binary floating-point numbers, decimals and extreme numbers act up.

- **`0.1 + 0.2 === 0.3` ➡️ `false`**  
  Computers process numbers in binary. Decimals like `0.1` and `0.2` become repeating fractions in binary, causing a minor precision loss. `0.1 + 0.2` actually equals `0.30000000000000004`.

- **`9999999999999999` ➡️ `10000000000000000`**  
  JavaScript numbers lose precision above `Number.MAX_SAFE_INTEGER` ($2^{53} - 1$), causing large integers to round up or down. You must use `BigInt` (e.g., `9007199254740991n`) for larger integers. Directly reflects the floating-point rounding issue above.

- **`1 / 0` ➡️ `Infinity`**  
  Instead of crashing or throwing a division-by-zero error, JS returns a global `Infinity` value.

- **`-1 / 0` ➡️ `-Infinity`**  
  Maintains sign orientation even during extreme infinity calculations.

- **`0 / 0` ➡️ `NaN`**  
  Dividing zero by zero has no mathematical resolution, hence Not-a-Number.

- **`Object.is(0, -0)` ➡️ `false`**  
  Standard loose/strict equality says `0 === -0` is true, but they are separate binary states. `Object.is()` can detect the distinction.

---

# 🔌 Group 6: Object & Prototype Paradoxes

Objects have hidden behaviors tied to string conversion, sorting keys, and the prototype chain.

- **`let obj = { ["prop"]: 1 }; obj["[object Object]"] = 2;`**  
  If you use an object as a key in another object, it stringifies into `"[object Object]"`.

- **`{}` is truthy, but `{} == true` is `false`**  
  An empty object is a truthy value in an `if` statement. But when evaluated with `==`, JavaScript converts the boolean `true` to `1`, then tries to convert `{}` to a number (`NaN`), and `NaN == 1` fails.

- **`"string".constructor` returns `String`**  
  Primitives don't have methods or constructors, but JavaScript wraps primitives in temporary Object wrappers when you access properties.

- **`Object.create(null)`**  
  Creates an object that doesn't inherit from `Object.prototype`. It won't even have standard methods like `.toString()` or `.hasOwnProperty()`.

---

# ⏱️ Group 7: Scope, Hoisting, and Semi-colons

How the interpreter reads your code layout can alter what actually executes.

- **Automatic Semicolon Insertion (ASI) Ruin**  
  ```javascript
  function test() {
    return
    {
      success: true
    };
  }
  ```
  Returns `undefined`. JavaScript automatically inserts a semicolon after `return`, making the object block unreachable code.

- **`typeof unassignedVar` vs `typeof letVar`**  
  `typeof` an undeclared variable returns `"undefined"`. But doing `typeof` on a variable declared later down with `let` or `const` throws a `ReferenceError` due to the Temporal Dead Zone (TDZ).

- **`var` escapes blocks, but not functions**  
  ```javascript
  if (true) { var x = 5; }
  console.log(x); // 5
  ```
  `var` is function-scoped, not block-scoped, so loops and `if` blocks can't contain it.

---

# 🛠️ Group 8: Modern Mechanics (Min/Max, Regex, and Function lengths)

Newer features or global methods still carry legacy design compromises.

- **`Math.min() > Math.max()` ➡️ `true`**  
  `Math.min()` with no arguments returns `Infinity`. `Math.max()` with no arguments returns `-Infinity`. Therefore, `Infinity > -Infinity` is `true`!

- **`[1, 10, 2, 21].sort()` ➡️ `[1, 10, 2, 21]`**  
  The default behavior of `.sort()` converts elements to strings and compares their UTF-16 code unit values character by character (`"10"` comes before `"2"`).

- **Regex Global Test State**  
  ```javascript
  let r = /x/g;
  r.test("x"); // true
  r.test("x"); // false
  ```
  Global regexes (`/g`) maintain an internal `lastIndex` property tracking where they left off. The second test scans after the first match and fails.

- **`Function.length`**  
  A function's `.length` property returns the count of its expected parameters—excluding rest parameters (`...args`) or parameters with default values.

---

# ⚡ Bonus Grand Finale

- **`(![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]]` ➡️ `"fail"`**  
  This is valid JavaScript using a technique known as JSFuck. It extracts specific letters from the string conversions of `false`, `true`, `undefined`, and `NaN` using only math arrays!

---

Some other popular javascript quirks: https://github.com/denysdovhan/wtfjs
