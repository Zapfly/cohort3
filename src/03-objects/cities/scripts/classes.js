import functions from './cities.js'
import { serverFunctions } from './api.js'


export class City {
    constructor(name, latitude, longitude, population, key) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        const mtArr = [];
        mtArr.push("Latitude: " + String(this.latitude))
        mtArr.push("Longitude: " + String(this.longitude))
        mtArr.push("Population: " + String(this.population))
        const reducer = (accumulator, currentValue) => accumulator + " " + currentValue;
        return mtArr.reduce(reducer);
    }

    movedIn(num) {
        this.population = this.population + num
        return this.population;
    }

    movedOut(num) {
        this.population = this.population - num
        return this.population;
    }

    howBig() {
        if (this.population >= 1 && this.population <= 100) { return "Hamlet" };
        if (this.population <= 1000) { return "Village" };
        if (this.population <= 20000) { return "Town" };
        if (this.population <= 100000) { return "Large Town" };
        return "City";
    }

    whichSphere() {
        if (this.latitude > 0 && this.latitude <= 90) { return "Northern Hemisphere" };
        if (this.latitude == 0) { return "On the Equator" };
        if (this.latitude >= -90 && this.latitude < 0) { return "Southern Hemisphere" };
        return "Invalid Latitude";
    }
}

export class Community {
    constructor(communityName) {
        this.communityName = communityName;
        this.counter = 0;
        this.cities = {};
    }

    createCity(parent, name, lat, long, pop) {
        this.counter++;
        const a = new City(name, lat, long, pop, this.counter);
        this.cities[`key${this.counter}`] = a;
        functions.createCityDiv(parent, name, this.counter);
        serverFunctions.postData('http://localhost:5000/add', a)
    }

    deleteCity(key) {
        delete this.cities[key];
    }

    mostNorthern(span) {
        let key
        let biggest = { latitude: (-90), name: "biggest value" };

        const obj = this.cities;

        let i = 0;

        for (key in this.cities) {
            if (obj.hasOwnProperty(key)) {
                let next = obj[key];
                if (next.latitude > biggest.latitude) {
                    biggest = next
                }
            }

        }
        functions.changeTextOnDisplay(span, String(biggest.name))
    }

    mostSouthern(span) {
        let key
        let smallest = { latitude: (Infinity), name: "smallest value" };
        const obj = this.cities;
        for (key in this.cities) {
            if (obj.hasOwnProperty(key)) {
                let next = obj[key];
                if (next.latitude < smallest.latitude) {
                    smallest = next
                }
            }
        }
        functions.changeTextOnDisplay(span, String(smallest.name))
    }

    totalPopulation(span) {
        let total = 0;
        const obj = this.cities;
        let key

        for (key in this.cities) {
            total += obj[key].population
        }
        functions.changeTextOnDisplay(span, total)


    }
}