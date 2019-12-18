
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


class Node{
  constructor(data, next = null){
      this.data = data,
      this.next = next
  }
}

class LinkedList{
  constructor(){
      this.head = null;
  }
}

let list = new LinkedList();
  
export default Node