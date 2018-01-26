import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({positiivinen, neutraali, negatiivinen}) => {
    if (positiivinen+neutraali+negatiivinen === 0) {
        return (
            <div>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
        return (
            <div>
                <p>hyvä <Statistic counter={positiivinen}/></p>
                <p>neutraali <Statistic counter={neutraali}/></p>
                <p>huono <Statistic counter={negatiivinen}/></p>
                <p>keskiarvo {((positiivinen - negatiivinen) / (positiivinen + neutraali + negatiivinen)).toFixed(1)}</p>
                <p>positiivisia {(positiivinen / (positiivinen + neutraali + negatiivinen) * 100).toFixed(1)} %</p>
            </div>
        )
}

const Statistic = ({ counter }) => <span>{counter}</span>

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            positiivinen: 0,
            neutraali: 0,
            negatiivinen: 0,
        }
    }

    kasvata = (arvo) => () => this.setState({ positiivinen: arvo })
    neutraloi = (arvo) => () => this.setState({ neutraali: arvo })
    vahenna = (arvo) => () => this.setState({ negatiivinen: arvo })

    render() {
        return <div>
            <div>
                <h1>Anna palautetta</h1>
                <Button
                    handleClick={this.kasvata(this.state.positiivinen + 1)}
                    text="hyvä"
                />

                <Button
                    handleClick={this.neutraloi(this.state.neutraali + 1)}
                    text="neutraali"
                />

                <Button
                    handleClick={this.vahenna(this.state.negatiivinen + 1)}
                    text="huono"
                />

                <h2>Statistiikka</h2>

                <Statistics positiivinen={this.state.positiivinen} neutraali={this.state.neutraali} negatiivinen={this.state.negatiivinen}/>
            </div>
        </div>

    }
    }

    ReactDOM.render(
    <App />,
    document.getElementById('root')
)