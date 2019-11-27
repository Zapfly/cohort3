//NOTES

// AJAX

fetch('my/url').then(respons => {
    console.log(response);
});


//PROMISES
const promise = new Promise ((resolve, reject) => {
    resolve('stuff Worked');
    reject("Error, it broke")
})

// Call the promise
promise.then(result => console.log(result))
//will return 'stuff Worked'


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        throw Error;
        console.log(result3 + '!');
    })
//will return an error saying that the error has not been caught

/**/

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIIIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Is it me you're looking for?");
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

    //will log the results of all these promises in the array

//Promises and APIs

const urls = [
    'https://jsonplaceholder.typicode.com/userss',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))


//ASYNC AWAITS

async function playerStart() {
    const first = await movePlayer(100, 'Left');//pause
    const second = await movePlayer(400, 'Left');//pause
    await movePlayer(10, 'Right');//pause
    await movePlayer(330, 'Left');//pause
}

//"await" says hold on to this function before executing

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops', err)
    }
}













