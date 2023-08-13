import React from 'react'

const LocationForm = ({handlesubmit}) => {
  return (
    <form className='w-[260px] bg-white rounded-full overflow-hidden pl-4 text-black border-4 border-red-wine flex justify-between font-bold text-sm mt-8' onSubmit={handlesubmit}>
       <input className=' text-sm font-light w-2/3 outline-none' min={1} max={126} id="newlocation" placeholder="Type a location id..."type='number'></input>
        <button className='bg-light-yellow h-full p-2 px-6 rounded-full border-4 border-red-wine text-lg text-red-wine'>Search</button>
    </form>
  )
}

export default LocationForm