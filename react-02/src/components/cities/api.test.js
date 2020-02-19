import {serverFunctions} from './api.js'
import { Community } from './react-classes.js';

global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

const community =  [
    {
        "key":1,
        "name":"Calgary",
        "latitude":51.05,
        "longitude":-114.05,
        "population":1400000
    },
    {
        "key":2,
        "name":"Edmonton",
        "latitude":53.55,
        "longitude":-113.49,
        "population":981280
    },
    
    {
        "key":3,
        "name":"Red Deer",
        "latitude":52.26,
        "longitude":113.81,
        "population":103588
    },
]

test('server setup', async () => {
    let data = await serverFunctions.postData(url + 'clear');

    data = await serverFunctions.postData(url + 'add', community[0]);
    data = await serverFunctions.postData(url + 'add', community[1]);
    data = await serverFunctions.postData(url + 'add', community[2]);

})


test('test that the fetch works?', async () => {
    // Check that the server is running and clear any data
    let data = await serverFunctions.postData(url + 'clear');

    data = await serverFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await serverFunctions.postData(url + 'add', community[0]);
    expect(data.status).toEqual(200);

    data = await serverFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    // add a second with the same key which should be an error
    data = await serverFunctions.postData(url + 'add', community[0]);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await serverFunctions.postData(url + 'add', community[1]);
    expect(data.status).toEqual(200);

    data = await serverFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Edmonton");

    data = await serverFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Calgary");

    data = await serverFunctions.postData(url + 'update', {key:1, name:"Toronto"});
    expect(data.status).toEqual(200);

    data = await serverFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Toronto");

    data = await serverFunctions.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await serverFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
});



test('get Data', async () => {
    let data = await serverFunctions.postData(url + 'clear');

    data = await serverFunctions.postData(url + 'all')
    expect(data[0]).toEqual(undefined)

    data = await serverFunctions.postData(url + 'add', community[0]);
    data = await serverFunctions.postData(url + 'add', community[1]);
    data = await serverFunctions.postData(url + 'all')

    expect(data[0].name).toEqual("Calgary")

})

test('get Data on start', async () => {
    const testCommunity = new Community("test Community")
    await serverFunctions.postData(url + 'clear');

    await serverFunctions.getDataOnStart(testCommunity);
    expect(testCommunity.counter).toEqual(0);

    await serverFunctions.postData(url + 'add', community[0]);
    await serverFunctions.postData(url + 'add', community[1]);
    await serverFunctions.getDataOnStart(testCommunity);

    expect(testCommunity.counter).toEqual(2);

})


test('deleting', async () => {
    let data = await serverFunctions.postData(url + 'clear');

    data = await serverFunctions.postData(url + 'all')
    expect(data[0]).toEqual(undefined)

    await serverFunctions.postData(url + 'add', community[0]);
    await serverFunctions.postData(url + 'add', community[1]);
    data = await serverFunctions.postData(url + 'all')

    // expect(data.length).toEqual(2)

    await serverFunctions.postData(url + "delete", {key:1})
    data = await serverFunctions.postData(url + 'all')

    expect(data[0].key).toEqual(2)
})

test('update server', async () => {
    await serverFunctions.postData(url + 'clear');

    let data = await serverFunctions.postData(url + 'all')
    await expect(data[0]).toEqual(undefined)

    await serverFunctions.postData(url + 'add', community[0]);
    await serverFunctions.postData(url + 'add', community[1]);

    data = await serverFunctions.postData(url + 'all')
    await expect(data[0].population).toEqual(1400000)
    expect(data[0].name).toEqual('Calgary')
    expect(data[0].latitude).toEqual(51.05)
    expect(data[0].longitude).toEqual(-114.05)

    expect(data[1].population).toEqual(981280)
    expect(data[1].name).toEqual('Edmonton')
    expect(data[1].latitude).toEqual(53.55)
    expect(data[1].longitude).toEqual(-113.49)

    const newPopulation = {
        "key":1,
        "name":"Calgary",
        "latitude":51.05,
        "longitude":-114.05,
        "population":1400200
    }
    
    await serverFunctions.update(newPopulation);
    data = await serverFunctions.postData(url + 'all')

    await expect(data[0].population).toEqual(1400200)
    expect(data[0].name).toEqual('Calgary')
    expect(data[0].latitude).toEqual(51.05)
    expect(data[0].longitude).toEqual(-114.05)

    expect(data[1].population).toEqual(981280)
    expect(data[1].name).toEqual('Edmonton')
    expect(data[1].latitude).toEqual(53.55)
    expect(data[1].longitude).toEqual(-113.49)
    data = await serverFunctions.postData(url + 'clear');

    
})

