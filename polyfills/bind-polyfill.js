const car = {
  color: "Silver",
  name: "Tata Curvv",
}

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.name} car for ${currency}${price}`,
  )
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable")
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs)
  }
}

const newFunc = purchaseCar.bind(car, "₹");
newFunc(5000000)
