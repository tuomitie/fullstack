import React from 'react'

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <h2>{kurssi.nimi}</h2>
            <div>
                {kurssi.osat.map(osa => <p key={osa.id}>{osa.nimi} {osa.tehtavia}</p>)}
            </div>
            <p>Yhteensä {Yhteismaara(kurssi)} tehtävää</p>
        </div>
    )
}

const Yhteismaara = kurssi => kurssi.osat.reduce(function (sum, osat) {
    return (sum + osat.tehtavia)
}, 0)

export default Kurssi