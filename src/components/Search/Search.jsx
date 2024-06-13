import React from 'react';
import './Search.css';
import { useLocation } from 'react-router-dom';

const Search = ({ setSearchResult, handleCheck, handleCheckFav}) => {
    const location = useLocation()
    return (
        <div className="searchContainer">            
            <input className="navSearch" onChange={(e) => setSearchResult(e.target.value)} />
            {location.pathname === "/" && (
                <img className="navSearchLupa" src="../../../public/lupa.png" alt="lupa.png" onClick={handleCheck} />            
            )}
            {location.pathname === "/favoritos" && (
                <img className="navSearchLupa" src="../../../public/lupa.png" alt="lupa.png" onClick={handleCheckFav} />            
            )}
        </div>
    );
};

export default Search;
