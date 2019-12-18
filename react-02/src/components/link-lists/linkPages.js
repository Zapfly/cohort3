
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
    this.first = null
    this.last = null;
    this.next = null;
    this.previous = null;
    this.current = null

  }

  insert(subject, amount) {
    if (this.first == null) {
      console.log("this.first == null");
      const newNode = new ListNode(subject, amount)
      this.first = newNode;
      this.last = newNode;
      this.current = newNode;

      return this.current
    };
    if (this.first == this.last) {
      console.log("this.first == this.last");
      const newNode = new ListNode(subject, amount)

      this.first = newNode;
      this.next = this.current;
      this.current = newNode
      this.current.forwardNode = this.next;
      return this.current
    };
    if (this.first == this.current) {
      console.log("this.first == this.current");
      const newNode = new ListNode(subject, amount);
      
      this.next = this.current;
      newNode.forwardNode = this.next;
      this.first = newNode;
      return this.current
    }
    console.log("None of the above are true");





    // if (this.last == null) {
    //   this.last == a;
    // }
    // if (this.next == null) {
    //   this.last == a;
    // }
    // if (this.current == null) {
    //   this.current == a;
    // }


  }

  // findNode(search) {
  //   return {}    
  // }

  delete(search) {

  }
}



