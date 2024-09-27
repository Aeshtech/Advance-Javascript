// Array.map((num, i, arr) => { })
Array.prototype.myFilter = function (cb) {
let newArr = [] ;
for (let i = 0; i < this.length; i++) {
if(cb(this[i])){
newArr.push(this[i]);
}}
return newArr;
};

const arr = [2, 3, 18, 19, 24, 16];
console.log(arr.myFilter((item, index)=> item >= 18));
