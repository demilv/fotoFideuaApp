import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return(
       <nav className="miNav">
            <div className="navModeContainer">
                <button className="navButtonChoice1">Nuestra Fideua de fotos</button>
                <button className="navButtonChoice2">Tu coleccion de imágenes</button>
            </div>
            <input className="navSearch"></input>
            <img className="navSearchLupa" src="../../../public/lupa.png" alt="lupa.png"></img>
            <h3 className="navInstrucciones">¿Quieres cambiar el orden? Tú eliges</h3>                        
            <ul className="navOpciones">
                <li>
                    <input type="radio" name="anchura" value="anchura"></input>
                    <label htmlFor="anchura">Anchura</label>
                </li>
                <li>
                    <input type="radio" name="fecha" value="fecha"></input>
                    <label htmlFor="fecha">Fecha</label>
                </li>
                <li>
                    <input type="radio" name="altura" value="altura"></input>
                    <label htmlFor="altura">Altura</label>
                </li>
                <li>
                    <input type="radio" name="likes" value="likes"></input>
                    <label htmlFor="likes">Likes</label>
                </li>
            </ul>
       </nav>
    )
}

export default Navbar