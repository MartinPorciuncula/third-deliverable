import React from "react";

const ListInfoResidents = ({ residentinfo, residentProperties }) => {
  return (<li className="grid grid-cols-2 line-clamp-1">
    {residentProperties}
    <span className="text-white  line-clamp-1">{residentinfo}</span>
  </li>)
};

export default ListInfoResidents;
