
import { LinkedList } from './LinkedList.js';

console.log(new LinkedList())

// reverse a string using stacks
function reverseString(str) {
  if (!str) return;
  const stack = [];

  for (let c of str) {
    stack.push(c);
  }
  let res = '';
  while (stack.length > 0) {
    res += stack.pop();
  }
  return res;
}
console.log(reverseString(null));

function isBalancedExp(exp) {
  const opening = ['(', '{', '[', '<'];
  const closing = [')', '}', ']', '>'];
  const stack = [];

  for (let it of exp) {

    if (opening.includes(it)) {
      stack.push(it);
    } else if (closing.includes(it)) {
      const popped = stack.pop();
      if (opening.indexOf(popped) !== closing.indexOf(it)) return false;
    }
  }
  return true;
}

console.log(isBalancedExp(''))
console.log(isBalancedExp('({0))'))
console.log(isBalancedExp('((>0))'))


class Stack {
  count = 0;

  constructor(cap) {
    this.list = [];
    this.max = cap;
  }
  empty() {
    return this.count === 0;
  }

  push(item) {
    if (this.list.length === this.max)
      throw new Error("Stack Overflow Exception");

    this.list[this.count++] = item;
  }

  pop() {
    if (this.count == 0) throw new Error('IllegalStateException');
    return this.list[--this.count];
  }

  peek() {
    if (this.count == 0) throw new Error('IllegalStateException');
    return this.list[this.count - 1];
  }

}

const stack = new Stack(4);
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack);
console.log(stack.peek())
console.log(stack);
console.log(stack.pop());
console.log(stack.empty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.empty());

// Using LinkedList
class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }


}
