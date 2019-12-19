import { ListNode, LinkedList } from './linkPages'

test('if LinkList exists', () => {
    let list = new LinkedList();

    expect(list).toEqual({
        "current": null,
        "head": null,
        "tail": null,
        "next": null,
        "previous": null,
    })
    expect(list.head).toEqual(null);
})

test('insert at beginning', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    expect(list.head).toEqual({subject:"uno", amount: 100, forwardNode: null})

    list.insert("dos", 200)
    expect(list.head.forwardNode).toEqual({subject:"dos", amount: 200, forwardNode: null})
    expect(list.current.subject).toEqual("uno")
    expect(list.head.subject).toEqual("uno")
    expect(list.next).toEqual({subject:"dos", amount: 200, forwardNode: null})

    // expect(list.head.subject).toEqual("dos")
    // expect(list.head.amount).toEqual(200)
    // expect(list.head.forwardNode.subject).toEqual("uno")
    // expect(list.next.subject).toEqual("uno")
    // expect(list.current.subject).toEqual("dos")

    list.insert("three", 300)
    expect(list.head.subject).toEqual("uno")
    expect(list.head.amount).toEqual(100)
    expect(list.head.forwardNode.subject).toEqual("three")
    expect(list.head.forwardNode.forwardNode.subject).toEqual("dos")
    expect(list.tail.subject).toEqual("dos")
    expect(list.tail.forwardNode).toEqual(null)
})

test('insert in middle', () => {
    let list = new LinkedList();
    list.insert("uno", 100)
    list.insert("dos", 200)
    list.insert("three", 300)
    
})

