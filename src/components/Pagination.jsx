import React from "react";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex gap-4 flex-wrap justify-center">
      {pages.map((page) => (
        <li className={`h-12 cursor-pointer hover:scale-110 transition-transform rounded-full flex justify-center items-center text-red-wine text-xl aspect-square bg-light-yellow border-4 border-red-wine ${currentPage === page && "bg-lila border-red-wine border-4 text-red-wine scale-110 transition-all"}`}
          onClick={() => {
            setCurrentPage(page);
          }}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
