// FIFO = First In First Out
// LIFO = Last In First Out

//DnD API

// export const dndApi = {
//     postData: async (url = '', data = {}) => {
//         // Default options are marked with *
//         const response = await fetch(url, {
//             method: 'POST',     // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors',       // no-cors, *cors, same-origin
//             cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
//             credentials: 'same-origin', // include, *same-origin, omit
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             redirect: 'follow',         // manual, *follow, error
//             referrer: 'no-referrer',    // no-referrer, *client
//             body: JSON.stringify(data)  // body data type must match "Content-Type" header
//         });

//         const json = await response.json();    // parses JSON response into native JavaScript objects
//         json.status = response.status;
//         json.statusText = response.statusText;
//         // console.log(json, typeof(json));
//         return json;
//     },

//     url: "http://dnd5eapi.co/api/",
//     get: async () => {
//         const url = "http://dnd5eapi.co/api/monsters/adult-black-dragon"
//         await fetch(url)
//         (data =>{return data.json()})
//         (res =>{console.log(res)})
//     }
// }





//FIFO QUEUE


export class FifoLifo {
    constructor(fifo) {
            this.fifo = fifo;
            this.contents = [];
    }

    add(obj) {

        this.contents.push(obj);
        this.counter++;
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
        if (this.fifo === true) return this.removeFirst(newArr);
        else return this.removeLast(newArr)
    }

}




