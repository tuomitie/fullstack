import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maat: [],
            valitutMaat: [],
            filtteri: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ maat: response.data })
            })
    }

    handleFiltering = (event) => {
        this.setState({ filtteri: event.target.value,
                        valitutMaat: this.state.maat.filter(maa => maa.name.toLowerCase().includes(this.state.filtteri.toLowerCase()))})

    }

    render() {
        const NaytettavaSisalto = () => {
            if (this.state.filtteri.length === 0) {
                return (this.state.maat.map(country =><div key={country.id}>{country.name}</div>))
            }
            if (this.state.filtteri.length > 0 && this.state.valitutMaat.length >10) {
                return (<div>liikaa tuloksia, tarkenna hakua</div>)
            }
            if (this.state.valitutMaat.length === 1) {
                var maa = this.state.valitutMaat[0]
                return (<div><h1>{maa.name} {maa.nativeName}</h1>
                    <div>Capital: {maa.capital}</div>
                    <div>Population: {maa.population}</div>
                    <div>Region: {maa.subregion} - {maa.region}</div>
                    <img src={maa.flag} alt="flag" /></div>)
            }
            return (this.state.valitutMaat.map(country =><div key={country.id}>{country.name}</div>))
        }

        return (
            <div>
                <h1>hu-maalainen</h1>
                <div>find countries: <input value={this.state.filtteri} onChange={this.handleFiltering} /></div>
                <NaytettavaSisalto />
            </div>
        )
    }
}

export default App