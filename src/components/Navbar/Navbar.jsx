import React from "react"
import "./Navbar.css"
import { useState, useEffect } from "react"

const Navbar = () => {
    const [search,setSearch] = useState(false)

    useEffect(() => {
        console.log("me cambie")
    }, [search])

    const handlerChoice = (choice) =>{
        if (choice === "Inicio"){
            setSearch(false)
        }else if(choice === "Favoritos"){
            setSearch(true)
        }
    }

    return(
       <nav className="miNav">
            <div className="navModeContainer">
                <button className="navButtonChoice1" onClick={() => handlerChoice("Inicio")}>Nuestra Fideua de fotos</button>
                <button className="navButtonChoice2" onClick={() => handlerChoice("Favoritos")}>Tu coleccion de imágenes</button>
            </div>
            <input className="navSearch"></input>
            <img className="navSearchLupa" src="../../../public/lupa.png" alt="lupa.png"></img>
            <h3 className="navInstrucciones">¿Quieres cambiar el orden? Tú eliges</h3>                        
            <ul className="navOpciones">
                <div className="opcionesG">
                    <li className="opcionesGleft1">
                        <input className="opcionesRadio" type="radio" name="anchura" value="anchura"></input>
                        <label htmlFor="anchura">Anchura</label>
                    </li>
                    <li>
                        <input className="opcionesRadio" type="radio" name="fecha" value="fecha"></input>
                        <label htmlFor="fecha">Fecha</label>
                    </li>
                </div>
                <div className="opcionesG">
                    <li className="opcionesGleft2">
                        <input className="opcionesRadio" type="radio" name="altura" value="altura"></input>
                        <label htmlFor="altura">Altura</label>
                    </li>
                    <li>
                        <input className="opcionesRadio" type="radio" name="likes" value="likes"></input>
                        <label htmlFor="likes">Likes</label>
                    </li>
                </div>
            </ul>
       </nav>
    )
}

export default Navbar