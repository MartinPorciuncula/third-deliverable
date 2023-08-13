import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residenturl}) => {
  const [residentinfo, setResidentinfo] = useState(null)
  
    useEffect(() => {
    axios
        .get(residenturl)
        .then(({data}) => setResidentinfo(data))
        .catch((err) => console.log(err))
  }, [])
  
    
    return (
    <article>
     <header>
        <img src={residentinfo?.image}/>
        <div className='flex items-center gap-2 p-2'>
            <div className='h-[10px] aspect-square bg-green-500 rounded-full'></div>
            {residentinfo?.status}
        </div>
    </header>
    <section>
        <h3>{residentinfo?.name}</h3>
        <ul>
            <li>Species: <span className='text-white'>{residentinfo?.species}</span> </li>
            <li>Origin: <span className='text-white'>{residentinfo?.origin.name}</span> </li>
            <li>Times appear: <span className='text-white'>{residentinfo?.episode.length}</span> </li>

        </ul>
    </section>
    </article>
  )
}

export default ResidentCard