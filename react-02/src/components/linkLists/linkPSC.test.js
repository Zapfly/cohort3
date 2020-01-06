import { LinkedList } from './linkPSC'

const subjectList = (list) => {
    list.first()
    const subArr = []
    while (list.current.forwardNode !== null) {
        subArr.push(list.current.subject)
        list.next()        
    } 
    subArr.push(list.current.subject)  
    
    return subArr
}

test('if LinkList exists', () => {
    let list = new LinkedList();

    expect(list).toEqual({
        "current": null,
        "head": null,
        "tail": null,
    })
    expect(list.head).toEqual(null);
})

test('insert at beginning', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    expect(list.head.subject).toEqual("uno")

    list.insert("dos", 200)
    expect(list.head.forwardNode.subject).toEqual("dos")
    expect(list.current.subject).toEqual("uno")
    expect(list.head.subject).toEqual("uno")
    expect(list.current.forwardNode.subject).toEqual("dos")

    list.insert("three", 300)
    expect(list.head.subject).toEqual("uno")
    expect(list.head.amount).toEqual(100)
    expect(list.head.forwardNode.subject).toEqual("three")
    expect(list.head.forwardNode.forwardNode.subject).toEqual("dos")
    expect(list.tail.subject).toEqual("dos")
    expect(list.tail.forwardNode).toEqual(null)
})

test('next function', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    list.insert("dos", 200)
    list.insert("three", 300)

    expect(list.current.subject).toEqual("uno");
    expect(list.current.forwardNode.subject).toEqual("three");
    expect(list.current.forwardNode).toEqual(list.current.forwardNode)

    list.next();
    expect(list.current.subject).toEqual("three");
    expect(list.current.forwardNode.subject).toEqual("dos");

    expect(subjectList(list)).toEqual(["uno", "three", "dos"])
})

test('previous function', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    list.insert("dos", 200)
    list.insert("three", 300)
    expect(subjectList(list)).toEqual(["uno", "three", "dos"])

    list.last()

    expect(list.current.subject).toEqual("dos");
    expect(list.current.backwardNode.subject).toEqual("three");

    list.previous();
    expect(list.current.subject).toEqual("three");
    expect(list.current.forwardNode.subject).toEqual("dos");

})

test('delete function', () => {
    let list = new LinkedList();
    list.insert("uno", 100);
    list.insert("dos", 200);
    list.insert("three", 300);
    expect(subjectList(list)).toEqual(["uno", "three", "dos"]);
    list.previous();

    list.delete();
    expect(subjectList(list)).toEqual(["uno", "dos"]);

    list.delete();
    expect(subjectList(list)).toEqual(["uno"]);

})

test('total function', () => {
    let list = new LinkedList();
    expect(list.total()).toEqual(0)

    list.insert("uno", 100);
    expect(list.total()).toEqual(100)

    list.insert("dos", 200);
    list.insert("three", 300);

    expect(list.total()).toEqual(600)



})
