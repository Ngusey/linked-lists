
import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("At index 2:", list.at(2));
console.log("Contains cat:", list.contains("cat"));
console.log("Index of parrot:", list.findIndex("parrot"));

list.prepend("lion");
console.log("After prepend:", list.toString());

list.pop();
console.log("After pop:", list.toString());

list.insertAt(1, "eagle", "falcon");
console.log("After insertAt:", list.toString());

list.removeAt(1);
console.log("After removeAt:", list.toString());
