import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ResidentCard.css"
import ListInfoResidents from "./ListInfoResidents";
const ResidentCard = ({ residenturl }) => {
  const [residentinfo, setResidentinfo] = useState(null);

  const statusObj = {
    Alive: "bg-green-apple",
    Dead: "bg-red",
    unknown: "bg-gray-blue",
  };

  useEffect(() => {
    axios
      .get(residenturl)
      .then(({ data }) => setResidentinfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className=" w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center select-none">
      <header className="relative z-10">
        <img
          className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full"
          src={residentinfo?.image}
        />
        <div className="flex justify-center items-center gap- bg-dark-gray/70 w-[90px] p-[2px] rounded-full absolute bottom-6 right-1/2 translate-x-1/2 text-sm">
          <div className={`h-[10px] aspect-square bg-green-500 rounded-full animate-pulse ${statusObj[residentinfo?.status]}`}></div>
          {residentinfo?.status}
        </div>
      </header>
      <section className="bg-purple border-8 border-red-wine rounded-3xl w-full  h-[250px] p-6 relative -mt-14 transition-all bodyCard duration-700">
        <div className="bg-lila absolute h-full w-[95%] left-0 top-0 rounded-special"></div>
        <div className="absolute w-full left-0 top-0">
        <h3 className="bg-light-yellow text-2xl h-[130px] flex items-center justify-center font-bold text-red-wine pb-4 pt-[70px] rounded-[15px] w-full text-center scaleCard  duration-700">{residentinfo?.name}</h3>
        <ul className=" text-sm text-red-wine p-4 grid grid-rows-3 gap-2">
        <ListInfoResidents residentinfo={residentinfo?.species} residentProperties={"SPECIES: "}/>
            <ListInfoResidents residentinfo={residentinfo?.origin.name} residentProperties={"ORIGIN: "}/>
            <ListInfoResidents residentinfo={residentinfo?.episode.length} residentProperties={"TIMES APPEAR: "}/>
        </ul>
        </div>
      </section>
    </article>
  );
};

export default ResidentCard