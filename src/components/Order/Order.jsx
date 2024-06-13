import React, {useState} from 'react';
import './Order.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderTypeFavourites } from '../../features/favourites/favouritesSlice';
import { useLocation } from 'react-router-dom';

const OrderOptions = () => {
    const dispatch = useDispatch();
    const orderType = useSelector((state) => state.favourites.orderType);
    const [selectedOption, setSelectedOption] = useState(orderType);

    const handleOrderChange = (event) => {
        const { value } = event.target;
        if (selectedOption === value) {
            setSelectedOption('');
            dispatch(orderTypeFavourites({ orderType: '' }));
        } else {
            setSelectedOption(value);
            dispatch(orderTypeFavourites({ orderType: value }));
        }
    };

    const location = useLocation()

    return (        
        <>
            {location.pathname === "/favoritos" ? (
                <div className="orderOptionsContainer">
                    <h3 className="navInstrucciones">¿Quieres cambiar el orden? Tú eliges</h3>                        
                    <ul className="navOpciones">
                        <div className="opcionesG">
                            <li className="opcionesGleft1">
                                <input className="opcionesRadio" type="radio" name="ordenar" value="width" onChange={handleOrderChange} />
                                <label htmlFor="width">Anchura</label>
                            </li>
                            <li>
                                <input className="opcionesRadio" type="radio" name="ordenar" value="created" onChange={handleOrderChange} />
                                <label htmlFor="created">Fecha</label>
                            </li>
                        </div>
                        <div className="opcionesG">
                            <li className="opcionesGleft2">
                                <input className="opcionesRadio" type="radio" name="ordenar" value="height" onChange={handleOrderChange} />
                                <label htmlFor="height">Altura</label>
                            </li>
                            <li>
                                <input className="opcionesRadio" type="radio" name="ordenar" value="likes" onChange={handleOrderChange} />
                                <label htmlFor="likes">Likes</label>
                            </li>
                        </div>
                        <div className="opcionesG">
                            <li className="opcionesGleft3">
                                <input className="opcionesRadio" type="radio" name="ordenar" value="" onChange={handleOrderChange} />
                                <label htmlFor="height">No deseo aplicar ningún orden</label>
                            </li>
                        </div>
                    </ul>
                </div>) :  
                (<div className="orderOptionsContainer">
                    <h3 className="navInstrucciones">Bienvenido a nuestra App de fotos! Clica la estrella de aquellas que quieras guardar en favorios!</h3>
                </div>)
            }
        </>
    );
};

export default OrderOptions;
