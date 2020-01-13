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
        <div className="monster Card">
            <p>Monster Name: {props.name}</p>
            <p>Type: {props.type}</p>
            <p>CR: {props.cr}</p>
        </div>
    )

}


const Queue = () => {
    const [monsters, setMonsters] = useState([])



    useEffect(() => {

        async function fetchData() {
            const res = await fetch("https://api.open5e.com/monsters/", {
                method: 'GET',
                // mode: 'no-cors',
            });
            let list = await res.json()
            setMonsters(list.results)
            console.log(list.results[0].name)
        }
        fetchData();
        console.log(monsters)

    }, []);
        

        // const makeArray = () => {
        //     let i = 0
        //     let key
        //     for(key in Fifo.contents) {
        //         const array = []
        //         array.push(fifo.contents.value)
        //     return <p>{array}</p>
        //     }
        // }
    return (
        <div>
            <Monster
                name={monsters[0].name}
                type="Goblinoid Humanoid"
                cr="1/4"
            />
        </div>
    )
}


export default Queue