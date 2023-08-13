import React, { useState } from 'react'
import ResidentCard from './ResidentCard'
import Pagination from './Pagination'

const ResidentList = ({residents}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const residentsPerPage = 12
  const totalPages = Math.ceil(residents.length / residentsPerPage)
  const start = (currentPage - 1) * residentsPerPage
  const end = start + residentsPerPage
  const residentsInPage = residents.slice(start, end)
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
    
  }
  console.log(currentPage);
  return (
    <section className='grid grid-rows-[auto_auto] text-white place-items-center gap-20 max-w-[1024px] w-full'>
    <section className='grid gap-8 grid-cols-[repeat(auto-fit,_260px)] place-items-center w-full justify-center'>
    {
    residentsInPage.map((resident) => <ResidentCard key={resident} residenturl = {resident} />)
    }
    </section>
    <section className='text-white mb-20 '>
     <Pagination pages ={pages} setCurrentPage ={setCurrentPage} currentPage={currentPage}/>
    </section>
    </section>
  )
}

export default ResidentList