import React from "react"
import Header from "./components/Header/Header"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./components/Inicio/Inicio";
import Favoritos from "./components/Favoritos/Favoritos";

function App(){    

    return(
        <>
            <Header />
            <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Inicio />} />   
                        <Route path="/favoritos" element={<Favoritos />} />                   
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;