import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            positiivinen: 0,
            neutraali: 0,
            negatiivinen: 0,
            summa: 0,
            lkm: 0
        }
    }

    klikPos = () => {
        this.setState({
            positiivinen: this.state.positiivinen + 1,
            summa: this.state.summa +1,
            lkm: this.state.lkm +1
        })
    }

    klikNeut = () => {
        this.setState({
            neutraali: this.state.neutraali + 1,
            lkm: this.state.lkm +1
        })
    }

    klikNega = () => {
        this.setState({
            negatiivinen: this.state.negatiivinen + 1,
            summa: this.state.summa -1,
            lkm: this.state.lkm +1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Anna palautetta</h1>
                    <button onClick={this.klikPos}>hyvä</button>
                    <button onClick={this.klikNeut}>neutraali</button>
                    <button onClick={this.klikNega}>huono</button>
                    <h2>Statistiikka</h2>
                    <p>hyvä {this.state.positiivinen}</p>
                    <p>neutraali {this.state.neutraali}</p>
                    <p>huono {this.state.negatiivinen}</p>
                    <p>keskiarvo {(this.state.summa / this.state.lkm).toFixed(1)}</p>
                    <p>positiivisia {(this.state.positiivinen / this.state.lkm * 100).toFixed(1)} %</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)