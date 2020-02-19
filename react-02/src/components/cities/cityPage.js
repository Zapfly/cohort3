import React from 'react'
import { Community } from './react-classes.js'
import { serverFunctions } from './api'
import './cities.css'

const comm = new Community("theGreaterArea");


class CityCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            display: ""
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    show = () => {
        this.setState({
            display: `Latitude = ${this.props.object.latitude} Longtitude = ${this.props.object.longitude} Population = ${this.props.object.population}`
        })
    }

    cardMoveIn = (event) => {
        const cardKey = Number(event.target.parentNode.id)
        this.props.moveIn(cardKey, Number(this.state.value))

        this.setState({
            value: "",
            display: `${this.state.value} people moved in!`
        })
    }

    cardMoveOut = (event) => {
        const cardKey = Number(event.target.parentNode.id)
        this.props.moveOut(cardKey, this.state.value)

        this.setState({
            value: "",
            display: `${this.state.value} people moved out!`

        })
    }
    cardHowBig = (event) => {
        const cardKey = Number(event.target.parentNode.id)
        this.setState({ display: `${this.props.object.name} is big enough to be a ${this.props.howBig(cardKey)}` })
    }

    cardDelete = (event) => {
        const cardKey = Number(event.target.parentNode.id)
        this.props.delete(cardKey)
    }

    cardWhichHemisphere = (event) => {
        const cardKey = Number(event.target.parentNode.id)
        this.setState({ display: `${this.props.object.name} is in the ${this.props.whichHemisphere(cardKey)}` })
    }

    render() {
        return (
            <div className="city-card" id={this.props.object.key}>
                <span className="city-name">{this.props.object.name}</span>
                <span className="city-show">{this.state.display}</span>
                <input className="city-input" name="value" value={this.state.value} onChange={this.handleChange}></input>
                <button className="show-button city-button" onClick={this.show}>Show</button>
                <button className="move-in-button city-button" onClick={this.cardMoveIn}>Move In</button>
                <button className="move-out-button city-button" onClick={this.cardMoveOut}>Move Out</button>
                <button className="how-big-button city-button" onClick={this.cardHowBig}>How Big</button>
                <button className="which-sphere city-button" onClick={this.cardWhichHemisphere}>Hemisphere</button>
                <button className="delete city-button" onClick={this.cardDelete}>Delete</button>
            </div>
        )
    }
}



class CityPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theGreaterArea: comm,
            cityName: "",
            cityPopulation: 0,
            cityLat: 0,
            cityLong: 0,
            mostNorthern: "",
            mostSouthern: "",
            totalPopulation: 0,
        }
    }

    componentDidMount = async () => {
        await serverFunctions.getDataOnStart(this.state.theGreaterArea)
        this.citiesInformation()

        this.setState({ message: "Will Mount" })
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    addCity = () => {
        this.state.theGreaterArea.createCity(
            this.state.cityName,
            this.state.cityLat,
            this.state.cityLong,
            Number(this.state.cityPopulation)
        )

        this.citiesInformation()


    }

    moveIn = (cardKey, num) => {
        const cityObj = this.state.theGreaterArea.cities[cardKey]
        cityObj.movedIn(Number(num))
        serverFunctions.update(cityObj)
        this.citiesInformation()
    }

    moveOut = (cardKey, num) => {
        const cityObj = this.state.theGreaterArea.cities[cardKey]
        cityObj.movedOut(Number(num))
        serverFunctions.update(cityObj)
        this.citiesInformation()
    }

    howBig = (cardKey) => {
        const cityObj = this.state.theGreaterArea.cities[cardKey]
        return cityObj.howBig()
    }

    delete = (cardKey) => {
        delete this.state.theGreaterArea.cities[cardKey]
        serverFunctions.postData(
            'http://localhost:5000/delete',
            { key: Number(cardKey) }
        )
        this.citiesInformation()
        this.setState({ message: `city number ${cardKey} has been deleted` })
    }

    whichHemisphere = (cardKey) => {
        const obj = this.state.theGreaterArea.cities[cardKey]
        return obj.whichSphere()
    }

    citiesInformation = () => {
        const mostNorth = this.state.theGreaterArea.mostNorthern()
        const mostSouth = this.state.theGreaterArea.mostSouthern()
        const total = Number(this.state.theGreaterArea.totalPopulation())
        this.setState({
            mostNorthern: mostNorth.name,
            mostSouthern: mostSouth.name,
            totalPopulation: total,
            cityName: "",
            cityPopulation: "",
            cityLat: "",
            cityLong: "",
         })
    }

    render() {
        let item
        let cards = []
        let list = this.state.theGreaterArea.cities

        for (item in list) {
            if (list.hasOwnProperty(item)) {
                let comp = list[item];
                cards.push(
                    <CityCard
                        key={comp.key}
                        object={comp}
                        moveIn={this.moveIn}
                        moveOut={this.moveOut}
                        howBig={this.howBig}
                        delete={this.delete}
                        whichHemisphere={this.whichHemisphere}
                    />

                )
                console.log(comp.longitude)
            }

        }

        return (
            <div className="cities city-wrapper wrapper">
                <span className="header">
                    <h1>Community Management System</h1>
                </span>
                <div className="container-left">
                    <span className="container-left-header display-header">Add a City to the Community</span>
                    <div className="create-city-display">
                        <p className="create-city-text">City Name:</p>
                        <input
                            type="text"
                            className="create-city-name-input"
                            id="idCityNameInput"
                            name="cityName"
                            value={this.state.cityName}
                            onChange={this.handleChange}></input>
                        <p className="create-city-text"> Latitude:</p>
                        <input
                            type="number"
                            className="create-city-balance-input"
                            id="idCityLatInput"
                            name="cityLat"
                            value={this.state.cityLat}
                            onChange={this.handleChange}></input>
                        <p className="create-city-text"> Longitude:</p>
                        <input
                            type="number"
                            className="create-city-balance-input"
                            id="idCityLongInput"
                            name="cityLong"
                            value={this.state.cityLong}
                            onChange={this.handleChange}></input>
                        <p className="create-city-text"> Population:</p>
                        <input
                            type="number"
                            className="create-city-balance-input"
                            id="idCityPopInput"
                            name="cityPopulation"
                            value={this.state.cityPopulation}
                            onChange={this.handleChange}></input>
                        <button className="button create-city-button" id="idCreateCityButton" onClick={this.addCity}>Add City</button>
                    </div>
                </div>
                <div className="container-middle" id="idMiddleContainer">
                    <span className="container-middle-header display-header">Cities</span>
                    <div className="city-display" id="idCityDisplay">
                        {/*///////////////////*/}
                        {cards}
                        {/*///////////////////*/}
                    </div>
                </div>
                <div className="container-right">
                    <span className="container-right-header display-header">Cities Information</span>
                    <div className="right-display" id="idMostNorthernDisplay">
                        <span className="right-display-text">Most Northern</span>
                        <p className="right-display-output" id="idMostNothern"> {this.state.mostNorthern}</p>
                    </div>
                    <div className="right-display" id="idMostSouthernDisplay">
                        <span className="right-display-text">Most Southern</span>
                        <p className="right-display-output" id="idMostSouthern">{this.state.mostSouthern}</p>
                    </div>
                    <div className="right-display" id="total-population">
                        <span className="right-display-text">Total Population</span>
        <p className="right-display-output" id="idTotalPopDisplay">{this.state.totalPopulation}</p>
                    </div>
                </div>

                <div className="footer">Big brother is watching</div>
            </div>


        )
    }



}

export default CityPage