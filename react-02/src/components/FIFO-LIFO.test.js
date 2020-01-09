import {dndApi, FifoLifo} from './FIFO-LIFO'

// test('accessing api', () => {
//     const monsters = dndApi.postData(dndApi.url + 'monsters/results')
//     expect(monsters).toEqual("Aboeleth")
// })

const orderCheck = (list) => {
    let result = []
    let key
    let i = 0

    for (key in list.contents) {
        result.push(list.contents[i].order)
        i++
    }
    return result
}

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
 
test('Fifo/Lifo ordering', () => {
    const fifo = new FifoLifo(true)

    fifo.add({value: "first"})
    expect(orderCheck(fifo)).toEqual([0])

    fifo.add({value: "second"})

    fifo.add({value: "third"})
    expect(orderCheck(fifo)).toEqual([0, 1, 2])

    fifo.add({value: "fourth"})
    expect(orderCheck(fifo)).toEqual([0, 1, 2, 3])

})

