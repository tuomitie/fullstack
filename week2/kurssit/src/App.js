import React from 'react'

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    const Kurssi = ({ kurssi }) => {
        return (
            <div>
                <h1>{kurssi.nimi}</h1>
                <div>
                    {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
                </div>
                <p>Yhteensä {Yhteismaara} tehtävää</p>
            </div>
        )
    }

    const Yhteismaara = kurssi.osat.reduce(function(sum, osat) {
        return (sum + osat.tehtavia)
    }, 0)

    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )
}

export default App