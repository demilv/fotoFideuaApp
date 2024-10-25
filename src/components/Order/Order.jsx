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
                    <ul className="navOpciones">
                        <div className="opcionesG">
                            <select className="opcionesSelect" name="ordenar" id="ordenar" onChange={handleOrderChange}>
                                <option value="">Sin orden</option>
                                <option value="width">Anchura</option>
                                <option value="created">Fecha</option>
                                <option value="height">Altura</option>
                                <option value="likes">Likes</option>
                            </select>
                        </div>
                    </ul>
                </div>) :  
                (<div className="orderOptionsContainer">
                </div>)
            }
        </>
    );
};

export default OrderOptions;
