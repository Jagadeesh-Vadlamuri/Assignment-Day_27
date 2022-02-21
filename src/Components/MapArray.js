import React from 'react'

function MapArray() {
    const data = ['Nani', 'Navya', 'Teja', 'Navya']
  return (
    <div>
        {
            data.map((datum, index)=> <h2 key={index}>{datum}</h2>)
        }
    </div>
  )
}

export default MapArray