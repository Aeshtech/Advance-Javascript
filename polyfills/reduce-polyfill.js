Array.prototype.myReduce = function (cb, initialValue) {
let accumalator = initialValue;
for (let i = 0; i < this.length; i++) {
accumalator = accumalator ? cb(accumalator, this[i], i, this) : this[i];  
}
return accumalator;
};

const arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, item)=> acc + item, 0));
