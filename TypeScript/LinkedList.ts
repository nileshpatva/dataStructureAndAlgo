
class ListNode {
  public value: number;
  public next: ListNode;

  constructor(item: number) {
    this.value = item;
    this.next = null;
  }
}


class LinkedList {
  public first: ListNode;
  public last: ListNode;
  private count: number = 0;

  // size
  size() {
    return this.count;
  }

  // addFirst
  public addFirst(item: number) {
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
  public addLast(item: number) {
    const node = new ListNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.count++;
  }

  // indexOf
  public indexOf(item: number) {
    let index = 0;
    let curr = this.first;
    while (curr) {
      if (curr.value === item) return index;
      curr = curr.next;
      index++;
    }
    return -1;
  }

  // contains
  public contains(item: number) {
    return this.indexOf(item) !== -1;
  }

  // removeFirst
  public removeFirst() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
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

  // removeLast
  public removeLast() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
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

  // toArray
  public toArray() {
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
  public reverse() {
    if (this.isEmpty()) return;

    let prev = this.first;
    let curr = this.first.next;

    while(curr) {
      const next = curr.next;

      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.last = this.first;
    this.last.next = null;

    this.first = prev;
  }

  private isEmpty() {
    return !this.first;
  }

  private previous(node: ListNode) {
    let curr = this.first;
    while (curr) {
      if (curr.next === node) return curr;
      curr = curr.next;
    }
    return null;
  }

}