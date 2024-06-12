import React, {useState} from "react";
import './ModalStats.css';
import { useDispatch } from "react-redux";
import { editFavourites } from "../../features/favourites/favouritesSlice";

const ModalStats = ({isOpen, onClose, id, description, width, height, likes, date}) => {    
    if (!isOpen) return null;
    if (isOpen) console.log("hola")

    const [alt, setAlt] = useState(description); 
    const dispatch = useDispatch()

    const editarDescripcion = (e) => {        
        dispatch(editFavourites({id, alt}))
        onClose()
    }

 
    return (
        <div className="over9000">
            <button className="over9000CloseButton" onClick={onClose}>X</button>
            <div className="over9000Edits">
                <textarea className="over9000EditsDescription" defaultValue={description} onChange={(e) => setAlt(e.target.value)}></textarea>
                <button className="over9000EditsButton" onClick={editarDescripcion}>Editar</button>
            </div>
            <ul className="over9000Stats">
                <li>Width: {width}</li>
                <li>Height: {height}</li>
                <li>Likes: {likes}</li>
                <li>Date of creation: {date}</li>
            </ul>            
        </div>
    )
}

export default ModalStats;

