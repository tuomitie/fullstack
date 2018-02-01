import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '040-123456' },
                { name: 'Arto Järvinen', number: '040-123456' },
                { name: 'Lea Kutvonen', number: '040-123456' }
            ],
            newName: '',
            newNumber: '',
            filtteri: ''
        }
    }

    lisaaNumero = (event) => {
        event.preventDefault()
        const nameObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            id: this.state.persons.length + 1
        }

        if (!(this.state.persons.map(person => person.name)).includes(this.state.newName)) {
            const persons = this.state.persons.concat(nameObject)
            this.setState({
                persons,
                newName: '',
                newNumber: ''
            })
        } else {
            alert("Henkilö on jo luettelossa.");
        }
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
    }

    handleFiltering = (event) => {
        console.log(event.target.value)
        this.setState({ filtteri: event.target.value })
    }

    render() {
        const personsToShow =
            this.state.filtteri.length === 0 ?
                this.state.persons :
                this.state.persons.filter(person => person.name.includes(this.state.filtteri))

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

                            {personsToShow.map(person => (<tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>))}

                    </tbody>
                </table>



            </div>
        )
    }
}

export default App