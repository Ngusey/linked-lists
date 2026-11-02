
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.listSize = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    this.listSize++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }

    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode?.value;
  }

  tail() {
    return this.tailNode?.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.listSize) {
      return undefined;
    }

    let currentNode = this.headNode;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }

    const removedValue = this.headNode.value;

    this.headNode = this.headNode.nextNode;
    this.listSize--;

    if (this.headNode === null) {
      this.tailNode = null;
    }

    return removedValue;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let currentNode = this.headNode;
    let result = "";

    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return result === "" ? "" : result + "null";
  }

  insertAt(index, ...values) {
    if (!Number.isInteger(index) || index < 0 || index > this.listSize) {
      throw new RangeError("Index out of bounds");
    }

    if (values.length === 0) return;

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    if (index === this.listSize) {
      for (const value of values) {
        this.append(value);
      }
      return;
    }

    let currentNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    const nextNode = currentNode.nextNode;
    let previousNode = currentNode;

    for (const value of values) {
      const newNode = new Node(value);
      previousNode.nextNode = newNode;
      previousNode = newNode;
      this.listSize++;
    }

    previousNode.nextNode = nextNode;
  }

  removeAt(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.listSize) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      return this.pop();
    }

    let currentNode = this.headNode;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    const removedNode = currentNode.nextNode;
    currentNode.nextNode = removedNode.nextNode;

    if (removedNode === this.tailNode) {
      this.tailNode = currentNode;
    }

    this.listSize--;

    return removedNode.value;
  }
}
