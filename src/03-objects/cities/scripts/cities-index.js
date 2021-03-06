import { Community } from './classes.js'
import functions from './cities.js'
import { serverFunctions } from './api.js'



const community = new Community("The Greater Area");
const parent = document.getElementById("idCityDisplay");
console.log(community)

const northSpan = document.getElementById("idMostNothern")
const southSpan = document.getElementById("idMostSouthern")

const updateDom = (nSpan, sSpan, totalPop) => {
    community.mostNorthern(nSpan)
    community.mostSouthern(sSpan)
    community.totalPopulation(totalPop)
}

document.addEventListener("DOMContentLoaded", async () => {
    await serverFunctions.getDataOnStart(community, parent);
    updateDom(northSpan, southSpan, idTotalPopDisplay)
    console.log(community)
});

const createCity = () => {
    let newName = document.getElementById("idCityNameInput").value;
    let newLat = Number(document.getElementById("idCityLatInput").value);
    let newLong = Number(document.getElementById("idCityLongInput").value);
    let newPop = Number(document.getElementById("idCityPopInput").value);

    if ((newLat < -90) || (newLat > 90)) {
        return alert("Latitude must be a number between -90 and 90");
    } else if ((newLong < -180) || (newLong > 180)) {
        return alert("Longitude must be a number between -180 and 180");
    } else {
        community.createCity(parent, newName, newLat, newLong, newPop);
        console.log(JSON.stringify(community));
    }
    updateDom(northSpan, southSpan, idTotalPopDisplay)


};



const cardButtons = () => {
    const targetCard = event.target.parentNode
    // console.log(event.target.textContent);
    if (event.target.textContent == "Show") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].show();
    }
    if (event.target.textContent == "Move In") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedIn(input);
        serverFunctions.update(community.cities[cardKey])
        community.totalPopulation(idTotalPopDisplay)
    }
    if (event.target.textContent == "Move Out") {
        const cardKey = targetCard.getAttribute('key')
        const input = Number(targetCard.children[2].value)
        community.cities[cardKey].movedOut(input);
        serverFunctions.update(community.cities[cardKey])
        community.totalPopulation(idTotalPopDisplay)
        console.log(targetCard.children[2])
        targetCard.children[2].value = ""
    }
    if (event.target.textContent == "How Big") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].howBig();
    }
    if (event.target.textContent == "Show Hemisphere") {
        const cardKey = targetCard.getAttribute('key')
        targetCard.children[1].textContent = community.cities[cardKey].whichSphere();
    }
    if (event.target.textContent == "Delete City") {
        const cardKey = targetCard.getAttribute('key')
        functions.deleteCityCard(event.target);
        community.deleteCity(cardKey);
        serverFunctions.postData(
            'http://localhost:5000/delete', 
            {key: Number(cardKey.slice(3))}
        )
        updateDom(northSpan, southSpan, idTotalPopDisplay)


    }


}



document.getElementById("idCityDisplay").addEventListener('click', cardButtons);
document.getElementById("idCreateCityButton").addEventListener('click', createCity);