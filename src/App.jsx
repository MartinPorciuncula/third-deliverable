import { useEffect, useState } from 'react'
import './App.css'
import Location from "./components/Location"
import axios from "axios"
import {GetrandomDimensions} from "./utils/randoms"
import ResidentList from './components/ResidentList'
import LocationForm from './components/LocationForm'
import ModalEmptySearch from "./components/ModalEmptySearch"
import { useCatchErrors } from './utils/hooks/useCatchErrors'
import FirstScreen from './components/FirstScreen'

const EMPTY_DIMENSION =12

function App() {
  const [currentlocation, setCurrentlocation] = useState(null)
  const {emptysearch,emptyError, handleCloseModal, error404, error404Modal, loaderScreen,isLoading}= useCatchErrors(true)
  const fetchdimension = (idLocation) =>{
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`

  
   
      axios
        .get(URL)
        .then(({ data }) => {setCurrentlocation(data)
          loaderScreen()})
        .catch((err) => {
          console.log(err);
          error404();
        });
  }


  const handlesubmit = (e) => {
    e.preventDefault()
    const newlocation = e.target.newlocation.value
    newlocation === "" ? emptyError(true) & fetchdimension(EMPTY_DIMENSION) : fetchdimension(newlocation)
    }

    const btnGoToUp = () => {
      const buttonUp = document.querySelector('.bx-chevron-up-circle')
      buttonUp.addEventListener('click', () => window.scrollTo(0, 0))
    }

    const staticDimension = () =>{
      fetchdimension(EMPTY_DIMENSION)
    }

  useEffect(() => {
    staticDimension()
    setTimeout(() => {
      const Randomdimension = GetrandomDimensions(126)
    fetchdimension(Randomdimension)
    }, 2000);
  }, [])

  return (
    <main className='bg-[url(/images/bg-rm2.png)] min-h-screen font-nunito-sans bg-cover px-4 grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative bg-center overflow-hidden '> 
    <section className=''>
    <img className="w-[260px] pt-8 min-[500px]:w-[350px]" src='/images/logo-ram.png'/>
    
    </section>
   {!isLoading && <FirstScreen />}
   <ModalEmptySearch handleCloseModal={handleCloseModal} errorModal={emptysearch} title={"¿Acaso estás ciego?"} body={"Elige una dimensión"} footer={"aquí no hay nada"} img={"/images/ram-modal-def.jpg"}/>
   <ModalEmptySearch handleCloseModal={handleCloseModal} errorModal={error404Modal} title={"Alguien saboteo la pistola de portales"} body={"¿fuiste tu?"} footer={"ERROR 404 PAGE NOT FOUND"} img={"/images/ram-error-404.png"}/>
    <LocationForm handlesubmit = {handlesubmit}/>
    <Location currentlocation ={currentlocation} />
    <ResidentList residents ={currentlocation?.residents ?? []}/>
    <div className="text-red-wine bg-lila rounded-full h-10 aspect-square flex justify-center items-center border-4 border-red-wine fixed bottom-4 right-4 cursor-pointer" onClick={btnGoToUp}>
        <i className='bx bx-chevron-up-circle text-3xl'></i>
      </div>
    </main>
  )
}

export default App
