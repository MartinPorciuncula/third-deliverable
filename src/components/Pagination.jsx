import React from 'react'

const Pagination = ({pages, setCurrentPage}) => {
  return (
    <ul className='flex'>
        {pages.map((page) =><li onClick={()=>{
       setCurrentPage(page)
        }}key={page}>
            {page}
        </li>)}
    </ul>
  )
}

export default Pagination