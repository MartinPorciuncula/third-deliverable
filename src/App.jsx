import { useEffect, useState } from 'react'
import './App.css'
import Location from "./components/Location"
import axios from "axios"
import {GetrandomDimensions} from "./utils/randoms"
import ResidentList from './components/ResidentList'
import LocationForm from './components/LocationForm'
import ModalEmptySearch from "./components/ModalEmptySearch"
function App() {
  const [currentlocation, setCurrentlocation] = useState(null)
  const [EmptySearch, setEmptySearch] = useState(false)
  const fetchdimension = (idLocation) =>{
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`

  axios.get(URL)
  .then(({ data }) => setCurrentlocation(data))
  .catch((err) => console.log(err));
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    const newlocation = e.target.newlocation.value
    newlocation === "" ? setEmptySearch(true) : fetchdimension(newlocation)
    
    }

    const handleCloseModal = () => {
      setEmptySearch(false)
    }

  useEffect(() => {
    const Randomdimension = GetrandomDimensions(126)
    fetchdimension(Randomdimension)
  }, [])

  return (
    <main className='bg-[url(/images/bg-rm.jpg)] min-h-screen font-nunito-sans bg-cover bg-left p-4 grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative'> 
    <section className=''>
    <img className="w-[260px] pt-8 min-[500px]:w-[350px]" src='/images/logo-ram.png'/>
    </section>

   {EmptySearch && <ModalEmptySearch handleCloseModal={handleCloseModal} />}
    <LocationForm handlesubmit = {handlesubmit}/>
    <Location currentlocation ={currentlocation} />
    <ResidentList residents ={currentlocation?.residents ?? []}/>
    </main>
  )
}

export default App
