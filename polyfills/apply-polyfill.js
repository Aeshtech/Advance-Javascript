const car1 = {
color: 'Silver',
name: 'Tata Curvv'
}

function purchaseCar(currency, price){
console.log(`I have purchased ${this.color} - ${this.name} car for ${currency}${price}`);
}

Function.prototype.myApply = function (context = {}, args = []) {
if (typeof this !== "function") {
throw new Error(this + "It's not Callable");
}

if(!Array.isArray(args)){
throw new Error("CreateListFromArrayLike called on non-object");
}

context.fn = this;
context.fn(...args);
};

purchaseCar.myApply(car1, ["₹", '20,000,00']);
