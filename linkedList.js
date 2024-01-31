class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
  insertAt(index, newNode) {
    let node = this.head;
    if (index == 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let myList = new LinkedList();
let node = new Node(5);

myList.appendNode(node);
console.log(myList);
myList.appendNode(new Node(11));
//myList.appendNode(new Node(7));
