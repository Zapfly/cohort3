import {dndApi, FifoLifo} from './FIFO-LIFO'




test('Fifo/Lifo exists', () => {
    const fifo = new FifoLifo(true)
    expect(fifo.fifo).toEqual(true)
    const lifo = new FifoLifo(false)
    expect(lifo.fifo).toEqual(false)
})

test('add function', () => {
    const fifo = new FifoLifo(true)
    fifo.add({value: "first"})
    expect(fifo.contents[0].value).toEqual("first")
    fifo.add({value: "second"})
    expect(fifo.contents[1].value).toEqual("second")
    fifo.add({value: "third"})
    expect(fifo.contents[2].value).toEqual("third")
})
 

test('RemoveFirst function', () => {
    const fifo = new FifoLifo(true)
    fifo.add({value: "first"})
    fifo.add({value: 2})
    fifo.add({value: "C"})
    expect(fifo.contents).toEqual([{value: "first"}, {value: 2}, {value: "C"}])
    let deleted = []

    fifo.removeFirst(deleted)
    expect(fifo.contents).toEqual([{value: 2}, {value: "C"}])
    expect(deleted).toEqual([{value: "first"}])

    fifo.removeFirst(deleted)
    expect(fifo.contents).toEqual([ {value: "C"}])
    expect(deleted).toEqual([{value: "first"}, {value: 2}])
})

test('RemoveLast function', () => {
    const fifo = new FifoLifo(true)
    fifo.add({value: "first"})
    fifo.add({value: 2})
    fifo.add({value: "C"})
    expect(fifo.contents).toEqual([{value: "first"}, {value: 2}, {value: "C"}])
    let deleted = []

    fifo.removeLast(deleted)
    expect(fifo.contents).toEqual([{value: "first"}, {value: 2}])
    expect(deleted).toEqual([{value: "C"}])

    fifo.removeLast(deleted)
    expect(fifo.contents).toEqual([{value: "first"}])
    expect(deleted).toEqual([{value: "C"}, {value: 2}])
})

test('RemoveItem function', () => {
    const fifo = new FifoLifo(true)
    fifo.add({value: "first"})
    fifo.add({value: 2})
    fifo.add({value: "C"})
    expect(fifo.contents).toEqual([{value: "first"}, {value: 2}, {value: "C"}])
    let deleted = []

    fifo.removeItem(deleted)
    expect(fifo.contents).toEqual([ {value: 2}, {value: "C"}])
    expect(deleted).toEqual([{value: "first"}])

    fifo.removeItem(deleted)
    expect(fifo.contents).toEqual([{value: "C"}])
    expect(deleted).toEqual([{value: "first"}, {value: 2}])

    const lifo = new FifoLifo(false)
    lifo.add({value: "first"})
    lifo.add({value: 2})
    lifo.add({value: "C"})
    expect(lifo.contents).toEqual([{value: "first"}, {value: 2}, {value: "C"}])
    deleted = []

    lifo.removeItem(deleted)
    expect(lifo.contents).toEqual([{value: "first"}, {value: 2}])
    expect(deleted).toEqual([{value: "C"}])

    lifo.removeItem(deleted)
    expect(lifo.contents).toEqual([{value: "first"}])
    expect(deleted).toEqual([{value: "C"}, {value: 2}])
})





