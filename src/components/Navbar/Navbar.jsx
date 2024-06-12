import React from 'react';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { searchStatusSelect, searchDataSelect, searchErrorSelect } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { searchThunk, searchQueryThunk } from '../../features/search/searchThunk';
import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import OrderOptions from '../Order/Order';

const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState('');
    const searchStatus = useSelector(searchStatusSelect);
    const searchData = useSelector(searchDataSelect);
    const searchError = useSelector(searchErrorSelect);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchStatus === 'idle') {
            dispatch(searchThunk());
        } else if (searchStatus === 'pending') {
            setIsLoading(true);
        } else if (searchStatus === 'fulfilled') {
            setIsLoading(false);
            console.log(searchData);
        }
    }, [searchStatus]);

    const navigate = useNavigate();

    const handleCheck = () => {
        if (searchResult.trim() === '') {
            dispatch(searchThunk());
        } else {
            dispatch(searchQueryThunk(`${searchResult}`));
        }
    };

    return (
        <nav className="miNav">
            <div className="navModeContainer">
                <button className="navButtonChoice1" onClick={() => navigate('/')}>Nuestra Fideua de fotos</button>
                <button className="navButtonChoice2" onClick={() => navigate('/favoritos')}>Tu coleccion de imágenes</button>
            </div>
            <Search setSearchResult={setSearchResult} handleCheck={handleCheck} />
            <OrderOptions />
        </nav>
    );
};

export default Navbar;
