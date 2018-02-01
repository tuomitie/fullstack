import React from 'react'
import personService from './services/persons'
import Person from './components/Person'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filtteri: '',
            poistettava: ''
        }
    }

    componentWillMount() {
        personService
            .getAll()
            .then(response => {
                this.setState({ persons: response})
            })
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    handleFiltering = (event) => {
        this.setState({ filtteri: event.target.value })
    }

    lisaaNumero = (event) => {
        event.preventDefault()
        const henkilo = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        if (!(this.state.persons.map(person => person.name)).includes(this.state.newName)) {
            personService
                .create(henkilo)
                .then(henkilo => {
                    this.setState({
                        persons: this.state.persons.concat(henkilo),
                        newName: '',
                        newNumber: ''
                    })
                })
        } else {
            if (window.confirm(`${henkilo.name} on jo luettelossa. Korvataanko vanha numero uudella?`)) {
                var muuttunutHenkilo = this.state.persons.find(henkilo => henkilo.name === henkilo.name)
                var id = muuttunutHenkilo.id
                console.log(muuttunutHenkilo)
                muuttunutHenkilo.number = this.state.newNumber
                personService
                    .update(id, muuttunutHenkilo)
                    .then(muuttunutHenkilo => {
                        const persons = this.state.persons.filter(n => n.id !== id)
                        this.setState({
                            persons: persons.concat(muuttunutHenkilo),
                            newName: '',
                            newNumber: ''
                        })
                    })
            }
        }
    }

    poistaNumero = (id) => {
        return () => {
            const vastaavaHenkilo = this.state.persons.find(n => n.id === id)
            if (window.confirm(`Poistetaanko ${vastaavaHenkilo.name}?`)) {
                personService
                    .poista(id)
                    .then(indeksi => {
                        this.setState({ persons: this.state.persons.filter(n => n.id !== id) })
                    })
            }
        }
    }

    render() {
        const personsToShow =
            this.state.filtteri.length === 0 ?
                this.state.persons :
                this.state.persons.filter(person => person.name.toLowerCase().includes(this.state.filtteri.toLowerCase()))

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <div>Rajaa näytettäviä: <input value={this.state.filtteri} onChange={this.handleFiltering} /></div>

                <h2>Lisää uusi</h2>
                <form onSubmit={this.lisaaNumero}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                            {personsToShow.map(person =><Person key={person.id} person={person} poistaNumero={this.poistaNumero(person.id)} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App