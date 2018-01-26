import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({positiivinen, neutraali, negatiivinen}) => {
    if (positiivinen + neutraali + negatiivinen === 0) {
        return (
            <div>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>hyvä</td>
                    <td><Statistic counter={positiivinen}/></td>
                </tr>
                <tr>
                    <td>neutraali</td>
                    <td><Statistic counter={neutraali}/></td>
                </tr>
                <tr>
                    <td>huono</td>
                    <td><Statistic counter={negatiivinen}/></td>
                </tr>
                <tr>
                    <td>keskiarvo</td>
                    <td>{((positiivinen - negatiivinen) / (positiivinen + neutraali + negatiivinen)).toFixed(1)}</td>
                </tr>
                <tr>
                    <td>positiivisia</td>
                    <td>{(positiivinen / (positiivinen + neutraali + negatiivinen) * 100).toFixed(1)} %</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const Statistic = ({counter}) => <span>{counter}</span>

class App extends React.Component {

    muuta = (maare, arvo) => () => {
        if (maare === 'positiivinen') {
            this.setState({positiivinen: arvo})
        }
        if (maare === 'neutraali') {
            this.setState({neutraali: arvo})
        }
        if (maare === 'negatiivinen') {
            this.setState({negatiivinen: arvo})
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            positiivinen: 0,
            neutraali: 0,
            negatiivinen: 0,
        }
    }

    render() {
        return <div>
            <div>
                <h1>Anna palautetta</h1>
                <Button
                    handleClick={this.muuta('positiivinen', (this.state.positiivinen + 1))}
                    text="hyvä"
                />

                <Button
                    handleClick={this.muuta('neutraali', (this.state.neutraali + 1))}
                    text="neutraali"
                />

                <Button
                    handleClick={this.muuta('negatiivinen', (this.state.negatiivinen + 1))}
                    text="huono"
                />

                <h2>Statistiikka</h2>

                <Statistics positiivinen={this.state.positiivinen} neutraali={this.state.neutraali}
                            negatiivinen={this.state.negatiivinen}/>
            </div>
        </div>

    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)