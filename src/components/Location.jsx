import React from 'react'

const Location = ({currentlocation}) => {
  return (
    <section className='flex flex-col justify-center items-center mt-4 p-2 rounded-3xl bg-red-wine text-white shadow-md gap-2 w-[260px]'>
      <h2 className='text-xl font-bold'>{currentlocation?.name}</h2>
      <ul className='grid grid-rows-3 place-items-center gap-1'>
        <li>Type:{currentlocation?.type} </li>
        <li>Dimension:{currentlocation?.dimension} </li>
        <li>Population:{currentlocation?.residents.length} </li>
      </ul>
    </section>
  )
}

export default Location