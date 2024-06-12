import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div className="orderOptionsContainer">
            <h3 className="navInstrucciones">¿Quieres cambiar el orden? Tú eliges</h3>                        
            <ul className="navOpciones">
                <div className="opcionesG">
                    <li className="opcionesGleft1">
                        <input className="opcionesRadio" type="radio" name="ordenar" value="anchura" />
                        <label htmlFor="anchura">Anchura</label>
                    </li>
                    <li>
                        <input className="opcionesRadio" type="radio" name="ordenar" value="fecha" />
                        <label htmlFor="fecha">Fecha</label>
                    </li>
                </div>
                <div className="opcionesG">
                    <li className="opcionesGleft2">
                        <input className="opcionesRadio" type="radio" name="ordenar" value="altura" />
                        <label htmlFor="altura">Altura</label>
                    </li>
                    <li>
                        <input className="opcionesRadio" type="radio" name="ordenar" value="likes" />
                        <label htmlFor="likes">Likes</label>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Order;