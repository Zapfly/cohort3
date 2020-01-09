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
//       },

//     url: "http://dnd5eapi.co/api/"
// }


//FIFO QUEUE


export class FifoLifo {
    constructor(fifo) {
        this.counter = 0,
            this.fifo = fifo,
            this.contents = []
    }

    add(obj) {
        obj.order = this.counter

        this.contents.push(obj);
        this.counter++;
    }

    findFirst() {
        let result = []
        let key
        let i = 0
        let smallest = Infinity

        for (key in this.contents) {
            if (this.contents[i].order < smallest) {
                return smallest = this.contents[i]
            }
            i++
        }
    }
}


