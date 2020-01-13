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
let monsters = []
const Queue = () => {
    

    useEffect(() => {

        async function fetchData() {
            const res = await fetch("https://api.open5e.com/monsters/", {
                method: 'GET',
                // mode: 'no-cors'
            });
            monsters = await res.json()
            monsters = monsters.results

        }
        fetchData();
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
                name="Goblin"
                type="Goblinoid Humanoid"
                cr="1/4"
            />
        </div>
    )
}


export default Queue