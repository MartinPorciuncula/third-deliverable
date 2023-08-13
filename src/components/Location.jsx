import React from 'react'

const Location = ({currentlocation}) => {
  return (
    <section>
      <h2>{currentlocation?.name}</h2>
      <ul>
        <li>Type:{currentlocation?.type} </li>
        <li>Dimension:{currentlocation?.dimension} </li>
        <li>Population:{currentlocation?.residents.length} </li>
      </ul>
    </section>
  )
}

export default Location