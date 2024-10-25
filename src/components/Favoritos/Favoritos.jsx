import React from "react";
import Imagen from "../Imagen/Imagen";
import { useSelector } from "react-redux";
import "./Favoritos.css"

const Favoritos = () => {
  const favourites = useSelector((state) => {
      if (state.favourites.filteredData.length > 0) {
          return state.favourites.filteredData;
      } else {
          return state.favourites.data;
      }
  });

  return (
    <div className="wrapperFotosFavoritas">
      <article className="fotosFavoritas">
        {favourites.map((favourite) => (
          <Imagen key={favourite.id} {...favourite} isFavourite />
        ))}
      </article>
    </div>
  );
};

export default Favoritos;
