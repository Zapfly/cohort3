import { City, Community } from './react-classes.js'
// import functions from './cities.js'
import { serverFunctions } from './api.js';

global.fetch = require('node-fetch');

test('testing City', () => {
    const a = new City("Testville", 49, 0, 500, "key1");
    const cityList = {};
    cityList[a.key] = a;

    expect(cityList.key1.name).toEqual("Testville");
    expect(cityList.key1.latitude).toEqual(49);
    expect(cityList.key1.longitude).toEqual(0);
    expect(cityList.key1.population).toEqual(500);
})

test('testing createCity', () => {
    const cityList3 = new Community("pittsburge")
    cityList3.createCity("Bobville", 74, 58, 900)

    expect(cityList3.cities[1].key).toEqual(1);
    expect(cityList3.cities[1].latitude).toEqual(74);
    expect(cityList3.cities[1].longitude).toEqual(58);
    expect(cityList3.cities[1].name).toEqual("Bobville");
    expect(cityList3.cities[1].population).toEqual(900);
})

test('testing show', () => {
    const cityList5 = new Community("pittsburge")
    cityList5.createCity("CruellaStevil", 7, 90, 90)
    expect(cityList5.cities[1].show()).toEqual("Latitude: 7 Longitude: 90 Population: 90");
})

test('testing movedIn', () => {
    const cityList6 = new Community("pittsburge")
    cityList6.createCity("SonicTown", 7, 68, 600)

    expect(cityList6.cities[1].population).toEqual(600);
    expect(cityList6.cities[1].movedIn(900)).toEqual(1500);
})

test('testing movedOut', () => {
    const cityList7 = new Community("pittsburge")
    cityList7.createCity("Testtown", 7, 68, 1000)

    expect(cityList7.cities[1].population).toEqual(1000);
    expect(cityList7.cities[1].movedOut(100)).toEqual(900);
})

test('testing howBig', () => {
    const cityList8 = new Community("pittsburge")
    cityList8.createCity("one", 7, 68, 1)
    cityList8.createCity("two", 7, 68, 200)
    cityList8.createCity("three", 7, 68, 5000)
    cityList8.createCity("four", 7, 68, 20500)
    cityList8.createCity("five", 7, 68, 9999999)

    expect(cityList8.cities[1].howBig()).toEqual("Hamlet");
    expect(cityList8.cities[2].howBig()).toEqual("Village");
    expect(cityList8.cities[3].howBig()).toEqual("Town");
    expect(cityList8.cities[4].howBig()).toEqual("Large Town");
    expect(cityList8.cities[5].howBig()).toEqual("City");
})

test('testing whichSphere', () => {
    const a = new City("Testville1", 49, 0, 500, "key1");
    const b = new City("Testville2", 0, 0, 500, "key2");
    const c = new City("Testville3", -49, 0, 500, "key3");
    const d = new City("Testville4", 1000, 0, 500, "key4")
    const cityList = {};
    cityList[a.key] = a;
    cityList[b.key] = b;
    cityList[c.key] = c;
    cityList[d.key] = d;

    expect(cityList.key1.whichSphere()).toEqual("Northern Hemisphere");
    expect(cityList.key2.whichSphere()).toEqual("On the Equator");
    expect(cityList.key3.whichSphere()).toEqual("Southern Hemisphere");
    expect(cityList.key4.whichSphere()).toEqual("Invalid Latitude");
})


test('test deleteCity object', () => {
    const cityList9 = new Community("NukeTown");

    cityList9.createCity("fatboy", 7, 68, 1)
    cityList9.createCity("fatboy", 7, 68, 1)
    expect(cityList9.cities[1].name).toEqual('fatboy');
    cityList9.deleteCity("key1");
    expect(cityList9.key1).toEqual(undefined);
})

test('test mostNorthern', () => {
    // let myDiv = document.createElement("div");
    // const testSpan = document.createElement("span");
    // myDiv.appendChild(testSpan);
    // testSpan.innerText = "Original Text"
    // expect(testSpan.innerText).toEqual("Original Text")
    const cityList11 = new Community("pittsburge")
    cityList11.createCity("one", -10, 10, 500)
    cityList11.mostNorthern()
    // expect(testSpan.innerText).toEqual("one")

    cityList11.createCity("two", 0, 10, 500)
    cityList11.mostNorthern()
    // expect(testSpan.innerText).toEqual("two")

    cityList11.createCity("three", -25, 10, 500)
    cityList11.mostNorthern()
    // expect(testSpan.innerText).toEqual("two")

    cityList11.createCity("four", 40, 10, 500)
    cityList11.mostNorthern()
    // expect(testSpan.innerText).toEqual("four")
})



test('test mostSouthern', () => {
    // let myDiv = document.createElement("div");
    // const testSpan = document.createElement("span");
    // myDiv.appendChild();
    // testSpan.innerText = "Original Text"
    // expect(testSpan.innerText).toEqual("Original Text")
    const cityList11 = new Community("pittsburge")
    cityList11.createCity("one", -10, 10, 500)
    cityList11.mostSouthern()
    // expect(testSpan.innerText).toEqual("one")

    cityList11.createCity("two", 0, 10, 500)
    cityList11.mostSouthern()
    // expect(testSpan.innerText).toEqual("one")

    cityList11.createCity("three", -25, 10, 500)
    cityList11.mostSouthern()
    // expect(testSpan.innerText).toEqual("three")

    cityList11.createCity("four", 40, 10, 500)
    cityList11.mostSouthern()
    // expect(testSpan.innerText).toEqual("three")
    
})

test('test totalPopulation', () => {
    const cityList11 = new Community("pittsburge")
    cityList11.createCity("one", -10, 10, 500)

    cityList11.createCity("two", 0, 10, 500)

    expect(cityList11.totalPopulation()).toEqual(500)

})


test('createCity serverside', async () => {
    await serverFunctions.postData('http://localhost:5000/' + 'clear');
    const cityList10 = new Community("FarFarAway");

    cityList10.createCity("Detroit", 10, 12, 1)

    let data = await serverFunctions.postData('http://localhost:5000/' + 'all')
    await expect(data[0].name).toEqual("Detroit")
    await serverFunctions.postData('http://localhost:5000/' + 'clear');

})

test('test 130E', async () => {
    await serverFunctions.postData('http://localhost:5000/' + 'clear');
    const myCity = new City("myCity", 49, 0, 500, "key1");
    const myFav = myCity;

    expect(myCity.population).toEqual(500)
    expect(myFav.population).toEqual(500)

    myCity.population = 700

    expect(myCity.population).toEqual(700)
    expect(myFav.population).toEqual(700)
    await serverFunctions.postData('http://localhost:5000/' + 'clear');

})