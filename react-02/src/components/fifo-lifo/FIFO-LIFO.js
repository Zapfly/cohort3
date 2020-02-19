import { LinkedList } from "../linkLists/linkPSC";

// FIFO = First In First Out
// LIFO = Last In First Out

//FIFO QUEUE


export class FifoLifo extends LinkedList {
    constructor(fifo) {
        super()
            this.fifo = fifo;
            this.contents = []
    }
    add(obj) {
        this.contents.push(obj)
    }

    removeFirst(newArr) {
        newArr.push(this.contents[0])
        this.contents.shift()
    }
    
    removeLast(newArr) {
        newArr.push(this.contents[(this.contents.length - 1)])
        this.contents.pop()
    }
    
    removeItem(newArr) {
        if(this.contents.length > 0){
            if (this.fifo === true) return this.removeFirst(newArr);
            else return this.removeLast(newArr)
        }
    }

}




