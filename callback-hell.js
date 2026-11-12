/* 
========================================CallBack Hell==================================================

Callback hell is a common problem in asynchronous programming specially in Javascript. It occurs when
when we have large number of nested callbacks, making the code difficult to read, maintain, debug.

Callback hell creates a pyramid-shaped structure and sometimes also called as pyramid of doom.

Here's an interesting example of callback hell
*/

function getUser(userId, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user");
      const user = { id: userId, username: "alex_dev" };
      if (typeof callback === "function") callback(user);
      resolve(user);
    }, 1000);
  });
}

function getOrders(username, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched orders for ${username}`);
      const orders = ["order_101", "order_102"];
      if (typeof callback === "function") callback(orders);
      resolve(orders);
    }, 1000);
  });
}

function getOrderDetails(orderId, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched details for ${orderId}`);
      const details = { id: orderId, item: "Mechanical Keyboard", price: 120 };
      if (typeof callback === "function") callback(details);
      resolve(details);
    }, 1000);
  });
}

// ======================================== The Problem: Callback Hell ========================================
// Notice the deep nesting (Pyramid of Doom):

getUser(1, (user) => {
  getOrders(user.username, (orders) => {
    getOrderDetails(orders[0], (details) => {
      console.log("Callback Hell Result:", details);
    });
  });
});


/* 
======================================== Solutions ========================================
We can solve this problem in two ways:
1. Using Promises (.then / .catch chaining)
2. Using Async / Await keywords
*/

// ======================================== 1. Solution using Promises ========================================
// Flat chain, eliminates deep nesting and handles errors in a single .catch block
getUser(1)
  .then((user) => {
    return getOrders(user.username);
  })
  .then((orders) => {
    return getOrderDetails(orders[0]);
  })
  .then((details) => {
    console.log("Final Result:", details);
  })
  .catch((error) => {
    console.error("An error occured:", error);
  });

// ======================================== 2. Solution using Async / Await ========================================
// Looks and behaves like synchronous code, easiest to read and maintain
async function fetchUserOrderDetails(userId) {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.username);
    const details = await getOrderDetails(orders[0]);
    console.log("Async/Await Solution Result:", details);
  } catch (error) {
    console.error("Async/Await Error:", error);
  }
}

// To test the Async/Await solution, uncomment the line below:
// fetchUserOrderDetails(1);
