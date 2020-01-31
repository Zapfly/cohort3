import React from 'react'
import { useEffect, useState } from 'react'
import { FifoLifo } from './FIFO-LIFO'

const Fifo = new FifoLifo(true)
const Lifo = new FifoLifo(false)
const DeletedList = new FifoLifo(true)


const Monster = (props) => {


    return (
        <div className="monster card">
            <p>Monster Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>CR: {props.cr}</p>
        </div>
    )

}
const monstersArr = []

const FifoLifoApp = () => {
    const [monsters, setMonsters] = useState([])
    const [myFifo, setmyFifo] = useState(Fifo)
    let [fifoCounter, setFifoCounter] = useState(0)
    const [myLifo, setmyLifo] = useState(Lifo)
    const [deleted, setDeleted] = useState(DeletedList)
    const [state, setState] = useState(true)
    let monsterComps;

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.open5e.com/monsters/", {
                method: 'GET',
            });
            let list = await res.json()
            setMonsters(list.results)
        }
        fetchData();
    }, []);

    

    let key
    for (key in monsters) {
        monstersArr.push(monsters[key])
    }
    // console.log(monsters)

    let add = () => {
        Fifo.add(monstersArr[fifoCounter]);
        // console.log(Fifo.contents)
        // setMyFifo(Fifo.contents)
        setFifoCounter(fifoCounter + 1)
        // console.log(Fifo.contents)
    }

    const deleteItem = (list) => {
        list.removeItem(DeletedList.contents)
        toggle()
    }

    const toggle = () => {
        if (state == true) return setState(false)
        else return setState(true)
    }

    const moveToStack = (list) => {
        Fifo.removeItem(list)
        toggle()
    }

    const clear = () => {
        // console.log(Deleted.contents)
        DeletedList.contents = []
        toggle()
    }


    return (
        <div className="fifo-lifo">
            <Queue
                fifo={myFifo}
                stack= {myLifo}
                moveToStack = {moveToStack}
                deleted = {deleteItem}
                add={add}
            />
            <Stack
                lifo={myLifo}
                deleted = {deleteItem}

            />
            <Deleted 
            deletedList = {DeletedList}
            clear = {clear}
            />
        </div>
    )
}


const Queue = (props) => {

    // let [myFifo, setMyFifo] = useState(Fifo.contents)
    let [counter, setCounter] = useState(0)

    let moveToStack = () => {
        props.moveToStack(Lifo.contents)
    }


    const monsterComps =
        props.fifo.contents.map((item, i) => {
            return(
                <Monster
                    name={item.name}
                    type={item.type}
                    cr={item.challenge_rating}
                    key={i}
                />
            )
        })

    const deleteThis = () => {
        props.deleted(props.fifo)
        console.log(props.fifo.contents)
    }
    return (
        <div >
            QUEUE:

            <div className="list">
                {monsterComps}
            </div>
            <button onClick={props.add}>Add Monster</button>
            <button onClick={deleteThis}>Delete</button>
            <button onClick={moveToStack}>Move to Stack</button>
        </div>
    )
}


const Stack = (props) => {
    let [counter, setCounter] = useState(0)

    const deleteThis = () => {
        props.deleted(props.lifo)
    }




    const monsterComps = props.lifo.contents.map((item, i) => {
        return <Monster
            name={item.name}
            type={item.type}
            cr={item.challenge_rating}
            key={i}
        />
    })

    return (
        <div >
            STACK:
        <div className="list">
                {monsterComps}
            </div>
            <button onClick={deleteThis}>Delete</button>
        </div>
    )
}

const Deleted = (props) => {

    let [counter, setCounter] = useState(0)

    const clearList = () => {
        props.clear()
    }


    const monsterComps =
        props.deletedList.contents.map((item, i) => {
            // console.log(Fifo.contents)
            return(
                <Monster
                    name={item.name}
                    type={item.type}
                    cr={item.challenge_rating}
                    key={i}
                />
            )
        })

    return (
        <div >
            DELETED:
        <div className="list">
                {monsterComps}
            </div>
            <button onClick={clearList}>Clear</button>
        </div>
    )
}
export default FifoLifoApp