// FIFO
class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    this.arr.shift(item);
  }
}

// LIFO
class Stack {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const curry = (fn1) => (fn2) => (a) => (b) => fn1(a + b) + fn2(a * b);

const ar = [1, 2, 3];
const sum = ar.reduce((a, b) => {
  return a + b;
}, 0);

const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

console.log(arr1[0], arr2[0]);
console.log(arr1[0][0] + arr2[0][0]);
const [a, b, c, d] = [1, 2, 3, 4];

/* const temp = [
  [a, c],
  [b, d],
]; */

const temp = "ab";

console.log("temp", temp[0]);
