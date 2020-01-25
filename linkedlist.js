class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

LinkedList.prototype.push = function(data) {
  this.length++;
  let newNode = new Node(data, this.head);
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.pushEnd = function(data) {
  this.length++;
  let newNode = new Node(data);
  if (this.head === null) {
    this.head = newNode;
    return this.head;
  }
  let lastNode = this.getAt(this.length - 1);
  lastNode.next = newNode;
  return this.head;
};

//if idx is out if bounds, pushes at first/last idx respectively
LinkedList.prototype.pushAt = function(data, idx) {
  this.length++;
  let newNode = new Node(data);
  if (idx === 0 || idx === null) {
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  let preNode = this.getAt(idx - 1);
  newNode.next = preNode.next;
  preNode.next = newNode;
  return this.head;
};

LinkedList.prototype.delFirst = function() {
  if (this.head === null) {
    return;
  }
  this.head = this.head.next;
  this.length--;
  return this.head;
};

LinkedList.prototype.delLast = function() {
  let secondLastNode = this.getAt(this.length - 1);
  if (secondLastNode === null) {
    this.head = null;
    return;
  }
  secondLastNode.next = null;
  this.length--;
  return this.head;
};

//if idx is out of bounds, deletes first/last node respectively
LinkedList.prototype.delAt = function(idx) {
  let preNode = this.getAt(idx - 1);
  if (preNode === null) {
    this.head = this.head.next;
    return;
  }
  preNode.next = preNode.next.next;
  return this.head;
};

LinkedList.prototype.delete = function(idx) {
  this.head = null;
};

//if idx is out if bounds, returns first/last idx respectively
LinkedList.prototype.getAt = function(idx) {
  let newNode = this.head;
  for (let i = 0; i < idx; i++) {
    if (newNode.next === null) {
      return newNode;
    }
    newNode = newNode.next;
  }
  return newNode;
};

LinkedList.prototype.createRandomList = function(min, max, length) {
  for (let i = 0; i < length; i++) {
    let Random = this.getRandomArbitrary(min, max);
    let newNode = new Node(Random);
    this.push(newNode);
  }
  return this.head;
};

LinkedList.prototype.getRandomArbitrary = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {Node,LinkedList};
