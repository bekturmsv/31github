Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

let arr = [1, 2, 3, 4, 5];
let arr2 = [];

console.log(arr.last());
console.log(arr2.last());
