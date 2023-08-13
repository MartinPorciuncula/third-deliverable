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
    <section>
    <section>
    {
    residentsInPage.map((resident) => <ResidentCard key={resident} residenturl = {resident} />)
    }
    </section>
    <section>
     <Pagination pages ={pages} setCurrentPage ={setCurrentPage}/>
    </section>
    </section>
  )
}

export default ResidentList