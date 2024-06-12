import './Imagen.css';
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from 'file-saver';
import { useDispatch } from 'react-redux';
import { addFavourites, removeFavourites } from '../../features/favourites/favouritesSlice';
import ModalStats from '../ModalStats/ModalStats'

const Imagen = ({ src, id, alt, height, width, likes, created, isFavourite }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = () => {
    saveAs(src, `${id}.jpg`);
  };

  const handleFavorito = () => {
    dispatch(addFavourites({ src, id, alt, height, width, likes, created }));
  };

  const handleRemove = () => {
    dispatch(removeFavourites({ id }));
  };

  const showPopUp = () => {
    setIsModalOpen(true)
  }

  const closePopUp = () =>{
    setIsModalOpen(false)
  }

  return (
    <div className="imagen" id={id}>
      <img src={src} alt={alt} />
      <FontAwesomeIcon className="iconDownload" icon={faDownload} onClick={handleDownload} />
      {isFavourite ? (
        <>
            <FontAwesomeIcon className="iconTrash" icon={faTrash} onClick={handleRemove} />
            <button className="botonEdit" onClick={showPopUp}>Editar Descripción</button>
            <ModalStats
                isOpen={isModalOpen}
                onClose={closePopUp}
                description={alt}
                width={width}
                height={height}
                likes={likes}
                date={created}
            />
        </>
      ) : (
        <FontAwesomeIcon className="iconStar" icon={faStar} onClick={handleFavorito} />
      )}
    </div>
  );
};

export default Imagen;
