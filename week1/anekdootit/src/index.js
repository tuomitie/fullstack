import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

function suurinIndeksi(taulukko) {
    var indeksi = taulukko.indexOf(Math.max(...taulukko));
    return indeksi;
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }

    muuta = () => () => {
        this.setState({selected: Math.floor(Math.random() * (anecdotes.length) + 0)})
    }

    aanesta = (indeksi) => () => {
        var tilanne = Object.assign({}, this.state);
        tilanne.votes[indeksi] += 1;
        this.setState(tilanne);
    }

    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>has {this.state.votes[this.state.selected]} votes</p>
                <Button
                    handleClick={this.muuta()}
                    text="Another"
                />
                <Button
                    handleClick={this.aanesta(this.state.selected)}
                    text="Vote"
                />
                <h2>Anecdote with the most votes</h2>
                <p>{anecdotes[suurinIndeksi(this.state.votes)]}</p>
                <span>has {this.state.votes[suurinIndeksi(this.state.votes)]} votes</span>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)