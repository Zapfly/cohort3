import React from 'react'
import { useEffect, useState } from 'react'
import { FifoLifo } from '../FIFO-LIFO'

const Fifo = new FifoLifo(true)
const Lifo = new FifoLifo(false)

// const GET = async () => {
//     const url = "http://dnd5eapi.co/api/monsters/adult-black-dragon"
//     await fetch(url)
//     (data =>{return data.json()})
//     (res =>{console.log(res)})
// }

// GET()

// dndApi.get()

const Monster = (props) => {


    return (
        <div className="monster card">
            <p>Monster Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>CR: {props.cr}</p>
        </div>
    )

}


const Stack = () => {


    return (
        <div>
            <h3>Lifo Stack</h3>
            <Monster
                name={/*monsters[0].name*/ "Goblin"}
                type="Goblinoid Humanoid"
                cr="1/4"
            />
        </div>
    )
}

const Deleted = () => {

    return (
        <div>
            <h3>Deleted Items</h3>
            <Monster
                name={/*monsters[0].name*/ "Goblin"}
                type="Goblinoid Humanoid"
                cr="1/4"
            />
        </div>
    )
}
const monstersArr = []

const FifoLifoApp = () => {
    const [monsters, setMonsters] = useState([])
    let monsterComps;

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://api.open5e.com/monsters/", {
                method: 'GET',
                // mode: 'no-cors',
            });
            let list = await res.json()
            setMonsters(list.results)
            // console.log(list.results[0].name)
            // console.log(monstersArr)
        }
        fetchData();
        // console.log(monsters)

    }, []);
    let key
    // for (key in monsters) {
    //     monstersArr.push(
    //         <Monster
    //             name={monsters[key].name}
    //             type={monsters[key].type}
    //             cr={monsters[key].challenge_rating}
    //             key={key}
    //         />
    //     )
    // }
    for (key in monsters) {
        monstersArr.push(monsters[key])
    }



    console.log(monsters)




    return (
        <div className="fifo-lifo">
            <Queue
            />
            {/* <Stack />
            <Deleted /> */}
        </div>
    )
}


const Queue = (props) => {

    // let [myFifo, setMyFifo] = useState(Fifo.contents)
    let [counter, setCounter] = useState(0)

    let add = () => {
        Fifo.add(monstersArr[counter]);
        // console.log(Fifo.contents)
        // setMyFifo(Fifo.contents)
        setCounter(counter + 1)
        console.log(counter)
        console.log(Fifo.contents)
    }

    // useEffect(() => {

    // })

   const monsterComps =  Fifo.contents.map((item, i) => {
        return <Monster
            name={item.name}
            type={item.type}
            cr={item.challenge_rating}
            key={i}
        />
    })

    return (
        <div>
            {monsterComps}
            <button onClick={add}>Add Monster</button>
        </div>
    )
}
export default FifoLifoApp