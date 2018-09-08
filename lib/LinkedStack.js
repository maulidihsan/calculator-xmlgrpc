class StackNode {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
};

class LinkedStack {
  constructor() {
    this.head = null;
    this.size = null;
    this.pushToStack = (item) => {
      const node = new StackNode(item, null);
      if(this.size < 1 && this.head === null) {
        this.head = node;
        this.size = 1;
      } else {
        let current = this.head;
        while(current.next !== null) {
          current = current.next;
        }
        current.next = node;
        this.size += 1;
      }
    }
    this.popFromStack = () => {
      let current = this.head;
      if(this.size === 0) {
        return;
      }
      if(this.size === 1) {
        this.head = null;
        this.size = 0;
        return current;
      }
      let previous = current;
      while(current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.size -= 1;
      return current;
    }
    this.isStackEmpty = () => {
      return (this.size < 1) ? true : false;
    }
    this.topStack = () => {
      let current = this.head;
      if(this.size > 0 && this.head !== null) {
        while(current.next !== null) {
          current = current.next;
        }
        return current.item;
      } else {
        return null;
      }
    }
    this.printStack = () => {
      let current = this.head;
      let stack = '';
      while(current.next !== null) {
        stack += `${current.item} `
        current = current.next;
      }
      stack += `${current.item} `
      return stack.trim();
    }
  }
};

module.exports = LinkedStack;
