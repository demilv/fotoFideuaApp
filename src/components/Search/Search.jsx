import React from 'react';
import './Search.css';

const Search = ({ setSearchResult, handleCheck }) => {
    return (
        <div className="searchContainer">
            <input className="navSearch" onChange={(e) => setSearchResult(e.target.value)} />
            <img className="navSearchLupa" src="../../../public/lupa.png" alt="lupa.png" onClick={handleCheck} />
        </div>
    );
};

export default Search;
