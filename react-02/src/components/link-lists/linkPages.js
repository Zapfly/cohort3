
// function LinkList() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       document.title = `You clicked ${count} times`;
//     });

//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>
//           Click me
//         </button>
//       </div>
//     );
//     }


export class ListNode {
  constructor(subject, amount, forwardNode = null) {
    this.subject = subject,
      this.forwardNode = forwardNode,
      this.amount = amount
  }

  // addNodeToEnd(obj){
  //   if (this.forwardNode == null) {
  //     return this.forwardNode = obj
  //   }else {
  //     this.forwardNode.addNodeToEnd(obj)

  //   }
  // }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null;
    this.next = null;
    this.previous = null;
    this.current = null

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
      this.current.forwardNode = newNode
      this.next = this.current.forwardNode
      if (this.head === this.tail) {
        this.tail = newNode;
      }
      return this.current
    }



    // if (this.head === this.tail) {
    //   console.log("this.first === this.last");
    //   const newNode = new ListNode(subject, amount)

    //   this.head = newNode;
    //   this.next = this.current;
    //   this.current = newNode
    //   this.current.forwardNode = this.next;
    //   return this.current
    // };
    // if (this.head == this.current) {
    //   console.log("this.first == this.current");
    //   const newNode = new ListNode(subject, amount);

    //   this.next = this.current;
    //   newNode.forwardNode = this.next;
    //   this.head = newNode;
    //   return this.current
    // }
    // console.log("None of the above are true");



  }
  next() {

  }

  previous() {

  }

  first() {

  }

  last() {

  }

  delete(search) {

  }
}



