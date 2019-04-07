/*
An XOR linked list is a more memory efficient doubly linked list. 
Instead of each node holding next and prev fields, it holds a field named both, 
which is an XOR of the next node and the previous node. Implement an XOR linked list; 
it has an add(element) which adds the element to the end, and a get(index) which 
returns the node at index.

If using a language that has no pointers (such as Python), you can assume you 
have access to get_pointer and dereference_pointer functions that converts between 
nodes and memory addresses.
 */

class Node {
	constructor(value){
		this.value = value;
		this.both = 0;
	}
}

class XORLinkedList {
	constructor(value){
		this.head = new Node(value);
	}

	add(element){
		let prev = null;
		let currNode =  this.head;
		while (currNode.both != 0){
			const temp = currNode;
			currNode = prev ^ currNode.both;
			prev = temp;
		}
		currNode = new Node(element);
		currNode.both = prev ^ null;
		return currNode;
	}

	get(index) {
	    let prev = null;
	    let currNode = this.head;
	    for (let i = 0; i < index; i += 1) {
	      const temp = currNode;
	      currNode = prev ^ this.head.both;
	      prev = temp;
	    }
	    return currNode;
	  }
}

// Driver program
const XLList = new XORLinkedList(3);
XLList.add(5);
XLList.add(7);
console.log(XLList.get(1));
console.log('end');

