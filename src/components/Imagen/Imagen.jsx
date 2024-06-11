import './Imagen.css'
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from 'file-saver';



const Imagen = ({source, description, id, height, width, likes, created}) => {

    const handleDownload = () => {
        //console.log("te descargas?")
        saveAs(source, `${id}.jpg`);
    }

    const handleFavorito = () => {
        console.log("Aun no")
    }

    return(
        <div className="imagen" id={id}>
            <img src={source} alt= "otra imagen" />
            <FontAwesomeIcon className="iconDownload" icon={faDownload} onClick={handleDownload} />
            <FontAwesomeIcon className="iconStar" icon={faStar} onClick={handleFavorito}/>
        </div>
    )
}

export default Imagen