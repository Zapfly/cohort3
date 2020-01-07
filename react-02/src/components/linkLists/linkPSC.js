

class ListNode {
  constructor(subject, amount) {
      this.forwardNode = null;
      this.amount = amount;
      this.backwardNode = null;
      this.subject = subject;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;

  }

  insert(subject, amount) {
    if (!this.head) {
      const newNode = new ListNode(subject, amount);
      this.current = newNode;
      this.head = newNode;
      this.tail = newNode
      return this.head;
    } else {
      const newNode = new ListNode(subject, amount);
      newNode.forwardNode = this.current.forwardNode;
      newNode.backwardNode = this.current
      if (this.current.forwardNode !== null){
        this.current.forwardNode.backwardNode = newNode
      }
      this.current.forwardNode = newNode
      if (this.head === this.tail) {
        this.tail = newNode;
      }
      return this.current
    }

  }

  next() {
    if (this.current.forwardNode !== null) {
      this.current = this.current.forwardNode;

    }
  }

  previous() {

    if (this.current.backwardNode !== null) {

      this.current = this.current.backwardNode;
    }
  }

  first() {
    this.current = this.head;
  }

  last() {
    this.current = this.tail
  }

  delete() {
    if (this.current.forwardNode === null && this.current.backwardNode === null) {
      return undefined      
    } else if (this.current.forwardNode === null) {
      this.current = this.current.backwardNode;
      this.current.forwardNode = null;
    } else if (this.current.backwardNode === null) {
      this.current = this.current.forwardNode;
      this.current.backwardNode = null;
    } else {
      this.current.forwardNode.backwardNode = this.current.backwardNode;
      this.current.backwardNode.forwardNode = this.current.forwardNode;
      this.current = this.current.backwardNode
    }

    
  }
  total() {
    let node = this.head
    let total = 0
    while(node) {
      total += Number(node.amount)
      node = node.forwardNode
    }
    return total
  }
}


