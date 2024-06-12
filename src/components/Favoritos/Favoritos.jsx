import React from "react";
import Imagen from "../Imagen/Imagen";
import { useSelector } from "react-redux";
import "./Favoritos.css"

const Favoritos = () => {
  const favourites = useSelector((state) => state.favourites.data);

  return (
    <div className="fotosFavoritas">
      {favourites.map((favourite) => (
        <Imagen key={favourite.id} {...favourite} isFavourite />
      ))}
    </div>
  );
};

export default Favoritos;
