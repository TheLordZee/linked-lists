/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(this.head !== null) newNode.next = this.head;
    if(this.tail === null) this.tail = newNode;
    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
      if(this.head === null){
          throw "List is empty!";
      };
      let tail = this.tail;  
       if(this.head === this.tail){
          this.head = null;
          this.tail = null;
       }else{
        let currNode = this.head;
        while(currNode.next !== this.tail){
          currNode = currNode.next;
        }
        currNode.next = null;
        this.tail = currNode;
      }
      return tail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
      if(this.head === null){
          throw "List is empty!";
      };
      let head = this.head;
      this.head = this.head.next;
      if(this.head === this.tail){
        this.tail = null;
      };
      return head.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
      let currNode = this.head;
      while(idx > 0){
        if(currNode === null){
            throw "Invalid index";
            break;
        }
        currNode = currNode.next;
        idx--;
      }
      if(currNode === null){
         throw "Invalid index";
       }
      return currNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
     let currNode = this.head;
      while(idx > 0){
        if(currNode === null){
            throw "Invalid index";
            break;
        }
        currNode = currNode.next;
        idx--;
      }
      if(currNode === null){
         throw "Invalid index";
       }
      currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      if(idx === 0){
          this.unshift(val);
      }else{
        let newNode = new Node(val);
        let currNode = this.head;
        while(idx - 1 > 0){
            if(currNode.next === null){
                throw "Invalid index";
                break;
            }
            currNode = currNode.next;
            idx--;
        };
        if(currNode === null){
             throw "Invalid index";
        };
        newNode.next = currNode.next;
        currNode.next = newNode; 
      }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
      if(idx === 0 && this.head !== null){
          let head = this.head;
          this.head = this.head.next;
          return head.val;
      }else{
          let currNode = this.head;
          while(idx - 1 > 0){
            if(currNode === null){
                throw "Invalid index";
                break;
            }
            currNode = currNode.next;
            idx--;
        }
        if(currNode === null){
             throw "Invalid index";
        }
        let removed = currNode.next;
        if(removed === this.tail){
            this.tail = currNode;
        }else{
            currNode.next = currNode.next.next;
        };
        return removed.val;
      }
  }

  /** average(): return an average of all values in the list */

  average() {
      let count = 0;
      let total = 0;
      let currNode = this.head;
      while(currNode !== null){
          if(typeof currNode.val !== 'number'){
              throw 'List must be of numbers to find the average';
          }
          total += currNode.val;
          count++;
          currNode = currNode.next;
      }
      return total/count;
  }
}

module.exports = LinkedList;
