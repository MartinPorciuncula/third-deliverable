import React from 'react'

const Location = ({currentlocation}) => {
  return (
    <section className='flex flex-col justify-center items-center mt-4 p-4 rounded-3xl bg-red-wine text-white shadow-md gap-2 w-[260px] min-[500px]:w-full min-[500px]: max-w-[1024px]'>
      <h2 className='text-xl font-bold text-center'>{currentlocation?.name}</h2>
      <ul className='grid grid-rows-3 place-items-center gap-1 sm:grid-rows-none sm:grid-cols-3 sm:gap-'>
        <li>Type:{currentlocation?.type} </li>
        <li>Dimension:{currentlocation?.dimension} </li>
        <li>Population:{currentlocation?.residents.length} </li>
      </ul>
    </section>
  )
}

export default Location