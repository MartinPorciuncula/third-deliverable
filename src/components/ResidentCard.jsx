import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <article className="bg-purple w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center">
      <header className="relative">
        <img
          className="h-[150px] aspect-square border-solid border-[8px] border-red-wine rounded-full"
          src={residentinfo?.image}
        />
        <div className="flex justify-center items-center gap- bg-dark-gray w-[90px] p-[2px] rounded-full absolute bottom-6 right-1/2 translate-x-1/2 text-sm">
          <div className={`h-[10px] aspect-square bg-green-500 rounded-full ${statusObj[residentinfo?.status]}`}></div>
          {residentinfo?.status}
        </div>
      </header>
      <section>
        <h3>{residentinfo?.name}</h3>
        <ul>
          <li>
            Species: <span className="text-white">{residentinfo?.species}</span>
          </li>
          <li>
            Origin:
            <span className="text-white">{residentinfo?.origin.name}</span>
          </li>
          <li>
            Times appear:
            <span className="text-white">{residentinfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard