
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  first;
  last;
  count = 0;

  //size
  size() {
    return this.count;
  }
  // addFirst
  addFirst(item) {
    const node = new ListNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.count++;
  }
  // addLast
  addLast(item) {
    const node = new ListNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.count++;
  }
  // deleteFirst [10 -> 20 -> 30]
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('No such element in LinkedList');
    }
    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      const second = this.first.next;
      this.first.next = null;
      this.first = second;
    }
    this.count--;
  }
  // deleteLast
  removeLast() {
    if (this.isEmpty()) {
      throw new Error('No such element in LinkedList');
    }
    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      const previous = this.previous(this.last);
      previous.next = null;
      this.last = previous;
    }
    this.count--;
  }
  // contains
  contains(item) {
    return this.indexOf(item) !== -1;
  }
  // indexOf
  indexOf(item) {
    let index = 0;
    let curr = this.first
    while (curr) {
      if (curr.value === item) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }

  // toArray
  toArray() {
    const arr = [];
    let curr = this.first;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }

  // reverse
  // [10 -> 20 -> 30]
  // [30 -> 20 -> 10]
  reverse() {
    if (this.isEmpty()) return;
    let prev = this.first, curr = this.first.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }

    this.last = this.first;
    this.last.next = null;
    this.first = prev;
  }

  // kth node from start
  nodeFromStart(k) {
    if (this.isEmpty()) {
      throw new Error('IllegalStateException');
    }

    if (this.count < k) {
      throw new Error('IllegalArgumentError');
    }
    let curr = this.first;
    while (k > 1) {
      curr = curr.next;
      k--;
    }
    return curr.value;
  }

  // kth node from end
  nodeFromEnd(k) {
    // two pointer approach
    if (this.isEmpty()) {
      throw new Error('IllegalStateException');
    }

    let dist = k - 1;
    let first = this.first;
    let second = this.first;

    for (let i = 0; i < dist; i++) {
      second = second.next;
      if (!second) {
        throw new Error('IllegalArgumentException');
      }
    }

    while (second != this.last) {
      first = first.next;
      second = second.next;
    }
    return first.value;
  }

  hasLoop() {
    // two pointer approach
    let slow = this.first;
    let fast = this.first;

    while (fast && fast.next) {
      // slow moves by 1
      slow = slow.next;
      // fast moves by 2
      fast = fast.next.next;
      // at some point they meet
      // that means list is circular
      if (slow === fast) return true;
    }
    return false;
  }
  // [10, 20, 30, 40, 50, 60]
  getMiddle() {
    let first = this.first;
    let second = this.first;

    while (second !== this.last && second.next !== this.last) {
      second = second.next.next;
      first = first.next;
    }
    if (second === this.last) {
      return [first];
    } else {
      return [first, first.next];
    }
  }

  isEmpty() {
    return !this.first;
  }
  previous(node) {
    let current = this.first;
    while (current) {
      if (current.next === node) return current;
      current = current.next;
    }
    return null;
  }
}
Array.prototype.toLinkedList = function () {
  const list = new LinkedList();
  this.forEach(item => list.addLast(item));
  return list;
}

const lList = new LinkedList();
lList.addLast(10);
lList.addLast(20);
// lList.addLast(30);
// lList.addLast(40);
// lList.addLast(50);
// lList.addLast(60);
// console.log(JSON.stringify(lList))
// lList.removeLast();
// lList.removeLast();
// lList.removeLast();
// // lList.removeLast();

// lList.reverse()
console.log(lList.getMiddle())


// list with loop
const list = new LinkedList();
list.addLast(10);
list.addLast(20);

// Get a reference to 20
const node = list.last;
list.addLast(30);

list.addLast(40);
list.addLast(50);

// Create the loop
list.last.next = node;
// below line creats a circular list
// list.last.next = list.first;

console.log(list.hasLoop())
