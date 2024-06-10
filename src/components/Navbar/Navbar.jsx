import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return(
       <nav className="miNav">
            <div className="navModeContainer">
                <button>Nuestra Fideua de fotos</button>
                <button>Tu coleccion de imágenes</button>
            </div>
            <input className="navSearch">
                <img className="navSearchLupa"></img>
            </input>
            <h3 className="navInstrucciones">¿Quieres cambiar el orden? Tú eliges</h3>                        
            <ul className="navOpciones">
                <li>
                    <input type="radio" name="anchura" value="anchura"></input>
                    <label for="anchura">Anchura</label>
                </li>
                <li>
                    <input type="radio" name="fecha" value="fecha"></input>
                    <label for="fecha">Fecha</label>
                </li>
                <li>
                    <input type="radio" name="altura" value="altura"></input>
                    <label for="altura">Altura</label>
                </li>
                <li>
                    <input type="radio" name="likes" value="likes"></input>
                    <label for="likes">Likes</label>
                </li>
            </ul>
       </nav>
    )
}

export default Navbar