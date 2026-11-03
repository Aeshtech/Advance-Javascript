function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6




/* Real World Examples: 

1. Preconfigured API & Fetch Wrappers (Partial Application)

This is arguably the most common real-world application. Instead of passing the base URL, authentication headers, or HTTP methods for every single network call, you curry the function to create specialized, reusable fetchers */

// A curried generic request function
const makeRequest = (baseUrl) => (method) => (endpoint) => (data) => {
  return fetch(`${baseUrl}${endpoint}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: data ? JSON.stringify(data) : null
  }).then(res => res.json());
};

// 1. Lock in the environment/Base URL
const myApi = makeRequest('https://example.com');

// 2. Lock in specialized HTTP methods
const getRequest = myApi('GET');
const postRequest = myApi('POST');

// 3. Ready to use with just the endpoint and payload
// Calls: https://example.com/users
const users = getRequest('/users')(); 
// Calls: https://example.com/login
const login = postRequest('/login')({ username: 'alex' });


/* 
2. Highly Reusable Array Transformers (map, filter)

Currying allows you to extract logic out of inline array loops. This makes your array manipulations highly declarative and dramatically increases code readability. */

const list = [
  { id: 1, name: 'Steve', role: 'admin' },
  { id: 2, name: 'John', role: 'user' },
  { id: 3, name: 'Pamela', role: 'user' }
];

// Curried utility functions
const hasRole = (role) => (obj) => obj.role === role;
const getProp = (prop) => (obj) => obj[prop];

// Read aloud: "Filter the list for those who have the role of user, then map to get their names"
const userNames = list
  .filter(hasRole('user'))
  .map(getProp('name'));

console.log(userNames); // ['John', 'Pamela']


