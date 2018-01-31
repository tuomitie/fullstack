import React from 'react'

const Kurssi = ({ kurssi }) => {
    return (
        <div>
            <h1>Muistiinpanot</h1>
            <ul>
                {Osa.map(note => <Osa key={kurssi.osat.id} osa={kurssi.osat.nimi} />)}
            </ul>
        </div>
    )
}

const Osa = ({ osa }) => {
    return (
        <li>{osa}</li>
    )
}

export default Kurssi