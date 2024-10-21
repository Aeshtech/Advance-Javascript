const car1 = {
  color: "Silver",
  name: "Tata Curvv",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.name} car for ${currency}${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "₹", "20,000,00");
