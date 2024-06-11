import React from "react"
import "./Navbar.css"
import { useState, useEffect } from "react"
import { searchStatusSelect, searchDataSelect, searchErrorSelect } from "../../features/search/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import { searchThunk } from "../../features/search/searchThunk"
import { useNavigate } from "react-router-dom"

const Navbar = ({search, handlerChoice}) => {
    const [isLoading, setIsLoading] = useState(false)
    const searchStatus = useSelector(searchStatusSelect)
    const searchData = useSelector(searchDataSelect)
    const searchError = useSelector(searchErrorSelect)
    const dispatch = useDispatch()

    useEffect(() =>{
        if (searchStatus==="idle"){
            dispatch(searchThunk())
        }
        else if (searchStatus==="pending"){
            setIsLoading(true)
        }
        else if (searchStatus === "fulfilled"){
            setIsLoading(false)
            console.log(searchData)
        }
    }, [searchStatus])

    const navigate = useNavigate()

    return(
       <nav className="miNav">
            <div className="navModeContainer">
                <button className="navButtonChoice1" onClick={() => navigate("/")}>Nuestra Fideua de fotos</button>
                <button className="navButtonChoice2" onClick={() => navigate("/favoritos")}>Tu coleccion de imágenes</button>
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