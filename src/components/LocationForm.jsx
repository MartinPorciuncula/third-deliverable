import React from 'react'

const LocationForm = ({handlesubmit}) => {
  return (
    <form className='w-full bg-white rounded-full overflow-hidden pl-4 text-black border-4 border-red-wine flex justify-between' onSubmit={handlesubmit}>
       <input className='w-2/3' min={1} max={126} id="newlocation" placeholder="Type a location id..."type='number'></input>
        <button className='bg-light-yellow h-full p-2 px-4 rounded-full'>Search</button>
    </form>
  )
}

export default LocationForm