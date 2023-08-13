import { useEffect, useState } from 'react'
import './App.css'
import Location from "./components/Location"
import axios from "axios"
import {GetrandomDimensions} from "./utils/randoms"
import ResidentList from './components/ResidentList'
import LocationForm from './components/LocationForm'
function App() {
  const [currentlocation, setCurrentlocation] = useState(null)
  
  const fetchdimension = (idLocation) =>{
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`

  axios.get(URL)
  .then(({ data }) => setCurrentlocation(data))
  .catch((err) => console.log(err));
  }
  const handlesubmit= (e) =>{
   e.preventDefault()
   const newlocation = e.target.newlocation.value

  fetchdimension(newlocation)
  }

  useEffect(() => {
    const Randomdimension = GetrandomDimensions(126)
    fetchdimension(Randomdimension)
  }, [])

  return (
    <main className='bg-[url(/images/bg-rm.jpg)] min-h-screen font-nunito-sans bg-cover bg-left p-4'> 
    <section className=''>
    <img className="w-[300px] pt-8" src='/images/logo-ram.png'/>
    </section>
    <LocationForm handlesubmit = {handlesubmit}/>
    <Location currentlocation ={currentlocation} />
    <ResidentList residents ={currentlocation?.residents ?? []}/>
    </main>
  )
}

export default App
