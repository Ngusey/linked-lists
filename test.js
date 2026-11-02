
import assert from "node:assert/strict";
import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

// Append
list.append("dog");
list.append("cat");
list.append("parrot");

assert.equal(list.size(), 3);
assert.equal(list.head(), "dog");
assert.equal(list.tail(), "parrot");

// Prepend
list.prepend("lion");
assert.equal(list.head(), "lion");

// at()
assert.equal(list.at(0), "lion");
assert.equal(list.at(2), "cat");
assert.equal(list.at(10), undefined);

// pop()
assert.equal(list.pop(), "lion");

// contains()
assert.equal(list.contains("dog"), true);
assert.equal(list.contains("elephant"), false);

// findIndex()
assert.equal(list.findIndex("cat"), 1);
assert.equal(list.findIndex("elephant"), -1);

// toString()
assert.equal(
  list.toString(),
  "( dog ) -> ( cat ) -> ( parrot ) -> null"
);

// insertAt()
list.insertAt(1, "eagle", "falcon");

assert.equal(
  list.toString(),
  "( dog ) -> ( eagle ) -> ( falcon ) -> ( cat ) -> ( parrot ) -> null"
);

// removeAt()
assert.equal(list.removeAt(1), "eagle");

assert.equal(
  list.toString(),
  "( dog ) -> ( falcon ) -> ( cat ) -> ( parrot ) -> null"
);

// Invalid indexes
assert.throws(() => list.insertAt(-1, "x"), RangeError);
assert.throws(() => list.removeAt(100), RangeError);

// Empty list
const emptyList = new LinkedList();

assert.equal(emptyList.size(), 0);
assert.equal(emptyList.head(), undefined);
assert.equal(emptyList.tail(), undefined);
assert.equal(emptyList.pop(), undefined);
assert.equal(emptyList.toString(), "");

console.log("All tests passed successfully!");
