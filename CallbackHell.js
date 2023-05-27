/* 
========================================CallBack Hell==================================================

Callback hell is a common problem in asynchronous programming specially in Javascript. It occurs when
when we have large number of nested callbacks, making the code difficult to read, maintain, debug.

Callback hell creates a pyramid-shaped structure and sometimes also called as pyramid of doom.

Here's an interesting example of callback hell
*/

function getArticles(numArticles, callback) {
  // Make an API request to get the articles
  fetch("https://api.example.com/articles?num=20")
    .then((response) => response.json())
    .then((articles) => callback(articles));
}

function getUserData(userId, callback) {
  // Make an API request to get the user data
  fetch(`https://api.example.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) => callback(user));
}

function getAddress(userId, callback) {
  // Make an API request to get the user's address
  fetch(`https://api.example.com/users/${userId}/address`)
    .then((response) => response.json())
    .then((address) => callback(address));
}

// ===========This is the callback hell code========
getArticles(20, (articles) => {
  getUserData(articles[0].userId, (user) => {
    getAddress(user.id, (address) => {
      // Do something with the articles, user, and address
    });
  });
});

/* 
The above code is an example of callback hell because it uses nested callbacks. The getArticles function calls 
the getUserData function, which calls the getAddress function. The getAddress function is dependent on the 
result of the getUserData function, which is dependent on the result of the getArticles function. This 
creates a pyramid-shaped structure of callbacks, which can be difficult to read and maintain


We can solve this problem in two ways using Promises and Async/Await keyword.

Let's see solution firstly using Promises -
 */

// This is the promises code
const articlesPromise = getArticles();
const userDataPromise = getUserData(
  articlesPromise.then((articles) => articles[0].userId)
);
const addressPromise = getAddress(userDataPromise.then((user) => user.id));

// Wait for all promises to resolve
Promise.all([articlesPromise, userDataPromise, addressPromise]).then(
  ([articles, user, address]) => {
    // Do something with the articles, user, and address
  }
);

/* 

This code uses promises to represent the asynchronous operations of getting the articles, user, and address.
This makes the code more sequential and easier to read and maintain.

Here is how to solve this problem using async/await:
*/

// Async/await
async function getArticles() {
  const response = await fetch("https://api.example.com/articles?num=20");
  const articles = await response.json();
  return articles;
}

async function getUserData(userId) {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const user = await response.json();
  return user;
}

async function getAddress(userId) {
  const response = await fetch(
    `https://api.example.com/users/${userId}/address`
  );
  const address = await response.json();
  return address;
}

async function main() {
  const articles = await getArticles();
  const user = await getUserData(articles[0].userId);
  const address = await getAddress(user.id);

  // Do something with the articles, user, and address
}

main();

//  "async/await" is the modern, more easier to read and maintain solution to the callback-hell problem.
