import { ListNode, LinkedList } from './linkPages'

test('if LinkList exists', () => {
    let list = new LinkedList();

    expect(list).toEqual({
        "current": null,
        "first": null,
        "last": null,
        "next": null,
        "previous": null,
    })
    expect(list.first).toEqual(null);
})

test('insert at beginning', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    expect(list.first.subject).toEqual("uno")
    expect(list.first.amount).toEqual(100)
    expect(list.first.forwardNode).toEqual(null)

    list.insert("dos", 200)
    expect(list.first.subject).toEqual("dos")
    expect(list.first.amount).toEqual(200)
    expect(list.first.forwardNode.subject).toEqual("uno")
    expect(list.next.subject).toEqual("uno")
    expect(list.current.subject).toEqual("dos")

    list.insert("three", 300)
    expect(list.first.subject).toEqual("three")
    expect(list.first.amount).toEqual(300)
    expect(list.first.forwardNode.subject).toEqual("dos")
    expect(list.first.forwardNode.forwardNode.subject).toEqual("uno")
    expect(list.last.subject).toEqual("uno")
    expect(list.last.forwardNode).toEqual(null)
})

// test('insert in middle', () => {
//     let list = new LinkedList();
//     list.insert("uno", 100)
//     list.insert("dos", 200)
//     list.insert("three", 300)
    
    
// })

// test('FindNode stuff', () => {
//     let list = new LinkedList();
//     list.insert("uno")
//     list.insert("dos")
//     list.insert("three")

//     expect(list.findNode())

// })
