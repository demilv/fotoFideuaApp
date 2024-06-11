import './Imagen.css'
import React from "react"


const Imagen = ({source, description, id, height, width, likes, created}) => {
    console.log(id)
    return(
        <div className="imagen" id={id}>
            <img src={source} alt= "otra imagen" />
        </div>
    )
}

export default Imagen