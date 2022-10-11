const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
*/
class Node{
  constructor(x){
    this.value = x;
    this.next = null;
  }
}

class Queue {

    qeue = null

  getUnderlyingList() {
    return this.qeue
  }

  enqueue(value, qeue = this.qeue ) {
    let node = new Node(value)
    if(qeue === null) {
       this.qeue = node
    } else {
      if(qeue.next === null){
        qeue.next = node
      } else{
        this.enqueue(value, qeue.next )
      }
    }
  }

  dequeue() {
    if(this.qeue == null){
      return null
    } else {
      let result = this.qeue.value
      this.qeue = this.qeue.next
      return result
    }
  }
}

let a = new Queue()
a.enqueue(5)
a.enqueue(6)
a.enqueue(7)

console.log(a)

module.exports = {
  Queue
};
