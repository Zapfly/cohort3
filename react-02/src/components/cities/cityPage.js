import React from 'react'
import { Community } from './classes'

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
            display: `Latitude = ${this.props.latitude} Longtitude = ${this.props.longitude} Population = ${this.props.population}`
        })
    }

    render() {
        return (
            <div className="city-card" >
                <span className="city-name">{this.props.name}</span>
                <span className="city-show">{this.state.display}</span>
                <input className="city-input" name="value" value={this.state.value} onChange={this.handleChange}></input>
                <button className="show-button city-button" onClick={this.show}>Show</button>
                <button className="move-in-button city-button">Move In</button>
                <button className="move-out-button city-button">Move Out</button>
                <button className="how-big-button city-button">How Big</button>
                <button className="which-sphere city-button">Which Hemisphere</button>
                <button className="delete city-button">Delete</button>
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
            cityPopulation: "",
            cityLat: "",
            cityLong: "",
        }
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
            this.state.cityPopulation
        )

        this.setState({ message: "city added" })
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
                        key={comp}
                        name={comp.name}
                        latitude={comp.latitude}
                        longitude={comp.longitude}
                        population={comp.population}
                    />
                    
                )
                console.log(comp.longitude)
            }

        }

        return (
            <div className="wrapper">
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
                        <p className="right-display-output" id="idMostNothern"></p>
                    </div>
                    <div className="right-display" id="idMostSouthernDisplay">
                        <span className="right-display-text">Most Southern</span>
                        <p className="right-display-output" id="idMostSouthern"></p>
                    </div>
                    <div className="right-display" id="total-population">
                        <span className="right-display-text">Total Population</span>
                        <p className="right-display-output" id="idTotalPopDisplay"></p>
                    </div>
                </div>

                <div className="footer">Big brother is watching</div>
            </div>


        )
    }



}

export default CityPage